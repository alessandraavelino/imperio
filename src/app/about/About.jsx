"use client"

import React, { useEffect, useState } from 'react';


function About() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
      }, []);

  return (
    <div>
        <section className="text-gray-600 body-font" id="about">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#001E5F]  mb-4">Sobre nós</h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-[#001E5F] inline-flex"></div>
                </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div className={`p-4 md:w-1/3 flex flex-col text-center items-center ${animate ? 'opacity-100 transform translate-x-0 transition duration-4000 ease-in' : 'opacity-0 transform -translate-x-10 transition duration-4000 ease-in'}`}>
                <div className="w-20 h-20 inline-flex items-center justify-center bg-[#001E5F] text-[#001E5F] mb-5 flex-shrink-0 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1532202802379-df93d543bac3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logotipo da Império Pet"/>
                </div>
                    <div className="flex-grow">
                    <h2 className="text-[#001E5F] text-lg title-font font-semibold mb-3">Nosso objetivo</h2>
                    <p className="leading-relaxed text-base">O nosso objetivo está totalmente ligado a saúde e bem-estar animal.
                        Fornecer cuidados de saúde acessíveis e de alta qualidade para animais de
                        estimação.</p>
                    </div>
                </div>
                <div className={`p-4 md:w-1/3 flex flex-col text-center items-center ${animate ? 'opacity-100 transform translate-x-0 transition duration-5000 ease-in' : 'opacity-0 transform -translate-x-10 transition duration-5000 ease-in'}`}>
                <div className="w-20 h-20 inline-flex items-center justify-center bg-indigo-100 text-[#001E5F] mb-5 flex-shrink-0 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logotipo da Império Pet"/>
                </div>
                    <div className="flex-grow">
                    <h2 className="text-[#001E5F] text-lg title-font font-semibold mb-3">Nossa Visão</h2>
                    <p className="leading-relaxed text-base">A nossa visão é impulsionada pela paixão por animais de estimação e pelo
                        compromisso com o bem-estar animal.</p>
                    </div>
                </div>
                <div className={`p-4 md:w-1/3 flex flex-col text-center items-center ${animate ? 'opacity-100 transform translate-x-0 transition duration-6000 ease-in' : 'opacity-0 transform -translate-x-10 transition duration-6000 ease-in'}`}>
                <div className="w-20 h-20 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logotipo da Império Pet"/>
                </div>
                    <div className="flex-grow">
                    <h2 className="text-[#001E5F] text-lg title-font font-semibold mb-3">Nossa Missão</h2>
                    <p className="leading-relaxed text-base">A nossa missão é proporcionar aos animais de estimação e seus
proprietários uma parceria de cuidado e proteção vitalícia.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </div>
  )
}

export default About