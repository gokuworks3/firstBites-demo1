import { heroContent } from "../data/content";
import SafeImage from "./SafeImage";

function HeroSection() {
  return (
    <section id="home" className="relative isolate min-h-[92vh]">
      <div className="absolute inset-0 -z-20">
        <SafeImage
          src={heroContent.image}
          alt={heroContent.alt}
          className="h-full w-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-950/80 via-amber-900/60 to-orange-900/55" />

      <div className="content-shell flex min-h-[92vh] items-center py-24">
        <div className="max-w-3xl text-white">
          <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]">
            {heroContent.eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
            {heroContent.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-warm"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/50 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-700"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
