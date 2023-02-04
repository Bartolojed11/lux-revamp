import { get } from './utils/api'

const baseEndpoint = 'locations/'

export async function getRegions() {
    const data = await get(`${baseEndpoint}regions`);
    return data.data.regions;
}

export async function getProvinces(payload) {
    const data = await get(`${baseEndpoint}provinces/${payload}`);
    return data.data.provinces;
}

export async function getCities(payload) {
    const data = await get(`${baseEndpoint}cities/${payload}`);
    return data.data.cities;
}

export async function getBarangays(payload) {
    const data = await get(`${baseEndpoint}barangays/${payload}`);
    return data.data.barangays;
}
