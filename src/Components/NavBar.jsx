import React from 'react'

const NavBar = () => {
  return (
    <>
        
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto max-w-[1400px]">
    <a href="https://flowbite.com/" class="flex items-center flex-col">
        <img src="src\assets\pm-logo-zip-file\png\logo-no-background.png" class="h-6 mr-3 sm:h-9" alt="PM Logo" />
        <span class="self-center text-xs font-Libre tracking-widest   whitespace-nowrap dark:text-white">Prajwal Magar</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden  w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex  flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white text-base bg-blue-700 rounded font-semibold font-Barlow md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Work</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 text-base rounded hover:bg-gray-100 font-semibold   md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ml-10 font-Barlow"><span className='tracking-widest'>About</span></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar