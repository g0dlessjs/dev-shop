import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";

import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
} from "@/components";

import { initialData } from "@/seed/seed";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
        {/* Images */}
        <section className="w-full">
          {/* Mobile */}
          <ProductMobileSlideshow
            images={product.images}
            title={product.title}
            className="block lg:hidden rounded-3xl overflow-hidden"
          />

          {/* Desktop */}
          <div className="hidden lg:block sticky top-24">
            <ProductSlideshow
              images={product.images}
              title={product.title}
              className="rounded-3xl overflow-hidden"
            />
          </div>
        </section>

        {/* Product Info */}
        <section className="flex flex-col">
          {/* Category */}
          <span className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
            {product.gender}
          </span>

          {/* Title */}
          <h1
            className={`
              ${titleFont.className}
              text-4xl
              sm:text-5xl
              font-bold
              tracking-tight
              text-gray-900
            `}
          >
            {product.title}
          </h1>

          {/* Price */}
          <div className="mt-5 flex items-center gap-4">
            <span className="text-4xl font-bold text-black">
              ${product.price}
            </span>

            <span className="rounded-full bg-black text-white text-xs px-3 py-1">
              En stock
            </span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-8" />

          {/* Size */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Selecciona una talla
            </h3>

            <SizeSelector
              selectedSize={product.sizes[0]}
              availableSizes={product.sizes}
            />
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Cantidad
            </h3>

            <QuantitySelector quantity={1} />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              className="
                flex-1
                rounded-2xl
                bg-black
                py-4
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-neutral-800
                hover:scale-[1.02]
                active:scale-[0.98]
                cursor-pointer
              "
            >
              Agregar al carrito
            </button>

            <button
              className="
                flex-1
                rounded-2xl
                border
                border-gray-300
                bg-white
                py-4
                font-semibold
                transition-all
                duration-300
                hover:bg-gray-100
                hover:scale-[1.02]
                active:scale-[0.98]
                cursor-pointer
              "
            >
              Comprar ahora
            </button>
          </div>

          {/* Description */}
          <div
            className="
              rounded-3xl
              border
              border-gray-200
              bg-white/80
              backdrop-blur-sm
              p-6
              shadow-sm
            "
          >
            <h3 className="text-lg font-bold mb-4">Descripción</h3>

            <p className="leading-8 text-gray-600">{product.description}</p>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
              "
            >
              <span className="text-sm text-gray-400">Envío</span>

              <p className="font-semibold mt-1">Gratis sobre $50</p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
              "
            >
              <span className="text-sm text-gray-400">Garantía</span>

              <p className="font-semibold mt-1">30 días</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
