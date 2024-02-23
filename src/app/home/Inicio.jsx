"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import banner from './../../../public/assets/banner.svg'
import detalhe from './../../../public/assets/detalhe-home.png'
import patas1 from './../../../public/assets/patas1.svg'
function Inicio() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, [])
  return (
    <div>

        <section className="text-[#001E5F] body-font" id="home">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h3 className="title-font sm:text-4xl text-3xl mb-4 text-[#2A7DAF]">Império Pet | Seu plano amigo
                </h3>
                
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#001E5F]">Proporcionamos a cada pet o <span className="text-[#2A7DAF]">amor</span> e <span className="text-[#2A7DAF]">cuidado</span> que eles merecem.</h1>
                
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-[#001E5F] border-0 py-2 px-6 focus:outline-none hover:bg-[#2A7DAF] rounded text-lg">Ver Planos</button>
                    <button className="ml-4 inline-flex text-[#001E5F] font-medium border-0 py-2 px-6 focus:outline-none hover:underline text-lg">Entrar em contato</button>
                </div>
                
            
                
                </div>
                <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 transition-opacity duration-1000 ease-in ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                    <Image className="transition duration-700 ease-in-out" src={banner} width={720} height={600} alt="Logotipo da Império Pet"/>
                </div>
                
            </div>
            
            </section>
    </div>
  )
}

export default Inicio