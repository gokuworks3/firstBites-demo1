import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

const dishes = [
  {
    name: "Butter Chicken",
    description: "Creamy tomato gravy with charred tandoori chicken and fenugreek.",
    price: "₹420",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/1920px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg",
  },
  {
    name: "Paneer Tikka",
    description: "Smoky cottage cheese skewers marinated with yogurt and royal spices.",
    price: "₹340",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Paneer_tikka.jpg/1920px-Paneer_tikka.jpg",
  },
  {
    name: "Chicken Biryani",
    description: "Layered basmati rice, saffron chicken, and caramelized onion crunch.",
    price: "₹390",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/1920px-%22Hyderabadi_Dum_Biryani%22.jpg",
  },
  {
    name: "Masala Dosa",
    description: "Crisp fermented crepe with spiced potato and coconut chutney duo.",
    price: "₹220",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rameshwaram_Cafe_Dosa.jpg/1920px-Rameshwaram_Cafe_Dosa.jpg",
  },
  {
    name: "Gulab Jamun",
    description: "Soft milk dumplings soaked in warm saffron-cardamom syrup.",
    price: "₹160",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bowl_of_Gulab_Jamuns.jpg/1920px-Bowl_of_Gulab_Jamuns.jpg",
  },
  {
    name: "Mango Lassi",
    description: "Silky mango yogurt cooler finished with pistachio and rose petals.",
    price: "₹140",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mango_Lassi_.jpg",
  },
];

function Dishes() {
  return (
    <motion.section
      className="py-20 sm:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-wrap">
        <p className="section-kicker">Signature Dishes</p>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="section-title">Chef-Curated Favorites</h2>
          <p className="section-copy max-w-xl">
            From Punjabi classics to South Indian comfort food, every plate is rooted in Indian
            tradition and refined with modern presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              className="card-glass group overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <div className="overflow-hidden">
                <SafeImage
                  src={dish.image}
                  alt={`${dish.name} served at FreshBites`}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="space-y-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-fresh-brown">{dish.name}</h3>
                  <span className="rounded-full bg-fresh-orange/10 px-3 py-1 text-sm font-semibold text-fresh-orange">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-fresh-brown/75">{dish.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Dishes;
