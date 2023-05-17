import axios from 'axios';

const BASE_URL: string = "https://";

export const APICaller = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: { "Content-Type": "application/json" },
});