import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            ESTILO URBANO
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6 tracking-tight">
            REDEFINIDO
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra colección exclusiva de ropa urbana minimalista
          </p>

          <Link
            to="/productos"
            className="inline-block px-8 py-4 border-2 border-dashed border-amber-400 bg-amber-400 text-gray-900 font-bold text-lg hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 transform hover:scale-105"
          >
            EXPLORAR COLECCIÓN
          </Link>
        </div>
      </div>
    </section>
  );
}
