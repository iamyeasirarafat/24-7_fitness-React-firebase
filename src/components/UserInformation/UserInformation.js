import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import userimg from '../../assests/images/user.png'
import toast from 'react-hot-toast'
const UserInformation = ()=> {
    const [user, loading] = useAuthState(auth );
    const navigate = useNavigate()
    if (loading) {
        return (
          <div className='text-center text-black text-sm'>
            <p>Initialising user...</p>
          </div>
        );
      };

    const {photoURL, displayName,email,phoneNumber,providerId } = user?.providerData[0];
    const {emailVerified} = user;
   if(!emailVerified){
        toast('please Varify your email address', {id:'userEmailVarify'})
    } 
     return (
    <div className="w-10/12 mx-auto">
        <div className="bg-white  shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white flex justify-center px-4  py-5">
            <img className="block rounded-lg w-32 " src={photoURL? photoURL : userimg} alt="" />
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{displayName? displayName : 'Please Update your name'}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Sign in method</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{providerId}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{email? email: 'Please sign in with unique Email'}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{phoneNumber? phoneNumber: 'Please update your Number'}</dd>
          </div>
        </dl>
      </div>
    </div>
        <button onClick={()=>navigate('/usersetting')} className="mt-5 px-5 py-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-400 hover:text-gray-800 duration-300 text-white ">Account setting</button>
    </div>
  )
}
export default UserInformation;