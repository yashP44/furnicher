import React from 'react'
import { FaCalendar, FaGreaterThan, FaSearch, FaTag, FaUser } from 'react-icons/fa'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
const BlogDetail = () => {

    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    return (
        <>
            <section className='w-full lg:flex px-[5%] my-[5%]'>
                <section className='lg:w-2/3 my-5 lg:my-0 overflow-y-scroll'>
                    <div className='w-full'>
                        <img src={blog1} alt='not found' />
                        <div className='flex flex-row items-center gap-14  my-5'>
                            <span className='inline-flex items-center text-[#9F9F9F]' style={{ marginTop: '0px' }}><FaUser /> &nbsp;Admin </span>
                            <span className='inline-flex items-center text-[#9F9F9F]' style={{ marginTop: '0px' }}><FaCalendar /> &nbsp;14 Oct 2022 </span>
                            <span className='inline-flex items-center text-[#9F9F9F]' style={{ marginTop: '0px' }}><FaTag /> &nbsp;Wood </span>
                        </div>
                        <h1 className='text-3xl'>Going all-in with millennial design</h1>
                        <p className='text-base text-[#9f9f9f] my-5'>{lorem}</p>
                    </div>
                </section>
                <div className='lg:w-1/3'>
                    <div className="px-[5%] h-1/2 my-5 lg:my-0">
                        <input type='search' placeholder='Search Here ....' className='w-full border-[#9f9f9f] border-2 rounded-lg py-3 px-2' />
                        <div className='px-[10%]  flex flex-col'>
                            <h1 className='my-5 text-xl'>Categories</h1>
                            <div className='w-full px-2 flex flex-col justify-center space-y-5'>
                                <span className='w-full inline-flex justify-between'><p className='text-base text-[#9f9f9f]'>Crafts</p><p className='text-base text-[#9f9f9f]'>9</p></span>
                                <span className='w-full inline-flex justify-between'><p className='text-base text-[#9f9f9f]'>Design</p><p className='text-base text-[#9f9f9f]'>5</p></span>
                                <span className='w-full inline-flex justify-between'><p className='text-base text-[#9f9f9f]'>Handmade</p><p className='text-base text-[#9f9f9f]'>8</p></span>
                                <span className='w-full inline-flex justify-between'><p className='text-base text-[#9f9f9f]'>Interior</p><p className='text-base text-[#9f9f9f]'>4</p></span>
                                <span className='w-full inline-flex justify-between'><p className='text-base text-[#9f9f9f]'>Wood</p><p className='text-base text-[#9f9f9f]'>7</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="px-[15%] h-1/2 overflow-hidden my-5 lg:py-2 lg:my-0">
                        <h1 className='text-xl my-3'>Recent Post</h1>
                        <div className='h-[300px] lg:h-auto flex flex-col gap-2 overflow-y-scroll'>
                            <div className='flex gap-2'>
                                <img src={blog1} alt='not' className='w-16 h-16 rounded-lg' />
                                <span>
                                    <p className='text-sm font-normal '>Going all-in with millennial design</p>
                                    <p className='text-[#9f9f9f] text-xs'>03 Aug 2022</p>
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <img src={blog2} alt='not' className='w-16 h-16 rounded-lg' />
                                <span>
                                    <p className='text-sm font-normal '>Going all-in with millennial design</p>
                                    <p className='text-[#9f9f9f] text-xs'>03 Aug 2022</p>
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <img src={blog1} alt='not' className='w-16 h-16 rounded-lg' />
                                <span>
                                    <p className='text-sm font-normal '>Going all-in with millennial design</p>
                                    <p className='text-[#9f9f9f] text-xs'>03 Aug 2022</p>
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <img src={blog2} alt='not' className='w-16 h-16 rounded-lg' />
                                <span>
                                    <p className='text-sm font-normal '>Going all-in with millennial design</p>
                                    <p className='text-[#9f9f9f] text-xs'>03 Aug 2022</p>
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <img src={blog1} alt='not' className='w-16 h-16 rounded-lg' />
                                <span>
                                    <p className='text-sm font-normal '>Going all-in with millennial design</p>
                                    <p className='text-[#9f9f9f] text-xs'>03 Aug 2022</p>
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <img src={blog2} alt='not' className='w-16 h-16 rounded-lg' />
                                <span>
                                    <p className='text-sm font-normal '>Going all-in with millennial design</p>
                                    <p className='text-[#9f9f9f] text-xs'>03 Aug 2022</p>
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default BlogDetail



