import { db as dbConnection } from '../db';
import { DataTypes, Model } from 'sequelize';
import { Player } from '../gamedata/types/index';

type PlayerAttributes = Player & { id: number };

// NOTE: this will define a table in the db
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
        // hooks: {
        //     // NOTE: One way to possibly solve the issue with type assignment from `Player` would be just using
        //     // a id = 0 on the data we get from the API, no idea if that's a good idea though, at least I hate the idea of it.
        //     // OR, we figure out how to expand the Profile and MmrEstimate types to Player and refactor the `cleaner`.
        //     // might just make the most sense, this way account_id could be the primaryKey.
        //     // This would mean that the player request would probably have to parse the data some extra.
        //     // OR we might use the tuple here (I KNEW IT), using the Player type + the account_id returned from the request!
        //
        //     beforeValidate: (instance, _options) => {
        //         if (!instance.id) {
        //             instance.id = uuidv4();
        //         }
        //     }
        // }
    }
);

// TODO: model connections

export default PlayerModel;
