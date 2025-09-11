import React from 'react'
import Hero from '../../components/LandingPage/Hero'
import Service from '../../components/LandingPage/Service/Service'
import Features from '../../components/LandingPage/Features/Features'



export default function Home() {
  return (
    <div className=''>
        <Hero></Hero>

        <div className='max-w-[1200px] mx-auto'>
          <Service></Service>
        </div>
        <div className='max-w-[1200px] py-[100px] mx-auto'>
          <Features></Features>
        </div>
    </div>
  )
}
