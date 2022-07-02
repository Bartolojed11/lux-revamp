import Head from 'next/head'
import Link from "next/link"

import { MdListAlt } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import Card from 'react-bootstrap/Card'

import MobileDetailTab from '../components/MobileDetailTab'
import Footer from './../components/Footer'

import DefaultProfile from './../public/images/profile/default.png'



const Profile = () => {

    function ProfileDetails() {
        return <Card className="profile-details-card">
            <Card.Body className="profile-details-body">
                <div className="my-profile-picture">
                    <img src={DefaultProfile.src} alt="Default Profile Picture" />
                </div>
                <div className="my-profile-details">
                    <Card.Title className="profile-details-title">Jane Doe</Card.Title>
                    <p>09352087125</p>
                </div>

                <button className="btn btn-shop-primary fit-content mlr-center ">Edit</button>
                <div className="my-profile-navigations">
                    <Link href="/my-purchase">
                        <a className='purchase-link'><MdListAlt className='my-purchase-icon' />My Purchases</a>
                    </Link>
                    <Link href="/my-address">
                        <a className='address-link'><GoLocation className='my-address-icon' />My Addresses</a>
                    </Link>
                </div>

            </Card.Body>
        </Card>
    }

    return <>
        <Head>
            <title>My Profile</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <MobileDetailTab header="Profile" />
        <div className="container-fluid profile-page">
            <ProfileDetails />
        </div>
        <Footer />
    </>
}

export default Profile