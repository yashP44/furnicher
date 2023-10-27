import React from 'react'

const Hero = () => {
    return (
        <>
            <section className='bg-hero relative px-[5%] h-[100vh] w-full flex items-center lg:justify-end lg:items-center'>
                <div className='bg-transparent glass-bg w-fit h-1/2 flex justify-center space-y-10 flex-col lg:rounded-xl lg:h-auto lg:w-auto lg:p-10'>
                    <p className='text-[#333]
                     text-xs tracking-wide font-bold'>New Arrival</p>
                    <h1 className='text-[#B88E2F] text-2xl md:text-5xl font-semibold'>Discover Our <br /> New Collection</h1>
                    <p className='text-[#333] text-xs md:text-base tracking-wide font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className='bg-[#B88E2F] hover:bg-[#8a6b23ee] hover:duration-700 w-[200px] py-5 px-6 text-base font-semibold text-white flex justify-center'>Buy Now</button>
                </div>
            </section>
        </>
    )
}

export default Hero