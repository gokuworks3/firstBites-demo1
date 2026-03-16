import { menuCategories } from "../data/content";

function MenuSection() {
  return (
    <section id="menu" className="section-shell" aria-labelledby="menu-title">
      <p className="section-kicker">Our Menu</p>
      <h2 id="menu-title" className="section-heading">
        Regional Recipes, Modern Presentation
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
        Taste a curated journey from North and South India across starters, curries, desserts, and handcrafted drinks.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {menuCategories.map((category) => (
          <article
            key={category.category}
            className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-warm sm:p-6"
          >
            <h3 className="font-display text-xl text-stone-900 sm:text-2xl">{category.category}</h3>
            <ul className="mt-4 space-y-4">
              {category.items.map((item) => (
                <li key={item.name} className="border-b border-stone-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                    <h4 className="pr-2 text-base font-semibold text-stone-800">{item.name}</h4>
                    <p className="whitespace-nowrap text-sm font-semibold text-brand-700">{item.price}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
