import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import i1 from '../../images/woman.jpeg';
import i3 from '../../images/tv.jpg';
import i2 from '../../images/i2.png';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <>
            <section className='md:h-[80vh] bg-[#FCF8F3] py-8 md:py-12 lg:py-20 md:px-8 lg:px-12'>
                <div className='md:flex px-5'>
                    <div className='w-full md:w-1/2 md:pr-4 lg:pr-8'>
                        <Carousel autoPlay infiniteLoop showThumbs={false} >
                            <div className='h-96 md:h-[430px]'>
                                <img src={i1} alt="Image 1" className='w-full h-full' />
                            </div>
                            <div className='h-96 md:h-[430px]'>
                                <img src={i2} alt="Image 2" className='w-full h-full' />
                            </div>
                            <div className='h-96 md:h-[430px]'>
                                <img src={i3} alt="Image 3" className='w-full h-full' />
                            </div>
                            {/* Add more images as needed */}
                        </Carousel>
                    </div>
                    <div className='w-full md:w-1/2 mt-4 md:mt-0 md:pl-16'>
                        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-[#3A3A3A] mb-4'>
                            Explore, Discover, Elevate
                        </h1>
                        <p className='text-base md:text-lg text-[#666] mb-4'>
                            Explore deals on top categories like Electronics, Fashion & more on Amazon today! Amazon offers an array of unique products from hundreds of brands. Best Deals. Huge Selection. Great Offers. Easy & Fast Delivery. Top Brands. Low Prices.
                        </p>
                        <p className='text-base md:text-lg text-[#666] mb-4'>
                            Slide into Style: Explore our diverse range of products, from fashion essentials to tech innovations – your one-stop destination for exceptional quality and endless choices!
                        </p>
                        <p className='text-base md:text-lg text-[#666] mb-4'>
                            Dynamic Discoveries Await: Glide Through Our Exclusive Collections
                        </p>
                        <Link to='/shop'>
                            <button className='bg-[#B88E2F] hover:bg-[#9a7f42] duration-700 w-32 md:w-44 text-white text-sm md:text-base py-2'>
                                Explore More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;
