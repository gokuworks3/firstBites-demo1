import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant indoor seating area at FreshBites",
    caption: "Elegant Ambience",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional Indian thali platter served at FreshBites",
    caption: "Authentic Thali",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh tandoori specialties being served",
    caption: "Tandoor Specialties",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    alt: "Naan and curry pairings on a restaurant table",
    caption: "Naan & Curries",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80",
    alt: "Assorted Indian desserts plated beautifully",
    caption: "Sweet Endings",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80",
    alt: "Colorful Indian spices and ingredients in the kitchen",
    caption: "Fresh Spices Daily",
    span: "",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="section-wrap">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker justify-center">Gallery</p>
          <h2 className="section-title mx-auto mt-3 max-w-2xl text-center">
            Moments from FreshBites
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-xl text-center">
            A glimpse into our world — from vibrant dishes to the warmth of our dining space.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.article
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl border border-fresh-brown/10 bg-white shadow-card ${image.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Caption overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="w-full p-4">
                  <p className="text-sm font-semibold text-white">{image.caption}</p>
                  <div className="mt-1 h-0.5 w-8 rounded-full bg-fresh-orange" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
