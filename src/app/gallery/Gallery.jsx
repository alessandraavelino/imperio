import React from 'react'
import Image from 'next/image'

import foto1 from './../../../public/assets/1.svg'
import foto2 from './../../../public/assets/2.svg'
import foto3 from './../../../public/assets/3.svg'
import foto4 from './../../../public/assets/4.svg'
import foto5 from './../../../public/assets/5.svg'
import foto6 from './../../../public/assets/6.svg'

function Gallery() {
  return (
  <div>
    <section class="text-gray-600 body-font" id="gallery">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#001E5F]">Galeria</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base ">Clique <span className="underline"><a className="text-[#001E5F] font-medium" href="">aqui</a></span> e compartilhe conosco um momento especial com o seu pet!</p>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={foto1} />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-xl title-font font-bold text-[#001E5F] mb-1">Imperiador</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Husky Siberiano</h1>
                    <p class="leading-relaxed">Foto tirada durante um passeio durante uma caminhada na lagoa em João Pessoa.</p>
                </div>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={foto2} />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-xl title-font font-bold text-[#001E5F] mb-1">Nome do Pet</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Raça</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={foto3} />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-xl title-font font-bold text-[#001E5F] mb-1">Nome do Pet</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Raça</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={foto4} />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-xl title-font font-bold text-[#001E5F] mb-1">Nome do Pet</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Raça</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={foto5} />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-xl title-font font-bold text-[#001E5F] mb-1">Nome do Pet</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Raça</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={foto6} />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-xl title-font font-bold text-[#001E5F] mb-1">Nome do Pet</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Raça</h1>
                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
  </div>
        

  )
}

export default Gallery