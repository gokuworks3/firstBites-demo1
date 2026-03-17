import { motion } from "framer-motion";
import SafeImage from "./SafeImage";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant indoor seating area at FreshBites",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional Indian thali platter served at FreshBites",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh tandoori specialties being served",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    alt: "Naan and curry pairings on a restaurant table",
  },
  {
    src: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80",
    alt: "Assorted Indian desserts plated beautifully",
  },
  {
    src: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80",
    alt: "Colorful Indian spices and ingredients in the kitchen",
  },
];

function Gallery() {
  return (
    <motion.section
      id="gallery"
      className="scroll-mt-24 py-20 sm:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-wrap">
        <p className="section-kicker">Gallery</p>
        <h2 className="section-title mb-10">Moments from FreshBites</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.article
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-fresh-brown/10 bg-white shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Gallery;
