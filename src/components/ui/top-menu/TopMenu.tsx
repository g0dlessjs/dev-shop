"use client";

import Link from "next/link";
import clsx from "clsx";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";

import { IoCartOutline, IoSearchOutline, IoMenuOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-2xl transition-opacity hover:opacity-80"
        >
          <span className={clsx(titleFont.className, "font-bold antialiased")}>
            Dev
          </span>

          <span className="ml-1 font-light">| Shop</span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/category/men"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-black"
          >
            Hombre
          </Link>

          <Link
            href="/category/women"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-black"
          >
            Mujer
          </Link>

          <Link
            href="/category/kids"
            className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-black"
          >
            Niños
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <Link
            href="/search"
            className="p-2 rounded-full transition-all hover:bg-gray-100"
          >
            <IoSearchOutline className="w-5 h-5 text-gray-700" />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 rounded-full transition-all hover:bg-gray-100"
          >
            <span
              className={clsx(
                "absolute",
                "-top-1",
                "-right-1",
                "min-w-[18px]",
                "h-[18px]",
                "px-1",
                "flex",
                "items-center",
                "justify-center",
                "rounded-full",
                "bg-black",
                "text-white",
                "text-[10px]",
                "font-bold",
              )}
            >
              3
            </span>

            <IoCartOutline className="w-5 h-5 text-gray-700" />
          </Link>

          {/* Menu Button */}
          <button
            onClick={openSideMenu}
            className={clsx(
              "ml-2",
              "flex",
              "items-center",
              "gap-2",
              "px-4",
              "py-2",
              "rounded-full",
              "border",
              "border-gray-200",
              "transition-all",
              "hover:bg-gray-100",
              "cursor-pointer",
            )}
          >
            <IoMenuOutline className="w-5 h-5" />

            <span className="hidden sm:block text-sm font-medium">Menú</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
