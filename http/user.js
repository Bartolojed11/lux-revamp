import { post } from './utils/api'

const baseEndpoint = 'auth/'

export async function signUpUser(payload) {
    const data = await post(`${baseEndpoint}signup`, payload);
    return data
}
