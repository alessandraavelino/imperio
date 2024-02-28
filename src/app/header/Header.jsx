import React from 'react'
import Image from 'next/image'
import logo from './../../../public/assets/logo.png'
import Link from 'next/link';

function Header() {
  return (
    <div>
        <header className="text-[#001E5F] body-font shadow bottom-1 font-semibold">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image src={logo} width={100} height={100} alt="Logotipo da Império Pet"/>
                <span className="ml-3 text-xl text-[#001E5F] font-bold">Império Pet &#174;</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                    <a href="#home" className="mr-5 hover:underline cursor-pointer">Início</a>
                    <a href="#services" className="mr-5 hover:underline cursor-pointer">Serviços</a>
                    <a href="#about" className="mr-5 hover:underline cursor-pointer">Sobre</a>
                    <a href="#gallery" className="mr-5 hover:underline cursor-pointer">Galeria</a>
                </nav>
                <a href="#contact" className="inline-flex items-center bg-[#001E5F] cursor-pointer text-white border-0 py-1 px-3 focus:outline-none hover:bg-[#2A7DAF] rounded text-base mt-4 md:mt-0">
                    Contato
                </a>
            </div>
            </header>
    </div>
  )
}

export default Header