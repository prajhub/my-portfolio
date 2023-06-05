import React from 'react'
import { useNavigate } from 'react-router-dom';


const Work = () => {

    const navigate = useNavigate()

    const redirectToJustDoit = () => {
        window.location.href = 'https://just-do-it-to-do-app.vercel.app/';
      };

      const redirectToStorex = () => {
        window.location.href = 'https://data-landing.vercel.app/';
      };



 const redirectToTakeatrip = () => {
        window.location.href = 'https://github.com/prajhub/TakeaTrip';
      };

    return (
        <>

            <section className='px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-[1400px] mx-auto md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-48 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1400px] '>
                    <div className=' lg:w-[350px]'>
                        <img data-aos='fade-down' data-aos-delay='400' className="object-cover  w-full h-72 " src='https://res.cloudinary.com/dhngfjx6o/image/upload/v1685963888/takeatripphoto_uwrbpv.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p data-aos='fade-right' data-aos-delay='500' className="text-2xl font-extrabold font-Libre">Takeatrip</p>
                            <div className="md:h-28"> 
            <p data-aos='fade-right' data-aos-delay='600' className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
                Takeatrip is a complete travel application built using the MERN stack and styled with Tailwind CSS. The application allows users to view and book hotel rooms and other services.
            </p>
        </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <button onClick={redirectToTakeatrip} data-aos='fade-right' data-aos-delay='700'  className='inline-flex w-[160px] items-center justify-center px-8 py-2 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10'>View Project</button>
                                <span onClick={() => navigate('/work')} data-aos='fade-right' data-aos-delay='700' className='underline tracking-4 hover:cursor-pointer'>
                                    View All Projects
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Next Project */}
                    <div className=' lg:w-[350px]'>
                        <img data-aos='fade-down' data-aos-delay='400' className="object-cover  w-full h-72 " src='https://res.cloudinary.com/dhngfjx6o/image/upload/v1685963155/justdoit_mo9bmi.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p data-aos='fade-right' data-aos-delay='500' className="text-2xl font-extrabold font-Libre">Just Do It</p>
                            <div className='md:h-28'>
                            <p data-aos='fade-right' data-aos-delay='600' className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
                           This is a very basic react application where you can add and delete things to do from a list.
                            </p>
                            </div>
                            
                            <div className='flex flex-col gap-2 mt-4'>
                                <button onClick={redirectToJustDoit} data-aos='fade-right' data-aos-delay='700'  className='inline-flex w-[160px] items-center justify-center px-8 py-2 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10'>View Project</button>
                                <span onClick={() => navigate('/work')} data-aos='fade-right' data-aos-delay='700' className='underline tracking-4 hover:cursor-pointer'>
                                    View All Projects
                                </span>
                            </div>
                        </div>
                    </div>

                     {/* Next Project */}
                     <div className=' lg:w-[350px]'>
                        <img data-aos='fade-down' data-aos-delay='400' className="object-cover  w-full h-72 " src='https://res.cloudinary.com/dhngfjx6o/image/upload/v1685962861/storex_w8ynaa.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p data-aos='fade-right' data-aos-delay='500' className="text-2xl font-extrabold font-Libre">Storex</p>
                    <div className='md:h-28'>
                    <p data-aos='fade-right' data-aos-delay='600' className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
                               This project is a single landing page made for a cloud data storage company name storex. 
                            </p>
                    </div>
                            
                            <div className='flex flex-col gap-2 mt-4'>
                                <button onClick={redirectToStorex} data-aos='fade-right' data-aos-delay='700'  className='inline-flex w-[160px] items-center justify-center px-8 py-2 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10'>View Project</button>
                                <span onClick={() => navigate('/work')} data-aos='fade-right' data-aos-delay='700' className='underline tracking-4 hover:cursor-pointer'>
                                    View All Projects
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Work
