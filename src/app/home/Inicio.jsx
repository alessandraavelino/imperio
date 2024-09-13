"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import banner from "./../../../public/assets/banner.svg";
import hashtag from "./../../../public/assets/hashtag.png";
import slider1 from "./../../../public/assets/slider1.svg";
import slider2 from "./../../../public/assets/slider2.svg";
import slider3 from "./../../../public/assets/slider3.svg";

function Inicio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <header className="text-[#001E5F] body-font shadow bottom-1 font-semibold">
           

           <div id="default-carousel" class="relative w-full" data-carousel="slide">
               <div class="relative h-200 overflow-hidden rounded-lg md:h-96">
                   <div class="hidden duration-700 ease-in-out" data-carousel-item>
                       <Image src={slider1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                   </div>
                   <div class="hidden duration-700 ease-in-out" data-carousel-item>
                       <Image src={slider2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                   </div>
                   <div class="hidden duration-700 ease-in-out" data-carousel-item>
                       <Image src={slider3} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                   </div>

               </div>
               <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                   <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                   <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                   <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
               </div>
               <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                   <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                       <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                       </svg>
                       <span class="sr-only">Previous</span>
                   </span>
               </button>
               <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                   <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                       <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                       </svg>
                       <span class="sr-only">Next</span>
                   </span>
               </button>
           </div>
           
                       </header>
    </div>
  );
}

export default Inicio;
