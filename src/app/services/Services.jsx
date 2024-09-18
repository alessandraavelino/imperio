"use client"
import React from "react";

function Services() {
  return (
    <div className="justify-center text-center p-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#001E5F] md:text-5xl lg:text-6xl dark:text-white">
        Por que possuir um Plano Pet
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Contratar uma proteção pet é importante por diversos motivos que garantem o bem-estar e a segurança do seu animal de estimação.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <div className="max-w-sm p-6 bg-white border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Assistência Veterinária
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Acesso regular a consultas, vacinas e check-ups, prevenindo doenças
            e promovendo seu bem-estar.
          </p>
        </div>

        <div className="max-w-sm p-6 bg-white border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Cobertura para Emergência
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Acidentes podem acontecer a qualquer hora. A proteção pet oferece
            suporte imediato, evitando gastos altos em emergências.
          </p>
        </div>

        <div className="max-w-sm p-6 bg-white border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Bem-estar Continuado
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Cuidados regulares como banho, tosa e até acompanhamento
            nutricional, assegurando que seu pet viva de forma saudável e feliz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
