import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-amber-500/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
              URBAN THREADS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefiniendo el estilo urbano con diseños minimalistas y calidad
              premium.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">
              ENLACES
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/productos"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">
              AYUDA
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Guía de tallas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Envíos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  Devoluciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide">
              SÍGUENOS
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                f
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Urban Threads. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
