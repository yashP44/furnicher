import React from 'react'
import Layout from '../../Reusable/Layout'
import { FaCalendar, FaGreaterThan, FaTag, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BlogDetail from './BlogDetail'
import Brandnav from '../../Reusable/Brandnav'
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
                <Brandnav />
            </section>
        </Layout>
    )
}

export default Blog