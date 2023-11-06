import React from 'react'
import { FaArrowRight, FaDumpster, FaGreaterThan, FaRupeeSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Layout from '../../Reusable/Layout'
import { useDispatch, useSelector } from 'react-redux'
import Brandnav from '../../Reusable/Brandnav'
import { removeToCart } from '../../store/cartslice'

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const calculateSubtotal = (cartItems) => {
        return cartItems.reduce((accumulator, item) => accumulator + item.price, 0);
    };

    const subtotal = calculateSubtotal(cartItems);
    const total = subtotal;
    const handleRemoveItem = (item) => {
        dispatch(removeToCart(item));
        console.log(item)
    };
    return (
        <Layout>
            <section>
                <div className='bg-shop h-[330px] w-full flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-medium'>Cart</h1>
                    <ul className='flex'>
                        <li className='flex items-center gap-2'>
                            <Link to='/'><p> Home </p></Link> <FaGreaterThan />
                        </li>
                        <li className=''>
                            <p className='text-[#b88e2f] text-lg font-medium'> &nbsp; Cart </p>
                        </li>
                    </ul>
                </div>
                <section className='p-4 sm:p-[5%] flex flex-col lg:flex-row flex-wrap'>
                    <div className='w-full lg:w-2/3 h-[50vh] overflow-scroll mb-4 md:mb-0 pr-0'>
                        <div className="w-full bg-white rounded-lg p-4">
                            <div className="bg-[#F9F1E7] hidden font-semibold p-3 overflow-scroll md:flex md:text-start md:justify-center">
                                <h1 className="w-1/6 text-[#b88e2f]">&nbsp;</h1>
                                <h1 className="w-3/6 text-[#b88e2f]">Product</h1>
                                <h1 className="w-1/6 text-[#b88e2f]">Price</h1>
                                <h1 className="w-1/6 text-[#b88e2f]">Quantity</h1>
                                <h1 className="hidden md:flex w-1/6 text-[#b88e2f]">Subtotal</h1>
                                <h1 className="w-1/6 text-[#b88e2f]"></h1>
                            </div>
                            {cartItems.length > 0 ? cartItems.map((item, index) => (
                                <div className="bg-[#F9F1E7] my-5 md:bg-white flex flex-col md:flex-row md:gap-3 items-center justify-center shadow-md" key={index}>
                                    <div className="w-full md:w-1/6 flex text-center justify-center py-2 md:py-0 md">
                                        <img src={item.image} alt="Product" className="w-20 h-20 object-cover rounded-md border border-teal-50 shadow-md" />
                                    </div>
                                    <div className="w-full md:w-3/6">
                                        <p className="text-lg font-normal px-3">{item.title}</p>
                                        {/* <p className="text-sm text-gray-600">{item.description.slice(0, 20)}</p> */}
                                    </div>
                                    <div className="w-full md:w-1/6 text-center">
                                        <p className='text-[#898989]'>{item.price}</p>
                                    </div>
                                    <div className="w-full md:w-1/6 text-center">
                                        <p className='text-[#898989]'>1</p>
                                    </div>
                                    <div className="w-full hidden md:flex md:w-1/6 text-center">
                                        <p className='text-[#898989]'>{item.price}</p>
                                    </div>
                                    <div className="w-full md:w-1/6 text-center">
                                        <button> <FaDumpster onClick={() => handleRemoveItem(item)} /></button>
                                    </div>
                                </div>
                            )) : <p className='text-center m-24'>You do not have any items in the cart.</p>}
                        </div>
                    </div>
                    <hr />
                    <div className='w-full md:w-1/3 flex flex-col pl-0 my-8 lg:my-0 p-4'>
                        <h1 className='bg-[#F9F1E7] text-[#b88e2f] md:mx-3 p-3 w-full text-xl md:text-2xl m-4 md:m-0 items-center'>Cart Totals</h1>
                        <div className='flex flex-col justify-center items-center p-6 md:mx-3'>

                            <div className='flex justify-between items-center gap-5'>
                                <h1 className='text-lg font-semibold'>Subtotal&nbsp;:</h1>
                                <p className='flex gap-2 text-[#898989]'><FaRupeeSign /> {subtotal.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-between items-center gap-5'>
                                <h1 className='text-lg font-semibold'>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</h1>
                                <p className='flex gap-2 text-[#898989]'><FaRupeeSign /> {total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-full'>
                        <Link to='/shop'>
                            <button className='p-4 font-sans text-xl fon-bold flex items-center gap-3 hover:underline'>
                                Go To Shop <FaArrowRight className='text-blue-500' />
                            </button>
                        </Link>
                    </div>
                </section>
            </section>
            <Brandnav />
        </Layout>
    )
}

export default Cart