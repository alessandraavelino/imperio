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
    <div class="justify-center text-center p-20">
      
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Por que possuir um Plano Pet</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Contratar uma proteção pet é importante por diversos motivos que garantem o bem-estar e a segurança do seu animal de estimação.</p>
<a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Saber mais
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>


<div class="row flex p-10 gap-10">
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Assistência Veterinária</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Acesso regular a consultas, vacinas e check-ups, prevenindo doenças e promovendo seu bem-estar</p>

</div>
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Cobertura para Emergência</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Acidentes podem acontecer a qualquer hora. A proteção pet oferece suporte imediato, evitando gastos altos em emergências</p>

</div>
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Bem-estar Continuado</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">cuidados regulares como banho, tosa e até acompanhamento nutricional, assegurando que seu pet viva de forma saudável e feliz</p>
</div>
</div>


    </div>
  );
}

export default Services;
