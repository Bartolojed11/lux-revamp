import { requestOptions } from './requestOptions';

const baseURL = process.env.apiUrl;

export async function get(url, params) {
    try {
        const response = await fetch(`${baseURL}${url}`, requestOptions('GET', params));
        return await response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}