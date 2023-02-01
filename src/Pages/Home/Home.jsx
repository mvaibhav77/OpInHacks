import React from 'react'
import { About } from '../../components/About/About'
import { Hero } from '../../components/Hero/Hero'

import "../Home/Home.css"

export const Home = () => {
  return (
    <div className='homepage-container'>
        
        <Hero/>
        <About/>
    </div>
  )
}
