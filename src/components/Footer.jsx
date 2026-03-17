import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaXTwitter, label: "X" },
  { icon: FaYoutube, label: "YouTube" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-fresh-espresso text-fresh-cream">
      {/* Newsletter strip */}
      <div className="border-b border-fresh-cream/10">
        <div className="section-wrap flex flex-col items-center gap-5 py-10 sm:flex-row sm:justify-between">
          <div>
            <h4 className="font-display text-xl text-white sm:text-2xl">
              Stay Updated with FreshBites
            </h4>
            <p className="mt-1 text-sm text-fresh-cream/60">
              Get exclusive offers, new menu alerts, and event invites.
            </p>
          </div>
          <form
            className="flex w-full max-w-sm gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-full border border-fresh-cream/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-fresh-cream/40 outline-none transition focus:border-fresh-orange focus:bg-white/10"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-fresh-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="section-wrap py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-3xl font-bold">
              Fresh<span className="text-fresh-orange">Bites</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-fresh-cream/70">
              Fresh Indian Flavors, Crafted with Tradition. Elegant dining rooted in timeless
              recipes from across the Indian subcontinent.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fresh-cream/15 text-fresh-cream/70 transition-all duration-300 hover:border-fresh-orange hover:bg-fresh-orange hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-fresh-cream/70 transition hover:text-fresh-gold"
                  >
                    <span className="h-1 w-1 rounded-full bg-fresh-orange/50" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl">Opening Hours</h4>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5">
                <span className="text-sm text-fresh-cream/70">Mon - Fri</span>
                <span className="text-sm font-semibold text-fresh-gold">11AM - 10PM</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2.5">
                <span className="text-sm text-fresh-cream/70">Sat - Sun</span>
                <span className="text-sm font-semibold text-fresh-gold">10AM - 11PM</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-fresh-cream/50">
              Last seating 45 minutes before closing.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-fresh-cream/10">
        <div className="section-wrap flex flex-col items-center justify-between gap-3 py-5 text-xs text-fresh-cream/50 sm:flex-row sm:text-sm">
          <span>Copyright &copy; {year} FreshBites. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <a href="#" className="transition hover:text-fresh-cream">Privacy Policy</a>
            <a href="#" className="transition hover:text-fresh-cream">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
