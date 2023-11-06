import React from 'react'
import Hero from './Hero'
import Range from './Range'
import Product from './Product'
import Slider from './Slider'
import Layout from '../../Reusable/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../store/productslice'
import Gridimg from './Gridimg'
const Home = () => {

    return (
        <Layout>
            <Hero />
            <Range />
            <Product />
            <Slider />
        </Layout>
    )
}
export default Home