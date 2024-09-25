import React from 'react'
import logoIcon from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-[#111111] text-white text-[14px] lg:py-24   lg:px-6 md:py-3 py-3 px-3">
      <div className="flex flex-wrap justify-between text-[14px]">
        <div className="flex flex-col md:flex-row  gap-2 md:gap-7 lg:gap-20 text-[14px]">
          <div>
          <div className="block md:hidden lg:hidden mb-5">
         <img src={logoIcon} alt="Logo" className="mt-8 lg:mt-0 w-32 lg:w-36" />
       </div>
            <p className=" font-semibold mb-3   text-[14px]">About Us</p>
            <ul className="space-y-2 ">
              <li className="hover:text-[#f04f24] text-[13px] cursor-pointer">Terms of service</li>
              <li className="hover:text-[#f04f24] text-[13px] cursor-pointer">Contact</li>
              <li className="hover:text-[#f04f24] text-[13px] cursor-pointer">Sitemap</li>
            </ul>
          </div>

          <div  className='hidden md:block lg:block'>
            <p className="font-semibold mb-3 hover:text-[#f04f24] cursor-pointer ">&nbsp;</p>
            <ul className="space-y-2 hidden md:block lg:block">
              <li className="hover:text-[#f04f24] text-[13px] cursor-pointer">Movies</li>
              <li className="hover:text-[#f04f24] text-[13px] cursor-pointer">TV Series</li>
              <li className="hover:text-[#f04f24] text-[13px] cursor-pointer">Top IMDb</li>
            </ul>
          </div>

          <div   className='hidden md:block lg:block'>
            <p className=" font-semibold mb-3 text-[14px]">Genre</p>
            <ul className="space-y-2 text-[13px]">
              <li className="flex items-center hover:text-[#f04f24] cursor-pointer">
                <span className="mr-2">
                  <svg  className='text-[#f04f24]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20H4z"/></svg>
                </span>
                Action
              </li>
              <li className="flex items-center hover:text-[#f04f24] cursor-pointer">
                <span className="mr-2">
                  <svg className='text-[#f04f24]' xmlns="http://www.w3.org/2000/svg"width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20H4z"/></svg>
                </span>
                Comedy
              </li>
              <li className="flex items-center hover:text-[#f04f24] cursor-pointer">
                <span className="mr-2">
                  <svg className='text-[#f04f24]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20H4z"/></svg>
                </span>
                Drama
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 mt-8 md:mt-10 text-[13px] hidden md:block lg:block'">
            <li className="flex items-center hover:text-[#f04f24] cursor-pointer">
                <span className="mr-2">
                  <svg className='text-[#f04f24]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20H4z"/></svg>
                </span>
               Fantasy
              </li>
            <li className="flex items-center hover:text-[#f04f24] cursor-pointer">
                <span className="mr-2">
                  <svg className='text-[#f04f24]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20H4z"/></svg>
                </span>
                Horror
              </li>
            <li className="flex items-center hover:text-[#f04f24] cursor-pointer">
                <span className="mr-2">
                  <svg className='text-[#f04f24]' xmlns="http://www.w3.org/2000/svg"width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20H4z"/></svg>
                </span>
                Mystery
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2 text-black font-semibold mt-10 ">
            <p className='font-semibold text-[14px] block md:hidden lg:hidden text-white'>Contact Us</p>
            <button className="bg-white py-1.5 px-3 hover:bg-[#f04f24] hover:text-white rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
            <path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"/></g></svg>
              &nbsp;Join Group Telegram
            </button>
            <button className="bg-white py-1.5 px-3   hover:bg-[#f04f24] hover:text-white rounded-full flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
              <mask id="lineMdReddit0"><g fill="#fff"><path fill-opacity="0" stroke="#fff" stroke-dasharray="48" stroke-dashoffset="48" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9.42c4.42 0 8 2.37 8 5.29c0 2.92 -3.58 5.29 -8 5.29c-4.42 0 -8 -2.37 -8 -5.29c0 -2.92 3.58 -5.29 8 -5.29Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.4s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"/></path><circle cx="7.24" cy="11.97" r="2.24" opacity="0"><animate fill="freeze" attributeName="cx" begin="1s" dur="0.2s" values="7.24;3.94"/><set fill="freeze" attributeName="opacity" begin="1s" to="1"/></circle><circle cx="16.76" cy="11.97" r="2.24" opacity="0"><animate fill="freeze" attributeName="cx" begin="1s" dur="0.2s" values="16.76;20.06"/><set fill="freeze" attributeName="opacity" begin="1s" to="1"/></circle><circle cx="18.45" cy="4.23" r="1.61" opacity="0"><set fill="freeze" attributeName="opacity" begin="2.6s" to="1"/></circle></g><path fill="none" stroke="#fff" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M12 8.75l1.18 -5.64l5.03 1.07"><animate fill="freeze" attributeName="stroke-dashoffset" begin="2.4s" dur="0.2s" values="12;0"/></path><g fill-opacity="0"><circle cx="8.45" cy="13.59" r="1.61"><animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.4s" values="0;1"/></circle><circle cx="15.55" cy="13.59" r="1.61"><animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.4s" values="0;1"/></circle></g><path fill="none" stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M8.47 17.52c0 0 0.94 1.06 3.53 1.06c2.58 0 3.53 -1.06 3.53 -1.06"><animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="10;0"/>
              </path></mask><rect width="20" height="20" fill="currentColor" mask="url(#lineMdReddit0)"/></svg>
              &nbsp;Join Group Reddit
            </button>
            <button className="bg-white py-1.5 px-3 hover:bg-[#f04f24] hover:text-white rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>
            &nbsp; Join Twitter
            </button>
          </div>
        </div>

        
        <div className="lg:flex flex-col items-end justify-between md:block hidden ">
         

          <img src={logoIcon} alt="Logo" className="mt-8 lg:mt-0 w-32 lg:w-36" />
        </div>
      </div>
    </div>
  );
}

 
