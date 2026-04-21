import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductsGrid from "../Components/ProductsGrid";

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              NUESTRA COLECCIÓN
            </h1>
            <p className="text-gray-400 text-lg">
              Explora nuestras piezas exclusivas de ropa urbana minimalista
            </p>
          </div>
        </section>
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
