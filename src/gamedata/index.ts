import { createRepository } from './repository';
import { cleanSimpleMatch, cleanGuildPlayers, BundlePlayer } from './cleaner';
import { PlayerModel as PlayerInstance } from '../models';

// import { writeFileSync } from 'fs';

// NOTE: This will be a module that is run once, and then forgotten about
// eg. there will be a manual script to run that updates the db with data from this module
// we could also have timestamps on when this was run and check against it when the app is run?
type BundledData = {
    guildPlayers: BundlePlayer[];
};

const bundleData = async (): Promise<BundledData> => {
    // writeFileSync('player.json', JSON.stringify(player));

    const { getMatchData, getPlayerData } = createRepository();
    const [, match] = await getMatchData(6962326145);

    // Molehill mobsters:
    const players = await Promise.all(
        [
            91481212, 39365657, 142134059, 68461480, 136141238, 63348190,
            116337892, 28817346, 66805719, 141324782,
        ].map(async (accountId) => {
            const [, player] = await getPlayerData(accountId);
            return player;
        })
    );
    // const niceMatch = cleanSimpleMatch(match);
    const guildPlayers = cleanGuildPlayers(players);
    return {
        guildPlayers,
    };
};

// NOTE: Db call here to save the players to db
(async () => {
    const { guildPlayers } = await bundleData();
    // guildPlayers.forEach(
    //     async (player: BundlePlayer) => await PlayerInstance.create(player)
    // );
    console.log(guildPlayers);
})();
