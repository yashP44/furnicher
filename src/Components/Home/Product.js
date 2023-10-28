import React from 'react'
import r1 from '../../images/r1.png'
import r2 from '../../images/r2.png'
import r3 from '../../images/r3.png'
import r4 from '../../images/r4.png'
import { Link } from 'react-router-dom'

const Product = () => {
    const fakeFurnitureData = [
        {
            imageSrc: r1,
            discount: '-20%',
            title: 'Elegant Leather Sofa',
            description: 'Premium leather sofa with recliner',
            price: 'Rp 3,500,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r2,
            discount: '-15%',
            title: 'Modern Glass Coffee Table',
            description: 'Stylish glass coffee table with metal frame',
            price: 'Rp 1,200,000',
            bgColorClass: 'bg-sky-500',
        },
        {
            imageSrc: r3,
            discount: '-25%',
            title: 'Antique Oak Dining Table',
            description: 'Solid oak dining table with ornate carvings',
            price: 'Rp 2,800,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r4,
            discount: '-10%',
            title: 'Luxury Velvet Armchair',
            description: 'Plush velvet armchair with tufted design',
            price: 'Rp 1,800,000',
            bgColorClass: 'bg-green-500',
        },
        {
            imageSrc: r4,
            discount: '-30%',
            title: 'Vintage Bookshelf',
            description: 'Retro bookshelf with multiple shelves',
            price: 'Rp 1,500,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r3,
            discount: '-15%',
            title: 'Mid-Century Desk',
            description: 'Sleek mid-century modern desk with storage',
            price: 'Rp 1,900,000',
            bgColorClass: 'bg-sky-500',
        },
        {
            imageSrc: r2,
            discount: '-20%',
            title: 'Contemporary Lounge Chair',
            description: 'Comfortable lounge chair for relaxation',
            price: 'Rp 2,000,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r1,
            discount: '-10%',
            title: 'Rustic Sideboard Cabinet',
            description: 'Handcrafted wooden sideboard with storage',
            price: 'Rp 2,500,000',
            bgColorClass: 'bg-green-500',
        },
        {
            imageSrc: r1,
            discount: '-25%',
            title: 'Designer Glass Dining Set',
            description: 'Glass dining table and chairs set',
            price: 'Rp 4,000,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r2,
            discount: '-15%',
            title: 'Minimalist Office Chair',
            description: 'Ergonomic office chair with adjustable features',
            price: 'Rp 800,000',
            bgColorClass: 'bg-sky-500',
        },
        {
            imageSrc: r3,
            discount: '-30%',
            title: 'Queen Size Bed Frame',
            description: 'Sturdy bed frame for a restful sleep',
            price: 'Rp 2,600,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r4,
            discount: '-20%',
            title: 'Industrial Bar Stool',
            description: 'Metal bar stool with a distressed finish',
            price: 'Rp 600,000',
            bgColorClass: 'bg-green-500',
        },
        {
            imageSrc: r4,
            discount: '-10%',
            title: 'Classic Reclining Chair',
            description: 'Traditional reclining chair with upholstery',
            price: 'Rp 1,500,000',
            bgColorClass: 'bg-green-500',
        },
        {
            imageSrc: r2,
            discount: '-15%',
            title: 'Outdoor Patio Set',
            description: 'Patio furniture set for outdoor relaxation',
            price: 'Rp 3,200,000',
            bgColorClass: 'bg-sky-500',
        },
        {
            imageSrc: r1,
            discount: '-25%',
            title: 'Chic Bedside Table',
            description: 'Bedside table with a modern and chic design',
            price: 'Rp 900,000',
            bgColorClass: 'bg-red-400',
        },
    ];

    return (
        <>
            <section className='px-[5%] w-full h-[100vh] relative py-[20px] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold  text-[#333]'>Our Products</h1>
                <div className='w-full my-[40px] overflow-scroll lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-14 justify-between'>
                    {fakeFurnitureData.map((item, index) => (
                        <div
                            key={index}
                            className="gap-2 grid relative bg-[#F4F5F7] hover:scale-90 hover:-skew-y-6 hover:rounded-2xl hover:shadow-xl hover:duration-700"
                        >
                            <img src={item.imageSrc} height="300px" alt="not found" className="w-full" />
                            <p className={`h-14 w-14 rounded-full text-white flex items-center justify-center absolute top-8 right-8 ${item.bgColorClass}`}>
                                {item.discount}
                            </p>
                            <h2 className="text-xl font-bold  text-[#3A3A3A] px-3 mt-2 cursor-pointer">
                                <Link to='/shop'>{item.title}</Link>
                            </h2>
                            <p className="text-md font-light  text-[#898989] px-3">
                                {item.description}
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

