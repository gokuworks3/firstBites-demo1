import { popularDishes } from "../data/content";
import SafeImage from "./SafeImage";

function PopularDishesSection() {
  return (
    <section className="section-shell" aria-labelledby="popular-dishes-title">
      <p className="section-kicker">Popular Dishes</p>
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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
            <div className="h-52 overflow-hidden sm:h-56">
              <SafeImage
                src={dish.image}
                alt={dish.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="break-words pr-2 font-display text-xl leading-snug text-stone-900 sm:text-2xl">
                  {dish.name}
                </h3>
                <p className="shrink-0 whitespace-nowrap rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
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
