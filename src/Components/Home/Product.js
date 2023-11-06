import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loder from '../../Reusable/Loder'
import { fetchData } from '../apiService'

const Product = () => {
    const dispatch = useDispatch();
    const range = useSelector(state => state.products.electronicsData);
    const loading = useSelector(state => state.products.loading)
    const rangeData = range.slice(0, 20)
    useEffect(() => {
        fetchData(dispatch);
    }, [dispatch]);
    return (
        <>
            <section className='px-[5%] w-full h-[100vh] relative py-[20px] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold  text-[#333]'>Our Products</h1>
                <div className='w-full my-[40px] overflow-scroll lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-14 justify-between'>
                    {loading ?
                        <Loder />
                        :
                        rangeData.map((item, index) => (
                            <div
                                key={item.id}
                                className="gap-2 grid relative bg-[#F4F5F7] shadow-md p-4 transition-transform transform hover:rotate-3"
                            >
                                <img src={item.image} alt="not found" className="w-full h-[250px]" />
                                <p className={`h-14 w-14 rounded-full text-white flex items-center justify-center absolute top-8 right-8`}>
                                    {item.discount}
                                </p>
                                <h1 className="text-xl font-bold  text-[#3A3A3A] px-3 mt-2 cursor-pointer">
                                    <Link to='/shop'>{item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}</Link>
                                </h1>
                                <p className="text-md font-light  text-[#898989] px-3">
                                    {item.description.length > 80 ? `${item.description.substring(0, 40)}...` : item.description}
                                </p>
                                {/* <p className="text-base font-extrabold  text-[#3A3A3A] px-3 mb-2">
                                {item.price}
                            </p> */}
                            </div>
                        ))}
                </div>
                <div className='w-full flex justify-center'>
                    <button className='bg-transparent border border-[#B88E2F] text-[#B88E2F] font-semibold text-base py-2 px-5 hover:bg-[#B88E2F] hover:text-white hover:duration-700'>
                        <Link to='/shop'>Shop More</Link>
                    </button>
                </div>
            </section >
        </>
    )
}
export default Product

