import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
   
    const {name, icon,img,description,price}=service
    return (
        <div className='service h-80 mb-4 relative   '>
          <div className="">
                <img className=' rounded-md h-80' src={img} alt="" />
          </div>
          <div className="absolute top-10 text-white ml-6">
          <div className="flex ">
          <img className='h-16 rounded-full' src={icon} alt="" /> 
          <Link className='uppercase right-6 btn-skew absolute duration-300 hover:bg-yellow-500 bg-yellow-400 text-blue-700 font-bold py-3 px-6' to="checkout">Checkout</Link>
          </div>
           <h2 className='text-3xl font-semibold tracking-wider mt-4 '>{name}</h2>
           <h3 className='text-2xl font-semibold tracking-wider mb-2 '> price: {price}$</h3>
           <p className='indent-8 capitalize leading-snug pr-1'>{description}</p>
          </div>

        </div>
    );
};

export default Service;