import React from 'react'
import bg from '../../images/bg.png'
import logo from '../../images/logo.png'
import range1 from '../../images/range1.png'

const Range = () => {
    return (
        <>
            <section className='px-[5%] w-full h-[100vh] relative py-[50px] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold  text-[#333]'>Browse The Range</h1>
                <p className='px-[2%] lg:px-0 text-base font-bold  text-[#666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='my-[40px] overflow-scroll lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>
                    <div className='gap-2 grid hover:duration-700 hover:scale-95'>
                        <img src={range1} width='380px' height='480px' alt='not found' className='rounded-2xl' />
                        <p className='text-base font-bold  text-[#333] text-center'>Living</p>
                    </div>
                    <div className='gap-2 grid hover:duration-700 hover:scale-95'>
                        <img src={range1} width='380px' height='480px' alt='not found' className='rounded-2xl' />
                        <p className='text-base font-bold  text-[#333] text-center'>Dining</p>
                    </div>
                    <div className='gap-2 grid hover:duration-700 hover:scale-95'>
                        <img src={range1} width='380px' height='480px' alt='not found' className='rounded-2xl' />
                        <p className='text-base font-bold  text-[#333] text-center'>Bedroom</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Range