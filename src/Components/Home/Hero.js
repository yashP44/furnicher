import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section className='bg-hero relative px-[5%] h-[100vh] w-full flex items-center lg:justify-end lg:items-center'>
                <div className='bg-transparent glass-bg w-fit md:w-[650px] h-1/2 flex justify-center space-y-10 flex-col lg:rounded-xl lg:h-auto  lg:p-10'>
                    <p className='text-[#333]
                     text-sm tracking-wide font-medium'>We’re in Business to Improve Lives</p>
                    <h1 className='text-[#B88E2F] text-2xl md:text-5xl font-semibold'>Discover Our <br /> New Collection</h1>
                    <p className='text-[#333] text-xs md:text-base tracking-wide font-semibold'>Empower Your Style, Shop with Smiles!<br />  Elevate Everyday Elegance, Unleash Savings.  Your Fashion,<br /> Your Way – Seamless Shopping Awaits!</p>

                    <Link to='/shop'>
                        <p className='bg-[#B88E2F] hover:bg-[#8a6b23ee] hover:duration-700 w-[200px] py-5 px-6 text-base font-semibold text-white flex justify-center'>Buy Now
                        </p>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Hero