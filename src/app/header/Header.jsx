"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from './../../../public/assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="text-[#001E5F] body-font shadow bottom-1 font-semibold">
        <div className="container mx-auto flex flex-wrap p-10 items-center justify-between">
          {/* Logo e nome da empresa */}
          <a className="flex items-center">
            <Image src={logo} width={70} height={70} alt="Logotipo da Império Pet" />
            {/* Nome aparece apenas em telas md ou maiores */}
            <span className="ml-3 text-xl text-[#001E5F] font-bold hidden md:block">Império Pet &#174;</span>
          </a>

          {/* Botão do Menu Mobile */}
          <button
            className="inline-flex items-center text-gray-900 hover:text-[#001E5F] focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Menu de navegação */}
          <nav
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:w-auto md:flex md:items-center md:space-x-8 flex flex-col md:flex-row mt-2 md:mt-0`}
          >
            <a href="#home" className="block md:inline-block mr-5 hover:underline cursor-pointer">
              Início
            </a>
            <a href="#services" className="block md:inline-block mr-5 hover:underline cursor-pointer">
              Serviços
            </a>
            <a href="#about" className="block md:inline-block mr-5 hover:underline cursor-pointer">
              Sobre
            </a>
            <a href="#gallery" className="block md:inline-block mr-5 hover:underline cursor-pointer">
              Galeria
            </a>
            <a
              href="#contact"
              className="block md:inline-block bg-[#001E5F] text-white py-1 px-3 rounded hover:bg-[#2A7DAF] mt-4 md:mt-0"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
