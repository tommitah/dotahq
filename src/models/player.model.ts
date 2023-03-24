import { db as dbConnection } from '../db';
import { DataTypes, Model, Optional } from 'sequelize';

// TODO: figure out what to do about the null columns fetch-side, these data types have to be cleaned
// Good chance that none can be required: only players with an account would have any of these
type PlayerAttributes = {
    // leaderboard_rank: null;
    account_id: number;
    personaname: string;
    // name: null;
    plus?: boolean;
    cheese?: number;
    steamid: string;
    avatar: string;
    avatarmedium?: string;
    avatarfull?: string;
    profileurl?: string;
    last_login?: Date;
    loccountrycode?: string;
    // status: null;
    is_contributor?: boolean;
    is_subscriber?: boolean;
    rank_tier?: number;
    // solo_competitive_rank: null;
    competitive_rank?: number;
    mmr_estimate?: number;
};

export type PlayerInput = Optional<
    PlayerAttributes,
    'account_id' | 'personaname' | 'steamid' | 'avatar'
>;
export type PlayerOutput = Required<PlayerAttributes>;

// NOTE: this will define a table in the db
class PlayerModel
    extends Model<PlayerAttributes, PlayerInput>
    implements PlayerAttributes
{
    public account_id!: number;
    public personaname!: string;
    public plus!: boolean;
    public cheese!: number;
    public steamid!: string;
    public avatar!: string;
    public avatarmedium!: string;
    public avatarfull!: string;
    public profileurl!: string;
    public last_login!: Date;
    public loccountrycode!: string;
    // status: null;
    public is_contributor!: boolean;
    public is_subscriber!: boolean;
    public rank_tier!: number;
    // solo_competitive_rank: null;
    public competitive_rank!: number;
    public mmr_estimate!: number;
}

PlayerModel.init(
    {
        account_id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
        },
        personaname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        steamid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plus: { type: DataTypes.BOOLEAN },
        cheese: { type: DataTypes.NUMBER },
        rank_tier: { type: DataTypes.NUMBER },
        avatarfull: { type: DataTypes.STRING },
        avatarmedium: { type: DataTypes.STRING },
        last_login: { type: DataTypes.DATE }, // or string?
        profileurl: { type: DataTypes.STRING },
        mmr_estimate: { type: DataTypes.NUMBER }, // NOTE: this is actually a nested object!
        is_subscriber: { type: DataTypes.BOOLEAN },
        is_contributor: { type: DataTypes.BOOLEAN },
        loccountrycode: { type: DataTypes.STRING },
        // TODO: all the commented rows
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
