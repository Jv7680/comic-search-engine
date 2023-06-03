import axios from 'axios';

const BASE_URL: string = "http://localhost:3001";

export const APICaller = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: { "Content-Type": "application/json" },
});