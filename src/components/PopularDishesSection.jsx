import { popularDishes } from "../data/content";
import SafeImage from "./SafeImage";

function PopularDishesSection() {
  return (
    <section className="section-shell" aria-labelledby="popular-dishes-title">
      <p className="section-kicker">Popular Dishes</p>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 id="popular-dishes-title" className="section-heading">
          Indian Signatures Loved Daily
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Explore our house favorites inspired by regional Indian kitchens and finished with modern presentation.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {popularDishes.map((dish) => (
          <article
            key={dish.name}
            className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-warm"
          >
            <div className="h-56 overflow-hidden">
              <SafeImage
                src={dish.image}
                alt={dish.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl leading-snug text-stone-900">{dish.name}</h3>
                <p className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                  {dish.price}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-stone-600">{dish.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PopularDishesSection;
