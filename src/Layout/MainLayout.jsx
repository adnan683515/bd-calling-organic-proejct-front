import React from 'react'
import Navber from './Navber'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router'
import NavberTwo from './NavberTwo'

export default function MainLayout() {


  const location = useLocation()

  return (
    <div>

      {
        location?.pathname == '/' ? <Navber> </Navber> : <NavberTwo></NavberTwo>
      }

      <div className='min-h-[calc(100vh-500px)] '>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}
