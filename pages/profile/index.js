import Link from 'next/link'

// Third parties And Icons
import Card from 'react-bootstrap/Card'
import { BsPencilSquare, BsShieldLock } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'
import { MdListAlt } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'

// Components
import MobileDetailTab from './../../components/MobileDetailTab'
import Footer from './../../components/Footer'
import HtmlHeader from './../../components/Header'
import DefaultProfile from '../../public/images/profile/default.png'

// hooks
import { useAuth } from './../../hooks/useAuth'

const Profile = () => {
    const { user } = useAuth()

    function logout() {}

    function ProfileDetails() {
        return (
            <Card className="profile-details-card">
                <Card.Body className="profile-details-body">
                    <div className="my-profile-picture">
                        <img
                            src={DefaultProfile.src}
                            alt="Default Profile Picture"
                        />
                    </div>
                    <div className="my-profile-details mb-4">
                        <Card.Title className="profile-details-title">
                            {(user && user.fullname) || ''}
                        </Card.Title>
                        <p>{(user && user.phone) || ''}</p>
                    </div>
                    <div className="my-profile-navigations__wrapper">
                        <div className="my-profile-navigations">
                            <Link href="/profile/update">
                                <BsPencilSquare className="font-price" />
                                <span className="ml16">Update Profile</span>
                            </Link>
                            <Link href="/password/change">
                                <BsShieldLock className="font-price" />
                                <span className="ml16">Change Password</span>
                            </Link>
                            <Link href="/my-purchase">
                                <MdListAlt className="font-price" />
                                <span className="ml16">My Purchases</span>
                            </Link>
                            <Link href="/my-address">
                                <GoLocation className="font-price" />
                                <span className="ml16">My Addresses</span>
                            </Link>
                            <button
                                type="button"
                                onClick={logout}
                                className="btn btn-crystal logout btn-no-padd"
                            >
                                <IoLogOutOutline className="font-price" />
                                <span className="ml16">Logout</span>
                            </button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            <HtmlHeader title="My Profile" />
            <MobileDetailTab header="Profile" />
            <div className="container-fluid profile-page">
                <ProfileDetails />
            </div>
            <Footer />
        </>
    )
}

export default Profile
