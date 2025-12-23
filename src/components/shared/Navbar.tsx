import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header>
            <Link href="/">
                <Image src="/assets/images/logo.png" alt="Awsmd" width={15} height={15} />
                <h4 className='text-2xl font-bold text-black'>Awsmd</h4>
            </Link>
        </header>
    )
}

export default Navbar