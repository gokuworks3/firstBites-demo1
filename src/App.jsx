import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Menu from "./components/Menu";
import SpecialOffer from "./components/SpecialOffer";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="overflow-x-hidden bg-fresh-cream text-fresh-brown">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Dishes />
        <About />
        <Menu />
        <SpecialOffer />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
