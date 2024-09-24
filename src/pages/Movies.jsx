import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { movies } from '../utils/Data'


export default function Movies() {
  const {id} = useParams()
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const movie = movies.find((it) => it.key === +id);
      
      setData(movie);
    };
    fetchData();
  }, [id]); 

  return (
    
    <div className='bg-[#181b22] h-full w-full '>
      <div className='bg-[#323744] h-12 flex items-center px-4'>
  <ul className='text-white text-[15px] flex space-x-4'>
    <Link to="/home">
      <li className='list-none'>Home</li>
    </Link>
    <span>•</span>
    <Link to="/movies/:id">
      <li className='list-none'>Movies</li>
    </Link>

    <span>•</span>
    <Link>
      <li className='list-none'>{data?.movieName}</li>
    </Link>

  </ul>
</div>
<section className='p-4'>
  <div className='flex gap-7 lg:flex-row md:flex-col-reverse  flex-col-reverse'>
    
    {/* Left Section */}
    <div className='flex flex-col items-start  gap-3 p-4 rounded-lg lg:w-[30%]'>
      {/* Movie Poster */}
     
      <img
        className='h-[236px] w-[160px] object-cover rounded-lg'
        src={data?.image}
        alt='Blink Twice'
      />

      {/* Movie Title */}
      <p className='text-white text-[25px] font-semibold mt-4'>{data?.movieName}</p>

      {/* Movie Description */}
      <p className='text-white  mt-2 text-[13px]'>
        When tech billionaire Slater King meets cocktail waitress Frida at his fundraising gala, 
        he invites her to join him and his friends on a dream vacation on his private island. But things go terribly wrong
      </p>

      {/* Add Button */}
      <button className='mt-2  py-2 px-4 bg-slate-700 text-white  text-[10px] font-bold rounded-lg flex  justify-center items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
      <path fill="white" d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5z"/></svg>&nbsp;Read full
      </button>
     
      {/* Movie Information */}
      <div className=' mt-2 text-[13px] space-y-2'>
        <p className='text-[#aaa]'><strong className='text-white'>Genres:</strong> Thriller, Mystery, Horror</p>
        <p className='text-[#aaa]'><strong className='text-white'>Cast:</strong> Simon Rex, Haley Joel Osment, Naomi Ackie</p>
        <p className='text-[#aaa]'><strong className='text-white'>Production:</strong> Free Association, Bold Choices, Metro-Goldwyn-Mayer</p >
        <p className='text-[#aaa]'><strong className='text-white'>Country:</strong> United States of America</p >
        <p  className='text-white'><strong className='text-white'>Duration:</strong> 103 min</p>
      </div>
      <hr className="border-t-2 border-[#aaa] opacity-10 w-full mx-auto mt-2"/>

      <div className='flex  gap-3'>
        <button className="bg-[#f04f24] w-18 h-18 rounded-md flex flex-col justify-center items-center  text-white px-2 py-2 ">
              <span className="text-[18px] font-bold">{data?.rating}</span>
              <span className="text-[11px] font-normal mt-1">8 vote</span>
        </button>
        <div className='flex flex-col text-white gap-3'>
          <p>vote the movie</p>
          <div  className='flex space-x-2 text-[#aaa]'>
            <button className='border-2  border-[#aaa] text-[10px]  font-bold rounded-md py-0 px-4 h-8  flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="#aaa" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"/></svg>&nbsp;Like it</button>
            <button className='border-2 border-[#aaa] text-[10px] font-bold rounded-md py-2 px-4 h-8 flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="#aaa" d="M19 15h4V3h-4m-4 0H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2a2 2 0 0 0 2 2h6.31l-.95 4.57c-.02.1-.03.2-.03.31c0 .42.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5a2 2 0 0 0-2-2"/></svg>&nbsp;&nbsp;Dislike</button>

          </div>
        </div>
      </div>
    </div>
    
    {/* Right Section*/}
    <div className='lg:w-[70%]'>
      <div style={{backgroundImage:`url('${data?.image}')`,
     backgroundSize:`cover`,
     backgroundPosition:`center`
    
    }} className='w-full  lg:h-[650px] h-[400px]  flex justify-center items-center'>
        {/* Play Button  */}
          <div className="">
            <button className='bg-[#f04f24] p-6 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-12 w-12 text-white'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path
                  d='M9.75 7.5v9l7.5-4.5-7.5-4.5z'
                />
              </svg>
            </button>
          </div>
      </div>
      <div className='bg-[#323744] lg:h-[60px]  overflow-hidden '>
            <div className='text-white flex gap-10 py-3 p-5 text-[13px]'>
              <p className='flex justify-center items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path fill="white" d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"/></svg>Discussion</p>
              <p className='flex justify-center items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="m13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.5 3.5 0 0 1 0 1.457l5.11 2.788a3.5 3.5 0 1 1-.958 1.755"/></svg>Share</p>
            </div>
        </div>
    </div>
  </div>
</section>



    </div>
    
    )
}

