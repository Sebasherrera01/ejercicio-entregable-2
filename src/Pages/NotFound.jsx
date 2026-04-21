import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-amber-400 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe. Vuelve al inicio para
          continuar navegando.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
