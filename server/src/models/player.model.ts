import { db as dbConnection } from '../db';
import { DataTypes, Model } from 'sequelize';
import { Player } from '../gamedata/types';

type PlayerAttributes = Player & { id: number };

class PlayerModel extends Model<PlayerAttributes> {
    public id!: number;
}

PlayerModel.init(
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
        },
        leaderboard_rank: { type: DataTypes.NUMBER },
        competitive_rank: { type: DataTypes.NUMBER },
        rank_tier: { type: DataTypes.NUMBER },
        solo_competitive_rank: { type: DataTypes.NUMBER },
        // here's to hoping that the profile and mmr_estimate are somewhat typesafe this way...
        // data modeling hard....
        profile: { type: DataTypes.JSONB },
        mmr_estimate: { type: DataTypes.JSONB },
    },
    {
        timestamps: true,
        tableName: 'player',
        sequelize: dbConnection,
        paranoid: true,
    }
);

// TODO: model connections

export default PlayerModel;
