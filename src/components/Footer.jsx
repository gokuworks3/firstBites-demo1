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
      <div className="section-wrap py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-3xl font-bold">
              Fresh<span className="text-fresh-orange">Bites</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-fresh-cream/75">
              Fresh Indian Flavors, Crafted with Tradition. Elegant dining rooted in timeless
              recipes.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-fresh-cream/80 transition hover:text-fresh-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl">Opening Hours</h4>
            <p className="mt-4 text-sm text-fresh-cream/80">Mon-Fri: 11AM-10PM</p>
            <p className="text-sm text-fresh-cream/80">Sat-Sun: 10AM-11PM</p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-fresh-cream/20 text-fresh-cream transition hover:border-fresh-gold hover:text-fresh-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-fresh-cream/15">
        <div className="section-wrap py-4 text-center text-xs text-fresh-cream/70 sm:text-sm">
          Copyright © {year} FreshBites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
