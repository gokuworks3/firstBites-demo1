import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const testimonials = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    role: "Food Critic, Delhi Times",
    color: "bg-orange-500",
    review:
      "Absolutely phenomenal! The butter chicken here is the best I've had in all of Delhi. The sauce has this deep, smoky richness that you rarely find. FreshBites has completely stolen my heart.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    initials: "PM",
    role: "Regular Guest",
    color: "bg-rose-500",
    review:
      "Every visit feels like a celebration. Authentic flavors, stunning plating, and staff who genuinely care. The Rasmalai alone is worth the trip — my go-to for special occasions!",
    rating: 5,
  },
  {
    name: "Daniel Rodriguez",
    initials: "DR",
    role: "Travel Blogger",
    color: "bg-amber-500",
    review:
      "Visited FreshBites while traveling through New Delhi and it was the highlight of my whole trip. From biryani to gulab jamun — every dish was balanced, fresh, and unforgettable.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="section-bg-alt py-20 sm:py-28">
      <div className="section-wrap">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker justify-center">Guest Reviews</p>
          <h2 className="section-title mx-auto mt-3 max-w-2xl text-center">
            What Our Guests Are Saying
          </h2>

          {/* Google rating badge */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-fresh-brown/10 bg-white px-5 py-3 shadow-card">
            <FaGoogle className="h-5 w-5 text-blue-500" />
            <div className="flex items-center gap-1 text-fresh-gold">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <span className="text-sm font-bold text-fresh-brown">4.9</span>
            <span className="text-sm text-fresh-brown/40">|</span>
            <span className="text-sm text-fresh-brown/60">1,200+ Google Reviews</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className="card-glass flex flex-col p-6"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
            >
              {/* Quote icon */}
              <FaQuoteLeft className="mb-3 h-6 w-6 text-fresh-orange/25" />

              {/* Review */}
              <p className="flex-1 text-sm italic leading-relaxed text-fresh-brown/75">
                {item.review}
              </p>

              {/* Stars */}
              <div className="mt-4 flex items-center gap-0.5 text-fresh-gold">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="h-3.5 w-3.5" />
                ))}
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center justify-between border-t border-fresh-brown/8 pt-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.color} text-xs font-bold text-white`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-fresh-brown">{item.name}</p>
                    <p className="text-xs text-fresh-brown/55">{item.role}</p>
                  </div>
                </div>
                <FaGoogle className="h-3.5 w-3.5 text-blue-400" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
