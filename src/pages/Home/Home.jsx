import React from 'react'
import Hero from '../../components/LandingPage/Hero'
import Service from '../../components/LandingPage/Service/Service'
import Features from '../../components/LandingPage/Features/Features'
import pepe from '../../assets/images/papiya.png'
import Cetagories from '../../components/LandingPage/Cetagories/Cetagories'
import Counter from '../../components/LandingPage/CounterBox/counter'
import BestSaller from '../../components/LandingPage/BestSallers/BestSaller'
import LatestNews from '../../components/LandingPage/LatestNews/LatestNews'
import blogBackround from '../../assets/images/Blog.png'


export default function Home() {
  return (
    <div className=''>
      <Hero></Hero>

      <div className='max-w-[1200px] mx-auto'>
        <Service></Service>
      </div>
      <div className='relative ' >

        <div className='max-w-[1200px] z-2 py-[100px] mx-auto'>
          <Features></Features>
        </div>
        <div className='absolute  z-1 sm:top-50 top-70 '>
          <img className='sm:w-[100px] w-[50px]' src={pepe} alt="" />
        </div>

      </div>


      <div data-aos="fade-up" className=''>

        <Cetagories></Cetagories>
      </div>

      <div className='my-15'>
        <Counter></Counter>
      </div>

      <div className='max-w-[1200px] mx-auto'>
        <BestSaller ></BestSaller>
      </div>


      <div className='bg-center bg-cover my-10' style={{
        backgroundImage : "url('https://i.ibb.co.com/Kc0xN54B/Blog.png')"
      }}>
        <div className='max-w-[1200px] mx-auto'>

          <LatestNews></LatestNews>

        </div>
      </div>
    </div>
  )
}
