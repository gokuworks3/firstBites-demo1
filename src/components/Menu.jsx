import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
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
      className="scroll-mt-24 py-20 sm:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-wrap">
        <p className="section-kicker">Full Menu</p>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="section-title">Taste the Regions of Bharat</h2>
          <p className="section-copy max-w-xl">
            Curated starters, rich mains, festive Indian desserts, and traditional beverages from
            Delhi, Lucknow, Punjab, and the South.
          </p>
        </div>

        <div className="mb-7 flex gap-2 overflow-x-auto pb-2 sm:gap-3">
          {menuData.map((category) => {
            const isActive = activeCategoryId === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:py-2.5 sm:text-sm ${
                  isActive
                    ? "bg-fresh-orange text-white"
                    : "border border-fresh-brown/15 bg-white text-fresh-brown hover:border-fresh-orange hover:text-fresh-orange"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="card-glass overflow-hidden rounded-3xl border-fresh-brown/10">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeCategory.id}
              className="divide-y divide-fresh-brown/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              {activeCategory.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-8"
                >
                  <div className="pr-0 sm:pr-4">
                    <h3 className="font-display text-2xl text-fresh-brown">{item.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fresh-brown/75">{item.description}</p>
                  </div>
                  <span className="shrink-0 text-base font-semibold text-fresh-orange sm:pt-1">
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
