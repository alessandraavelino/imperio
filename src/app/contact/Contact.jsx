import React from 'react'

function Contact() {
  return (
    <div>
        <section className="font-semibold bg-[#FFCC00] body-font relative" id="contact">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe 
                    width="100%" 
                    height="100%" 
                    className="absolute inset-0" 
                    frameBorder="0" 
                    title="map" 
                    marginHeight="0" 
                    marginWidth="0" 
                    scrolling="no" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0554843470845!2d-34.828965025001466!3d-7.119568892884126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acddd737a6f849%3A0xf845ca00de9ba15c!2sImp%C3%A9rio%20Brasil%20Prote%C3%A7%C3%A3o%20Veicular%20-%20Jo%C3%A3o%20Pessoa%20PB!5e0!3m2!1spt-BR!2sbr!4v1708401734330!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"  // Estilo convertido para objeto JavaScript
                ></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Matriz</h2>
                        <p className="mt-1">Av. Pres. Epitácio Pessoa, 4940 - Loja 208 - Cabo Branco, João Pessoa - PB</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">E-MAIL</h2>
                    <a className="text-[#001E5F] leading-relaxed">souimperiopet@gmail.com</a>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">CONTATO</h2>
                    <p className="leading-relaxed">123-456-7890</p>
                    </div>
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Filial</h2>
                        <p className="mt-1">R. Otacílio Líra Cabral, 100 - Areia Branca, Guarabira - PB</p>
                    </div>
                    
                </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-[#FFCC00] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h1 className="text-[#001E5F] text-xl mb-1 font-bold title-font">Contato</h1>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-[#001E5F]">Nome</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-[#001E5F] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-[#001E5F]">E-mail</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-[#001E5F] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-[#001E5F]">Messagem</label>
                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-[#001E5F] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-[#001E5F] border-0 py-2 px-6 focus:outline-none hover:bg-[#2A7DAF] rounded text-lg">Enviar</button>
                </div>
            </div>
            </section>
    </div>
  )
}

export default Contact