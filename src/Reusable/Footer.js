import React from 'react'
import { FaDivide } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.png'
const Footer = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <>
            <section className='px-[5%] py-[5%]'>
                <div className='flex flex-wrap space-y-8'>
                    <div className='w-full md:w-1/2 lg:w-1/3'>
                        <Link to='/' className='flex gap-3'>
                            <h1 className='text-2xl font-bold py-0 md:py-6'>Funiro.</h1>
                        </Link>
                        <p className='text-[#9F9F9F]'>400 University Drive Suite 200 Coral <br />
                            Gables,<br />
                            FL 33134 USA</p>
                    </div>
                    <hr className='h-2 w-full text-[#e5e7eb] my-2 md:hidden' />
                    <div className='w-full md:w-1/2 lg:w-1/3 flex justify-around'>
                        <div className='w-1/2'>
                            <h1 className='font-normal text-base text-[#9F9F9F] py-0 md:py-6'>Links</h1>
                            <p className={`${splitLocation[1] === "" ? "text-[#B88E2F] text-[18px]  duration-500 text-base  font-light cursor-pointer " : ""} my-2`}><Link to='/'> Home</Link></p>
                            <p className={`${splitLocation[1] === "shop" ? "text-[#B88E2F] text-[18px]  duration-500 text-base  font-light cursor-pointer " : ""} my-2`}><Link to='/shop'>Shop</Link></p>
                            <p className={`${splitLocation[1] === "contact" ? "text-[#B88E2F] text-[18px]  duration-500 text-base  font-light cursor-pointer " : ""} my-2`}><Link to='/contact' >Contact</Link></p>
                            <p className={`${splitLocation[1] === "contact" ? "text-[#B88E2F] text-[18px]  duration-500 text-base  font-light cursor-pointer " : ""} my-2`}><Link to='/blog' >Blog</Link></p>
                        </div>

                        <div className='w-1/2'>
                            <h1 className='font-normal text-base text-[#9F9F9F] py-0 md:py-6'>Help</h1>
                            <p className='my-2'>Payment Options</p>
                            <p className='my-2'>Returns</p>
                            <p className='my-2'>Privacy Policies</p>
                        </div>
                    </div>
                    <hr className='h-2 w-full text-[#e5e7eb] my-2 lg:hidden' />
                    <div className='w-full md:w-1/2 lg:w-1/3'>
                        <h1 className='font-normal text-base text-[#9F9F9F] py-0 '>Newsletter</h1>
                        <input type='text'
                            name='newsletter'
                            placeholder='Enter Your Email Address'
                            className='border-black border-b-2 p-1 outline-none' />
                        <button className='text-black border-[#9f9f9f] border-b-2 mx-5 p-1 outline-none'>SUBSCRIBE</button>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/3'>
                        2023 furino. All rights reverved
                    </div>
                </div>
            </section >
        </>
    )
}

export default Footer