import Image from "next/image";
import React from "react";
import fundo from "../../../public/assets/fundo.svg";

function Plans() {
  const plans = [
    
    {
      title: "PET PLUS",
      price: 49.90,
      features: [
        { text: "Rastreamento Pet", included: true },
        { text: "Clube de Benefícios", included: true },
        { text: "Assistência 24h (0800 848 1223)", included: true },
        { text: "Transporte Veterinário Emergencial", included: true },
        { text: "Consulta veterinária Emergencial", included: true },
        { text: "Consulta Veterinária", included: true },
        { text: "Agendamento de consulta", included: true },
        { text: "Plano Funerário", included: false },
      ],
    },
    {
      title: "PET GOLD",
      price: 79.90,
      features: [
        { text: "Rastreamento Pet", included: true },
        { text: "Clube de Benefícios", included: true },
        { text: "Assistência 24h (0800 848 1223)", included: true },
        { text: "Transporte Veterinário Emergencial", included: true },
        { text: "Consulta veterinária Emergencial", included: true },
        { text: "Consulta Veterinária", included: true },
        { text: "Agendamento de consulta", included: true },
        { text: "Plano Funerário", included: true },
      ],
    },
    {
      title: "PET RASTREAMENTO",
      price: 39.90,
      features: [
        { text: "Rastreamento Pet", included: true },
        { text: "Clube de Benefícios", included: true },
        { text: "Assistência 24h (0800 848 1223)", included: true },
        { text: "Transporte Veterinário Emergencial", included: false },
        { text: "Consulta veterinária Emergencial", included: false },
        { text: "Consulta Veterinária", included: false },
        { text: "Agendamento de consulta", included: false },
        { text: "Plano Funerário", included: false },
      ],
    },
  ];

  return (
    <div className="bg-blue-400">
      <section className="p-8 rounded-lg">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
        Escolha o melhor plano para o seu companheiro!
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-6"
        >
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            {plan.title}
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">R$</span>
            <span className="text-5xl font-extrabold tracking-tight">
              {plan.price}
            </span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /mês
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className={`flex items-center ${
                  feature.included ? "" : "line-through decoration-gray-500"
                }`}
              >
                <svg
                  className={`flex-shrink-0 w-4 h-4 ${
                    feature.included
                      ? "text-blue-700 dark:text-blue-500"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          <a
            type="button"
            className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Escolher Plano
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

export default Plans;
