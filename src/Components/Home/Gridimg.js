import React from 'react'
import ig1 from '../../images/ig1.png'
import ig2 from '../../images/ig2.png'
import ig3 from '../../images/ig3.png'
import ig4 from '../../images/ig4.png'
import ig5 from '../../images/ig5.png'
import ig6 from '../../images/ig6.png'
import ig7 from '../../images/ig7.png'
import ig8 from '../../images/ig8.png'
import ig9 from '../../images/ig9.png'
const Gridimg = () => {
    return (
        <>
            {/* <div className="px-[5%] h-full w-full  grid grid-cols-12 grid-rows-12 gap-3">
                <div className="row-span-6"><img src={ig1} alt='not found' className='h-full   overflow-hidden' /></div>
                <div className="col-span-2 row-span-3 col-start-1 row-start-7"><img src={ig2} alt='not found' className='h-full w-full overflow-hidden' /></div>
                <div className="col-span-5 row-span-5 col-start-2 row-start-2"><img src={ig3} alt='not found' className='h-full w-full overflow-hidden' /></div>
                <div className="col-span-2 row-span-7 col-start-7 row-start-4"><img src={ig4} alt='not found' className='h-full w-full overflow-hidden' /></div>
                <div className="col-span-2 row-span-5 col-start-9 row-start-2"><img src={ig5} alt='not found' className='h-full w-full overflow-hidden' /></div>
                <div className="col-span-2 row-span-6 col-start-11 row-start-1"><img src={ig6} alt='not found' className='h-full w-full overflow-hidden' /></div>
                <div className="col-span-4 row-span-2 col-start-3 row-start-7"><img src={ig7} alt='not found' className='h-full w-full overflow-hidden' /></div>
                <div className="col-span-4 row-span-2 col-start-9 row-start-7"><img src={ig8} alt='not found' className='h-full w-full overflow-hidden' /></div>
                <div className="col-span-3 row-span-2 col-start-9 row-start-9"><img src={ig9} alt='not found' className='h-full w-full overflow-hidden' /></div>
            </div> */}
            <section className='p-5% h-screen w-full relative overflow-hidden'>
                <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full">
                    <div className="col-span-2 row-span-7 h-full"><img src={ig1} alt='not fo-1' className='w-fit min-h-max object-cover' /></div>
                    <div className="col-span-3 row-span-5 col-start-1 row-start-8 h-full"><img src={ig2} alt='not found' className='w-fit min-h-max object-cover' /></div>
                    <div className="col-span-4 row-span-4 col-start-3 row-start-4 h-full"><img src={ig3} alt='not found' className='w-fit min-h-max object-cover' /></div>
                    <div className="col-span-2 row-span-4 col-start-7 row-start-6 h-full"><img src={ig4} alt='not found' className='w-fit min-h-max object-cover' /></div>
                    <div className="col-span-2 row-span-4 col-start-9 row-start-4 h-full"><img src={ig5} alt='not found' className='w-fit min-h-max object-cover' /></div>
                    <div className="col-span-2 row-span-5 col-start-11 row-start-2 h-full"><img src={ig6} alt='not found' className='w-fit min-h-max object-cover' /></div>
                    <div className="col-span-3 row-span-3 col-start-4 row-start-8 h-full"><img src={ig7} alt='not found' className='w-fit min-h-max object-cover' /></div>
                    <div className="col-span-4 row-span-2 col-start-9 row-start-8 h-full"><img src={ig8} alt='not found' className='w-fit min-h-max object-cover' /></div>
                    <div className="col-span-4 row-span-3 col-start-7 row-start-10 h-full"><img src={ig9} alt='not found' className='w-fit min-h-max object-cover' /></div>
                </div>
            </section>


        </>
    )
}

export default Gridimg