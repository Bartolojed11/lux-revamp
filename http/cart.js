import { get } from './utils/api'

const baseEndpoint = 'cart/'

export async function getCartCount(payload) {
    const data = await get(`${baseEndpoint}count`, payload);
    return data?.data?.total_count;
}

export async function getCartItems(payload) {
    const data = await get(`${baseEndpoint}`, payload);
    return data?.data?.user_cart?.cart_items;
}
