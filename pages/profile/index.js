import Head from 'next/head'
import Link from "next/link"
import { useSession } from "next-auth/react"

// Third parties And Icons
import Card from 'react-bootstrap/Card'
import { BsPencilSquare, BsShieldLock } from "react-icons/bs"
import { IoLogOutOutline } from "react-icons/io5"
import { MdListAlt } from "react-icons/md"
import { GoLocation } from "react-icons/go"

// Components
import MobileDetailTab from '../../components/MobileDetailTab'
import Footer from '../../components/Footer'

import DefaultProfile from '../../public/images/profile/default.png'



const Profile = () => {
    const { data: session, status } = useSession()
    let fullname = ''
    let phone = ''

    if (status === 'authenticated') {
        fullname = session.user.first_name + ' ' + session.user.last_name
        phone = session.user.phone_number
    }

    function logout() {

    }

    function ProfileDetails() {
        return <Card className="profile-details-card">
            <Card.Body className="profile-details-body">
                <div className="my-profile-picture">
                    <img src={DefaultProfile.src} alt="Default Profile Picture" />
                </div>
                <div className="my-profile-details mb-4">
                    <Card.Title className="profile-details-title">{fullname}</Card.Title>
                    <p>{phone} 09352087125</p>
                </div>
                <div className='my-profile-navigations__wrapper'>
                    <div className="my-profile-navigations">
                        <Link href="/profile/update">
                            <a>
                                <BsPencilSquare className="font-price" />
                                <span className="ml16">Update Profile</span>
                            </a>
                        </Link>
                        <Link href="/password/change">
                            <a>
                                <BsShieldLock className="font-price" />
                                <span className="ml16">Change Password</span>
                            </a>
                        </Link>
                        <Link href="/my-purchase">
                            <a>
                                <MdListAlt className="font-price" />
                                <span className="ml16">My Purchases</span>
                            </a>
                        </Link>
                        <Link href="/my-address">
                            <a>
                                <GoLocation className="font-price" />
                                <span className="ml16">My Addresses</span>
                            </a>
                        </Link>
                        <button type="button" onClick={logout} className="btn btn-crystal logout btn-no-padd">
                            <IoLogOutOutline className="font-price" /><span className="ml16">Logout</span>
                        </button>
                    </div>
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