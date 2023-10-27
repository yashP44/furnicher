import React from 'react'
import Layout from '../../Reusable/Layout'
import { FaCalendar, FaGreaterThan, FaTag, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import F1 from '../../images/F1.png'
import F2 from '../../images/F2.png'
import F3 from '../../images/F3.png'
import F4 from '../../images/F4.png'
import BlogDetail from './BlogDetail'
const Blog = () => {

    return (
        <Layout>
            <section>
                <div className='px-[5%] bg-shop h-[330px] w-full flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-medium'>Blog</h1>
                    <ul className='flex'>
                        <li className='flex items-center gap-2'>
                            <Link to='/'><p> Home </p></Link> <FaGreaterThan />
                        </li>
                        <li className=''>
                            <p className='text-[#b88e2f] text-lg font-medium'> &nbsp; Blog </p>
                        </li>
                    </ul>
                </div>
                <BlogDetail />
                <section className='px-[5%] bg-[#FAF3EA] w-full mt-5 py-10 md:py-16 text-center flex flex-wrap lg:flex-row gap-10 md:shadow-lg'>
                    <div className=''>
                        <img src={F1} alt='not found' />
                    </div>
                    <div className=''>
                        <img src={F2} alt='not found' />
                    </div>
                    <div className=''>
                        <img src={F3} alt='not found' />
                    </div>
                    <div className=''>
                        <img src={F4} alt='not found' />
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default Blog