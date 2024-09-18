import React from 'react'
import Image from 'next/image'
import "./ctaPet.css"
import Link from 'next/link'
function CtaPet() {
  return (
    <div>
        <header class="flex flex-col items-center justify-center mb-10 bg-fixed bg-cover custom-img header-custom">
        <div class="p-5 w-full max-w-3xl bg-opacity-50">
          <h1 class="text-2xl sm:text-3xl md:text-3xl text-white font-bold text-center">
          Proteja Seu Amigo de Quatro Patas!
          </h1>
          <h5 class="pt-5 text-xl sm:text-xl text-white font-bold text-center">
Escolha o plano ideal para garantir a segurança e bem-estar do seu pet. Cuide de quem te faz feliz!
          </h5>
          <div class="pt-5 text-center">
          <Link
                href="#planos"
                className="text-white bg-[#FFCC00] border-0 py-2 font-semibold px-6 focus:outline-none hover:bg-[#001E5F] rounded text-lg"
              >
                Ver Planos
              </Link>

          </div>
        </div>
      </header>



    </div>
  )
}

export default CtaPet