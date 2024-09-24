import React from 'react';
import Movies from '../pages/Movies';
import { Link } from 'react-router-dom';


export default function Card({data}) {
  console.log(data.key);
  
  return (
    <div className="m-2 bg-[#181b22] rounded-lg shadow-lg h-[300px] w-full relative pr-3">
      {/* Image section */}
      
      <Link to={`/Movies/${data.key}`}>
    
    
       <div className="relative" >
        <img
          src={data.image}
          className="object-cover w-full h-[250px] rounded-t-lg"
          alt={data.movieName}
        />
    <a
  href="#"
  className="absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-80 flex justify-center items-center"
>
  <div className="flex gap-0 ">
    {/* Play Button */}
    <button className="p-2 rounded-full shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path fill="#f04f24" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-2 14.5v-9l6 4.5z"/>
      </svg>
    </button>

    {/* Add Button */}
    <button className=" p-2 rounded-full shadow-lg ">
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 48 48">
        <defs>
          <mask id="ipSAddOne0">
            <g fill="none" stroke-linejoin="round" stroke-width="4">
              <path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/>
              <path stroke="#000" stroke-linecap="round" d="M24 16v16m-8-8h16"/>
            </g>
          </mask>
        </defs>
        <path fill="white" d="M0 0h48v48H0z" mask="url(#ipSAddOne0)" />
      </svg>
    </button>
  </div>
</a>

         
        {/* Overlay for movie details */}
        <div className="absolute inset-0 bg-gradient-to-t   via-transparent to-transparent rounded-t-lg" />
      </div>
      </Link>
      {/* Text and rating section */}
      <div className="absolute bottom-0 left-0   right-0 p-2 text-white  bg-[#181b22] ">
        <p className="font-semibold text-[10px]">{data.movieName}</p>
        <div className="flex justify-between text-[10px] mt-1">
          <p>{data.date}</p>
          <p>{data.rating} ⭐</p>
        </div>
      </div>
    </div>
  );
}

