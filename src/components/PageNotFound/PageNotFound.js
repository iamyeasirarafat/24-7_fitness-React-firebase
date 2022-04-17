import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assests/images/404Image.jpg'
const PageNotFound = () => {
    return (
        <div className='flex items-center justify-between w-11/12 mx-auto'>
            <div className=" ">
                <h1 className='text-gray-900 text-4xl mb-6 font-semibold'>404 PAGE NOT FOUND</h1>
                <h2 className='text-gray-700 text-2xl mb-3'>Protocol missing.... Exiting program....</h2>
                <p className='text-gray-500'>Check that you typed the address correctly, go back to your previous page or <Link className='text-blue-600 hover:text-blue-400' to={'/'}> Return to Homepage</Link></p>
            </div>
            <div className="">
                <img className='h-screen' src={img} alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;