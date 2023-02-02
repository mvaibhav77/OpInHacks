import React from 'react'
import { About } from '../../components/About/About'
import { Hero } from '../../components/Hero/Hero'
import Navbar from "../../components/Navbar/Navbar"
import "../Home/Home.css"

export const Home = () => {
  return (
    <div className='homepage-container'>
      <Navbar/>
        <Hero/>
        <About/>
    </div>
  )
}
