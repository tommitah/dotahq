// TODO:
// Data structures for simple match data, more complicated match data, player data etc.

// id?
export type SimpleMatch = {
    match_id: number;
    players: SimplePlayer[];
    radiant_win: boolean;
    radiant_score: number;
    dire_score: number;
};

export type SimplePlayer = {
    account_id: number | null;
    username: string | undefined;
    hero_id: number;
    kills: number;
    kda: number;
};

// Profile might just have to expand this type?
// no need for them to be separate in my opinion
export type RawPlayer = {
    leaderboard_rank: null;
    profile: Profile;
    rank_tier: number;
    solo_competitive_rank: null;
    competitive_rank: number;
    mmr_estimate: MmrEstimate;
};

export type MmrEstimate = {
    estimate: number;
};

export type Profile = {
    account_id: number;
    personaname: string;
    name: null;
    plus: boolean;
    cheese: number;
    steamid: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    profileurl: string;
    last_login: Date;
    loccountrycode: string;
    status: null;
    is_contributor: boolean;
    is_subscriber: boolean;
};

export type RawMatch = {
    match_id: number;
    barracks_status_dire: number;
    barracks_status_radiant: number;
    chat: null;
    cluster: number;
    cosmetics: null;
    dire_score: number;
    dire_team_id: null;
    draft_timings: null;
    duration: number;
    engine: number;
    first_blood_time: number;
    game_mode: number;
    human_players: number;
    leagueid: number;
    lobby_type: number;
    match_seq_num: number;
    negative_votes: number;
    objectives: null;
    picks_bans: null;
    positive_votes: number;
    radiant_gold_adv: null;
    radiant_score: number;
    radiant_team_id: null;
    radiant_win: boolean;
    radiant_xp_adv: null;
    skill: null;
    start_time: number;
    teamfights: null;
    tower_status_dire: number;
    tower_status_radiant: number;
    version: null;
    replay_salt: number;
    series_id: number;
    series_type: number;
    players: RawPlayer[];
    patch: number;
    region: number;
    replay_url: string;
};

// export type RawPlayer = {
//     match_id: number;
//     player_slot: number;
//     ability_targets: null;
//     ability_upgrades_arr: number[];
//     ability_uses: null;
//     account_id: number | null;
//     actions: null;
//     additional_units: null;
//     assists: number;
//     backpack_0: number;
//     backpack_1: number;
//     backpack_2: number;
//     backpack_3: null;
//     buyback_log: null;
//     camps_stacked: null;
//     connection_log: null;
//     creeps_stacked: null;
//     damage: null;
//     damage_inflictor: null;
//     damage_inflictor_received: null;
//     damage_taken: null;
//     damage_targets: null;
//     deaths: number;
//     denies: number;
//     dn_t: null;
//     firstblood_claimed: null;
//     gold: number;
//     gold_per_min: number;
//     gold_reasons: null;
//     gold_spent: number;
//     gold_t: null;
//     hero_damage: number;
//     hero_healing: number;
//     hero_hits: null;
//     hero_id: number;
//     item_0: number;
//     item_1: number;
//     item_2: number;
//     item_3: number;
//     item_4: number;
//     item_5: number;
//     item_neutral: number;
//     item_uses: null;
//     kill_streaks: null;
//     killed: null;
//     killed_by: null;
//     kills: number;
//     kills_log: null;
//     lane_pos: null;
//     last_hits: number;
//     leaver_status: number;
//     level: number;
//     lh_t: null;
//     life_state: null;
//     max_hero_hit: null;
//     multi_kills: null;
//     net_worth: number;
//     obs: null;
//     obs_left_log: null;
//     obs_log: null;
//     obs_placed: null;
//     party_id: number;
//     party_size: number;
//     performance_others: null;
//     permanent_buffs: RawPermanentBuff[];
//     pings: null;
//     pred_vict: null;
//     purchase: null;
//     purchase_log: null;
//     randomed: null;
//     repicked: null;
//     roshans_killed: null;
//     rune_pickups: null;
//     runes: null;
//     runes_log: null;
//     sen: null;
//     sen_left_log: null;
//     sen_log: null;
//     sen_placed: null;
//     stuns: null;
//     teamfight_participation: null;
//     times: null;
//     tower_damage: number;
//     towers_killed: null;
//     xp_per_min: number;
//     xp_reasons: null;
//     xp_t: null;
//     radiant_win: boolean;
//     start_time: number;
//     duration: number;
//     cluster: number;
//     lobby_type: number;
//     game_mode: number;
//     is_contributor: boolean;
//     patch: number;
//     region: number;
//     isRadiant: boolean;
//     win: number;
//     lose: number;
//     total_gold: number;
//     total_xp: number;
//     kills_per_min: number;
//     kda: number;
//     abandons: number;
//     rank_tier: number | null;
//     is_subscriber: boolean;
//     // cosmetics: any[];
//     cosmetics: null;
//     benchmarks: RawBenchmarks;
//     personaname?: string;
//     name?: null;
//     last_login?: Date | null;
// };

type RawBenchmarks = {
    gold_per_min: { [key: string]: number };
    xp_per_min: { [key: string]: number };
    kills_per_min: { [key: string]: number };
    last_hits_per_min: { [key: string]: number };
    hero_damage_per_min: { [key: string]: number };
    hero_healing_per_min: { [key: string]: number };
    tower_damage: { [key: string]: number };
    stuns_per_min: { [key: string]: number };
    // TODO: check this
    lhten: null;
};

// export interface Lhten {}

type RawPermanentBuff = {
    permanent_buff: number;
    stack_count: number;
    grant_time: number;
};
