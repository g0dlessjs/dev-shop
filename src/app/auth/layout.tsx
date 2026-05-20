export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center min-h-screen w-full bg-white">{children}</main>
  );
}
