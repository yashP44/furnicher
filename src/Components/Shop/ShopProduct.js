import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaICursor, FaLessThan, FaRupeeSign, FaStar } from 'react-icons/fa'
import Loder from '../../Reusable/Loder';
import { useSelector } from 'react-redux';

const ShopProduct = ({ filteredData }) => {
    const loading = useSelector(state => state.products.loading)
    // console.log(filteredData.slice(0, 3))
    return (
        <section className='px-[5%]'>
            <div className='w-full h-[100vh] my-[40px] overflow-y-scroll lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-14 justify-between'>
                {loading ?
                    <>
                        <Loder />
                    </>
                    : (
                        filteredData.map((item, index) => (
                            <div key={item.id} className='md:h-[490px] my-5 md:my-0 gap-2 grid relative bg-[#F4F5F7] shadow-md rounded-md transition-transform transform hover:-translate-y-5 hover:shadow'>
                                <img src={item.image} alt='Product' className='h-[280px] w-full border border-teal-50' />
                                <h2 className='text-lg font-semibold px-3 mt-2  text-[#3A3A3A] hover:text-blue-500 hover:duration-700 hover:underline'>
                                    <Link to={`/shop/productdetails/${item.id}`}>
                                        {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                                    </Link>
                                </h2>
                                <p className='text-md font-thin text-[#898989] px-3'>
                                    {item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}
                                </p>
                                <div className='flex flex-wrap justify-between items-center'>
                                    <p className='flex items-center text-base font-extrabold text-[#3A3A3A] px-3 mb-2'><FaRupeeSign />&nbsp;{item.price}</p>
                                    <p className='flex items-center text-base font-extrabold text-[#3A3A3A] px-3 mb-2'><FaStar className='text-yellow-500' /> &nbsp;{item.rating.rate}</p>
                                </div>
                            </div>
                        ))
                    )}
            </div>
            {/* <section className='w-full flex flex-wrap gap-8 justify-center items-center  md:space-x-10 md:gap-0'>
                <section className='w-full flex flex-wrap gap-8 justify-center items-center md:space-x-10 md:gap-0'>
                    <span className='bg-[#B88E2F] p-8 rounded-lg text-white'><FaArrowLeft /></span>
                    <span className='bg-[#B88E2F] p-8 rounded-lg text-white'><FaICursor /></span>
                    <span className='bg-[#B88E2F] p-8 rounded-lg text-white'><FaArrowRight /></span>
                </section>
            </section> */}
        </section >
    )
}

export default ShopProduct

