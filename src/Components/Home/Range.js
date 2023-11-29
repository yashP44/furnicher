import React from 'react'
import man from '../../images/man.jpg'
import woman from '../../images/woman.jpeg'
import jewellary from '../../images/jewellary.jpg'
import tv from '../../images/tv.jpg'
import { Link } from 'react-router-dom'

const Range = () => {
    const categories = [
        {
            name: 'Electronics',
            n: 'electronics',
            image: tv, // Replace 'man' with your image variable
        },
        {
            name: 'Jewelry',
            n: 'jewelery',
            image: jewellary, // Replace 'woman' with your image variable
        },
        {
            n: 'mens clothing',
            name: "men's clothing",
            image: man, // Replace 'jewellary' with your image variable
        },
        {
            n: 'women s clothing',
            name: "women's clothing",
            image: woman, // Replace 'tv' with your image variable
        },
    ];
    return (
        <>
            <section className='px-[5%] w-full h-[90vh] md:h-[80vh] relative pt-6 md:pt-0 flex flex-col justify-center items-center border border-b md:border-0'>
                <h1 className='text-3xl font-bold  text-[#333]'>Browse The Range</h1>
                <p className='px-[2%] lg:px-0 text-base font-medium  text-[#666]'>Dive into a world of endless possibilities! Explore our curated collection.</p>
                <div className='mt-[40px] mb-5 md:mb-0 overflow-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center'>
                    {categories.map((category, index) => (
                        <div key={index} className='border border-teal-50 rounded-lg gap-2 grid hover:duration-700 hover:scale-95 cursor-pointer'>
                            <Link to={`/shop`} >
                                <img src={category.image} alt='not found' className='h-[250px] w-[250px] md:h-[300px] md:w-[280px] rounded-2xl' />
                                <p className='text-base font-normal text-[#333] text-center mt-1'>{category.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Range