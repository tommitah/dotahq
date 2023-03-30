import {
    MmrEstimate,
    Player,
    Profile,
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

// export type CleanPlayer = Pick<Player, 'solo_competitive_rank' | 'profile'>;
export type CleanPlayer = Omit<Player, 'profile' | 'mmr_estimate'> & Profile;
const cleanGuildPlayers = (players: Player[]): CleanPlayer[] => {
    return players.map((player: Player) => {
        const profile = player.profile;
        return {
            solo_competitive_rank: player.solo_competitive_rank,
            leaderboard_rank: player.leaderboard_rank,
            competitive_rank: player.competitive_rank,
            rank_tier: player.rank_tier,
            account_id: profile.account_id,
            name: profile.name,
            personaname: profile.personaname,
            plus: profile.plus,
            avatar: profile.avatar,
            cheese: profile.cheese,
            status: profile.status,
            steamid: profile.steamid,
            avatarfull: profile.avatarfull,
            avatarmedium: profile.avatarmedium,
            last_login: profile.last_login,
            profileurl: profile.profileurl,
            is_subscriber: profile.is_subscriber,
            is_contributor: profile.is_contributor,
            loccountrycode: profile.loccountrycode,
        };
    });
};

export { cleanSimpleMatch, cleanGuildPlayers };
