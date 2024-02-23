import React from 'react'

function Cta() {
  return (
    <div>
        <section className="text-gray-600 bg-[#FFCC00] body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 className="flex-grow sm:pr-16 text-2xl font-bold title-font text-[#001E5F]">Entre em contato agora mesmo pelo WhatsApp e encontre o melhor plano para o seu pet! </h1>
                <button className="flex-shrink-0 text-white font-semibold bg-[#001E5F] border-0 py-2 px-8 focus:outline-none hover:bg-[#2A7DAF] rounded text-lg mt-10 sm:mt-0">Entrar em Contato</button>
                </div>
            </div>
            </section>
    </div>
  )
}

export default Cta