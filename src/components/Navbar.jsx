import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";

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
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Announcement Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            className="fixed inset-x-0 top-0 z-[60] flex items-center justify-center gap-3 bg-fresh-orange px-4 py-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-semibold text-white sm:text-sm">
              🎉 Weekend Special: 20% off all orders — Dine in or Takeaway!
            </span>
            <a
              href="#menu"
              className="hidden rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white transition hover:bg-white/30 sm:inline-flex"
            >
              View Menu
            </a>
            <button
              type="button"
              onClick={() => setShowBanner(false)}
              className="absolute right-3 text-white/80 transition hover:text-white"
              aria-label="Close announcement"
            >
              <HiXMark className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={`fixed inset-x-0 z-50 transition-all duration-300 ${showBanner ? "top-8" : "top-0"} ${
          isScrolled
            ? "border-b border-fresh-brown/10 bg-fresh-cream/97 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className={`inline-flex items-center gap-2 text-2xl font-bold tracking-tight transition-transform duration-300 hover:scale-105 sm:text-3xl ${
              isScrolled ? "text-fresh-brown" : "text-white"
            }`}
          >
            <motion.span
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-fresh-orange text-white text-sm font-black shadow-glow"
              whileHover={{ rotate: 10 }}
            >
              F
            </motion.span>
            <span className="font-display">
              Fresh<span className="text-fresh-orange">Bites</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition duration-300 hover:text-fresh-orange ${
                    isScrolled ? "text-fresh-brown" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right side */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+919876543210"
              className={`inline-flex items-center gap-1.5 text-xs font-medium transition hover:text-fresh-orange ${
                isScrolled ? "text-fresh-brown/70" : "text-white/70"
              }`}
            >
              <FaPhone className="h-3 w-3" />
              +91 98765 43210
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-fresh-orange px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.button
                type="button"
                className="fixed inset-0 top-0 z-40 bg-fresh-espresso/50 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
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
                  <span className="flex items-center gap-2 font-display text-2xl font-bold text-fresh-brown">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-fresh-orange text-sm font-black text-white">
                      F
                    </span>
                    Fresh<span className="text-fresh-orange">Bites</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-full border border-fresh-brown/20 p-2 text-fresh-brown"
                    aria-label="Close mobile menu"
                  >
                    <HiXMark className="h-6 w-6" />
                  </button>
                </div>

                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-fresh-brown transition duration-300 hover:bg-fresh-orange/10 hover:text-fresh-orange"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <a
                    href="tel:+919876543210"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-fresh-orange/30 py-3 text-sm font-semibold text-fresh-orange transition hover:border-fresh-orange"
                  >
                    <FaPhone className="h-3.5 w-3.5" />
                    +91 98765 43210
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex w-full items-center justify-center rounded-full bg-fresh-orange py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-orange-600"
                  >
                    Reserve Table
                  </a>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Navbar;
