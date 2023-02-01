import { get } from './utils/api'

export async function getRegions(url) {
    const data = await get(url);
    return data.data.regions;
}

export async function getProvinces(url) {
    const data = await get(url);
    return data.data.provinces;
}

export async function getCities(url) {
    const data = await get(url);
    return data.data.cities;
}

export async function getBarangays(url) {
    const data = await get(url);
    return data.data.barangays;
}
