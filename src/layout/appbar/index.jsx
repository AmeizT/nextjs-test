"use client"

import Link from "next/link"

export default function Navbar(){
    return (
        <nav>
            <div>
                <div></div>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/shipping">Shipping</Link>
                    <Link href="/offers">Special Offers</Link>
                </div>
            </div>
        </nav>
    )
}