"use client";

import clsx from "clsx";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="w-full border-t border-gray-200 mt-20 relative">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          {/* Logo + descripción */}
          <div className="flex flex-col gap-3 max-w-sm">
            <Link href="/" className="flex items-center gap-1 text-2xl">
              <span className="font-bold">Dev</span>
              <span className="font-light">| Shop</span>
            </Link>

            <p className="text-sm text-gray-500 leading-relaxed">
              Encuentra los mejores productos tecnológicos y accesorios con un
              diseño moderno y una experiencia rápida.
            </p>

            <span className="text-xs text-gray-400">
              © {currentYear} DevShop. Todos los derechos reservados.
            </span>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900">Empresa</h3>

              <Link
                href="/"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Inicio
              </Link>

              <Link
                href="/about"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Nosotros
              </Link>

              <Link
                href="/contact"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Contacto
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900">Legal</h3>

              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Política de Privacidad
              </Link>

              <Link
                href="/terms-of-use"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900">Ayuda</h3>

              <Link
                href="/locations"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Ubicaciones
              </Link>

              <Link
                href="/faq"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Preguntas Frecuentes
              </Link>

              <Link
                href="/support"
                className="text-gray-500 hover:text-black transition-colors"
              >
                Soporte
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
