import { motion } from "framer-motion";
import { FaAward, FaHandSparkles, FaFireFlameCurved } from "react-icons/fa6";
import SafeImage from "./SafeImage";

const aboutImage =
  "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1400&q=80";

const stats = [
  { value: "10+", label: "Years Experience", icon: FaAward },
  { value: "50+", label: "Signature Dishes", icon: FaFireFlameCurved },
  { value: "1000+", label: "Happy Customers", icon: FaHandSparkles },
];

const highlights = [
  "Handpicked ingredients sourced daily from local markets",
  "In-house stone-ground spice blends from 12 Indian regions",
  "Zero artificial colors, preservatives, or flavor enhancers",
];

function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24 py-20 sm:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-wrap">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">About FreshBites</p>
            <h2 className="section-title">
              A Story of Heritage,{" "}
              <span className="text-shimmer">Spice</span>, and Craft
            </h2>
            <p className="section-copy mt-5">
              At FreshBites, our culinary team brings generations of Indian cooking tradition to
              every plate. We handpick ingredients daily, blend regional spice profiles in-house,
              and build each recipe around flavor balance, aroma, and authenticity.
            </p>
            <p className="section-copy mt-4">
              From royal North Indian gravies to comforting South Indian staples, our menu reflects
              a chef-driven journey through India&apos;s most loved food stories.
            </p>

            {/* Highlights checklist */}
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fresh-orange/15">
                    <span className="h-1.5 w-1.5 rounded-full bg-fresh-orange" />
                  </span>
                  <span className="text-sm text-fresh-brown/80">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-fresh-orange/20 bg-white p-4 transition-all duration-300 hover:border-fresh-orange/40 hover:shadow-card"
                  >
                    <Icon className="mb-2 h-5 w-5 text-fresh-orange/60 transition group-hover:text-fresh-orange" />
                    <p className="font-display text-3xl font-bold text-fresh-orange">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-fresh-brown/70">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {/* Decorative background element */}
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[2rem] bg-fresh-orange/10" />
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <SafeImage
                src={aboutImage}
                alt="Chef preparing authentic Indian cuisine at FreshBites"
                loading="lazy"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-fresh-espresso px-5 py-3 shadow-lg sm:-bottom-6 sm:-left-6">
              <p className="font-display text-2xl font-bold text-fresh-gold">Est. 2014</p>
              <p className="text-xs text-white/70">New Delhi, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
