import { useState, useEffect } from 'react'

// Third parties And Icons
import Form from 'react-bootstrap/Form'

// Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'

// utils
import { stateSetter } from './../../utils/form'

// http
import {
    getRegions,
    getProvinces,
    getCities,
    getBarangays,
} from './../../http/locations'
import { saveAddress } from './../../http/userAddress'

// hooks
import { useAuth } from './../../hooks/useAuth'
import { useToast } from './../../hooks/useToast'

const AddAddress = (params) => {
    const [formData, setFormData] = useState({
        province_code: '',
        region_code: '',
        city_code: '',
        brgy_code: '',
        postal_code: '',
        additional_address: '',
    })

    const { token } = useAuth()
    const [regions, setRegions] = useState([])
    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])
    const [barangays, setBarangays] = useState([])
    const { toastSuccess, toastError } = useToast()

    useEffect(() => {
        getRegions()
            .then((regions) => {
                setRegions(regions)
            })
            .catch(() => {
                resetAllLocationOptions()
            })
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        formData.token = token
        saveAddress(formData)
            .then((response) => {
                clearInputFields()
                toastSuccess(response.message)
            })
            .catch(() => {
                toastError('Something went wrong! Please try again.')
            })
        console.log(formData)
    }

    async function handleOnChange(event) {
        stateSetter(event, setFormData)
    }

    // TODO: should be put inside a utils
    function clearInputFields() {
        setFormData({
            province_code: '',
            region_code: '',
            city_code: '',
            brgy_code: '',
            postal_code: '',
            additional_address: '',
        })
    }

    async function handleRegionChange(event) {
        const regionCode = event.target.value
        stateSetter(event, setFormData)
        if (regionCode === null) {
            resetAllLocationOptions()
            return
        }
        getProvinces(regionCode)
            .then((province) => {
                setProvinces(province)
                setCities([])
                setBarangays([])
            })
            .catch(() => {
                resetAllLocationOptions()
            })
    }

    async function handleProvinceChange(event) {
        const provinceCode = event.target.value
        stateSetter(event, setFormData)
        if (provinceCode === null) {
            setCities([])
            setBarangays([])
            return
        }
        getCities(provinceCode)
            .then((cities) => {
                setCities(cities)
                setBarangays([])
            })
            .catch(() => {
                resetAllLocationOptions()
            })
    }

    async function handleCityChange(event) {
        stateSetter(event, setFormData)
        const cityCode = event.target.value
        if (cityCode === null) {
            setBarangays([])
            return
        }
        getBarangays(cityCode)
            .then((brgy) => {
                setBarangays(brgy)
            })
            .catch(() => {
                resetAllLocationOptions()
            })
    }

    function resetAllLocationOptions() {
        setProvinces([])
        setCities([])
        setBarangays([])
    }

    return (
        <>
            <MobileDetailTab header="Add Address" />
            <HtmlHeader title="Add Address" />
            <div className="container-fluid add-address-page">
                <div className="add-address-details-card card">
                    <Form onSubmit={handleSubmit} method="post">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Region</Form.Label>
                            <Form.Select
                                type="select"
                                name="region_code"
                                onChange={handleRegionChange}
                                value={formData.region}
                            >
                                <option>Select Region</option>
                                {regions &&
                                    regions.map((regionInfo) => {
                                        return (
                                            <option
                                                key={regionInfo.region_code}
                                                value={regionInfo.region_code}
                                            >
                                                {regionInfo.region_name}
                                            </option>
                                        )
                                    })}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="province_code">
                            <Form.Label>Province</Form.Label>
                            <Form.Select
                                type="select"
                                name="province_code"
                                value={formData.province}
                                onChange={handleProvinceChange}
                            >
                                <option>Select Province</option>
                                {provinces &&
                                    provinces.map((provinceInfo) => {
                                        return (
                                            <option
                                                key={provinceInfo.province_code}
                                                value={
                                                    provinceInfo.province_code
                                                }
                                            >
                                                {provinceInfo.province_name}
                                            </option>
                                        )
                                    })}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="city_code">
                            <Form.Label>City</Form.Label>
                            <Form.Select
                                type="select"
                                name="city_code"
                                value={formData.city}
                                onChange={handleCityChange}
                            >
                                <option>Select City</option>
                                {cities &&
                                    cities.map((cityInfo) => {
                                        return (
                                            <option
                                                key={cityInfo.city_code}
                                                value={cityInfo.city_code}
                                            >
                                                {cityInfo.city_name}
                                            </option>
                                        )
                                    })}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="brgy_code">
                            <Form.Label>Barangay</Form.Label>
                            <Form.Select
                                type="select"
                                name="brgy_code"
                                value={formData.brgy}
                                onChange={handleOnChange}
                            >
                                <option>Select Barangay</option>
                                {barangays &&
                                    barangays.map((barangayInfo) => {
                                        return (
                                            <option
                                                key={barangayInfo.brgy_code}
                                                value={barangayInfo.brgy_code}
                                            >
                                                {barangayInfo.brgy_name}
                                            </option>
                                        )
                                    })}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="postal_code">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="postal_code"
                                onChange={handleOnChange}
                                className="form-control-sm"
                                value={formData.postal_code}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="additional_address"
                        >
                            <Form.Label>
                                Additional address / Landmark
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                name="additional_address"
                                onChange={handleOnChange}
                                className="form-control-sm"
                                value={formData.additional_address}
                            />
                        </Form.Group>

                        <div className="text-center">
                            <button
                                className="btn btn-shop-primary"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddAddress
