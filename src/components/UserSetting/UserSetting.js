import { useAuthState, useSendEmailVerification, useUpdateProfile } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase/firebase.init";

const UserSetting = () => {
    const [user, loading] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, EmailVarifyError] = useSendEmailVerification(auth);
    if (loading) {
        return (
            <div className='text-center text-black text-sm'>
                <p>Initialising user...</p>
            </div>
        );
    };
    const { email, phoneNumber, } = user?.providerData[0];
    const { emailVerified } = user;
    const handleUpdateButton = async (e) => {
        e.preventDefault()
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const displayName = firstName + ' ' + lastName;
        const phoneNumber = e.target.number.value;
        console.log(phoneNumber);
        if (displayName === ' ') {
            toast.error('please input your name', { id: 'updateProfileError' })
        } else {
            await updateProfile({ displayName, phoneNumber: '01924587' });
            toast.success('profile updated Successfully', { id: 'profileUpdated' })

        }
    }
    if (updating || sending) {
        toast('please wait', { id: 'profieUpdateSending' })
    }
    if (error || EmailVarifyError) {
        toast.error(error.message.slice(22), { id: 'profileUpdateError' })
    }

    return (
        <>
            <div className="md:mt-10">
                <div className="md:grid w-4/5 mx-auto md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Update your Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">You can see it on your Profile information section</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="" onSubmit={handleUpdateButton}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                readOnly
                                                placeholder={email ? email : ''}
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>





                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input
                                                placeholder={phoneNumber ? phoneNumber : ''}
                                                type="number"
                                                name="number"
                                                id="city"
                                                autoComplete="Number"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                       {
                           emailVerified ? '' :  <button
                           onClick={async () => {
                               await sendEmailVerification();
                               toast.success('Sent email')
                             }}
                           className=" mt-10 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                           >
                               Resent Email varification link
                           </button>
                       }
                    </div>
                </div>
            </div>


        </>
    )
}
export default UserSetting;