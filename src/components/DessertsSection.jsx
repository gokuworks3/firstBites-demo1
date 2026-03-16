import SafeImage from "./SafeImage";
import { dessertSpecials } from "../data/content";

function DessertsSection() {
  return (
    <section id="desserts" className="section-shell" aria-labelledby="desserts-title">
      <p className="section-kicker">Desserts</p>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 id="desserts-title" className="section-heading">
          Indian Sweets & Desserts
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
          End your meal with timeless mithai and regional dessert favorites, each served with authentic flavor.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dessertSpecials.map((dessert) => (
          <article
            key={dessert.name}
            className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-warm"
          >
            <div className="h-56 overflow-hidden">
              <SafeImage
                src={dessert.image}
                alt={dessert.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl leading-snug text-stone-900">{dessert.name}</h3>
                <p className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
                  {dessert.price}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-stone-600">{dessert.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DessertsSection;
