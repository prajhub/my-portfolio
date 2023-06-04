import React from 'react'
import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'
import Work from '../Components/Work'
import AboutMe from '../Components/AboutMe'
import Socials from '../Components/Socials'

const HomePage = () => {
  return (
    <>
    
        <NavBar/>
        <Hero/>
        <Work/>
        <AboutMe/>
        <Socials/>
    </>
  )
}

export default HomePage