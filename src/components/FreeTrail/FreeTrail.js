import { Link } from "react-router-dom";

/* This example requires Tailwind CSS v2.0+ */
const FreeTrail = ()=> {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex">
              <Link
                to="/"
                className="uppercase  btn-skew  duration-300 hover:bg-yellow-500 bg-yellow-400 text-blue-700 font-bold py-3 px-6"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                to="/"
                className="uppercase  btn-skew  duration-300 hover:bg-indigo-300 hover:text-white bg-indigo-100 text-blue-700 font-bold py-3 px-6"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default FreeTrail;
  