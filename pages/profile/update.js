import { useState, useEffect } from 'react'

// Third parties And Icons
import Form from 'react-bootstrap/Form'

// Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'

// utils
import { stateSetter } from "../../utils/form"

// hooks
import { useAuth } from './../../hooks/useAuth'

const UpdateProfile = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        gender: '',
        birthday: ''
    })
    const { isAuthenticated, user } = useAuth()

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleOnChange(event) {
        stateSetter(event, setFormData)
    }

    useEffect(() => {
        if (isAuthenticated) {
            setFormData({
                ...formData,
                first_name: user.first_name,
                last_name: user.last_name,
                phone_number: user.phone_number,
                gender: user.gender,
                birthday: user.birthday,
            })
        }
    }, [isAuthenticated])


    return <>
        <MobileDetailTab header="Update Profile" />
        <HtmlHeader title='Update Profile' />
        <div className="container-fluid profile-page">
            <div className="profile-details-card card">
                <Form  method="post" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text" placeholder="First Name"
                            name="first_name"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.first_name}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text" placeholder="Last Name"
                            name="last_name"
                            onChange={handleOnChange}
                            value={formData.last_name}
                        />
                    </Form.Group>

                    <div className="row">
                        <div className="col-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select onChange={handleOnChange} name="gender" value={formData.gender}>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-9">
                            <Form.Group className="mb-3 pl16" controlId="formBasicEmail">
                                <Form.Label>Birthdate</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="birthday"
                                    onChange={handleOnChange}
                                    value={formData.birthday}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            type="text" placeholder="Phone number"
                            name="phone_number"
                            onChange={handleOnChange}
                            value={formData.phone_number}
                        />
                    </Form.Group>

                    <div className="text-center">
                        <button className="btn btn-shop-primary" type="submit">
                            Update
                        </button>
                    </div>
                </Form>

            </div>
        </div>
        <Footer />
    </>


}

export default UpdateProfile