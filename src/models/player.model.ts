import { sequelize } from './index';
import { Model, DataTypes } from 'sequelize';

// TODO: figure out what to do about the null columns fetch-side, these data types have to be cleaned
type Player = {
    // leaderboard_rank: null;
    account_id: number;
    personaname: string;
    // name: null;
    plus: boolean;
    cheese: number;
    steamid: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    profileurl: string;
    last_login: Date;
    loccountrycode: string;
    // status: null;
    is_contributor: boolean;
    is_subscriber: boolean;
    rank_tier: number;
    // solo_competitive_rank: null;
    competitive_rank: number;
    mmr_estimate: number;
};

// const Player = Model.init<Player>({
//     sequelize,
//     modelName: 'player',
//     tableName: 'player',
//     timestamps: false,
//     underscored: true,
//     attributes: {},
// });
