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

// NOTE: All the omitted values had `null` values from the json-type transform
export type CleanMatch = Omit<
    RawMatch,
    | 'players'
    | 'objectives'
    | 'picks_bans'
    | 'radiant_xp_adv'
    | 'radiant_team_id'
    | 'radiant_gold_adv'
    | 'skill'
    | 'teamfights'
    | 'version'
    | 'dire_team_id'
    | 'draft_timings'
    | 'chat'
    | 'cosmetics'
> & {
    players: number[];
};
export const toCleanMatch = (rawMatch: RawMatch): CleanMatch => {
    const { players, ...matchData } = rawMatch;

    // console.log(players);
    // console.log(matchData);

    return {
        ...matchData,
        // players: players.map((player: RawPlayer) => player.profile.account_id),
        players: [],
    };
};
