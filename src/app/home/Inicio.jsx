"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div
            className="relative h-[100px] md:h-96 overflow-hidden rounded-lg"
          >
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image src={slider1} className="block w-full h-full object-cover" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image src={slider2} className="block w-full h-full object-cover" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image src={slider3} className="block w-full h-full object-cover" alt="..." />
            </div>
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 9l4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Inicio;
