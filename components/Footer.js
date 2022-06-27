import Link from "next/link"

import { Bag, Heart, HouseDoor, Person } from 'react-bootstrap-icons'


export default function Footer() {
    return (
        <div className="footer">
            <Link className='active' href="/"><HouseDoor /></Link>
            <Link href=""><Heart /></Link>
            <Link href="/profile"><Person /></Link>
            <Link href="/my-cart"><Bag /></Link>
        </div>
    )
}