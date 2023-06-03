import React from 'react'

const Work = () => {
    return (
        <>

            <section className='px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-[1400px] mx-auto md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-48 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1400px] '>
                    <div className=' lg:w-[350px]'>
                        <img className="object-cover w-full h-72 " src='src\assets\work-1.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p className="text-2xl font-extrabold font-Libre">Takeatrip</p>

                            <p className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
                                Working at HelloSign was been a great experience. The team was very supportive, and collaborative. I had the opportunity to work on projects such as, the design of the website, online ads, blog illustrations, a booth for Dreamforce, swag, and in-product illustrations. We went through the acquisition by Dropbox.
                            </p>
                            <div className='flex flex-col gap-2 mt-4'>
                                <button className='inline-flex w-[160px] items-center justify-center px-8 py-2 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10'>View Project</button>
                                <span className='underline tracking-4 hover:cursor-pointer'>
                                    View All Projects
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Next Project */}
                    <div className=' lg:w-[350px]'>
                        <img className="object-cover w-full h-72 " src='src\assets\work-1.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p className="text-2xl font-extrabold font-Libre">Takeatrip</p>

                            <p className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
                                Working at HelloSign was been a great experience. The team was very supportive, and collaborative. I had the opportunity to work on projects such as, the design of the website, online ads, blog illustrations, a booth for Dreamforce, swag, and in-product illustrations. We went through the acquisition by Dropbox.
                            </p>
                            <div className='flex flex-col gap-2 mt-4'>
                                <button className='inline-flex w-[160px] items-center justify-center px-8 py-2 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10'>View Project</button>
                                <span className='underline tracking-4 hover:cursor-pointer'>
                                    View All Projects
                                </span>
                            </div>
                        </div>
                    </div>

                     {/* Next Project */}
                     <div className=' lg:w-[350px]'>
                        <img className="object-cover w-full h-72 " src='src\assets\work-1.png' alt="Projects"/>
                        <div className="flex flex-col gap-4 justify-center mt-8">
                            <p className="text-2xl font-extrabold font-Libre">Takeatrip</p>

                            <p className="text-sm font-md tracking-wide leading-relaxed text-gray-800">
                                Working at HelloSign was been a great experience. The team was very supportive, and collaborative. I had the opportunity to work on projects such as, the design of the website, online ads, blog illustrations, a booth for Dreamforce, swag, and in-product illustrations. We went through the acquisition by Dropbox.
                            </p>
                            <div className='flex flex-col gap-2 mt-4'>
                                <button className='inline-flex w-[160px] items-center justify-center px-8 py-2 text-base font-medium text-center text-white border border-black bg-black  hover:bg-[#000B3A] focus:ring-4 focus:ring-gray-10'>View Project</button>
                                <span className='underline tracking-4 hover:cursor-pointer'>
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
