import React from 'react'
import { genres, countries } from "../utils/Data.js";
import List from './List'

export default function Mobilemenu() {
  return (
    <div>
        <div className='bg-black w-full md:w-screen  absolute top-[60px'>
            <ul className='flex flex-col md:gap-5 md:p-4 gap-10 text-[12px] p-2'>
            <li className='text-white'>
                <a href="">Home</a>
            </li>
           <hr className='opacity-25'></hr>
            <li className='text-white'>
                <div className="flex">
                <a href="">Genre</a>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
                />
              </svg>
                </div>
                <List data={genres} />
            </li>
            <hr className='opacity-25'></hr>
            <li className='text-white'>
                <div className='flex'>
                <a href="">Countries</a>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
                />
              </svg>


                </div>
                <List data={countries} />
            </li>
            <hr className='opacity-25'></hr>
            <li className='text-white'>
                <a href="">Movie</a>
            </li >
           <hr className='opacity-25'></hr>
            <li className='text-white'>
                <a href="">TV Services</a>
            </li>
            <hr className='opacity-25'></hr>
            <li className='text-white'>
                <a href="">Top IMBD</a>
            </li>
            <hr className='opacity-25'></hr>

            </ul>
        </div>
    </div>
  )
}
