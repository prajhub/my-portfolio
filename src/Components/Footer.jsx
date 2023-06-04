import React from 'react'

const Footer = () => {
  return (
   <>
    
    <footer class="relative z-10 bg-white  pb-5 lg:pt-7 max-w-[1400px] mx-auto lg:pb-20">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 sm:w-2/3 lg:w-3/12">
        <div class="mb-10 w-full">
          <a href="javascript:void(0)" class="mb-6 inline-block max-w-[160px]">
            <img
              src="https://res.cloudinary.com/dhngfjx6o/image/upload/v1685891219/logo-no-background_steplh.png"
              alt="logo"
              className="max-w-full"
            />
          </a>
         
        </div>
      </div>
      <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div class="mb-10 w-full">
         
          <ul className=' tracking-4 ml-10 md:ml-0'>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-colorhover:text-gray-700 mb-2 inline-block text-base leading-loose"
              >
               Work
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-gray-700 mb-2 inline-block text-base leading-loose"
              >
               About
              </a>
            </li>
           
          </ul>
        </div>
      </div>
      <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div class="mb-10 w-full">
         
          <ul className=' tracking-4 ml-10 md:ml-0'>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-gray-700 mb-2 inline-block text-base leading-loose"
              >
              Linkendin
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-gray-700 mb-2 inline-block text-base leading-loose"
              >
               GitHub
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-gray-700 mb-2 inline-block text-base leading-loose"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-gray-700 mb-2 inline-block text-base leading-loose"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
     
      <div class="w-full px-4 sm:w-1/2 lg:w-3/12">
        <div class="mb-10 text-center w-full">
          
         
        <p class="text-body-color  text-sm">
          All work ©2023 Prajwal Magar


          </p>
          <p class="text-body-color my-2 text-sm">Made in Kathmandu, Nepal</p>
          <p class="text-body-color  text-sm">Thanks for looking! 👀</p>
         
        </div>
      </div>
    </div>
  </div>
  <div>
    <span class="absolute left-0 bottom-0 z-[-1]">
      <svg
        width="217"
        height="229"
        viewBox="0 0 217 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
          fill="url(#paint0_linear_1179_5)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_5"
            x1="76.5"
            y1="281"
            x2="76.5"
            y2="1.22829e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3056D3" stop-opacity="0.08" />
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span class="absolute top-10 right-10 z-[-1]">
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
          fill="url(#paint0_linear_1179_4)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_4"
            x1="-1.63917e-06"
            y1="37.5"
            x2="75"
            y2="37.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#13C296" stop-opacity="0.31" />
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
</footer>
   
   </>
  )
}

export default Footer