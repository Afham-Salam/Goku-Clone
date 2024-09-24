import React, { useState } from 'react';
import { movies } from '../utils/Data'; 

export default function MovieSearchPopup() {
  const [data, setData] = useState(""); 
  const [filteredMovies, setFilteredMovies] = useState([]); 


  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase(); 
    setData(searchTerm);


    const results = movies.filter((movie) =>
      movie.movieName.toLowerCase().includes(searchTerm)
    );
    setFilteredMovies(results);
  }


  function closebtn() {
    const popUp = document.getElementById("popUp");
    const cards = document.getElementById("cards");
    popUp.style.display = "none";
    cards.style.display = "none";
  }

  return (
    <>
      <div className='bg-black opacity-85 md:h-screen md:w-screen lg:h-screen lg:w-full fixed top-0 flex justify-center h-screen w-full z-[1000]' id='popUp'>
        <div className="absolute right-8 top-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 20 20" className='text-white justify-self-end' onClick={closebtn}>
            <path fill="currentColor" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z" />
          </svg>
        </div>
        <form action="" className='mt-20'>
          <input
            type="search"
            placeholder="Search"
            className="p-2 border-b-2 lg:text-2xl lg:w-[900px] text-white rounded lg:h-[50px] md:w-[700px] md:h-[40px] w-72 border-white bg-transparent focus:outline-none"
            value={data}
            onChange={handleSearch}
          />
        </form>
      </div>
    
      {data && (
        <div id="cards">
         
          <div className="absolute top-32 left-64 transform -translate-x-1/2 text-white text-xl z-[5000] mt-4 ">
            {filteredMovies.length > 0
              ? `${filteredMovies.length} results found`
              : "No movies found"}
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 h-fit gap-4 p-5 py-10 z-[5000] absolute top-40 left-0">
            {filteredMovies.map((movie) => (
              <div key={movie.key} className="m-2 bg-[#181b22] rounded-lg shadow-lg h-[300px] w-full relative pr-3">
                <div className="relative">
                  <img
                    src={movie.image}
                    className="object-cover w-full h-[250px] rounded-t-lg"
                    alt={movie.movieName}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent rounded-t-lg" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-[#181b22]">
                  <p className="font-semibold text-[10px]">{movie.movieName}</p>
                  <div className="flex justify-between text-[10px] mt-1">
                    <p>{movie.date}</p>
                    <p>{movie.rating} ⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
