import React from 'react'
import F1 from '../images/F1.png'
import F2 from '../images/F2.png'
import F3 from '../images/F3.png'
import F4 from '../images/F4.png'
const Brandnav = () => {
    return (
        <>
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
        </>
    )
}

export default Brandnav