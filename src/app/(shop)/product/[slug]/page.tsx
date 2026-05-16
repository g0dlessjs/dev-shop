import { titleFont } from "@/config/fonts";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { notFound } from "next/navigation";
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
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow mobile */}

      {/* Slideshow desktop */}
      <div className="col-span-1 md:col-span-2 ">
        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />
        <ProductSlideshow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <h1
          className={` ${titleFont.className} antialiased font-bold text-xl `}
        >
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Size Selector */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        {/* Quantity */}
        <QuantitySelector quantity={1} />
        {/* Add to cart */}
        <button className="btn-primary my-5 "> Agregar al carrito </button>
        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
