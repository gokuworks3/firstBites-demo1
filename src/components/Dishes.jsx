import { motion } from "framer-motion";
import { FaFire, FaStar } from "react-icons/fa6";
import SafeImage from "./SafeImage";

const dishes = [
  {
    name: "Butter Chicken",
    description: "Creamy tomato gravy with charred tandoori chicken and fenugreek.",
    price: "₹420",
    isVeg: false,
    isPopular: true,
    isSpicy: false,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/1920px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg",
  },
  {
    name: "Paneer Tikka",
    description: "Smoky cottage cheese skewers marinated with yogurt and royal spices.",
    price: "₹340",
    isVeg: true,
    isPopular: true,
    isSpicy: true,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Paneer_tikka.jpg/1920px-Paneer_tikka.jpg",
  },
  {
    name: "Chicken Biryani",
    description: "Layered basmati rice, saffron chicken, and caramelized onion crunch.",
    price: "₹390",
    isVeg: false,
    isPopular: false,
    isSpicy: true,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/1920px-%22Hyderabadi_Dum_Biryani%22.jpg",
  },
  {
    name: "Masala Dosa",
    description: "Crisp fermented crepe with spiced potato and coconut chutney duo.",
    price: "₹220",
    isVeg: true,
    isPopular: false,
    isSpicy: false,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rameshwaram_Cafe_Dosa.jpg/1920px-Rameshwaram_Cafe_Dosa.jpg",
  },
  {
    name: "Gulab Jamun",
    description: "Soft milk dumplings soaked in warm saffron-cardamom syrup.",
    price: "₹160",
    isVeg: true,
    isPopular: false,
    isSpicy: false,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bowl_of_Gulab_Jamuns.jpg/1920px-Bowl_of_Gulab_Jamuns.jpg",
  },
  {
    name: "Mango Lassi",
    description: "Silky mango yogurt cooler finished with pistachio and rose petals.",
    price: "₹140",
    isVeg: true,
    isPopular: true,
    isSpicy: false,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mango_Lassi_.jpg",
  },
];

function VegIcon({ isVeg }) {
  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-sm border-2 ${isVeg ? "border-green-600" : "border-red-600"}`}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${isVeg ? "bg-green-600" : "bg-red-600"}`}
      />
    </span>
  );
}

function Dishes() {
  return (
    <section className="section-bg-alt py-20 sm:py-28">
      <div className="section-wrap">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker justify-center">Signature Dishes</p>
          <h2 className="section-title mx-auto mt-3 max-w-2xl text-center">
            Chef-Curated Favorites
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-xl text-center">
            From Punjabi classics to South Indian comfort food — every plate is rooted
            in Indian tradition and refined with modern flair.
          </p>
        </motion.div>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              className="card-glass group relative overflow-hidden"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
            >
              {/* Popular badge */}
              {dish.isPopular && (
                <div className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-fresh-orange px-3 py-1 text-xs font-bold text-white shadow-glow">
                  <FaStar className="h-3 w-3" />
                  Popular
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden">
                <SafeImage
                  src={dish.image}
                  alt={`${dish.name} served at FreshBites`}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Hover quick-view overlay */}
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <a
                    href="#menu"
                    className="rounded-full bg-white/95 px-5 py-2 text-xs font-bold text-fresh-orange shadow-lg backdrop-blur-sm transition hover:bg-fresh-orange hover:text-white"
                  >
                    See Full Menu →
                  </a>
                </div>
              </div>

              {/* Card content */}
              <div className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <VegIcon isVeg={dish.isVeg} />
                    <h3 className="font-display text-xl text-fresh-brown">{dish.name}</h3>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="rounded-full bg-fresh-orange/12 px-3 py-1 text-sm font-bold text-fresh-orange">
                      {dish.price}
                    </span>
                    {dish.isSpicy && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-red-500">
                        <FaFire className="h-2.5 w-2.5" /> Spicy
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-fresh-brown/70">{dish.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#menu" className="btn-secondary">
            View Complete Menu →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Dishes;
