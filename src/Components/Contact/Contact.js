import React from 'react'
import Layout from '../../Reusable/Layout'
import { FaAddressCard, FaClock, FaGreaterThan, FaLocationArrow, FaPhone } from 'react-icons/fa'
import F1 from '../../images/F1.png'
import F2 from '../../images/F2.png'
import F3 from '../../images/F3.png'
import F4 from '../../images/F4.png'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
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
                <section className='flex flex-col md:flex-row md:justify-center gap-5'>
                    <div className='left w-full md:w-1/2 flex flex-col justify-center py-5 md:py-16'>
                        <div className="grid grid-cols-3 grid-rows-4 gap-2">
                            <div className="row-span-3 flex justify-center items-center"><FaAddressCard className='text-base md:text-xl lg:text-3xl' /></div>
                            <div className="col-span-3 flex items-center text-lg font-semibold">Address</div>
                            <div className="col-span-3 flex items-center row-span-2 col-start-2 row-start-2 font-extralight">236 5th SE Avenue,  <br />New York NY10000, <br /> United States</div>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-4 gap-2">
                            <div className="row-span-3 flex justify-center items-center"><FaPhone className='text-base md:text-xl lg:text-3xl' /></div>
                            <div className="col-span-3 flex items-center text-lg font-semibold">Phone</div>
                            <div className="col-span-3 flex items-center row-span-2 col-start-2 row-start-2 font-extralight">Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789</div>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-4 gap-2">
                            <div className="row-span-3 flex justify-center items-center"><FaClock className='text-base md:text-xl lg:text-3xl' /></div>
                            <div className="col-span-3 flex items-center text-lg font-semibold">Working Time</div>
                            <div className="col-span-3 flex items-center row-span-2 col-start-2 row-start-2 font-extralight">Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00</div>
                        </div>

                    </div>
                    <div className='right w-full md:w-1/2 flex flex-col justify-center'>
                        <div className="w-full grid grid-rows-5 items-center py-5 md:py-16">
                            <div className="px-10 md:px-8 gap-1 ">
                                <p>Your name</p>
                                <input type='text' placeholder='alexzander sliscovich' className='p-3 border border-[#9F9F9F] outline-none rounded-xl w-full md:w-4/5 lg:w-3/5 md:px-8' />
                            </div>
                            <div className="px-10 md:px-8 gap-1 row-start-2">
                                <p>Email address</p>
                                <input type='text' placeholder='Abc@def.com' className='p-3 border border-[#9F9F9F] outline-none rounded-xl w-full md:w-4/5 lg:w-3/5' />
                            </div>
                            <div className="px-10 md:px-8 gap-1 row-start-3">
                                <p>Subject</p>
                                <input type='text' placeholder='This is an optional' className='p-3 border border-[#9F9F9F] outline-none rounded-xl w-full md:w-4/5 lg:w-3/5' />
                            </div>
                            <div className="px-10 md:px-8 gap-1 row-start-4">
                                <p>Message</p>
                                <textarea type='' placeholder='Hi! i d like to ask about' className='p-3 border border-[#9F9F9F] outline-none rounded-xl w-full md:w-4/5 lg:w-3/5' />
                            </div>
                            <div className="px-10 md:px-8 row-start-5">
                                <button className='text-white bg-[#b88f2f] hover:bg-[#8b6c24] hover:duration-700 py-2 px-8'>Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section >
            <section className='px-[5%] bg-[#FAF3EA] w-full mt-10 py-10 md:py-16 text-center flex flex-wrap lg:flex-row gap-10 md:shadow-lg'>
                <div className=''>
                    <img src={F1} alt='not found' />
                </div>
                <div className=''>
                    <img src={F2} alt='not found' />
                </div>
                <div className=''>
                    <img src={F3} alt='not found' />
                </div>
                <div className=''>
                    <img src={F4} alt='not found' />
                </div>
            </section>
        </Layout >
    )
}

export default Contact