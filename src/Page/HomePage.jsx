import React from 'react'
import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'
import Work from '../Components/Work'
import AboutMe from '../Components/AboutMe'
import Socials from '../Components/Socials'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <>
    
        <NavBar/>
        <Hero/>
        <Work/>
        <AboutMe/>
        <Socials/>
        <Footer/>
        
    </>
  )
}

export default HomePage