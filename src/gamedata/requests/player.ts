import axios, { AxiosRequestConfig } from 'axios';
import { Player } from '../types';
import { defaultRequestConfig } from './config';

export const makePlayerRequest = async (
    accountId: number
): Promise<[number | null, Player]> => {
    const matchRequestConfig: AxiosRequestConfig = {
        ...defaultRequestConfig,
        url: `/players/${accountId}`,
        method: 'GET',
    };

    try {
        const res = await axios.request(matchRequestConfig);
        return [accountId, res.data as Player];
    } catch (error) {
        console.error(error);
        throw error;
    }
};
