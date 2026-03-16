import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navLinks } from "../data/content";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200/60 bg-brand-50/90 backdrop-blur-md">
      <nav
        className="content-shell flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="inline-flex items-center transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <span className="font-display text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            Fresh<span className="text-brand-600">Bites</span>
          </span>
        </a>

        <button
          type="button"
          className="rounded-full border border-brand-200 bg-white p-2 text-brand-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-warm md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          {isMenuOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-stone-700 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-100 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-brand-200/60 transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="content-shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-2 text-base font-medium text-stone-700 transition duration-300 hover:bg-brand-100 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
