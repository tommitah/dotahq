import { AxiosRequestConfig } from 'axios';
import * as envConfig from '../../utils/config';

const defaultRequestConfig: AxiosRequestConfig = {
    baseURL: envConfig.SERVER_URL,
    params: {
        key: `api_key=${envConfig.API_KEY}`,
    },
};

const recentMatchesRequestConfig: AxiosRequestConfig = {
    baseURL: envConfig.SERVER_URL,
    params: {
        key: `api_key=${envConfig.API_KEY}`,
        limit: 'limit=50',
    },
};

export { defaultRequestConfig, recentMatchesRequestConfig };
