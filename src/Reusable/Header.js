import React, { useState } from 'react'
import logo from '../images/logo.png'
import { FaUserPlus, FaSearch, FaHeart, FaShoppingCart, FaHamburger, FaHammer, FaCross, FaSlidersH, FaMixer } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const [open, setOpen] = useState(true)
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const items = useSelector(state => state.cart.items)
    return (
        <>
            <section className='w-full bg-[#FAF3EA] z-10'>
                <nav className='w-full flex flex-col justify-around lg:h-[100px] lg:flex lg:flex-row lg:items-center lg:justify-between px-[5%]'>
                    <div className='inline-flex relative gap-3 my-14 md:mt-[50px] lg:my-0'>
                        <Link to='/' className='flex gap-3'>
                            <img src={logo} alt='not found' />
                            <span className='font-bold text-4xl '>ShopCart
                            </span>
                        </Link>
                        <button onClick={() => setOpen(!open)} className='absolute lg:hidden w-[30px] text-2xl h-full flex items-center right-0 transition-transform transform duration-500 hover:rotate-180'>
                            {open ?
                                <FaSlidersH /> :
                                <FaMixer />}
                        </button>
                    </div>
                    <hr className={`${!open ? 'flex' : 'hidden'} h-2 w-full text-[#e5e7eb] my-2 lg:hidden`} />
                    <ul className={`${!open ? 'flex ' : 'hidden '} items-center flex-col gap-16 px-5 my-10 lg:my-0 lg:p-0 lg:flex lg:flex-row lg:gap-10`}>
                        <li>
                            <Link className={splitLocation[1] === "" ? "text-[#B88E2F] text-[18px]  duration-500 text-base  font-light cursor-pointer " : ""}
                                to='/'> Home</Link>
                        </li>
                        <li>
                            <Link className={splitLocation[1] === "shop" ? "text-[#B88E2F] text-[18px] duration-500 text-base  font-light cursor-pointer" : ""}
                                to='/shop'>Shop</Link>
                        </li>
                        <li >
                            <Link className={` ${splitLocation[1] === "contact" ? "text-[#B88E2F] text-[18px] font-light duration-500 text-base  cursor-pointer" : ""}</ul>`} to='/contact'>Contact</Link>
                        </li>
                        <li >
                            <Link className={` ${splitLocation[1] === "blog" ? "text-[#B88E2F] text-[18px] font-light duration-500 text-base  cursor-pointer" : ""}</ul>`}
                                to='/blog' >Blog</Link>
                        </li>
                    </ul>
                    <hr className={`${!open ? 'flex' : 'hidden'} h-2 w-full text-[#e5e7eb] my-2 lg:hidden`} />
                    <div className={`${!open ? 'flex' : 'hidden'} my-10 items-center space-x-12 justify-center p-5 lg:space-x-0 lg:p-0 lg:flex lg:gap-10 lg:my-0`}>

                        <span>
                            <Link to='/cart'>
                                <FaShoppingCart className='text-3xl lg:text-2xl hover:text-[#b88e2f] hover:duration-700 hover:border-b-2 hover:border-[b88e2f]' />
                            </Link>
                        </span>
                        <span className='bg-[#FCF8F3] p-3 rounded-full'>{items.length}</span>

                    </div>
                </nav>
            </section >
        </>
    )
}

export default Header
