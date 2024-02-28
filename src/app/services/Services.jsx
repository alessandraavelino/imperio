"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "./../../../public/assets/osso.svg";
import pata2 from "./../../../public/assets/patas2.svg";
import { MdVaccines, MdPets } from "react-icons/md";
import { FaUserDoctor, FaHospital, FaStore } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";

function Services() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  
  return (
    <div>
      <section className="text-white-600 body-font bg-[#FFCC00]" id="services">
        <div className="container px-5 py-12 mx-auto ">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <Image
              src={logo}
              width={300}
              height={200}
              alt="Logotipo da Império Pet"
            />
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-[#001E5F]">
              Nossos Serviços
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className={`xl:w-1/3 md:w-full p-4 w-full sm:w-1/2 lg:w-1/3 transition-opacity duration-6000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white text-ellipsis border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#001E5F] mb-4">
                  <FaUserDoctor />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Cuidados veterinários de qualidade
                </h2>
              </div>
            </div>
            <div className={`xl:w-1/3 md:w-full p-4 w-full sm:w-1/2 lg:w-1/3 transition-opacity duration-5000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white text-ellipsis border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#001E5F] mb-4">
                  <FaHospital />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Emergência e pronto-socorro
                </h2>
              </div>
            </div>
            <div className={`xl:w-1/3 md:w-full p-4 w-full sm:w-1/2 lg:w-1/3 transition-opacity duration-4000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white text-ellipsis border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#001E5F] mb-4">
                  <MdVaccines />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Vacinas e exames laboratóriais
                </h2>
                {/* <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p> */}
              </div>
            </div>
            <div className={`xl:w-1/3 md:w-full p-4 w-full sm:w-1/2 lg:w-1/3 transition-opacity duration-3000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white text-ellipsis border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#001E5F] mb-4">
                  <Ri24HoursFill />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Atendimento 24 horas
                </h2>
              </div>
            </div>
            <div className={`xl:w-1/3 md:w-full p-4 w-full sm:w-1/2 lg:w-1/3 transition-opacity duration-2000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white text-ellipsis border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#001E5F] mb-4">
                  <MdPets />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Cuidados especializados
                </h2>
              </div>
            </div>
            <div className={`xl:w-1/3 md:w-full p-4 w-full sm:w-1/2 lg:w-1/3 transition-opacity duration-1000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white text-ellipsis border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#001E5F] mb-4">
                  <FaStore />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Tudo de PetShop para seu pet
                </h2>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 font-bold text-white bg-[#001E5F] border-0 py-2 px-8 focus:outline-none hover:bg-[#2A7DAF] rounded text-lg">
            Saiba mais!
          </button>
          <Image
            src={pata2}
            width={300}
            height={200}
            alt="Logotipo da Império Pet"
          />
        </div>
      </section>
    </div>
  );
}

export default Services;
