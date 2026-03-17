import { motion } from "framer-motion";

const marqueeItems = [
  "Butter Chicken",
  "Paneer Tikka",
  "Hyderabadi Biryani",
  "Masala Dosa",
  "Gulab Jamun",
  "Mango Lassi",
  "Dal Makhani",
  "Tandoori Naan",
  "Rasmalai",
  "Masala Chai",
];

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-fresh-brown/8 bg-fresh-espresso py-4">
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-fresh-cream/70 sm:text-base">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-fresh-orange" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
