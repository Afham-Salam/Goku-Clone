import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Imdb from './pages/Imdb.jsx';
import TVSeries from './pages/TVSeries.jsx';
import Movies from './pages/Movies.jsx';
import Index from './pages/Index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:<Index />
      },
      {
        path:'/home',
        element:<Home />
      },
      
      {
        path:'/tvseries',
        element:<TVSeries />
      },
      {
        path:'/topimdb',
        element:<Imdb />
      },
      {
        path:'/movies/:id',
        element:<Movies />
      },

     
    ]
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
