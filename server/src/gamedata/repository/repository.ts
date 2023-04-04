import {
    makeMatchRequest,
    makePlayerRequest,
    PlayerPromise,
    MatchPromise,
    RecentMatchesPromise,
    makeRecentMatchesRequest,
} from '../requests';

// TODO: Add hooks for all requests
// Generics?
interface Repository {
    getMatchData(id: number): MatchPromise;
    getRecentMatchData(id: number): RecentMatchesPromise;
    getPlayerData(id: number): PlayerPromise;
}

export default function createRepository(): Repository {
    const getMatchData = makeMatchRequest;
    const getPlayerData = makePlayerRequest;
    const getRecentMatchData = makeRecentMatchesRequest;

    return {
        getMatchData,
        getPlayerData,
        getRecentMatchData,
    };
}
