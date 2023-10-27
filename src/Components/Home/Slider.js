import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import i1 from '../../images/i1.png';
import i3 from '../../images/i3.png';
import i2 from '../../images/i2.png';

const Slider = () => {
    return (
        <>
            <section className=' bg-[#FCF8F3] py-8 md:py-12 lg:py-20 md:px-8 lg:px-12'>
                <div className='md:flex px-5'>
                    <div className='w-full md:w-1/2 md:pr-4 lg:pr-8'>
                        <Carousel autoPlay infiniteLoop dynamicHeight={true}>
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
                    <div className='w-full md:w-1/2 mt-4 md:mt-0'>
                        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-[#3A3A3A] mb-4'>
                            50+ Beautiful rooms inspiration
                        </h1>
                        <p className='text-base md:text-lg text-[#666] mb-4'>
                            Our designers have already created a lot of beautiful prototypes of rooms that will inspire you.
                        </p>
                        <p className='text-base md:text-lg text-[#666] mb-4'>
                            Our designers have already created a lot of beautiful prototypes of rooms that will inspire you.
                        </p>
                        <p className='text-base md:text-lg text-[#666] mb-4'>
                            Our designers have already created a lot of beautiful prototypes of rooms that will inspire you.
                        </p>
                        <p className='text-base md:text-lg text-[#666] mb-4'>
                            Our designers have already created a lot of beautiful prototypes of rooms that will inspire you.
                        </p>
                        <button className='bg-[#B88E2F] hover:bg-[#9a7f42] duration-700 w-32 md:w-44 text-white text-sm md:text-base py-2'>
                            Explore More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;
