import React from 'react'

const AboutMe = () => {
  return (
    <>
        <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div class="max-h-96 md:h-screen">
        <img class="w-screen h-screen object-cover object-top" src="https://res.cloudinary.com/dhngfjx6o/image/upload/v1685891353/about-me-landing_bkvrid.png" alt=""/>
      </div>
      <div class="flex bg-[#feadac] p-10">
        <div class="mb-auto mt-auto max-w-2xl ">
          <h1 class=" text-4xl md:text-7xl font-bold tracking-4 uppercase font-Libre">Learn more about<span className='text-white'>me</span> </h1>
        
          <p className='tracking-2 text-md leading-relaxed text-gray-600 mt-8'>I am a self taught web developer. I'm from Kathmandu, Nepal, and love to make music on the side. I am passionate about creating clean and scalable web application. Thanks for looking!</p>
          <button class="bg-black tracking-4  rounded-md py-3 px-7 mt-6 text-white hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10">Learn about me</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default AboutMe