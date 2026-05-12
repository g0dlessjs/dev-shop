import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hola Mundo</h1>
      <h1 className={titleFont.className}>Hola Mundo</h1>
    </div>
  );
}
