import React, { useState } from "react";
import { countries, genres, navitems } from "../utils/Data.js";
import Mobilemenu from "./Mobilemenu.jsx";
import Search from "./Search.jsx";
import List from "./List.jsx";
import { NavLink } from "react-router-dom";
import logoIcon from "../assets/logo.png";


export default function Navbar() {
const[active,setActive]=useState(false)
const[menu,setMenu]=useState(false)

  return (
    <div className=" flex items-center justify-between  bg-black w-full h-[70px] relative z-50   ">
      <div className=" flex flex-row items-center m-0 p-0 ">
        <div className="lg:hidden md:block">
        <svg onClick={()=>setMenu(!menu)} className="text-white pl-2"xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>
        {
         menu && <Mobilemenu />
        }
        </div>
        <div className=" bg-slate-700 p-4 w-fit ">
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
          <img className="lg:w-28 md:w-28 sm:w-24 w-24 h-full " src={logoIcon} />

        </NavLink>
        </div>

        <div className="ml-5"></div>
        <div className="lg:flex lg:gap-10 md:hidden hidden">
        {
          navitems.map(it => (
             
            <NavLink to={it.path} key={it.label} className={`text-white flex ${it.icon ? 'group' : ''}`}>
              {it.label}
              {
                it.icon===true && (
                  <>
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
                  <div className="dropdown absolute top-12 hidden group-hover:block">
                    <List data={it.key=="genres"? genres:countries} />
                  </div>
                  </>
                )
              }
            </NavLink>
          ))
        }          
        </div>
      </div>

      <div className=" flex gap-6 mr-4">
        <div className=" flex flex-row gap-2 justify-end" onClick={()=>setActive(!active)} >
          <div>
            <svg
              className="text-white text-2xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
              />
            </svg>
          </div>
          <div>
            <button className="text-white lg:block md:hidden hidden" >Search</button>
          </div>
        </div>
      
        <div className=" flex flex-row gap-2 justify-end">
          <div>
            {" "}
            <svg
              className="text-white text-2xl"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
         
          <div>
            <button className="text-white lg:block md:hidden hidden">Login</button>
          </div>
        </div>
      </div>
     {    
            active &&<Search />
     }
    </div>
    
  );
}
