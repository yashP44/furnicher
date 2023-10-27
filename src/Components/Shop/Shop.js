import React from 'react'
import Layout from '../../Reusable/Layout'
import { Link } from 'react-router-dom'
import { FaGreaterThan, FaHSquare, FaJsSquare, FaSlidersH, FaSquare, FaSquareFull, FaSquarespace, FaStreetView } from 'react-icons/fa'
import ShopProduct from './ShopProduct'
import F1 from '../../images/F1.png'
import F2 from '../../images/F2.png'
import F3 from '../../images/F3.png'
import F4 from '../../images/F4.png'
const Shop = () => {
    return (
        <Layout>
            <section>
                <div className='bg-shop h-[330px] w-full flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-medium'>Shop</h1>
                    <ul className='flex'>
                        <li className='flex items-center gap-2'>
                            <Link to='/'><p> Home </p></Link> <FaGreaterThan />
                        </li>
                        <li className=''>
                            <p className='text-[#b88e2f] text-lg font-medium'> &nbsp; Shop </p>
                        </li>
                    </ul>
                </div>
                <div className="px-[5%] w-full md:h-[100px] bg-[#F9F1E7] flex flex-wrap justify-between  items-center space-y-5 py-5 md:space-y-0 md:py-0 md:flex-row md:items-center md:gap-5 md:flex-wrap">
                    <FaSlidersH className='text-xl' />
                    <FaHSquare className='text-xl' />
                    <FaStreetView className='text-xl' />
                    <p className='text-base font-normal text-[#666]'>Showing 1-16 of 32 results</p>

                    <div className=' flex gap-5 text-right mx-auto'>
                        <div className='flex items-center'>
                            <span className='text-[18px]'>Show&nbsp;&nbsp;</span><p className='bg-white px-5 py-3  text-[#666]'>16</p>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-[18px]'>Short by&nbsp;&nbsp;</span><p className='bg-white px-5 py-3 text-[#666]'>Default</p>
                        </div>
                    </div>
                </div>
            </section>
            <ShopProduct />
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

export default Shop