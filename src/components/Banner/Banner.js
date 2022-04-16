import React from 'react';
import banner from '../../assests/images/banner.jpg'
import './Banner.css'
const Banner = () => {
    
    return (
        <div className='relative'>
            <img className='w-full  h-screen' src={banner} alt="" />
            <div className="absolute top-1/3 ml-6 text-white ">
            <h3 className='text-5xl font-semibold font-mono'>The Healthy</h3>
            <h2 className='text-8xl font-bold font-serif mt-2'>Way Of Life</h2>
            <h2  className='text-7xl font-extrabold text-transparent text-stroke  '>Company</h2>
            <a className='uppercase mt-10 btn-skew absolute hover:bg-yellow-500 bg-yellow-400 text-blue-700 font-bold py-3 px-10' href="#service">Descover More</a>
            </div>
        </div>
    );
};

export default Banner;