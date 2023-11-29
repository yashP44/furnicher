import React, { useEffect, useState } from 'react'
import Layout from '../../Reusable/Layout'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FaGreaterThan, FaHSquare, FaJsSquare, FaSlidersH, FaSquare, FaSquareFull, FaSquarespace, FaStreetView } from 'react-icons/fa'
import ShopProduct from './ShopProduct'
import Brandnav from '../../Reusable/Brandnav'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setProducts } from '../../store/productslice'
import { fetchData } from '../apiService'
const Shop = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const electronicsData = useSelector(state => state.products.electronicsData);
    useEffect(() => {
        fetchData(dispatch);
    }, [dispatch]);

    useEffect(() => {
        if (selectedCategory === '') {
            setFilteredData(electronicsData);
        } else {
            const filtered = electronicsData.filter(item => item.category === selectedCategory);
            setFilteredData(filtered);
            // console.log(filtered)
        }
    }, [selectedCategory, electronicsData]);


    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const navigationIcons = [
        <FaSlidersH className='text-xl' />,
        <FaHSquare className='text-xl' />,
        <FaStreetView className='text-xl' />
    ];
    return (
        <Layout>
            <section>
                <div className='bg-shop h-[330px] w-full flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-medium'>Shop</h1>
                    <ul className='flex'>
                        <li className='flex items-center gap-2'>
                            <Link to='/'><p> Home </p></Link> <FaGreaterThan />
                        </li>
                        <li className=''>
                            <p className='text-[#b88e2f] text-lg font-medium'> &nbsp; Shop </p>
                        </li>
                    </ul>
                </div>
                <div className="px-[5%] w-full md:h-[100px] bg-[#F9F1E7] flex flex-wrap justify-center items-center space-y-5 py-5 md:space-y-0 md:py-0 md:flex-row md:items-center md:gap-5 md:flex-wrap">
                    {/* <div className='flex gap-5'>
                        {navigationIcons.map((icon, index) => (
                            <div key={index}>{icon}</div>
                        ))}
                        </div> */}
                    <div className='flex gap-5 text-right mr-0'>
                        <div className='flex items-center'>
                            <span className='text-xs md:text-[18px]'>Showing&nbsp;&nbsp;</span><p className='bg-white px-5 py-3  text-[#666]'>{filteredData.length}</p>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-xs     md:text-[18px]'>Category&nbsp;&nbsp;</span>
                            <select id="sortBy"
                                className='px-5 py-3 text-[#666] outline-none'
                                onChange={handleCategoryChange}
                                value={selectedCategory} >
                                <option value="">All</option>
                                <option value="electronics">Electronics</option>
                                <option value="jewelery">Jewelery</option>
                                <option value="men's clothing">Men's clothing</option>
                                <option value="women's clothing">Women's clothing</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <ShopProduct electronicsData={electronicsData} filteredData={filteredData}
            />
            <Brandnav />
        </Layout >
    )
}
export default Shop
