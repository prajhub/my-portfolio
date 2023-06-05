import React from 'react'

const Socials = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:pzlmagar@gmail.com';
      };

      const redirectToFacebook = () => {
        window.location.href = 'https://www.facebook.com/prazol.magar.777';
      };

      const redirectToLinkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/prajwal-thapa-magar-65933b212/';
      };

      const redirectToTwitter = () => {
        window.location.href = 'https://www.facebook.com/prazol.magar.777';
      };

      const redirectToGithub = () => {
        window.location.href = 'https://github.com/prajhub';
      };

    return (
        <>

            <section className=' w-full md:h-[500px]  mb-4 border-b border-b-stone-900'>
                <div className=' max-w-[1400px] mx-auto md:mt-8 mt-28 p-4'>
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 data-aos='fade-down' data-aos-delay='500' className=' md:visible md:text-5xl text-3xl font-bold font-Libre '>Don't be a stranger.</h1>
                        <span data-aos='fade-down' data-aos-delay='600' className=' hidden md:inline text-center tracking-1 mt-3'>I'm an active member on (some of) the social medias. Feel free to follow me, comment, or message me. I am excited to hear from you. Give me a shout.</span>
                        <p data-aos='fade-down' data-aos-delay='700'  className=' hidden md:inline tracking-1'>Or you can email me at 
                            <span onClick={handleEmailClick} className=' text-md text-[#68c8ce] underline ml-1 hover:cursor-pointer hover:text-black text-center'>pzlmagar@gmail.com</span>
                        </p>

                        <div className=' w-full items-center md:p-5 md:mt-16'>
                            <ul data-aos='fade-up' data-aos-delay='600' class="flex items-center justify-center mt-5 space-x-5">
                                <li>
                                    <div onClick={redirectToFacebook} class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg class="md:w-20 md:h-20  w-14 h-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                <div onClick={redirectToLinkedin} class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg className='md:w-20 md:h-20  w-14 h-14' fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg class="md:w-20 md:h-20  w-14 h-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <div onClick={redirectToGithub} class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                        <svg class="md:w-20 md:h-20  w-14 h-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Socials
