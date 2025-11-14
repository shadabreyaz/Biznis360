import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Header from "./Components/Header"
import Home from "./Pages/Home"
import Footer from './Components/Footer'

function App() {
  function MainLayout(){
    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    )
  }

  const routes = createBrowserRouter([
    {
       path:'/',
       element:<MainLayout/>,
       children:[
        {
          path:'',
          element:<Home/>,
        },
        // {
        //   path: "/About",
        //   element: <About/>
        // }
       ]
      
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
