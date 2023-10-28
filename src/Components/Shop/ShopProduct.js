import React, { useEffect, useState } from 'react'
import r1 from '../../images/r1.png'
import r2 from '../../images/r2.png'
import r3 from '../../images/r3.png'
import r4 from '../../images/r4.png'
import { Link } from 'react-router-dom'
import { FaRupeeSign } from 'react-icons/fa'


const ShopProduct = () => {
    const furnitureData = [
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
        {
            imageSrc: r1,
            discount: '-25%',
            title: 'Modern Glass Side Table',
            description: 'Elegant glass side table with a metal base',
            price: 'Rp 800,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r1,
            discount: '-30%',
            title: 'Mid-Century Rocking Chair',
            description: 'Stylish mid-century rocking chair for relaxation',
            price: 'Rp 1,600,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r3,
            discount: '-15%',
            title: 'Classic Wooden Desk',
            description: 'Traditional wooden desk with multiple drawers',
            price: 'Rp 1,400,000',
            bgColorClass: 'bg-sky-500',
        },
        {
            imageSrc: r4,
            discount: '-20%',
            title: 'Velvet Loveseat',
            description: 'Comfortable velvet loveseat for two',
            price: 'Rp 2,200,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r4,
            discount: '-10%',
            title: 'Modern Wall Shelf',
            description: 'Minimalist wall shelf for storage and display',
            price: 'Rp 900,000',
            bgColorClass: 'bg-green-500',
        },
        {
            imageSrc: r3,
            discount: '-25%',
            title: 'Industrial Coffee Table',
            description: 'Industrial-style coffee table with storage',
            price: 'Rp 1,700,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r2,
            discount: '-15%',
            title: 'Ergonomic Office Desk Chair',
            description: 'Ergonomic desk chair with adjustable features',
            price: 'Rp 1,100,000',
            bgColorClass: 'bg-sky-500',
        },
        {
            imageSrc: r1,
            discount: '-20%',
            title: 'Rustic Bedside Cabinet',
            description: 'Handcrafted rustic bedside cabinet with drawer',
            price: 'Rp 1,300,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r1,
            discount: '-10%',
            title: 'Luxury Dining Set',
            description: 'Luxury dining table and chairs set with marble top',
            price: 'Rp 5,000,000',
            bgColorClass: 'bg-green-500',
        },
        {
            imageSrc: r2,
            discount: '-30%',
            title: 'Sleek TV Stand',
            description: 'Sleek TV stand with open shelves and cable management',
            price: 'Rp 1,300,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r3,
            discount: '-25%',
            title: 'Contemporary Wardrobe',
            description: 'Contemporary wardrobe with mirrored doors',
            price: 'Rp 3,200,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r4,
            discount: '-15%',
            title: 'Chic Bar Cart',
            description: 'Chic bar cart for serving drinks in style',
            price: 'Rp 700,000',
            bgColorClass: 'bg-sky-500',
        },
        {
            imageSrc: r1,
            discount: '-20%',
            title: 'Rattan Outdoor Lounge Set',
            description: 'Rattan outdoor lounge set for outdoor comfort',
            price: 'Rp 3,500,000',
            bgColorClass: 'bg-red-400',
        },
        {
            imageSrc: r2,
            discount: '-10%',
            title: 'Traditional Canopy Bed',
            description: 'Elegant canopy bed for a royal sleep experience',
            price: 'Rp 4,800,000',
            bgColorClass: 'bg-green-500',
        },
        {
            imageSrc: r3,
            discount: '-20%',
            title: 'Modern Reclining Sectional',
            description: 'Spacious modern reclining sectional sofa',
            price: 'Rp 4,000,000',
            bgColorClass: 'bg-red-400',
        },
    ];
    const [electronicsData, setElectronicsData] = useState([]);

    useEffect(() => {
        fetch(' https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    const limitedData = data.slice(0, 40);
                    setElectronicsData(limitedData);
                    console.log(limitedData);
                } else {
                    console.error('Data received is not an array');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <section className='px-[5%]'>
            <div className='w-full h-[100vh] my-[40px] overflow-y-scroll lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-14 justify-between'>
                {/* {furnitureData.map((item, index) => (
                    <div key={index} className='h-[450px] gap-2 grid relative bg-[#F4F5F7] hover:scale-90 hover:-skew-y-6 hover:rounded-2xl hover:shadow-xl hover:duration-700'>
                        <img src={item.imageSrc} height='300px' alt='not found' className='' />
                        <p className={`h-14 w-14 rounded-full text-white flex items-center justify-center absolute top-8 right-8 ${item.bgColorClass}`}>{item.discount}</p>
                        <h2 className='text-xl font-bold  text-[#3A3A3A] px-3 mt-2'>
                            <Link to='/shop/productdetails'>{item.title}</Link>
                        </h2>
                        <p className='text-md font-bold  text-[#898989] px-3 '>{item.description}</p>
                        <p className='text-base font-extrabold  text-[#3A3A3A] px-3 mb-2'>{item.price}</p>
                    </div>
                ))} */}
                {electronicsData.map((item, index) => (
                    <div key={index} className='md:h-auto gap-2 grid relative bg-[#F4F5F7] hover:scale-90 hover:-skew-y-6 hover:rounded-2xl hover:shadow-xl hover:duration-700'>
                        <img src={item.images} height='300px' alt='Product' className='' />
                        <h2 className='text-lg font-semibold text-[#3A3A3A] px-3 mt-2'>
                            <Link to={`/shop/productdetails/${item.id}`}>
                                {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                            </Link>
                        </h2>
                        <p className='text-md font-thin text-[#898989] px-3 '>
                            {item.description.length > 80 ? `${item.description.substring(0, 80)}...` : item.description}
                        </p>
                        <p className='flex items-center text-base font-extrabold text-[#3A3A3A] px-3 mb-2'><FaRupeeSign />&nbsp;{item.price}</p>
                    </div>
                ))}
            </div>
            <section className='w-full flex flex-wrap gap-8 justify-center items-center  md:space-x-10 md:gap-0'>
                <span className='bg-[#B88E2F] p-8 rounded-lg text-white'>1</span>
                <span className='bg-[#F9F1E7] p-8 rounded-lg text-black'>2</span>
                <span className='bg-[#F9F1E7] p-8 rounded-lg text-black'>3</span>
                <span className='bg-[#F9F1E7] p-8 rounded-lg text-black'>Next</span>
            </section>
        </section>
    )
}

export default ShopProduct