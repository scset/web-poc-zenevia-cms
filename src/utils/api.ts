import { BASE_URL, API_URL } from "./constants";

export const base = (path: string) => `${BASE_URL}${path}`;
export const api = (path: string) => `${API_URL}${path}`;
