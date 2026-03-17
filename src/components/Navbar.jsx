import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-fresh-brown/10 bg-fresh-cream/95 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className={`inline-flex items-center text-2xl font-bold tracking-tight transition-transform duration-300 hover:scale-105 sm:text-3xl ${
            isScrolled ? "text-fresh-brown" : "text-white"
          }`}
        >
          <span className="font-display">
            Fresh<span className="text-fresh-orange">Bites</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-medium transition duration-300 hover:text-fresh-orange ${
                  isScrolled ? "text-fresh-brown" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-fresh-orange px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-700 md:inline-flex"
        >
          Reserve Table
        </a>

        <button
          type="button"
          className={`inline-flex rounded-full border p-2 transition duration-300 md:hidden ${
            isScrolled
              ? "border-fresh-brown/15 bg-white text-fresh-brown"
              : "border-white/30 bg-white/10 text-white"
          }`}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          {isMenuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 top-[72px] z-40 bg-fresh-espresso/45 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-label="Close menu overlay"
            />

            <motion.aside
              id="mobile-menu"
              className="fixed right-0 top-0 z-50 flex h-screen w-4/5 max-w-sm flex-col bg-fresh-cream p-6 shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-fresh-brown">
                  Fresh<span className="text-fresh-orange">Bites</span>
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-full border border-fresh-brown/20 p-2 text-fresh-brown"
                  aria-label="Close mobile menu"
                >
                  <HiXMark className="h-6 w-6" />
                </button>
              </div>

              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-fresh-brown transition duration-300 hover:bg-fresh-orange/10 hover:text-fresh-orange"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-8 inline-flex w-full justify-center rounded-full bg-fresh-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
              >
                Reserve Table
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
