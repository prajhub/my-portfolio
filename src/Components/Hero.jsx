import React from 'react'

const Hero = () => {
  return (
    <>

<section class="bg-[#FFADAD] dark:bg-gray-900 h-screen">
    <div class="grid max-w-[1400px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div class="mr-auto place-self-center lg:col-span-5">
            <h1 class="max-w-4xl font-Libre  mb-4 text-5xl font-extrabold tracking-widest leading-none md:text-6xl xl:text-8xl dark:text-white">I am a <span className='block text-white'>frontend</span>developer.</h1>
            <p class="max-w-2xl mb-6 font-light text-black-500 lg:mb-8 md:text-lg lg:text-md dark:text-gray-400">Crafting intuitive and engaging digital experiences. Skilled in several technologies. Constantly seeking to push the boundaries of design and user experience.</p>
            
            <a href="#" class="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center text-white border border-black bg-black rounded-lg hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                View Work
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-7 lg:flex">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/be28e495215925.5e9230c373fc4.png" alt="mockup"/>
        </div>                
    </div>
</section>
    
    </>
  )
}

export default Hero