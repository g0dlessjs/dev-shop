import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dev | Shop",
  description: "Una tienda virtual para comprar ropa y accesorios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}  h-full antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
