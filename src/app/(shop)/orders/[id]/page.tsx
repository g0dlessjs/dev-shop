import Image from "next/image";
import clsx from "clsx";

import { IoCardOutline } from "react-icons/io5";

import { Title } from "@/components";
import { initialData } from "@/seed/seed";

const productIntCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: Promise<{ id: string }>;
}

export default async function OrderPage({ params }: Props) {
  const { id } = await params;

  const isPaid = true;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <Title
          title={`Orden #${id}`}
          subtitle="Detalle y estado de tu compra"
        />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
        {/* Products */}
        <section className="xl:col-span-2">
          {/* Status */}
          <div
            className={clsx(
              "mb-8 flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-sm",
              {
                "border-green-200 bg-green-50 text-green-700": isPaid,
                "border-red-200 bg-red-50 text-red-700": !isPaid,
              },
            )}
          >
            <IoCardOutline size={28} />

            <div className="flex flex-col">
              <span className="font-bold">
                {isPaid ? "Orden pagada" : "Pago pendiente"}
              </span>

              <span className="text-sm opacity-80">
                {isPaid
                  ? "Tu pago fue procesado correctamente"
                  : "Estamos esperando la confirmación del pago"}
              </span>
            </div>
          </div>

          {/* Products Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Productos</h2>

            <p className="text-sm text-gray-500">
              {productIntCart.length} artículos comprados
            </p>
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

                {/* Product Info */}
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
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Resumen de orden</h2>

            <p className="text-sm text-gray-500 mt-1">
              Información de entrega y pago
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dirección de entrega</h3>

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

          {/* Totals */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Totales</h3>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between">
                <span>Productos</span>
                <span>3 artículos</span>
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

          {/* Payment Status */}
          <div
            className={clsx(
              "mt-8 flex items-center gap-3 rounded-2xl border px-5 py-4",
              {
                "border-green-200 bg-green-50 text-green-700": isPaid,
                "border-red-200 bg-red-50 text-red-700": !isPaid,
              },
            )}
          >
            <IoCardOutline size={24} />

            <div className="flex flex-col">
              <span className="font-bold">
                {isPaid ? "Pago confirmado" : "Pendiente de pago"}
              </span>

              <span className="text-xs opacity-80">
                {isPaid
                  ? "Gracias por tu compra"
                  : "Completa el pago para procesar la orden"}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
