import { useState } from 'react'

// Third parties And Icons
import Form from 'react-bootstrap/Form'

// Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../components/Header'

// utils
import { stateSetter } from '../../utils/form'

const ChangePassword = (params) => {
    const [formData, setFormData] = useState({
        oldPassword: '',
        password: '',
        passwordConfirm: '',
    })

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleOnChange(event) {
        stateSetter(event, setFormData)
    }

    return (
        <>
            <MobileDetailTab header="Change Password" />
            <HtmlHeader title="Change Password" />
            <div className="container-fluid profile-page">
                <div className="profile-details-card card">
                    <Form onSubmit={handleSubmit} method="post">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Old password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=""
                                name="oldPassword"
                                onChange={handleOnChange}
                                className="form-control-sm"
                                value={formData.oldPassword}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>New password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=""
                                name="password"
                                onChange={handleOnChange}
                                className="form-control-sm"
                                value={formData.password}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirm new password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder=""
                                name="passwordConfirm"
                                onChange={handleOnChange}
                                className="form-control-sm"
                                value={formData.passwordConfirm}
                            />
                        </Form.Group>

                        <div className="text-center">
                            <button
                                className="btn btn-shop-primary"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ChangePassword
