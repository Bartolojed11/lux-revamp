import { get, post } from './utils/api'

const baseEndpoint = 'orders/'

export async function getOrders(payload) {
    const data = await get(`${baseEndpoint}`, payload);
    return data?.data?.orders;
}

export async function getOrderByRef(payload) {
    const data = await get(`${baseEndpoint}${payload.ref}`, {
        ...payload
    });
    return data?.data?.order
}

export async function purchase(payload) {
    const data = await post(`${baseEndpoint}`, payload);
    return data
}
