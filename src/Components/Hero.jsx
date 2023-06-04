import React from 'react'

const Hero = () => {
  return (
    <>

<section className="bg-[#FFADAD]  md:h-screen">
    <div className="grid max-w-[1400px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-5">
            <h1 data-aos='fade-down' data-aos-delay='400' className="max-w-4xl font-Libre  mb-4 text-5xl font-extrabold tracking-widest leading-none md:text-6xl xl:text-8xl dark:text-white">I am a <span className='block text-white'>frontend</span>developer.</h1>
            <p data-aos='fade-down' data-aos-delay='500'className="max-w-2xl mb-6 font-normal text-black-500 lg:mb-8 md:text-lg lg:text-md dark:text-gray-400">Crafting intuitive and engaging digital experiences. Skilled in several technologies. Constantly seeking to push the boundaries of design and user experience.</p>
            
            <a href="#" data-aos='fade-down' data-aos-delay='600' className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10">
                View Work
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
            <img data-aos='fade-left' data-aos-delay='600' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/be28e495215925.5e9230c373fc4.png" alt="mockup"/>
        </div>                
    </div>
</section>
    
    </>
  )
}

export default Hero