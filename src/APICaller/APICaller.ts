import axios from 'axios';

// const BASE_URL: string = "http://localhost:3001";
const BASE_URL: string = "https://comic-search-engine-server.vercel.app";

export const APICaller = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: { "Content-Type": "application/json" },
});