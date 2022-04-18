import React from 'react';
import recentWork from '../../assests/images/recent.jpg'
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer className='h-auto bg-slate-50 mt-20 pt-10 pl-10 md:pl-0  shadow-lg'>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto ">
                <div className="mt-10 mx-auto">
                    <h2 className='text-gray-600 mb-3 text-2xl '>Subscribe Us</h2>
                    <p className='text-gray-400 w-64 text-sm mb-4'> Sign up to our newsletter to get the latest news and offers</p>
                    <input className='block border-slate-300 rounded-lg w-72' placeholder='Enter Your Email' type="email" />
                    <button className='uppercase mt-4 btn-skew hover:bg-yellow-500 bg-yellow-400 text-blue-700 font-bold py-3 px-10'>get notified</button>
                </div>
                <div className="mt-10 md:ml-20">
                    <h2 className='text-gray-600 mb-3 text-2xl '>Opening Hours</h2>
                    <div className=" flex w-3/4 text-gray-400  justify-between ">
                        <div className="">
                            <ul>
                                <li>Sunday</li>
                                <li>Monday</li>
                                <li>Tuesday</li>
                                <li>Wednesday</li>
                                <li>Thirsday</li>
                                <li>Friday</li>
                                <li>Saturday</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li>07:00-17:00</li>
                                <li>07:00-17:00</li>
                                <li>07:00-17:00</li>
                                <li>07:00-17:00</li>
                                <li>07:00-17:00</li>
                                <li>07:00-17:00</li>
                                <li>07:00-17:00</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mx-auto">
                    <h2 className='text-gray-600 mb-3 text-2xl '>Recent Work</h2>
                    <img className='' src={recentWork} alt="works" />
                </div>
            </div>
            <div className=" md:flex justify-between w-10/12 text-gray-600 border-t-2 py-8 mt-8 mx-auto">
                <p>©Copyright {year} <span className='text-blue-600 mb-2'>247 Fitness |</span> All Rights Reserved</p>
                <ul className='flex'>
                    <li className='mr-3 duration-300 hover:text-blue-500 '>{'Terms & Conditions'}</li>
                    <li className='mr-3 duration-300 hover:text-blue-500 '>API Use Policy</li>
                    <li className='mr-3 duration-300 hover:text-blue-500 '>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;