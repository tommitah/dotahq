import { db as dbConnection } from '../db';
import { DataTypes, Model } from 'sequelize';
import { CleanMatch } from '../gamedata/cleaner/cleaner';

type MatchAttributes = CleanMatch;
class MatchModel extends Model<MatchAttributes> { }

// NOTE: These are the properties from RawMatch, that we are overlooking here, mostly because of null values
//     objectives: null;
//     picks_bans: null;
//     radiant_gold_adv: null;
//     radiant_team_id: null;
//     radiant_xp_adv: null;
//     skill: null;
//     teamfights: null;
//     version: null;
//     dire_team_id: null;
//     draft_timings: null;
//     chat: null;
//     cosmetics: null;

MatchModel.init(
    {
        // TODO: implement logic that disqualifies duplicate matches (since most of us play the same games)
        match_id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
        },
        // TODO: this might have to just store the id's, not necessary to have other stuff since we can link up tables on look up
        players: {
            type: DataTypes.ARRAY(DataTypes.NUMBER),
        },
        game_mode: { type: DataTypes.NUMBER },
        radiant_score: { type: DataTypes.NUMBER },
        dire_score: { type: DataTypes.NUMBER },
        radiant_win: { type: DataTypes.BOOLEAN },
        series_id: { type: DataTypes.NUMBER },
        series_type: { type: DataTypes.NUMBER },
        patch: { type: DataTypes.NUMBER },
        region: { type: DataTypes.NUMBER },
        replay_url: { type: DataTypes.STRING },
        replay_salt: { type: DataTypes.NUMBER },
        tower_status_dire: { type: DataTypes.NUMBER },
        tower_status_radiant: { type: DataTypes.NUMBER },
        start_time: { type: DataTypes.NUMBER },
        positive_votes: { type: DataTypes.NUMBER },
        negative_votes: { type: DataTypes.NUMBER },
        match_seq_num: { type: DataTypes.NUMBER },
        lobby_type: { type: DataTypes.NUMBER },
        leagueid: { type: DataTypes.NUMBER },
        human_players: { type: DataTypes.NUMBER },
        first_blood_time: { type: DataTypes.NUMBER },
        engine: { type: DataTypes.NUMBER },
        duration: { type: DataTypes.NUMBER },
        cluster: { type: DataTypes.NUMBER },
        barracks_status_dire: { type: DataTypes.NUMBER },
        barracks_status_radiant: { type: DataTypes.NUMBER },
    },
    {
        timestamps: true,
        tableName: 'match',
        sequelize: dbConnection,
        paranoid: true,
    }
);

// TODO: Match connections

export default MatchModel;
