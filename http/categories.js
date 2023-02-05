import { get } from './utils/api'

const baseEndpoint = 'categories/'

export async function getCategories() {
    const data = await get(`${baseEndpoint}`);
    return data?.data?.categories;
}
