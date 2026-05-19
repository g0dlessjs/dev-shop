import Image from "next/image";
import Link from "next/link";

import { titleFont } from "@/config/fonts";

export const PageNotFound = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[85vh]
        items-center
        justify-center
        overflow-hidden
        px-6
      "
    >
      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-gray-200/40
            blur-3xl
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-16
          lg:grid-cols-2
        "
      >
        {/* Text */}
        <div className="text-center lg:text-left">
          {/* 404 */}
          <h1
            className={`
              ${titleFont.className}
              text-[120px]
              sm:text-[160px]
              lg:text-[220px]
              leading-none
              font-black
              tracking-tight
              text-black
            `}
          >
            404
          </h1>

          {/* Title */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
            Página no encontrada
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-500">
            Lo sentimos, la página que estás buscando no existe, fue movida o
            nunca estuvo aquí.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/"
              className="
                flex
                items-center
                justify-center
                rounded-2xl
                bg-black
                px-8
                py-4
                text-white
                font-semibold
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-neutral-800
                active:scale-[0.98]
              "
            >
              Volver al inicio
            </Link>

            <Link
              href="/category/men"
              className="
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-300
                bg-white
                px-8
                py-4
                font-semibold
                transition-all
                duration-300
                hover:bg-gray-100
                hover:scale-[1.03]
                active:scale-[0.98]
              "
            >
              Explorar tienda
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div
            className="
              absolute
              h-[350px]
              w-[350px]
              rounded-full
              bg-gray-300/30
              blur-3xl
            "
          />

          <Image
            src="/images/starman_750x750.png"
            alt="Página no encontrada"
            width={600}
            height={600}
            priority
            className="
              relative
              z-10
              w-full
              max-w-[500px]
              object-contain
              drop-shadow-2xl
              animate-float
            "
          />
        </div>
      </div>
    </section>
  );
};
