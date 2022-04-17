import React from 'react';
import authentication from '../../assests/images/Authentication_vs_Authorization.png'
import firebase from '../../assests/images/firebase.png'
import firebaseServices from '../../assests/images/Firebase-1-1.png'
const Blogs = () => {
    return (
        <div className="">
            <h2 className="text-5xl font-semibold text-center my-9 uppercase text-blue-500">Welcome to my <span className="text-pink-400">Blogs</span></h2>
            <div className="md:flex md:w-3/4  mx-auto">
            <div className="md:w-2/5  md:mr-20 mt-16 md:mb-28">
                <img className="w-11/12 m-auto rounded-lg" src={authentication}alt="" />
            </div>
            <div className="md:w-3/5 mx-5 mt-10">
                <h3 className="text-3xl font-semibold text-blue-800">What is the defference between <span className="text-pink-400">Authentication and Authorization</span>?</h3>
                <p className="ml-10 my-3 text-blue-400"><small>Posted By: Yeasir Arafat</small></p>
                <p className="text-blue-600">
                    <span className="text-pink-400">Authentication </span> is the process of varifying who someone is, on the other hand <span className="text-pink-400">Authorization </span> is the process after authentication. It is the process of varifying that what specific applications, files and other stuff has access to the user. In the digital world, authentication is used for varyfying users that who they are. Once it has been done Authorization used for grant the user permission to access the different types of information or services.
                </p>
                
            </div>
        </div>
        <div className="md:flex md:w-3/4  mx-auto">
            <div className="md:w-2/5  md:mr-20 mt-16 md:mb-28">
                <img className="w-full m-auto rounded-lg" src={firebase}alt="" />
            </div>
            <div className="md:w-3/5 mx-5 mt-10">
                <h3 className="text-3xl font-semibold text-blue-800">Why we use  <span className="text-pink-400">Firebase?</span> The alternative of firebase.</h3>
                <p className="ml-10 my-3 text-blue-400"><small>Posted By: Yeasir Arafat</small></p>
                <p className="text-blue-600">
                   There are many reasons thats why we use  <span className="text-pink-400">Firebase  </span> The main reason is firebase has <span className="text-pink-400">Realtime Database collaborative applications for secure authentication and even while offline, realtime events continue to fire  </span>. And it came from the worlds biggest company google. we all trust google as for its high security system. thats why we trust firebase security system too. and its easy to use it has a complete bundle to services . <br />
                   <span className='font-semibold'>alternatives of firebase:</span> There are many other company as firebase such as <span className='text-pink-400'>Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, Flutter</span> and much more.
                </p>
                
            </div>
        </div>
        <div className="md:flex md:w-3/4  mx-auto">
            <div className="md:w-2/5  md:mr-20 mt-16 md:mb-28">
                <img className="w-full  m-auto rounded-lg" src={firebaseServices}alt="" />
            </div>
            <div className="md:w-3/5 mx-5 mt-10">
                <h3 className="text-3xl font-semibold text-blue-800">Other Services of  <span className="text-pink-400">Firebase.</span></h3>
                <p className="ml-10 my-3 text-blue-400"><small>Posted By: Yeasir Arafat</small></p>
                <p className="text-blue-600">
                   There are so many other services   <span className="text-pink-400">Firebase  </span> have beside of authentication. The Major Service of firebase is <span className='text-pink-400'>Analytic</span>, It gives such an in-depth view of our product that can help us grow and make our marketing strategies. And that is totally free. <span className='text-pink-400'> No. 2 is Remote Config,</span> its lets us do the A/B testing, provide a personalized experience and much more, totally depends on how we use it. <span className='text-pink-400'>no. 3 is Databse.</span> Firebase Database is something we can call super amazing! It provides two types of database to us.⚫ Firebase Realtime Database⚫Firebase Cloud Firestore. they both are real time savers and <span className='text-pink-400'>no. 4 is Cloud Messaging.</span> by the help of it we can choose user segments that we want to target for push notifications and after sending we can also see the percentage of users who opened the notification. <br />
                   These are the major services that firebase has Beside of <span className='text-pink-400'>Authenticaiton</span>
                </p>
                
            </div>
        </div>
        </div>
    );
};

export default Blogs;