import { createRepository } from './repository';
import { cleanSimpleMatch, cleanGuildPlayers } from './cleaner';

// import { writeFileSync } from 'fs';

// NOTE: This will be a module that is run once, and then forgotten about
// eg. there will be a manual script to run that updates the db with data from this module
// we could also have timestamps on when this was run and check against it when the app is run?
(async () => {
    // writeFileSync('player.json', JSON.stringify(player));

    const { getMatchData, getPlayerData } = createRepository();
    const [, match] = await getMatchData(6962326145);

    // Molehill mobsters:
    const players = await Promise.all(
        [91481212, 39365657, 142134059, 68461480, 136141238].map(
            async (accountId) => {
                const [, player] = await getPlayerData(accountId);
                return player;
            }
        )
    );
    const niceMatch = cleanSimpleMatch(match);
    const guildPlayers = cleanGuildPlayers(players);
    console.log(niceMatch);
    console.log(guildPlayers);
})();
