import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Product } from "@/interfaces";

const productIntCart: Product[] = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  if (productIntCart.length === 0) {
    redirect("/empty");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Title */}
      <div className="mb-10">
        <Title title="Carrito de compras" />

        <p className="text-gray-500 mt-2">
          Revisa tus productos antes de finalizar la compra.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
        {/* Products */}
        <section className="xl:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Tus productos</h2>

              <span className="text-sm text-gray-500">
                {productIntCart.length} productos en el carrito
              </span>
            </div>

            <Link
              href="/"
              className="
                text-sm
                font-medium
                underline-offset-4
                hover:underline
                text-gray-600
                hover:text-black
                transition-colors
              "
            >
              Seguir comprando
            </Link>
          </div>

          {/* Product List */}
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
                {/* Product Image */}
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={140}
                    height={140}
                    priority
                    className="
                      h-[140px]
                      w-[140px]
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Categoría: {product.gender}
                    </p>

                    <p className="mt-3 text-2xl font-bold">${product.price}</p>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <QuantitySelector quantity={2} />

                    <button
                      className="
                        text-sm
                        font-medium
                        text-red-500
                        hover:text-red-700
                        transition-colors
                        cursor-pointer
                      "
                    >
                      Remover producto
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Checkout */}
        <aside
          className="
            sticky
            top-24
            rounded-3xl
            border
            border-gray-200
            bg-white/90
            backdrop-blur-sm
            p-8
            shadow-xl
          "
        >
          <h2 className="text-2xl font-bold mb-6">Resumen de orden</h2>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Productos</span>
              <span>{productIntCart.length}</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>$100</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Impuestos (15%)</span>
              <span>$100</span>
            </div>

            <div className="border-t border-gray-200 pt-5 flex justify-between items-center">
              <span className="text-xl font-semibold">Total</span>

              <span className="text-3xl font-bold">$100</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Link
            href="/checkout/address"
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
            Finalizar compra
          </Link>

          {/* Secure text */}
          <p className="mt-4 text-center text-xs text-gray-400">
            Pago seguro y protegido
          </p>
        </aside>
      </div>
    </div>
  );
}
