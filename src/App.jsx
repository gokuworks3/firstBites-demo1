import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularDishesSection from "./components/PopularDishesSection";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import DessertsSection from "./components/DessertsSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden bg-brand-50/40">
      <Navbar />
      <main>
        <HeroSection />
        <PopularDishesSection />
        <AboutSection />
        <MenuSection />
        <DessertsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
