import { get, post } from './utils/api'

const baseEndpoint = 'users/'

export async function saveAddress(payload) {
    const address = await post(`${baseEndpoint}address`, {
        ...payload
    });
    console.log('address', address)
    return address
}

export async function getAddressList(payload) {
    const data = await get(`${baseEndpoint}my-address`, {
        ...payload
    });
    return data?.data?.address;
}
