import { motion } from "framer-motion";
import { FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul S.",
    review: "Best Indian food in town. The butter chicken is incredible!",
  },
  {
    name: "Priya M.",
    review: "Authentic flavors, beautiful plating, and warm hospitality every time.",
  },
  {
    name: "Daniel R.",
    review: "From biryani to desserts, every dish was perfectly balanced and fresh.",
  },
];

function Testimonials() {
  return (
    <motion.section
      className="py-20 sm:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-wrap">
        <p className="section-kicker">Testimonials</p>
        <h2 className="section-title mb-10">What Our Guests Are Saying</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className="card-glass rounded-3xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <FaUserCircle className="h-11 w-11 text-fresh-orange" />
                <div className="flex items-center gap-1 text-fresh-gold">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar key={`${item.name}-star-${starIndex}`} className="h-3.5 w-3.5" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-fresh-brown/80">&ldquo;{item.review}&rdquo;</p>
              <p className="mt-4 font-semibold text-fresh-brown">{item.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
