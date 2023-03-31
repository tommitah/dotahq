import {
    makeMatchRequest,
    makePlayerRequest,
    PlayerPromise,
    MatchPromise,
} from '../requests';
import { RawPlayer } from '../types';

// TODO: Add hooks for all requests
// Generics?
interface Repository {
    getMatchData(id: number): MatchPromise;
    getPlayerData(id: number): Promise<[number, RawPlayer]>;
}

export default function createRepository(): Repository {
    const getMatchData = makeMatchRequest;
    const getPlayerData = makePlayerRequest;

    return {
        getMatchData,
        getPlayerData,
    };
}
