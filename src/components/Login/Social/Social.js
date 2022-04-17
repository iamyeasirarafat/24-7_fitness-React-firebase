import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
const Social = () => {
    return (
       <>
       <h2 className='text-center mb-3 text-gray-400'>Or sign in with <span className='font-bold'>Social Media</span></h2>
        <div className='w-[40%] justify-evenly flex mx-auto '>
            <button className=' py-2 px-3 duration-500 border-2 text-2xl rounded-md hover:text-white hover:bg-slate-500'><FontAwesomeIcon icon={faGoogle} /></button>
            <button className=' py-2 px-3 duration-500 border-2 text-2xl rounded-md hover:text-white hover:bg-slate-500'><FontAwesomeIcon icon={faFacebookF} /></button>
            <button className=' py-2 px-3 duration-500 border-2 text-2xl rounded-md hover:text-white hover:bg-slate-500'><FontAwesomeIcon icon={faGithub} /></button>
        </div>
       </>
    );
};

export default Social;