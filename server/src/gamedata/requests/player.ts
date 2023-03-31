import axios, { AxiosRequestConfig } from 'axios';
import { RawPlayer } from '../types';
import { defaultRequestConfig } from './config';

export type PlayerPromise = Promise<[number, RawPlayer]>;
export const makePlayerRequest = async (accountId: number): PlayerPromise => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/players/${accountId}`,
        method: 'GET',
    };

    try {
        const res = await axios.request(matchRequestConfig);
        return [accountId, res.data as RawPlayer];
    } catch (error) {
        console.error(error);
        throw error;
    }
};
