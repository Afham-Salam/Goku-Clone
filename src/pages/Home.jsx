import { useEffect, useState } from 'react';
import { movies } from '../utils/Data';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Components/Card';
import Search from '../Components/Search';


function Home() {
  const [count, setCount] = useState(0)
  const [url,setUrl]=useState("https://imdb-top-100-movies.rapidapi.com")
  const[data,setData]=useState([]);

  const[active,setActive]=useState(false)
useEffect(()=>{
  fetch(url,{
    headers:{
      "x-rapidapi-key":"96f572f676msh233ae4e60d38ab8p161a67jsn31fd1bb2063e"
    }
  })
  .then(response => response.json())
  .then(data => setData(data))
  .catch(error=> console.error("Error"))
  console.log({data});

},[url])
  return (
    <>
   <section className='flex bg-[#282c37] lg:h-[525px]'>
  <div className='lg:w-[750px] lg:h-[470px]  bgcolor  lg:flex lg:flex-col justify-center  gap-7 p-14 md:hidden hidden '>
    <h1 className='text-white text-[30px]'>Over <span className='text-[#f04f24]'>66,000 </span>Movies and TV Show Episodes available and still updating. Enjoy your Free HD Streaming Now!</h1>
    <div className='flex items-center gap-1 'onClick={()=>setActive(!active)} >
      <input type="search" placeholder='Enter Keyword' className='p-3 w-full'/>
      <div className='text-white bg-[#f04f24] p-3 px-5' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m11.25 11.25l3 3"/><circle cx="7.5" cy="7.5" r="4.75"/></g></svg></div>
    </div>
    <p className='text-left text-white'>✨‍ Help GOKU to viral</p>

    <div className='flex gap-3 items-center mt-4'>
    <small className='text-slate-600'>Shares</small>
    <div className='bg-[#4267B2] grow h-8 w-32 flex hover:opacity-80  hover:-mt-2 transition-all items-center justify-center'>
        <svg className='text-white'  xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.96.96 0 0 1-.975.974h-1.937a.96.96 0 0 1-.963-.974"/>
        </svg>
    </div>
    <div className='bg-black grow h-8  w-12 flex hover:opacity-80 hover:-mt-2 transition-all  items-center justify-center'>
        <svg className='text-white' xmlns="http://www.w3.org/2000/svg"  width="15" height="15" viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/>
        </svg>
    </div>
    <div className='bg-[#25d366] grow h-8  w-12  hover:opacity-80 hover:-mt-2 transition-all flex items-center justify-center'>
        <svg  className='text-white' xmlns="http://www.w3.org/2000/svg"  width="15" height="15" viewBox="0 0 16 16">
            <path fill="currentColor" d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1s-.48.6-.59.73s-.21.14-.4 0a5.1 5.1 0 0 1-1.49-.92a5.3 5.3 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.4 1.4 0 0 0 .18-.31a.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23a2.1 2.1 0 0 0-.65 1.55A3.6 3.6 0 0 0 5 8.2A8.3 8.3 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.5 2.5 0 0 0 1.17.07a1.93 1.93 0 0 0 1.26-.88a1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21"/><path fill="currentColor" d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85l3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72M8 14.12a6.1 6.1 0 0 1-3.15-.87l-.22-.13l-2.34.61l.62-2.28l-.14-.23a6.18 6.18 0 0 1 9.6-7.65a6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12"/>
        </svg>
    </div>
    <div className='bg-[#448AFF] grow h-8   w-12 hover:opacity-80  hover:-mt-2 transition-all flex items-center justify-center'>
        <svg className='text-white' xmlns="http://www.w3.org/2000/svg"  width="15" height="15" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="m12.942 14.413l-2.56-2.66L5.45 14.48l5.406-5.736l2.56 2.66l4.93-2.727zM11.899 2C6.432 2 2 6.144 2 11.257c0 2.908 1.434 5.503 3.678 7.2V22l3.378-1.874c.9.252 1.855.388 2.843.388c5.468 0 9.9-4.145 9.9-9.257c0-5.113-4.432-9.257-9.9-9.257"/>
        </svg>
    </div>
    <div className='bg-[#f04f24] grow h-8 w-12 hover:opacity-80 hover:-mt-2 transition-all flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="18" viewBox="0 0 256 256">
            <circle cx="128" cy="128" r="128" fill="#ff4500"/>
            <path fill="#fff" d="M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981l27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667c7.324 0 13.275-5.95 13.275-13.278c0-7.324-5.95-13.275-13.275-13.275c-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458c-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617c0 7.629 4.577 14.037 10.988 16.939a33.6 33.6 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036c41.202 0 74.621-23.35 74.621-52.036a35.8 35.8 0 0 0-.458-5.646c7.41-2.902 10.988-9.31 10.988-16.939z"/>
        </svg>
    </div>
    <div className='bg-[#0088cc] hover:-mt-2 transition-all hover:opacity-80 grow h-8 w-12 flex items-center justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg"   width="15" height="15" viewBox="0 0 14 14"><path fill="white" fill-rule="evenodd" d="M.25 7a6.75 6.75 0 1 1 13.5 0A6.75 6.75 0 0 1 .25 7m9.002 4.064l1.045-7.932l-8.165 3.935l2.417.876l2.686-2.076a.5.5 0 1 1 .611.792L5.618 8.38v2.726l1.685-1.604z" clip-rule="evenodd"/></svg>
    </div>
</div>

  </div>
 
  <Swiper
  spaceBetween={30}
  centeredSlides={false}
  effect="fade" 
  speed={2500} 

  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={false}
  modules={[Autoplay, Pagination, Navigation, EffectFade]} 
  className="w-full lg:h-[470px]"
>
        <SwiperSlide><img src="images/slidder1.jpg" alt="Slide 1" className="object-cover" /></SwiperSlide>
        <SwiperSlide><img src="images/slider2.jpg" alt="Slide 1" className="object-cover" /></SwiperSlide>
        <SwiperSlide><img src="images/slider3.jpg" alt="Slide 1" className="object-cover" /></SwiperSlide>
        <SwiperSlide><img src="images/slidder4.jpg" alt="Slide 4" className="object-cover" /></SwiperSlide>
      </Swiper>
      

</section>
{
    active &&<Search />
}


<section className='bg-[#181b22] grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 h-fit gap-4 p-5 py-10'>
{
  movies.map(it => (
    <>
    {/* {it.key} */}
    <Card data={it}  />
    </>
  ))
}
</section>

  

     
    </>
  )
}

export default Home
