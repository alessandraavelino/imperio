"use client";
import React, { createContext } from "react";
import petRei from "./../../../public/assets/pet-rei.svg";
import Image from "next/image";
import { motion } from "framer-motion";

function Cta() {
  createContext();

  return (
    <div>
      <section className="text-gray-600 bg-[#FFCC00] body-font" id="cta">
        <div className="container px-5 py-4 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <Image src={petRei} alt="Cachorrinho" width={300} height={300} />
            <h1 className="flex-grow sm:pr-16 text-2xl pl-5 font-bold title-font text-[#001E5F]">
              Entre em contato agora mesmo pelo WhatsApp e encontre o melhor
              plano para o seu pet!{" "}
            </h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex-shrink-0 text-white font-semibold bg-[#001E5F] border-0 py-2 px-8 focus:outline-none hover:bg-[#2A7DAF] rounded text-lg mt-10 sm:mt-0"
            >
              Entrar em Contato
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
