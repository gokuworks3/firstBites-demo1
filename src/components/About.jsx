import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

const aboutImage =
  "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1400&q=80";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Signature Dishes" },
  { value: "1000+", label: "Happy Customers" },
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
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-kicker">About FreshBites</p>
            <h2 className="section-title">A Story of Heritage, Spice, and Craft</h2>
            <p className="section-copy mt-5">
              At FreshBites, our culinary team brings generations of Indian cooking tradition to
              every plate. We handpick ingredients daily, blend regional spice profiles in-house,
              and build each recipe around flavor balance, aroma, and authenticity.
            </p>
            <p className="section-copy mt-4">
              From royal North Indian gravies to comforting South Indian staples, our menu reflects
              a chef-driven journey through India's most loved food stories.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-fresh-orange/20 bg-white p-4">
                  <p className="font-display text-3xl font-bold text-fresh-orange">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-fresh-brown/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[2rem] shadow-soft"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <SafeImage
              src={aboutImage}
              alt="Chef preparing authentic Indian cuisine at FreshBites"
              loading="lazy"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
