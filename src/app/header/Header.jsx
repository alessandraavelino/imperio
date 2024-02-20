import React from 'react'
import Image from 'next/image'
import logo from './../../../public/assets/logo.png'

function Header() {
  return (
    <div>
        <header className="text-[#001E5F] body-font shadow bottom-1 font-semibold">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image src={logo} width={100} height={100} alt="Logotipo da Império Pet"/>
                <span className="ml-3 text-xl text-[#001E5F] font-bold">Império Pet</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                    <a className="mr-5 hover:underline cursor-pointer">Início</a>
                    <a className="mr-5 hover:underline cursor-pointer">Serviços</a>
                    <a className="mr-5 hover:underline cursor-pointer">Sobre</a>
                    <a className="mr-5 hover:underline cursor-pointer">Nossos Planos</a>
                </nav>
                <button className="inline-flex items-center bg-[#001E5F] text-white border-0 py-1 px-3 focus:outline-none hover:bg-[#5282ea] rounded text-base mt-4 md:mt-0">
                    Contato
                </button>
            </div>
            </header>
    </div>
  )
}

export default Header