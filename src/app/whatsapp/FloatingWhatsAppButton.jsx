import React from 'react';
import Image from 'next/image';
import whatsapp from './../../../public/assets/whatsapp.svg'; // Substitua pelo caminho real do seu ícone do WhatsApp

function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/1234567890" // Substitua pelo seu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center animate-bounce transition-colors duration-300"
      >
        <Image

          src={whatsapp}
          alt="WhatsApp"
          width={64}
          height={64}
          className="text-white"
        />
      </a>
    </div>
  );
}

export default FloatingWhatsAppButton;
