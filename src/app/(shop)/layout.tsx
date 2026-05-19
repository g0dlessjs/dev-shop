import { Footer, ScrollToTopButton, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-100 via-white to-gray-100">
      {/* Navigation */}
      <TopMenu />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="relative">
        {/* Decorative background blur */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gray-200/30 blur-3xl rounded-full" />
        </div>

        {/* Page Content */}
        <div
          className="
        relative
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-8
        sm:py-10
      "
        >
          <div
            className="
          min-h-[70vh]
          rounded-3xl
          border
          border-gray-200/60
          bg-white/70
          backdrop-blur-sm
          shadow-sm
          p-4
          sm:p-6
          lg:p-8
        "
          >
            {children}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Button */}
      <ScrollToTopButton />
    </main>
  );
}
