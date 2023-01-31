import { useState, useEffect } from 'react'

// Third parties And Icons
import Form from 'react-bootstrap/Form'

// Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'

// utils
import { stateSetter } from "./../../utils/form"
import { requestOptions } from "./../../utils/requestOptions"

const AddAddress = (params) => {

    const [formData, setFormData] = useState({
        province: '',
        region: '',
        city: '',
        brgy: '',
        postalCode: '',
        additionalAddress: '',
    })

    const [regions, setRegions] = useState([])
    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])
    const [barangays, setBarangays] = useState([])

    useEffect(() => {
        const url = process.env.apiUrl + 'locations/regions'
        fetch(url, requestOptions())
            .then(response => response.json())
            .then((response) => {
                setRegions(response.data.regions)
            })
    }, [])

    async function getProvinces(regionCode = null) {
        const url = process.env.apiUrl + 'locations/province/' + regionCode
        if (regionCode === null) {
            setProvinces([])
            setCities([])
            setBarangays([])
            return;
        }

        fetch(url, requestOptions())
            .then(response => response.json())
            .then((response) => {
                setProvinces(response.data.provinces)
                setCities([])
                setBarangays([])
            }).catch((err) => {

            })
    }

    async function getCities(provinceCode = null) {
        const url = process.env.apiUrl + 'locations/cities/' + provinceCode
        if (provinceCode === null) {
            setCities([])
            setBarangays([])
            return;
        }

        fetch(url, requestOptions())
            .then(response => response.json())
            .then((response) => {
                setCities(response.data.cities)
                setBarangays([])
            }).catch((err) => {

            })
    }

    function getBarangays(cityCode = null) {
        const url = process.env.apiUrl + 'locations/barangay/' + cityCode
        if (cityCode === null) {
            setBarangays([])
            return;
        }

        fetch(url, requestOptions())
            .then(response => response.json())
            .then((response) => {
                setBarangays(response.data.barangays)
            }).catch((err) => {

            })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    async function handleOnChange(event) {
        stateSetter(event, setFormData)
    }

    async function handleRegionChange(event) {
        stateSetter(event, setFormData)
        await getProvinces(event.target.value)
    }

    async function handleProvinceChange(event) {
        stateSetter(event, setFormData)
        await getCities(event.target.value)
    }

    async function handleCityChange(event) {
        stateSetter(event, setFormData)
        await getBarangays(event.target.value)
    }

    return <>
        <MobileDetailTab header="Add Address" />
        <HtmlHeader title="Add Address" />
        <div className="container-fluid add-address-page">
            <div className="add-address-details-card card">
                <Form onSubmit={handleSubmit} method="post">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Region</Form.Label>
                        <Form.Select type="select" name="region" onChange={handleRegionChange} value={formData.region}>
                            <option>Select Region</option>
                            {
                                regions.map((regionInfo) => {
                                    return <option key={regionInfo.region_code} value={regionInfo.region_code}>{regionInfo.region_name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Province</Form.Label>
                        <Form.Select type="select" name="province" value={formData.province} onChange={handleProvinceChange}>
                            <option>Select Province</option>
                            {
                                provinces.map((provinceInfo) => {
                                    return <option key={provinceInfo.province_code} value={provinceInfo.province_code}>{provinceInfo.province_name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Select type="select" name="city" value={formData.city} onChange={handleCityChange}>
                            <option>Select City</option>
                            {
                                cities.map((cityInfo) => {
                                    return <option key={cityInfo.city_code} value={cityInfo.city_code}>{cityInfo.city_name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Barangay</Form.Label>
                        <Form.Select type="select" name="brgy" value={formData.brgy} onChange={handleOnChange}>
                            <option>Select Barangay</option>
                            {
                                barangays.map((barangayInfo) => {
                                    return <option key={barangayInfo.brgy_code} value={barangayInfo.brgy_code}>{barangayInfo.brgy_name}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="postalCode"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.postalCode}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Additional address / Landmark</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="additionalAddress"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.additionalAddress}
                        />
                    </Form.Group>

                    <div className="text-center">
                        <button className="btn btn-shop-primary" type="submit">
                            Save
                        </button>
                    </div>
                </Form>

            </div>
        </div>
        <Footer />
    </>


}

export default AddAddress