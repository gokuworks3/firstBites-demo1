import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import SafeImage from "./SafeImage";

const heroImage =
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1920&q=80";

const floatingSpices = [
  { emoji: "\u{1F336}\uFE0F", top: "15%", left: "85%", delay: 0, duration: 4 },
  { emoji: "\u{1F35B}", top: "70%", left: "90%", delay: 1.2, duration: 5 },
  { emoji: "\u{1F33F}", top: "25%", left: "78%", delay: 0.6, duration: 3.5 },
  { emoji: "\u2B50", top: "60%", left: "82%", delay: 1.8, duration: 4.5 },
];

const heroStats = [
  { number: "10+", label: "Years Legacy" },
  { number: "50+", label: "Signature Dishes" },
  { number: "15K+", label: "Happy Diners" },
];

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <SafeImage
        src={heroImage}
        alt="Traditional Indian dishes served on a premium dining table"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-fresh-espresso/95 via-fresh-espresso/80 to-fresh-espresso/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-fresh-espresso/60 via-transparent to-transparent" />

      {/* Floating decorative elements */}
      {floatingSpices.map((spice, i) => (
        <motion.span
          key={i}
          className="absolute hidden text-2xl opacity-40 lg:block"
          style={{ top: spice.top, left: spice.left }}
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: spice.duration, repeat: Infinity, delay: spice.delay, ease: "easeInOut" }}
        >
          {spice.emoji}
        </motion.span>
      ))}

      {/* Decorative circle pattern */}
      <div className="absolute -bottom-32 -right-32 hidden h-96 w-96 rounded-full border border-white/5 lg:block" />
      <div className="absolute -bottom-20 -right-20 hidden h-72 w-72 rounded-full border border-white/5 lg:block" />

      <div className="section-wrap relative z-10 py-24 sm:py-32">
        <div className="max-w-3xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-fresh-gold/30 bg-fresh-gold/10 px-5 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fresh-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fresh-gold" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-fresh-gold">
              Now Serving &mdash; Connaught Place, Delhi
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where Every Bite Tells a{" "}
            <span className="text-shimmer">Story</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Experience the grandeur of Indian cuisine &mdash; from royal Mughlai feasts to
            soulful South Indian staples, handcrafted fresh daily by our award-winning chefs.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
          >
            <a href="#menu" className="btn-primary w-full gap-2 sm:w-auto">
              Explore Our Menu <FaArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              Reserve a Table
            </a>
          </motion.div>

          {/* Hero Stats Bar */}
          <motion.div
            className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65 }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="min-w-[100px]">
                <p className="font-display text-3xl font-bold text-fresh-gold sm:text-4xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-fresh-cream to-transparent" />
    </motion.section>
  );
}

export default Hero;
