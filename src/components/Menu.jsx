import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaLeaf, FaDrumstickBite } from "react-icons/fa6";
import { menuData } from "../data/menuData";

function Menu() {
  const [activeCategoryId, setActiveCategoryId] = useState(menuData[0].id);

  const activeCategory = useMemo(
    () => menuData.find((category) => category.id === activeCategoryId) || menuData[0],
    [activeCategoryId]
  );

  return (
    <motion.section
      id="menu"
      className="section-bg-alt scroll-mt-24 py-20 sm:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-wrap relative z-10">
        <p className="section-kicker">Full Menu</p>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="section-title">Taste the Regions of Bharat</h2>
          <p className="section-copy max-w-xl">
            Curated starters, rich mains, festive Indian desserts, and traditional beverages from
            Delhi, Lucknow, Punjab, and the South.
          </p>
        </div>

        {/* Category pills */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 sm:gap-3">
          {menuData.map((category) => {
            const isActive = activeCategoryId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-6 sm:text-sm ${
                  isActive
                    ? "bg-fresh-orange text-white shadow-glow"
                    : "border border-fresh-brown/15 bg-white text-fresh-brown hover:border-fresh-orange hover:text-fresh-orange"
                }`}
              >
                {category.icon && <span className="mr-1.5">{category.icon}</span>}
                {category.label}
                {isActive && (
                  <span className="ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white/20 px-1.5 text-[10px] font-bold">
                    {category.items.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="card-glass overflow-hidden rounded-3xl border-fresh-brown/10">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeCategory.id}
              className="divide-y divide-fresh-brown/8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              {activeCategory.items.map((item, idx) => (
                <li
                  key={item.name}
                  className="group flex flex-col gap-3 px-5 py-5 transition-colors duration-200 hover:bg-fresh-orange/[0.03] sm:flex-row sm:items-center sm:justify-between sm:px-8"
                >
                  <div className="flex items-start gap-3 pr-0 sm:pr-4">
                    {/* Veg/Non-veg badge */}
                    <span className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border-2 ${item.isVeg ? "border-green-600" : "border-red-500"}`}>
                      <span className={`h-2 w-2 rounded-full ${item.isVeg ? "bg-green-600" : "bg-red-500"}`} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-fresh-brown sm:text-2xl">{item.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-fresh-brown/70">{item.description}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-fresh-orange/10 px-4 py-1.5 text-center text-sm font-bold text-fresh-orange transition-colors group-hover:bg-fresh-orange group-hover:text-white sm:py-1">
                    {item.price}
                  </span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default Menu;
