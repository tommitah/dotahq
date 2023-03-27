import {
    Player,
    RawMatch,
    RawPlayer,
    SimpleMatch,
    SimplePlayer,
} from '../types';

// TODO: Go through which datapoints might be missing, might be a good idea to consider this
// Also IIRC player? checks if player exists rather than the field?
const toSimplePlayer = (player: RawPlayer): SimplePlayer => {
    return {
        account_id: player?.account_id,
        username: player?.personaname,
        hero_id: player?.hero_id,
        kills: player?.kills,
        kda: player?.kda,
    };
};

const cleanSimpleMatch = (
    match: Pick<
        RawMatch,
        'match_id' | 'players' | 'radiant_win' | 'radiant_score' | 'dire_score'
    >
): SimpleMatch => {
    return {
        match_id: match.match_id,
        players: match.players.map(toSimplePlayer),
        radiant_win: match.radiant_win,
        radiant_score: match.radiant_score,
        dire_score: match.dire_score,
    };
};

export type BundlePlayer = Pick<Player, 'solo_competitive_rank' | 'profile'>;
const cleanGuildPlayers = (players: Player[]): BundlePlayer[] => {
    return players.map((player: Player) => {
        return {
            solo_competitive_rank: player.solo_competitive_rank,
            profile: player.profile
        };
    });
};

export { cleanSimpleMatch, cleanGuildPlayers };
