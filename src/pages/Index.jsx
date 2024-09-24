import React from 'react';

import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className='bg-gray-900 min-h-screen '>
      {/* Navigation */}
      <nav className='bg-[#323744] p-4 flex justify-between items-center text-white'>
        <div className='flex items-center space-x-4 text-[15px]'>
          <a href='#' className=' text-white '>Home</a>
          <span className=' text-white'>•</span>
          <a href='#' className=' text-white '>Welcome</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className='flex flex-col items-center justify-center mt-16'>
        {/* Image and Button */}
        <div className='bg-gray-800 lg:py-6 lg:px-32 px-10 py-3 md:py-6 md:px-28 rounded-xl text-center  '>
          <div className='mb-6 flex md:flex-row flex-col  justify-center items-center gap-8'>
            <img 
              src='\images\home-icon.png' 
              alt='Clapperboard'
              className='mx-auto mb-4 w-[140px] h-[140px]'
            />
            <div className='flex flex-col md:gap-20 gap-10'>
            <p className='text-white text-[13px]'>
              Please help us by sharing this site with your friends. Thanks!
            </p>
            <Link  to="/home">
          <button   className='bg-[#f04f24] text-white md:py-3 md:px-6 py-3 px-3 rounded-lg font-semibold hover:bg-orange-600'>
           Browse All Movies & Series →
          </button>
          </Link>
            </div>
            </div>
        </div>

        {/* Info Section */}
        <div className='mt-16 text-center mb-10'>
          <h2 className='text-2xl text-white font-semibold mb-6'>
            Goku.to - Best website to Watch Free Movies Online
          </h2>
          <ul className='text-white space-y-4'>
            <li>- HD Quality</li>
            <li>- Free Streaming without Signing-up</li>
            <li>- One Click HD Streaming</li>
            <li>- Fast and Secure Streaming Server</li>
            <li>- Chromecast supported</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
