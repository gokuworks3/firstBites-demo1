import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import SafeImage from "./SafeImage";

const heroImage =
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1920&q=80";

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
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-fresh-espresso/90 via-fresh-espresso/78 to-fresh-espresso/45" />

      <div className="section-wrap relative z-10 py-24 sm:py-32">
        <motion.p
          className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-fresh-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Fresh Indian Flavors, Crafted with Tradition
        </motion.p>

        <motion.h1
          className="max-w-3xl font-display text-3xl leading-tight text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Authentic Indian Cuisine Made Fresh Daily
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Experience traditional flavors, rich spices, and unforgettable dining.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
        >
          <a href="#menu" className="btn-primary w-full gap-2 sm:w-auto">
            View Menu <FaArrowRight className="h-3.5 w-3.5" />
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto">
            Book a Table
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
