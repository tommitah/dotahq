import dotenv from 'dotenv';
dotenv.config();

// NOTE: tsserver doesn't understand the .env file so it doesn't know these are strings, so we tell it
// TODO: check dotenv workings for this
const OPEN_DOTA_API_KEY: string = process.env.OPEN_DOTA_API_KEY as string;
const OPEN_DOTA_SERVER_URL: string = process.env.OPEN_DOTA_SERVER_URL as string;

export { OPEN_DOTA_API_KEY as API_KEY, OPEN_DOTA_SERVER_URL as SERVER_URL };
