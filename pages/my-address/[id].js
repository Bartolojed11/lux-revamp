import { useSession } from "next-auth/react"
import { useEffect, useState } from 'react'

// Third parties And Icons
import Form from 'react-bootstrap/Form'

// Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'

// utils
import { stateSetter } from "./../../utils/form"

const EditAddress = ({ address }) => {
    address = {}
    const [formData, setFormData] = useState({
        province: '',
        region: '',
        city: '',
        brgy: '',
        postalCode: '',
        additionalAddress: '',
    })

    useEffect(function () {
        setFormData((formData) => {
            return {
                ...formData,
                province: address.province,
                region: address.region,
                city: address.city,
                brgy: address.brgy,
                postalCode: address.postalCode,
                additionalAddress: address.additionalAddress,
            }

        })
    }, [address])

    function handleSubmit(event) {
        event.preventDefault()
    }

    function handleOnChange(event) {
        stateSetter(event, setFormData)
    }

    return <>
        <MobileDetailTab header="Update Address" />
        <HtmlHeader title='Update Address' />
        <div className="container-fluid update-address-page">
            <div className="update-address-details-card card">
                <Form onSubmit={handleSubmit} method="post">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Province</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="province"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.province}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Region</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="region"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.region}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="city"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.city}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Brgy</Form.Label>
                        <Form.Control
                            type="text" placeholder=""
                            name="brgy"
                            onChange={handleOnChange}
                            className="form-control-sm"
                            value={formData.brgy}
                        />
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
                        <Form.Label>Additional address</Form.Label>
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



// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// export async function getStaticProps(context) {
//     const { id } = context.params
//     // const response = await fetch(process.env.apiUrl + 'products/' + url)
//     // const json = await response.json()
//     // const { address } = json.data || {}
//     const address = {}
//     return {
//         props: {
//             address,
//         },
//         // Next.js will attempt to re-generate the page:
//         // - When a request comes in
//         // - At most once every 10 seconds
//         revalidate: 10, // In seconds
//     }
// }


// // This function gets called at build time on server-side.
// // It may be called again, on a serverless function, if
// // the path has not been generated.
// export async function getStaticPaths() {

//     const response = await fetch(process.env.apiUrl + 'products')
//     const json = await response.json()
//     const { address } = json.data || {}

//     // Get the paths we want to pre-render based on posts
//     // const paths = address.map((product) => {
//     //     return {
//     //         params: { url: product.url.toString() }
//     //     }
//     // })
//     return {
//         paths: [
//           { params: { id: 'http://localhost:3000/my-address/1' } } // See the "paths" section below
//         ],
//         fallback: false
//       }
// }


export default EditAddress