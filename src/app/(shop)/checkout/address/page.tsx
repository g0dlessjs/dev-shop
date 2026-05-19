import Link from "next/link";

import { Title } from "@/components";

export default function AddressPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <Title
          title="Dirección de entrega"
          subtitle="Completa tus datos para continuar con la compra"
        />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Form */}
        <section className="lg:col-span-2">
          <div
            className="
              rounded-3xl
              border
              border-gray-200
              bg-white/80
              backdrop-blur-sm
              shadow-sm
              p-6
              sm:p-8
            "
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Nombres
                </label>

                <input
                  type="text"
                  placeholder="Juan"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>

              {/* Apellido */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Apellidos
                </label>

                <input
                  type="text"
                  placeholder="Pérez"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>

              {/* Dirección */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Dirección
                </label>

                <input
                  type="text"
                  placeholder="Av. Principal 123"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>

              {/* Dirección 2 */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Dirección 2 (Opcional)
                </label>

                <input
                  type="text"
                  placeholder="Departamento, oficina, etc."
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>

              {/* Código Postal */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Código Postal
                </label>

                <input
                  type="text"
                  placeholder="3400000"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>

              {/* Ciudad */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Ciudad
                </label>

                <input
                  type="text"
                  placeholder="Santiago"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>

              {/* País */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  País
                </label>

                <select
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-black
                    focus:bg-white
                    cursor-pointer
                  "
                >
                  <option value="">Selecciona un país</option>
                  <option value="CL">Chile</option>
                  <option value="AR">Argentina</option>
                  <option value="PE">Perú</option>
                  <option value="MX">México</option>
                </select>
              </div>

              {/* Teléfono */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Teléfono
                </label>

                <input
                  type="text"
                  placeholder="+56 9 1234 5678"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    outline-none
                    transition-all
                    focus:border-black
                    focus:bg-white
                  "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <aside
          className="
            sticky
            top-24
            rounded-3xl
            border
            border-gray-200
            bg-white/90
            backdrop-blur-sm
            shadow-xl
            p-8
          "
        >
          <h2 className="text-2xl font-bold mb-6">Resumen</h2>

          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between">
              <span>Productos</span>
              <span>3</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$100</span>
            </div>

            <div className="flex justify-between">
              <span>Impuestos</span>
              <span>$15</span>
            </div>

            <div className="border-t border-gray-200 pt-5 flex justify-between items-center">
              <span className="text-xl font-semibold text-black">Total</span>

              <span className="text-3xl font-bold text-black">$115</span>
            </div>
          </div>

          {/* Button */}
          <Link
            href="/checkout"
            className="
              mt-8
              flex
              items-center
              justify-center
              w-full
              rounded-2xl
              bg-black
              py-4
              text-white
              font-semibold
              transition-all
              hover:scale-[1.02]
              hover:bg-neutral-800
              active:scale-[0.98]
            "
          >
            Continuar compra
          </Link>

          <p className="mt-4 text-center text-xs text-gray-400">
            Tus datos están protegidos
          </p>
        </aside>
      </div>
    </div>
  );
}
