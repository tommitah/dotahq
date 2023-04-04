import { MmrEstimate, Profile, RawMatch, RawPlayer } from '../types';

export type CleanPlayer = Omit<RawPlayer, 'profile' | 'mmr_estimate'> &
    Profile &
    MmrEstimate;
export const toCleanPlayer = (rawPlayer: RawPlayer): CleanPlayer => {
    const profile = rawPlayer.profile;
    return {
        account_id: profile.account_id,
        personaname: profile.personaname,
        name: profile.name,
        plus: profile.plus,
        avatar: profile.avatar,
        cheese: profile.cheese,
        status: profile.status,
        steamid: profile.steamid,
        estimate: rawPlayer.mmr_estimate.estimate,
        rank_tier: rawPlayer.rank_tier,
        avatarfull: profile.avatarfull,
        last_login: profile.last_login,
        profileurl: profile.profileurl,
        avatarmedium: profile.avatarmedium,
        is_subscriber: profile.is_subscriber,
        is_contributor: profile.is_contributor,
        loccountrycode: profile.loccountrycode,
        competitive_rank: rawPlayer.competitive_rank,
        leaderboard_rank: rawPlayer.leaderboard_rank,
        solo_competitive_rank: rawPlayer.solo_competitive_rank,
    };
};

export type CleanMatch = Omit<RawMatch, 'players'> & {
    players: CleanPlayer[];
};
export const toCleanMatch = (rawMatch: RawMatch): CleanMatch => {
    const { players, ...matchData } = rawMatch;

    return {
        ...matchData,
        players: players.map(toCleanPlayer),
    };
};
