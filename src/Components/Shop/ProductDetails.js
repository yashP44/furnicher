import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../Reusable/Layout';
import { FaGreaterThan, FaRupeeSign, FaStar } from 'react-icons/fa';
import RelatedProduct from './RelatedProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartslice';
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
    const { id } = useParams();

    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(data[0]);
    const electronicsData = useSelector(state => state.products.electronicsData);
    const product = electronicsData.find(item => item.id === parseInt(id));
    const loading = useSelector(state => state.products.loading)
    useEffect(() => {
        setActiveTab(data[0]);
    }, []);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    console.log(product)
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
                    <div className="flex gap-10 items-center md:col-span-1 lg:col-span-2">
                        <img src={product?.image} alt='produt' className="w-full h-full md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[600px] rounded-xl shadow-lg" />
                    </div>
                    <div className="md:col-span-1 lg:col-span-1 p-4">
                        <h2 className="text-xl font-semibold">{product?.title}</h2>
                        <p className="text-gray-600 text-lg mb-4">{product?.description}</p>
                        <p className="text-2xl text-blue-500 font-semibold mb-4 flex items-center gap-2"><FaRupeeSign />{product?.price}</p>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 text-2xl mr-2 flex">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />&nbsp;&nbsp;&nbsp;&nbsp;{product?.rating?.rate}</span>
                            <span className="text-gray-600">Rating</span>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Key Features:</h3>
                            <ul className="list-disc pl-6 text-gray-600">
                                <li>Ergonomic design</li>
                                <li>Breathable fabric</li>
                                <li>Adjustable armrests</li>
                                <li>Sturdy construction</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold">Product Details:</h3>
                            <p className="text-gray-600">
                                {product?.description}
                            </p>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700" onClick={() => handleAddToCart(product)}>
                            <Link to='/cart'>Add to Cart</Link>
                        </button>
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
            <RelatedProduct />
        </Layout>
    )
}

export default ProductDetails
