import React from "react";
import Image from "next/image";
import logo from "./../../../public/assets/logo.png";
import hashtag from "./../../../public/assets/hashtag.png";
function Footer() {
  return (
    <div>
      <footer className="text-gray-600 justify-center body-font" id="footer">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-[#001E5F]">
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Logotipo da Império Pet"
              />
              <span className="ml-3 text-xl font-medium">Império Pet &#174;</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              O amor e o cuidado que seu pet merece!
            </p>
            <Image
                src={hashtag}
                width={150}
                height={150}
                className="pt-5"
                alt="Logotipo da Império Pet"
              />
          </div>
          <div className="flex-grow flex justify-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 justify-center w-full px-4">
              <h2 className="title-font font-medium text-[#001E5F] tracking-widest text-md mb-3">
                Menu
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="#home"
                    className="text-gray-600 hover:text-[#001E5F]"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-600 hover:text-[#001E5F]"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-[#001E5F]"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-600 hover:text-[#001E5F]"
                  >
                    Galeria
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-[#001E5F]"
                  >
                    Contato
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#001E5F] tracking-widest text-md mb-3">
                Acompanhe pelas redes
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://www.instagram.com/souimperiopet"
                    target="_blank"
                    className="text-gray-600 hover:text-[#001E5F]"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-[#001E5F]">Facebook</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-md text-center md:text-left">
              © 2024 Todos os direitos reservados —
              <a
                href="#footer"
                rel="noopener noreferrer"
                className="text-[#001E5F] ml-1"
              >
                Império Pet | Seu plano amigo
              </a>
            </p>
            {/* <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <p className='text-gray-600 ml-1 text-sm'>Desenvolvido por: 
                        <a href="https://www.instagram.com/__alessandraavelino"  rel="noopener noreferrer" className="text-gray-600 ml-1 text-sm underline" target="_blank">Alessandra</a>
                    </p>
                </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
