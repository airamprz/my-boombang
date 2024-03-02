"use client";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <main className="flex items-center justify-center ml-auto">
      <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          ¡Bienvenido a BoomBang Alpha 0.1.1!
        </h1>
        <p className="text-lg mb-8">
          Gracias por participar en la versión de prueba de nuestro juego. ¡Haz
          clic en el botón de abajo para descargar la alpha!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="bg-white text-black border border-white px-6 py-3 rounded-md text-lg mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-white text-black border border-white px-6 py-3 rounded-md text-lg mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-500 text-white border border-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition duration-300 no-underline"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}
