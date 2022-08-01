import Link from "next/link"
import { useSession } from "next-auth/react"

import { Bag, Heart, HouseDoor, Person } from 'react-bootstrap-icons'


export default function Footer() {
    const { data: session, status } = useSession()
    let user = {}
    return (
        <div className="footer">
            <Link href="/"><HouseDoor /></Link>
            <Link href="/favorites"><Heart /></Link>
            <Link href={status === 'authenticated' ? '/profile' : '/login'}><Person /></Link>
            <Link href="/my-cart">
                <a className="cart__link lineheight-0" >
                    <span className="cart_count_container">
                        <div className="cart_count">88</div>
                    </span>
                    <Bag /></a>
            </Link>
        </div>
    )
}