import { makeMatchRequest, makePlayerRequest } from '../requests';
import { RawMatch, Player } from '../types';

// TODO: Add hooks for all requests
// Generics?
interface Repository {
    getMatchData(id: number): Promise<[number, RawMatch]>;
    getPlayerData(id: number): Promise<[number | null, Player]>;
}

export default function createRepository(): Repository {
    const getMatchData = makeMatchRequest;
    const getPlayerData = makePlayerRequest;

    return {
        getMatchData,
        getPlayerData
    };
}
