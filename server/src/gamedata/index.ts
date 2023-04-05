import { createRepository } from './repository';
import {
    PlayerModel as PlayerInstance,
    MatchModel as MatchInstance,
} from '../models';
import { CleanPlayer, toCleanPlayer } from './cleaner';
import { CleanMatch, toCleanMatch } from './cleaner/cleaner';

const GUILD_PLAYERS = [
    91481212, 39365657, 142134059, 68461480, 136141238, 63348190, 116337892,
    28817346, 66805719, 141324782,
];

type BundledData = {
    guildPlayers: CleanPlayer[];
    guildRecentMatches: CleanMatch[];
};

const bundleData = async (): Promise<BundledData> => {
    const { getRecentMatchData, getPlayerData } = createRepository();

    const players = await Promise.all(
        GUILD_PLAYERS.map(async (accountId: number) => {
            const [, rawPlayer] = await getPlayerData(accountId);
            return toCleanPlayer(rawPlayer);
        })
    );

    const recentMatches = await Promise.all(
        GUILD_PLAYERS.map(async (accountId: number) => {
            const [, rawMatches] = await getRecentMatchData(accountId);
            const cleanMatches = rawMatches.map(toCleanMatch);

            return cleanMatches;
        })
    );

    return {
        guildPlayers: players,
        // This 'flattens' the array of arrays and removes duplicate matches
        guildRecentMatches: recentMatches
            .flat()
            .filter(
                (obj: CleanMatch, index: number, self: CleanMatch[]) =>
                    index === self.findIndex((t) => t.match_id === obj.match_id)
            ),
    };
};

(async () => {
    const { guildPlayers, guildRecentMatches } = await bundleData();
    // guildPlayers.forEach(
    //     async (player: CleanPlayer) => await PlayerInstance.create(player)
    // );

    // TODO: Add recent matches as a property to PlayerModel?
    // So what's happening right now is: we're querying the recentMatches by accountId,
    // which is resulting in data that DOESN'T match `RawMatch`
    guildRecentMatches.forEach(
        async (match: CleanMatch) => await MatchInstance.create(match)
    );
    // console.log(guildRecentMatches);
})();
