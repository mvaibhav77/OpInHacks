import React from 'react'
import { About } from '../../components/About/About'
import { Hero } from '../../components/Hero/Hero'
import Navbar from "../../components/Navbar/Navbar"
import "../Home/Home.css"
import Footernew from '../../components/Footer/Footer'
import {Sponsors} from '../../components/Sponsors/Sponsors'
import { Faq } from '../../components/Faq/Faq'
import { Organizers } from '../../components/Organizers/Organizers'
export const Home = () => {
  return (
    <div className='homepage-container'>
      <Navbar/>
        <Hero/>
        <About/>
        <Organizers/>
        <Sponsors/>
        <Faq/>
        <Footernew/>
    </div>
  )
}
