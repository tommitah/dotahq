import axios, { AxiosRequestConfig } from 'axios';
import { RawMatch } from '../types';
import { defaultRequestConfig, recentMatchesRequestConfig } from './config';

export type MatchPromise = Promise<[number, RawMatch]>;
export const makeMatchRequest = async (matchId: number): MatchPromise => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/matches/${matchId}`,
        method: 'GET',
    };

    try {
        const res = await axios.request(matchRequestConfig);
        return [matchId, res.data as RawMatch];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Something like this to get a 'digest' or feed.
export type RecentMatchesPromise = Promise<[number | null, RawMatch[]]>;
export const makeRecentMatchesRequest = async (
    accountId: number | null
): RecentMatchesPromise => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...recentMatchesRequestConfig,
        url: `/players/${accountId}/recentMatches`,
        method: 'GET',
    };

    try {
        const res = await axios.request(matchRequestConfig);
        return [accountId, res.data as RawMatch[]];
    } catch (error) {
        console.error(error);
        throw error;
    }
};
