import React from 'react'
import Navber from './Navber'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div>
        <Navber></Navber>

        <div className='min-h-[calc(100vh-500px)] border'>
            <Outlet></Outlet>
        </div>

        <Footer></Footer>
    </div>
  )
}
