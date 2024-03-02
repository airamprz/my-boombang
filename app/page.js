export default function Home() {
  return (
    <main className="flex items-center justify-center ml-auto">
      <div className="bg-blue-400 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">¡Bienvenido a BoomBang Alpha 0.1.1!</h1>
        <p className="text-lg mb-8">Gracias por participar en la versión de prueba de nuestro juego. ¡Haz clic en el botón de abajo para descargar la alpha!</p>
        <a
          href="https://www.mediafire.com/file/xottm4neiw93cds/BoomBang_Alpha_0.1.1.rar/file"
          className="bg-orange-500 text-white border border-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition duration-300 no-underline"
          download
        >
          Descargar Alpha 0.1.1
        </a>
      </div>
    </main>
  );
}
