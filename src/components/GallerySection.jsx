import { galleryImages } from "../data/content";
import SafeImage from "./SafeImage";

function GallerySection() {
  return (
    <section id="gallery" className="section-shell" aria-labelledby="gallery-title">
      <div className="mb-10">
        <p className="section-kicker">Gallery</p>
        <h2 id="gallery-title" className="section-heading">
          Flavors Of India At FreshBites
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
          A glimpse into our warm ambience, vibrant spices, and handcrafted Indian specialties.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <figure
            key={image.src}
            className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white"
          >
            <SafeImage
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/70 to-transparent px-4 py-3 text-xs text-white opacity-100 transition duration-300 sm:text-sm sm:opacity-0 sm:group-hover:opacity-100">
              FreshBites India Scene {index + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
