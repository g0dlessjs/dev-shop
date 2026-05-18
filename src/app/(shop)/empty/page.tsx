import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function () {
  return (
    <div className="flex justify-center items-center h-[800px] ">
      <IoCartOutline size={80} className="mx-5 text-gray-800" />
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-xl">Carrito Vacio</h1>
        <Link href="/" className="text-4xl mt-2 text-blue-600 hover:underline">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
}
