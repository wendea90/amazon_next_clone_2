import Image from 'next/image'
import React from 'react'
import logo from "../images/logo.png"

const Footer = () => {
    return (
        <div className='w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4'>

            {/* logo */}
            <Image
                className='w-24'
                src={logo}
                alt='logo' />

            {/* link to your portifolio site or  */}
            <p className='text-sm -mt-4'>
                All rights reserved{" "}
                <a
                    className='hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300'
                    href='https://reactbd.com'
                    target='_blank'>
                    @reactbd.com
                </a>
            </p>
        </div>
    )
}

export default Footer