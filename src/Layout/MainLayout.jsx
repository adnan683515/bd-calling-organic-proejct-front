import React from 'react'
import Navber from './Navber'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router'
import NavberTwo from './NavberTwo'
import NavBannar from './NavBannar'

export default function MainLayout() {


  const location = useLocation()

  return (
    <div>

      {
        location?.pathname == '/' ? <Navber> </Navber> : <NavberTwo></NavberTwo>
      }

      {
         location?.pathname != '/' && <NavBannar></NavBannar>
      }

      <div className='min-h-[calc(100vh-500px)] '>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}
