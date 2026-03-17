import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

function SpecialOffer() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-fresh-orange via-orange-600 to-fresh-amber" />
      <div className="absolute inset-0 bg-grain opacity-30" />

      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/5" />

      <div className="section-wrap relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            Limited Time Offer
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Get 20% Off Your First Visit
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/85 sm:text-lg">
            Use code <span className="rounded bg-white/20 px-2 py-0.5 font-mono font-bold">FRESH20</span> when
            you reserve a table online. Valid for dine-in across all locations.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-fresh-orange shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Claim Offer <FaArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              Browse Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SpecialOffer;
