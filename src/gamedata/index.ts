import { createRepository } from './repository';
// import { cleanSimpleMatch, cleanGuildPlayers, CleanPlayer } from './cleaner';
import { PlayerModel as PlayerInstance } from '../models';
import { Player } from './types';

// NOTE: This will be a module that is run once, and then forgotten about
// eg. there will be a manual script to run that updates the db with data from this module
// we could also have timestamps on when this was run and check against it when the app is run?
type BundledData = {
    guildPlayers: Array<[accountId: number, player: Player]>;
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
            return await getPlayerData(accountId);
        })
    );
    // const niceMatch = cleanSimpleMatch(match);
    // const guildPlayers = cleanGuildPlayers(players);
    return {
        guildPlayers: players,
    };
};

// NOTE: Db call here to save the players to db
(async () => {
    const { guildPlayers } = await bundleData();
    guildPlayers.forEach(
        async (value: [accountId: number, player: Player]) => await PlayerInstance.create({ id: value[0], ...value[1] })
    );
    // console.log(guildPlayers);
})();
