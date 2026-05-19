import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components";
import { initialData } from "@/seed/seed";

const productIntCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <Title
          title="Verificar orden"
          subtitle="Revisa tu información antes de confirmar la compra"
        />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
        {/* Products */}
        <section className="xl:col-span-2">
          {/* Top */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Productos</h2>

              <p className="text-sm text-gray-500">
                {productIntCart.length} productos en tu orden
              </p>
            </div>

            <Link
              href="/cart"
              className="
                text-sm
                font-medium
                text-gray-600
                underline-offset-4
                hover:underline
                hover:text-black
                transition-colors
              "
            >
              Editar carrito
            </Link>
          </div>

          {/* Products List */}
          <div className="flex flex-col gap-5">
            {productIntCart.map((product) => (
              <article
                key={product.slug}
                className="
                  group
                  flex
                  gap-5
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white/80
                  backdrop-blur-sm
                  p-5
                  shadow-sm
                  transition-all
                  hover:shadow-md
                "
              >
                {/* Image */}
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={140}
                    height={140}
                    priority
                    className="
                      w-[120px]
                      h-[120px]
                      sm:w-[140px]
                      sm:h-[140px]
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-gray-500">Cantidad: 3</p>

                  <p className="mt-1 text-gray-500">
                    Precio unitario: ${product.price}
                  </p>

                  <p className="mt-4 text-2xl font-bold">
                    ${product.price * 3}
                  </p>
                </div>
              </article>
            ))}
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
          {/* Address */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold">Dirección</h2>

              <Link
                href="/checkout/address"
                className="
                  text-sm
                  text-gray-500
                  hover:text-black
                  hover:underline
                "
              >
                Editar
              </Link>
            </div>

            <div className="space-y-1 text-gray-600">
              <p className="text-xl font-semibold text-black">Ratón Pérez</p>

              <p>Av. Partido Azul 122</p>
              <p>Rancagua</p>
              <p>Sexta Región</p>
              <p>CP 121212</p>
              <p>+56 9 1234 5678</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-8" />

          {/* Order Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Resumen</h3>

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
                <span>Impuestos (15%)</span>
                <span>$15</span>
              </div>

              <div className="border-t border-gray-200 pt-5 flex justify-between items-center">
                <span className="text-xl font-semibold text-black">Total</span>

                <span className="text-3xl font-bold text-black">$115</span>
              </div>
            </div>
          </div>

          {/* Terms */}
          <p className="mt-8 text-xs leading-relaxed text-gray-400">
            Al hacer clic en{" "}
            <span className="font-medium text-gray-600">“Colocar orden”</span>,
            aceptas nuestros{" "}
            <a
              href="#"
              className="underline hover:text-black transition-colors"
            >
              términos y condiciones
            </a>{" "}
            y{" "}
            <a
              href="#"
              className="underline hover:text-black transition-colors"
            >
              política de privacidad
            </a>
            .
          </p>

          {/* Button */}
          <Link
            href="/orders/123456"
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
            Colocar orden
          </Link>

          <p className="mt-4 text-center text-xs text-gray-400">
            Pago seguro y protegido
          </p>
        </aside>
      </div>
    </div>
  );
}
