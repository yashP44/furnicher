import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Reusable/Layout'
import { FaGreaterThan, FaStar } from 'react-icons/fa'
import range1 from '../../images/range1.png'
import r1 from '../../images/r1.png'
import r2 from '../../images/r2.png'
import r3 from '../../images/r3.png'
import r4 from '../../images/r4.png'
const data = [
    {
        title: 'Description',
        content:
            'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.',
    },
    {
        title: 'Additional Information',
        content:
            'Additional Information: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod quam eget tincidunt. Donec sagittis vitae nisi id hendrerit. Sed at arcu eget tortor suscipit consectetur. In hac habitasse platea dictumst. Nullam posuere metus ac massa tincidunt, vel mattis justo scelerisque. Nulla facilisi.',
    },
    {
        title: 'Reviews [5]',
        content:
            'Reviews: Here are some sample reviews for the product. Review 1: Great product! I love it. Review 2: Not bad, but could be better. Review 3: Excellent sound quality. Review 4: Worth the price. Review 5: I expected more from this speaker.',
    },
];
const ProductDetails = () => {
    const relatedData = [
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
    ];
    const [activeTab, setActiveTab] = useState(data[0]);
    const product = {
        name: 'Slytherine Chair',
        description: 'Stylish code chair for your workspace. Ergonomic design with breathable fabric and adjustable armrests.',
        price: 'Rp 500,000',
        rating: 4.5,
        features: [
            'Ergonomic design',
            'Breathable fabric',
            'Adjustable armrests',
            'Sturdy construction',
        ],
    };
    useEffect(() => {
        setActiveTab(data[0]);
    }, []);
    return (
        <Layout>
            <section className='bg-[#F9F1E7] p-5 px-[5%]'>
                <div className='flex gap-5 items-center'>
                    <p className='text-[#9f9f9f]'><Link to='/'>Home</Link></p><FaGreaterThan /><p className='text-[#9f9f9f]'><Link to='/shop'>Shop</Link></p> <FaGreaterThan /> <span className='mx-2 text-2xl text-[#9f9f9f]'>|</span>
                    <p className='text-base'>Syltherine</p>
                </div>
            </section>
            <div className=" px-[5%] container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex gap-10 lg:items-center md:col-span-1 lg:col-span-2">
                        <div className='hidden lg:flex flex-col gap-5'>
                            <img src={range1} alt='not' className='h-20 w-28 rounded-xl' />
                            <img src={range1} alt='not' className='h-20 w-28 rounded-xl' />
                            <img src={range1} alt='not' className='h-20 w-28 rounded-xl' />
                            <img src={range1} alt='not' className='h-20 w-28 rounded-xl' />
                            <img src={range1} alt='not' className='h-20 w-28 rounded-xl' />
                        </div>
                        <img src={range1} alt={product.name} className="max-w-full rounded-xl shadow-lg" />
                    </div>
                    <div className="md:col-span-1 lg:col-span-1 p-4">
                        <h2 className="text-3xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                        <p className="text-2xl text-blue-500 font-semibold mb-4">{product.price}</p>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 text-2xl mr-2 flex">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />&nbsp;&nbsp;&nbsp;&nbsp;{product.rating}</span>
                            <span className="text-gray-600">Rating</span>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Key Features:</h3>
                            <ul className="list-disc pl-6 text-gray-600">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Product Details:</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia libero non urna vulputate, eu sagittis sapien dapibus.
                            </p>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Add to Cart</button>
                    </div>
                </div>
                <div className='my-8'>
                    <div className='w-full md:px-[15%] md:flex justify-center md:gap-8 lg:gap-20'>
                        {data.map((item, index) => (
                            <h1
                                key={index}
                                className={`${activeTab === item ? 'active-title' : ''} w-fit md:my-2`}
                                onClick={() => setActiveTab(item)}
                            >
                                {item.title}
                            </h1>
                        ))}
                    </div>
                    <div className='w-full md:px-[10%] md:flex items-center justify-center'>
                        <p className='h-[150px] overflow-y-scroll text-sm my-5 text-[#9f9f9f]'>{activeTab.content}</p>
                    </div>
                </div>
            </div>
            <section>
                <hr className='my-2' />
                <section className='w-full h-auto px-[5%] relative py-[20px] flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-bold  text-[#333]'>Related Products</h1>
                    <div className='w-full h-[70vh] my-[40px] overflow-scroll lg:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-14 justify-between'>
                        {relatedData.map((item, index) => (
                            <div key={index} className='h-[400px] gap-2 grid relative bg-[#F4F5F7] hover:scale-90 hover:-skew-y-6 hover:rounded-2xl hover:shadow-xl hover:duration-700'>
                                <img src={item.imageSrc} alt='not found' className='h-[250px] w-full' />
                                <p className={`h-14 w-14 rounded-full text-white flex items-center justify-center absolute top-8 right-8 ${item.bgColorClass}`}>{item.discount}</p>
                                <h2 className='text-lg font-bold  text-[#3A3A3A] px-3 mt-1'>
                                    <Link to='/shop/productdetails'>{item.title}</Link>
                                </h2>
                                <p className='text-md font-medium  text-[#898989] px-3 '>{item.description}</p>
                                <p className='text-base font-extrabold  text-[#3A3A3A] px-3 mb-2'>{item.price}</p>
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
        </Layout>
    )
}

export default ProductDetails