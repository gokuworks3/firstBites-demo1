import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden bg-fresh-cream text-fresh-brown">
      <Navbar />
      <main>
        <Hero />
        <Dishes />
        <About />
        <Menu />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
