import React from "react";
import Image from "next/image";
import logo from "./../../../public/assets/logo.png";
import hashtag from "./../../../public/assets/hashtag.png";
function Footer() {
  return (
    <div>
      

<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <Image src={logo} class="w-20" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Império Pet</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Menu</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Início</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Sobre</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siga-nos</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://instagram.com/souimperiopet" target="_blank" class="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://facebook.com/souimperiopet" target="_blank" class="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Fale conosco</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">0800 848 1223</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">imperiopetjp@gmail.com</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Império Pet</a>. Todos os direitos reservados.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.311.974.974 1.249 2.242 1.31 3.608.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.31 3.608-.975.974-2.243 1.249-3.608 1.31-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.31-.974-.975-1.249-2.243-1.31-3.608-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.062-1.366.337-2.633 1.31-3.608.975-.974 2.242-1.249 3.608-1.31 1.267-.058 1.647-.07 4.85-.07zm0-2.163C8.697 0 8.29.013 7.052.072 5.819.132 4.693.35 3.776 1.268c-.918.918-1.136 2.043-1.195 3.276C2.013 8.29 2 8.697 2 12s.013 3.71.072 4.948c.06 1.233.278 2.359 1.195 3.276.918.918 2.044 1.136 3.276 1.195C8.29 21.987 8.697 22 12 22s3.71-.013 4.948-.072c1.233-.06 2.359-.278 3.276-1.195.918-.918 1.136-2.043 1.195-3.276.059-1.238.072-1.645.072-4.948s-.013-3.71-.072-4.948c-.06-1.233-.278-2.359-1.195-3.276-.918-.918-2.044-1.136-3.276-1.195C15.71.013 15.303 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/>
</svg>

                  <span class="sr-only">Instagram</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    </div>
  );
}

export default Footer;
