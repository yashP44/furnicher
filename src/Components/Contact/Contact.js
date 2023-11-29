import React from 'react'
import Layout from '../../Reusable/Layout'
import { FaAddressCard, FaClock, FaGreaterThan, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import Brandnav from '../../Reusable/Brandnav'
const Contact = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <Layout>
            <section>
                <div className='px-[5%] bg-shop h-[330px] w-full flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-medium'>Contact</h1>
                    <ul className='flex'>
                        <li className='flex items-center gap-2'>
                            <Link to='/'><p> Home </p></Link> <FaGreaterThan />
                        </li>
                        <li className=''>
                            <p className='text-[#b88e2f] text-lg font-medium'> &nbsp; Contact </p>
                        </li>
                    </ul>
                </div>
                <div className='px-[5%] w-full flex flex-col justify-center items-center gap-4 mt-14'>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Get In Touch With Us</h1>
                    <p className='text-xs font-normal text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <section className='px-[5%] md:px-0 flex flex-col md:flex-row md:justify-center gap-5'>
                    <div className='left w-full md:w-1/2 flex flex-col justify-center items-center gap-3 py-5 md:py-16'>
                        <div className="glass-form w-full md:w-2/3 grid grid-cols-3 rounded-xl py-3">
                            <div className="row-span-3 flex justify-center items-center">
                                <FaAddressCard className='text-blue-600 text-base md:text-xl lg:text-3xl' />
                            </div>
                            <div className="col-span-3 flex items-center text-lg font-semibold">Address</div>
                            <div className="col-span-3 flex items-center row-span-2 col-start-2 row-start-2 font-extralight">236 5th SE Avenue,  <br />New York NY10000, <br /> United States</div>
                        </div>
                        <div className="glass-form w-full md:w-2/3 grid grid-cols-3 rounded-xl py-3">
                            <div className="row-span-3 flex justify-center items-center">
                                <FaPhone className='text-blue-600 text-base md:text-xl lg:text-3xl' />
                            </div>
                            <div className="col-span-3 flex items-center text-lg font-semibold">Phone</div>
                            <div className="col-span-3 flex items-center row-span-2 col-start-2 row-start-2 font-extralight">Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789</div>
                        </div>
                        <div className="glass-form w-full md:w-2/3 grid grid-cols-3 rounded-xl py-3">
                            <div className="row-span-3 flex justify-center items-center">
                                <FaClock className='text-blue-600 text-base md:text-xl lg:text-3xl' />
                            </div>
                            <div className="col-span-3 flex items-center text-lg font-semibold">Working Time</div>
                            <div className="col-span-3 flex items-center row-span-2 col-start-2 row-start-2 font-extralight">Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00</div>
                        </div>
                    </div>
                    <div className='right  w-full md:w-1/2 flex flex-col justify-center items-center'>
                        <div className="w-full md:w-2/3 glass-form rounded-lg grid grid-rows-5 items-center py-5 md:py-0">
                            <div className="px-8">
                                <p>Your name</p>
                                <input type='text' placeholder='alexzander sliscovich' className='p-3 md:p-2 bg-transparent text-sm border-gray-400  border-b outline-none rounded-xl w-full' />
                            </div>
                            <div className="px-8 row-start-2">
                                <p>Email address</p>
                                <input type='text' placeholder='Abc@def.com' className='p-3 md:p-2  bg-transparent text-sm border-gray-400  border-b outline-none rounded-xl w-full' />
                            </div>
                            <div className="px-8 row-start-3">
                                <p>Subject</p>
                                <input type='text' placeholder='This is an optional' className='p-3 md:p-2 bg-transparent text-sm border-gray-400  border-b outline-none rounded-xl w-full' />
                            </div>
                            <div className="px-8 row-start-4">
                                <p>Message</p>
                                <textarea type='' placeholder='Hi! i d like to ask about' className='p-3 md:p-2 bg-transparent text-sm border-gray-400  border-b outline-none rounded-xl w-full' />
                            </div>
                            <div className="px-8 row-start-5">
                                <button className='text-white bg-[#b88f2f] hover:bg-[#8b6c24] hover:duration-700 py-2 px-8'>Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section >
            <Brandnav />
        </Layout >
    )
}

export default Contact