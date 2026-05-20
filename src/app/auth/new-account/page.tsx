import Link from "next/link";
import clsx from "clsx";

import { titleFont } from "@/config/fonts";

export default function NewAccountPage() {
  return (
    <main
      className={clsx(
        "min-h-screen",
        "flex",
        "items-center",
        "justify-center",
        "px-6"
      )}
    >
      <div
        className={clsx(
          "w-full",
          "max-w-md",
          "rounded-4xl",
          "bg-white",
          "p-10",
          "shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
          "border",
          "border-gray-100"
        )}
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <span
            className={clsx(
              "text-xs",
              "uppercase",
              "tracking-[0.35em]",
              "text-gray-400"
            )}
          >
            Únete
          </span>

          <h1
            className={clsx(
              titleFont.className,
              "mt-3",
              "text-5xl",
              "font-bold",
              "tracking-tight",
              "text-black"
            )}
          >
            Crear cuenta
          </h1>

          <p className="mt-3 text-gray-500">
            Crea una cuenta para comenzar a comprar.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Nombre completo
            </label>

            <input
              type="text"
              placeholder="Juan Pérez"
              className={clsx(
                "w-full",
                "rounded-2xl",
                "border",
                "border-gray-200",
                "bg-gray-50",
                "px-5",
                "py-4",
                "outline-none",
                "transition-all",
                "placeholder:text-gray-400",
                "focus:border-black",
                "focus:bg-white"
              )}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className={clsx(
                "w-full",
                "rounded-2xl",
                "border",
                "border-gray-200",
                "bg-gray-50",
                "px-5",
                "py-4",
                "outline-none",
                "transition-all",
                "placeholder:text-gray-400",
                "focus:border-black",
                "focus:bg-white"
              )}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Contraseña
            </label>

            <input
              type="password"
              placeholder="********"
              className={clsx(
                "w-full",
                "rounded-2xl",
                "border",
                "border-gray-200",
                "bg-gray-50",
                "px-5",
                "py-4",
                "outline-none",
                "transition-all",
                "placeholder:text-gray-400",
                "focus:border-black",
                "focus:bg-white"
              )}
            />
          </div>

          <button
            className={clsx(
              "mt-3",
              "rounded-2xl",
              "bg-black",
              "py-4",
              "font-semibold",
              "text-white",
              "transition-all",
              "duration-300",
              "hover:scale-[1.01]",
              "hover:bg-neutral-800",
              "active:scale-[0.99]"
            )}
          >
            Crear cuenta
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-sm text-gray-400">
            O
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Login */}
        <Link
          href="/auth/login"
          className={clsx(
            "flex",
            "justify-center",
            "rounded-2xl",
            "border",
            "border-gray-200",
            "bg-white",
            "py-4",
            "font-semibold",
            "transition-all",
            "duration-300",
            "hover:bg-gray-100"
          )}
        >
          Ya tengo una cuenta
        </Link>
      </div>
    </main>
  );
}