import React from 'react'
import Navber from './Navber'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router'

export default function MainLayout() {


  const location = useLocation()
  
  return (
    <div>

      {
        location?.pathname == '/' ? <Navber> </Navber> :'another navber'
      } 

      <div className='min-h-[calc(100vh-500px)] '>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}
