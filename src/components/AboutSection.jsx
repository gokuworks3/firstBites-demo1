import { aboutContent } from "../data/content";
import SafeImage from "./SafeImage";

function AboutSection() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-kicker">About FreshBites India</p>
          <h2 id="about-title" className="section-heading">
            {aboutContent.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="section-copy">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-warm"
          >
            Book A Table
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white p-2 shadow-warm">
          <SafeImage
            src={aboutContent.image}
            alt={aboutContent.alt}
            loading="lazy"
            className="h-[420px] w-full rounded-[1.3rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
