"use client";
import React, { createContext } from "react";
import petRei from "./../../../public/assets/pet-rei.svg";
import Image from "next/image";
import { motion } from "framer-motion";

function Cta() {
  createContext();

  return (
    <div>
      <section className="relative bg-[#FFCC00] body-font" id="cta">
  <div className="container px-5 py-14 mx-auto relative z-10">
    <div className="lg:w-3/4 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <Image src={petRei} alt="Cachorrinho" width={300} height={600} className="p-2" />
      <h1 className="flex-grow sm:pr-10 text-3xl font-bold title-font text-[#001E5F]">
        Entre em contato agora mesmo pelo WhatsApp e encontre o melhor
        plano para o seu pet!{" "}
      </h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex-shrink-0 text-white font-semibold bg-[#001E5F] border-0 py-2 px-8 focus:outline-none hover:bg-[#38b6ff] rounded text-lg mt-10 sm:mt-0"
      >
        Entrar em Contato
      </motion.button>
    </div>
  </div>
  <div className="absolute inset-x-0 bottom-0 overflow-hidden -z-10">
    <svg viewBox="0 0 1440 320" className="w-full h-auto">
      <path
        fill="#FFCC00"
        d="M0,128L48,160C96,192,192,256,288,266.7C384,277,480,235,576,186.7C672,139,768,85,864,96C960,107,1056,181,1152,213.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L0,320Z"
      ></path>
    </svg>
  </div>
</section>

    </div>
  );
}

export default Cta;
