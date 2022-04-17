
import { ExternalLinkIcon, LockClosedIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assests/images/small-logo.png'
import { useState } from 'react'


import { toast } from 'react-toastify'
import auth from '../../../firebase/firebase.init'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'

export default function ForgetPass() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const handlePassReset = (e)=>{
      e.preventDefault()
      sendPasswordResetEmail(email)
  }
if(sending){
    toast.warn('Email sending')
    navigate('/login')
}
if(error){
    toast.error(error.message.slice(22))
}
    

  return (
    <>
     <div className="min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="logo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Enter Your Email Address</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handlePassReset}>
           <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input onBlur={(e)=>setEmail(e.target.value)}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="Terms-and-condition"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Agree with <span className='text-orange-400'>terms and conditions</span>
                </label>
              </div>
                </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ExternalLinkIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sent Password Reset Link
              </button>
              <p className='text-sm text text-gray-900 mt-2 ' >Back to  <Link to={'/login'} className='text-orange-400'>Sign in page</Link></p>
            </div>
          </form>
        </div>
      </div>
    
    </>
  )
}