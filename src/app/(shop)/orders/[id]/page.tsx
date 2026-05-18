import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productIntCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5 hover:cursor-pointer">
              Editar carrito aqui
            </Link>

            {/* Producto del carrito */}

            {productIntCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                  priority
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price} x 3</p>
                  <p className="font-bold">Subtotal ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chekout */}
          <div className="bg-white rounded-xl shadow-xl p-7 mb-5">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="mb-10">
              <p className="text-2xl">Raton perez</p>
              <p className="font-semibold">Av. partido azul 122</p>
              <p>Rancagua</p>
              <p>Sexta region</p>
              <p>CP 121212</p>
              <p>123-456-789</p>
            </div>

            <div className="w-full h-0.5 bg-gray-300 mb-10"></div>

            <div className="grid grid-cols-2">
              <span>N. Productos</span>
              <span className="text-right">3</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link
                href="/orders/123456"
                className="flex btn-primary justify-center"
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
