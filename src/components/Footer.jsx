import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "Twitter", href: "https://twitter.com", Icon: FaTwitter },
];

function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-stone-950 text-stone-100">
      <div className="content-shell py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#home" className="font-display text-3xl text-white transition hover:text-brand-200">
            Fresh<span className="text-brand-400">Bites</span>
          </a>

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/40 text-brand-200 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 border-t border-white/10 pt-6 text-center text-sm text-stone-300">
          © {new Date().getFullYear()} FreshBites India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
