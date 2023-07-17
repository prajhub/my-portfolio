import React from 'react'

const Projects = () => {

    const redirectToJustDoit = () => {
        window.location.href = 'https://just-do-it-to-do-app.vercel.app/';
      };

      const redirectToStorex = () => {
        window.location.href = 'https://data-landing.vercel.app/';
      };

      const redirectToTakeatrip = () => {
        window.location.href = 'https://github.com/prajhub/TakeaTrip';
      };

      const redirectToDirtySprite = () => {
        window.location.href = 'https://dirty-sprite-2qih1uh1f-prajhub.vercel.app/';
      };

      const redirectToMusicSansar = () => {
        window.location.href = 'https://jr-frontend-assignment-navy.vercel.app/';
      };

      const redirectToPandoraF = () => {
        window.location.href = 'https://pandora-fridge.vercel.app/';
      };


    return (
        <>
            <section className='px-4 py-16  sm:max-w-xl md:max-w-full  lg:max-w-[1400px] mx-auto md:px-24 lg:px-8 lg:py-20'>
                <div className='my-12 text-center'>
                    <span className='font-Libre text-7xl font-bold '>All Projects</span>
                </div>
                <div className='grid gap-48 md:mt-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1400px] '>
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




                    <div className=' lg:w-[350px]'>
                        <img data-aos='fade-down' data-aos-delay='400' className="object-cover  w-full h-72 " src='https://res.cloudinary.com/dhngfjx6o/image/upload/v1689603994/Screenshot_2023-07-17_201018_hyyaqy.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p data-aos='fade-right' data-aos-delay='500' className="text-2xl font-extrabold font-Libre">Dirty Sprite</p>
                            <div className='md:h-28'>
                            <p data-aos='fade-right' data-aos-delay='600' className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
                           This is a very basic React application that uses Fakestore API to get data on different products and display them based on category. Users can also view individual products.
                            </p>
                            </div>
                            
                            <div className='flex flex-col gap-2 mt-4'>
                                <button onClick={redirectToDirtySprite} data-aos='fade-right' data-aos-delay='700'  className='inline-flex w-[160px] items-center justify-center px-8 py-2 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10'>View Project</button>
                                <span onClick={() => navigate('/work')} data-aos='fade-right' data-aos-delay='700' className='underline tracking-4 hover:cursor-pointer'>
                                    View All Projects
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className=' lg:w-[350px]'>
                        <img data-aos='fade-down' data-aos-delay='400' className="object-cover  w-full h-72 " src='https://res.cloudinary.com/dhngfjx6o/image/upload/v1689604290/Screenshot_2023-07-17_201551_ccyrcg.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p data-aos='fade-right' data-aos-delay='500' className="text-2xl font-extrabold font-Libre">Music Sansar</p>
                    <div className='md:h-28'>
                    <p data-aos='fade-right' data-aos-delay='600' className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
                               It is a NextJS project that uses Spotify API to display top trending albums. The users can also search for artists to view all their released albums and also view individual details of the album. 
                            </p>
                    </div>
                            
                            <div className='flex flex-col gap-2 mt-4'>
                                <button onClick={redirectToMusicSansar} data-aos='fade-right' data-aos-delay='700'  className='inline-flex w-[160px] items-center justify-center px-8 py-2 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10'>View Project</button>
                                <span onClick={() => navigate('/work')} data-aos='fade-right' data-aos-delay='700' className='underline tracking-4 hover:cursor-pointer'>
                                    View All Projects
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className=' lg:w-[350px]'>
                        <img data-aos='fade-down' data-aos-delay='400' className="object-cover  w-full h-72 " src='https://res.cloudinary.com/dhngfjx6o/image/upload/v1689608537/Screenshot_2023-07-17_212334_qj9ap1.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p data-aos='fade-right' data-aos-delay='500' className="text-2xl font-extrabold font-Libre">Pandora Fridge</p>
                            <div className="md:h-28"> 
            <p data-aos='fade-right' data-aos-delay='600' className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
            PandoraFridge is a Work-In-Progress T3 Stack app that allows user to log in via Discord and add foods in a fridge with timer.
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



                   
                </div>
            </section>

        </>
    )
}

export default Projects
