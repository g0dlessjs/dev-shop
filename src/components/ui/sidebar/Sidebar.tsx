"use client";

import Link from "next/link";
import clsx from "clsx";

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
  IoManOutline,
  IoWomanOutline,
  IoBodyOutline,
  IoChevronForwardOutline,
  IoMan,
  IoWoman,
  IoBody,
} from "react-icons/io5";

import { useUIStore } from "@/store";
import { titleFont } from "@/config/fonts";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);
  const handleNavigation = () => {
    closeSideMenu();
  };

  const menuLinkClasses = clsx(
    "flex items-center justify-between",
    "w-full px-4 py-3 rounded-2xl",
    "transition-all duration-200",
    "hover:bg-gray-100 hover:translate-x-1",
    "group",
  );

  return (
    <>
      {/* Background Overlay */}
      {isSideMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm fade-in" />
      )}

      {/* Click Outside */}
      {isSideMenuOpen && (
        <div onClick={closeSideMenu} className="fixed inset-0 z-40" />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 right-0 z-50",
          "h-screen w-full sm:w-[420px]",
          "bg-white shadow-2xl",
          "transition-transform duration-300 ease-in-out",
          "border-l border-gray-200",
          "flex flex-col",
          {
            "translate-x-full": !isSideMenuOpen,
            "translate-x-0": isSideMenuOpen,
          },
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
          <div className="text-2xl">
            <span className={clsx(titleFont.className, "font-bold")}>Dev</span>

            <span className="font-light"> | Menu</span>
          </div>

          <button
            onClick={closeSideMenu}
            className="p-2 rounded-full transition-all hover:bg-gray-100 cursor-pointer"
          >
            <IoCloseOutline size={32} />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="relative">
            <IoSearchOutline
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Buscar productos..."
              className={clsx(
                "w-full",
                "py-3 pl-11 pr-4",
                "rounded-2xl",
                "bg-gray-100",
                "border border-transparent",
                "outline-none",
                "transition-all",
                "focus:border-black",
                "focus:bg-white",
              )}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {/* Categories */}
          <div className="mb-8">
            <span className="px-4 text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
              Categorías
            </span>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                onClick={handleNavigation}
                href="/category/men"
                className={`${menuLinkClasses} group`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-black group-hover:text-white">
                    <IoMan size={22} />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">Hombre</span>
                    <span className="text-xs text-gray-500">
                      Moda y accesorios
                    </span>
                  </div>
                </div>

                <IoChevronForwardOutline className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
              </Link>

              <Link
                onClick={handleNavigation}
                href="/category/women"
                className={`${menuLinkClasses} group`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-500 transition-colors group-hover:bg-pink-500 group-hover:text-white">
                    <IoWoman size={22} />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">Mujer</span>
                    <span className="text-xs text-gray-500">
                      Tendencias y estilo
                    </span>
                  </div>
                </div>

                <IoChevronForwardOutline className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
              </Link>

              <Link
                onClick={handleNavigation}
                href="/category/kids"
                className={`${menuLinkClasses} group`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-500 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <IoBody size={22} />
                  </div>

                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">Niños</span>
                    <span className="text-xs text-gray-500">
                      Comodidad y diversión
                    </span>
                  </div>
                </div>

                <IoChevronForwardOutline className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
              </Link>
            </div>
          </div>
          {/* User Section */}
          <div className="mb-8">
            <span className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Cuenta
            </span>

            <div className="mt-3 flex flex-col gap-2">
              <Link
                onClick={handleNavigation}
                href="/"
                className={menuLinkClasses}
              >
                <div className="flex items-center">
                  <IoPersonOutline size={22} />

                  <span className="ml-4 font-medium">Perfil</span>
                </div>

                <IoChevronForwardOutline className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/" className={menuLinkClasses}>
                <div className="flex items-center">
                  <IoTicketOutline size={22} />

                  <span className="ml-4 font-medium">Mis órdenes</span>
                </div>

                <IoChevronForwardOutline className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/" className={menuLinkClasses}>
                <div className="flex items-center">
                  <IoLogInOutline size={22} />

                  <span className="ml-4 font-medium">Ingresar</span>
                </div>

                <IoChevronForwardOutline className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/" className={menuLinkClasses}>
                <div className="flex items-center">
                  <IoLogOutOutline size={22} />

                  <span className="ml-4 font-medium">Cerrar sesión</span>
                </div>

                <IoChevronForwardOutline className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Admin Section */}
          <div>
            <span className="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Administración
            </span>

            <div className="mt-3 flex flex-col gap-2">
              <Link href="/" className={menuLinkClasses}>
                <div className="flex items-center">
                  <IoShirtOutline size={22} />

                  <span className="ml-4 font-medium">Productos</span>
                </div>

                <IoChevronForwardOutline className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/" className={menuLinkClasses}>
                <div className="flex items-center">
                  <IoTicketOutline size={22} />

                  <span className="ml-4 font-medium">Órdenes</span>
                </div>

                <IoChevronForwardOutline className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/" className={menuLinkClasses}>
                <div className="flex items-center">
                  <IoPeopleOutline size={22} />

                  <span className="ml-4 font-medium">Usuarios</span>
                </div>

                <IoChevronForwardOutline className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4">
          <p className="text-xs text-center text-gray-400">© 2026 DevShop</p>
        </div>
      </aside>
    </>
  );
};
