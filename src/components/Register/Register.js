
import { FingerPrintIcon,  } from '@heroicons/react/solid'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import logo from '../../assests/images/small-logo.png'
import Social from '../Login/Social/Social'
import auth from '../../firebase/firebase.init';
import { toast } from 'react-toastify';

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const [createUserWithEmailAndPassword, user,loading, error,] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification : true});
    const handleRegister = (e)=>{
        e.preventDefault()
      createUserWithEmailAndPassword(email, password,)
      }
    if(user){
        navigate(from, { replace: true });
        toast.success('Account Successfully Created')
    }
    if(loading){
        toast.warn('Creating Account')
    }
    if(error){
        if(error.message.includes('email-already')){
        toast.error('Email already in use')}
        if(error.message.includes('6 character')){
        toast.error('Password Should be longer than 6 character')}
        else{
        toast.error(error.message.slice(20))
        }
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
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register With your Email</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{'  '}
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6"  onSubmit={handleRegister}>
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
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input onBlur={(e)=>setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
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
                  <FingerPrintIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
               Register
              </button>
              <p className='text-sm text text-gray-900 mt-2 ' >Already Have an Account? <Link to={'/login'} className='text-orange-400'>Sign In here</Link></p>
            </div>
          </form>
        </div>
      </div>
    <Social></Social>
    </>
  )
}
