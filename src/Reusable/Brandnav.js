import React from 'react'
import F1 from '../images/F1.png'
import F2 from '../images/F2.png'
import F3 from '../images/F3.png'
import F4 from '../images/F4.png'
const Brandnav = () => {
    return (
        <>
            <section className='px-[5%] bg-[#FAF3EA] w-full mt-10 py-10 md:py-16 md:shadow-lg'>
                <ul className='flex flex-wrap gap-2 justify-start'>
                    <li className='w-full md:w-1/4'>
                        <img src={F1} alt='not found' />
                    </li>
                    <li className='w-full md:w-1/4'>
                        <img src={F2} alt='not found' />
                    </li>
                    <li className='w-full md:w-1/4'>
                        <img src={F3} alt='not found' />
                    </li>
                    <li className='w-full md:w-1/4'>
                        <img src={F4} alt='not found' />
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Brandnav