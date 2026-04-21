import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import ProductsGrid from "../Components/ProductsGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
