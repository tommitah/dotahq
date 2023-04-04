import { createRepository } from './repository';
import { PlayerModel as PlayerInstance } from '../models';
import { CleanPlayer, toCleanPlayer } from './cleaner';
import { CleanMatch, toCleanMatch } from './cleaner/cleaner';

const GUILD_PLAYERS = [
    91481212, 39365657, 142134059, 68461480, 136141238, 63348190, 116337892,
    28817346, 66805719, 141324782,
];

// NOTE: This will be a module that is run once, and then forgotten about
// eg. there will be a manual script to run that updates the db with data from this module
// we could also have timestamps on when this was run and check against it when the app is run?
type BundledData = {
    guildPlayers: CleanPlayer[];
    guildRecentMatches: CleanMatch[];
};

const bundleData = async (): Promise<BundledData> => {
    const { getRecentMatchData, getPlayerData } = createRepository();

    // Molehill mobsters:
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
        guildRecentMatches: recentMatches.flat(),
    };
};

// NOTE: Db call here to save the players to db
(async () => {
    const { guildPlayers } = await bundleData();
    guildPlayers.forEach(
        async (player: CleanPlayer) => await PlayerInstance.create(player)
    );
    console.log(guildPlayers);
})();
