'use client';
import React, { useState } from 'react';

const CookieConsent = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  const handleConsent = () => {
    setConsentGiven(true);
    // Puedes agregar lógica adicional aquí, como guardar el consentimiento en localStorage o una cookie.
  };

  // Si ya se otorgó el consentimiento, no mostramos el mensaje de cookies.
  if (consentGiven) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-orange-500 border-t-2 border-white">
      <div className="container mx-auto py-4 flex justify-between items-center text-white">
        <p>
          Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar utilizando el sitio, aceptas nuestro uso de cookies.
        </p>
        <a
          className="bg-white text-orange-500 px-4 py-2 rounded-md hover:bg-orange-100 transition duration-300 border border-white"
          onClick={handleConsent}
        >
          Aceptar
        </a>
      </div>
    </div>
  );
};

export default CookieConsent;
