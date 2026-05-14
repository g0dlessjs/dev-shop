import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

const categories = {
  men: "hombres",
  women: "mujeres",
  kids: "niños",
  unisex: "unisex",
};

type Category = keyof typeof categories;

interface Props {
  params: Promise<{
    id: Category;
  }>;
}

export default async function ({ params }: Props) {
  const { id } = await params;

  // validar categoría
  if (!categories[id]) {
    notFound();
  }

  const filteredProducts = products.filter((product) => product.gender === id);
  const categoryName =
    categories[id][0].toUpperCase() + categories[id].slice(1);

  return (
    <div>
      <Title
        title={`Productos de ${categoryName}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
