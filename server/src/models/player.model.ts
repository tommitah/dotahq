import { db as dbConnection } from '../db';
import { DataTypes, Model } from 'sequelize';
import { CleanPlayer } from '../gamedata/cleaner';
import MatchModel from './match.model';

type PlayerAttributes = CleanPlayer & { recent_matches: number[] };
class PlayerModel extends Model<PlayerAttributes> {}

PlayerModel.init(
    {
        account_id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
        },
        leaderboard_rank: { type: DataTypes.NUMBER },
        competitive_rank: { type: DataTypes.NUMBER },
        rank_tier: { type: DataTypes.NUMBER },
        solo_competitive_rank: { type: DataTypes.NUMBER },
        personaname: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        loccountrycode: { type: DataTypes.STRING },
        is_contributor: { type: DataTypes.BOOLEAN },
        is_subscriber: { type: DataTypes.BOOLEAN },
        avatarmedium: { type: DataTypes.STRING },
        profileurl: { type: DataTypes.STRING },
        last_login: { type: DataTypes.DATE }, //string?
        avatarfull: { type: DataTypes.STRING },
        estimate: { type: DataTypes.NUMBER },
        steamid: { type: DataTypes.STRING },
        status: { type: DataTypes.STRING },
        cheese: { type: DataTypes.NUMBER },
        avatar: { type: DataTypes.STRING },
        plus: { type: DataTypes.BOOLEAN },
        // NOTE: List of match id's
        recent_matches: { type: DataTypes.ARRAY(DataTypes.NUMBER) }
    },
    {
        timestamps: true,
        tableName: 'player',
        sequelize: dbConnection,
        paranoid: true,
    }
);

// TODO: model connections?
// PlayerModel.hasMany(MatchModel)

export default PlayerModel;
