import { requestOptions } from './requestOptions';

const baseURL = process.env.apiUrl;

export async function get(url, params) {
    try {
        const token = extractToken(params)
        const response = await fetch(`${baseURL}${url}`, requestOptions('GET', params, token));
        return await response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function post(url, params) {
    try {
        const token = extractToken(params)
        const response = await fetch(`${baseURL}${url}`, requestOptions('POST', params, token));
        return await response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}

function extractToken(params) {
    return params?.token !== undefined ? { token : params.token } : {};
}
