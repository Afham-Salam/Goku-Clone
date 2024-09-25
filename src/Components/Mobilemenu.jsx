import React, { useState } from 'react'
import { genres, countries } from "../utils/Data.js";
import List from './List'
import { NavLink } from 'react-router-dom';

export default function Mobilemenu() {
  
  const closeMenu = () => {
    const navbar= document.getElementById("menu");
    menu.style.display = "none";
  };
  return (
    <div>
        <div className='bg-black w-full md:w-screen  absolute top-[60px' id="menu">
            <ul className='flex flex-col md:gap-5 md:p-4 gap-10 text-[12px] p-2'>
            <li className='text-white'>
                <NavLink to="/home" onClick={closeMenu}>Home</NavLink>
            </li>
           <hr className='opacity-25'></hr>
            <li className='text-white'>
                <div className="flex">
                <nav href="">Genre</nav>
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
                <NavLink to="/tvseries" onClick={closeMenu}>TV Services</NavLink>
            </li>
            <hr className='opacity-25'></hr>
            <li className='text-white'>
                <NavLink to="/topimdb" onClick={closeMenu}>Top IMBD</NavLink>
            </li>
            <hr className='opacity-25'></hr>

            </ul>
        </div>
    </div>
  )
}
