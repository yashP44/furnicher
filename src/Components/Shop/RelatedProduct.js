import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchData } from '../apiService';
import Loder from '../../Reusable/Loder';
import { FaRupeeSign, FaStar } from 'react-icons/fa';

const RelatedProduct = () => {
    const dispatch = useDispatch();
    const relatedProduct = useSelector(state => state.products.electronicsData);
    const loading = useSelector(state => state.products.loading)
    const relatedProductData = relatedProduct.slice(0, 15)
    useEffect(() => {
        fetchData(dispatch);
    }, [dispatch]);

    return (
        <>
            <section>
                <hr className='my-2' />
                <section className='w-full h-auto px-[5%] relative py-[20px] flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold  text-[#333]'>Related Products</h1>
                    <div className='w-full h-[65vh] my-[40px] overflow-scroll rounded-lg shadow-xl p-2 lg:my-12 grid grid-flow-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-14 justify-between'>
                        {loading ?
                            <Loder />
                            : relatedProductData.map((item, index) => (
                                <div key={index} className='h-auto gap-2 grid relative bg-[#F4F5F7] border border-teal-50 hover:scale-90 hover:-skew-y-6 hover:rounded-2xl hover:shadow-xl hover:duration-700'>
                                    <img src={item.image} alt='not found' className='h-[250px] w-full' />

                                    <h2 className='text-lg font-bold  text-[#3A3A3A] px-3 mt-1'>
                                        <Link to='/shop'>   {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}</Link>
                                    </h2>
                                    <p className='text-md font-medium  text-[#898989] px-3 '>   {item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}</p>
                                    <div className='flex flex-wrap justify-between items-center'>
                                        <p className='flex items-center text-base font-extrabold text-[#3A3A3A] px-3 mb-2'><FaRupeeSign />&nbsp;{item.price}</p>
                                        <p className='flex items-center text-base font-extrabold text-[#3A3A3A] px-3 mb-2'><FaStar className='text-yellow-500' /> &nbsp;{item.rating.rate}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className='w-full flex justify-center'>
                        <button className='bg-transparent border border-[#B88E2F] text-[#B88E2F] font-semibold text-base py-2 px-5 hover:bg-[#B88E2F] hover:text-white hover:duration-700'>
                            <Link to='/shop'>Shop More</Link>
                        </button>
                    </div>
                </section>
            </section>
        </>
    )
}

export default RelatedProduct