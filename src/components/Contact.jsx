import { motion } from "framer-motion";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const contactInfo = [
  {
    icon: FaLocationDot,
    label: "Address",
    value: "24 Spice Market Road, Connaught Place, New Delhi 110001",
    color: "bg-orange-50 text-fresh-orange",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@freshbites.in",
    href: "mailto:hello@freshbites.in",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FaClock,
    label: "Hours",
    value: "Mon–Fri: 11AM–10PM | Sat–Sun: 10AM–11PM",
    color: "bg-amber-50 text-amber-600",
  },
];

function Contact() {
  return (
    <section
      id="contact"
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
          <p className="section-kicker justify-center">Contact & Reservations</p>
          <h2 className="section-title mx-auto mt-3 max-w-2xl text-center">
            Plan Your FreshBites Experience
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-xl text-center">
            Reserve your table and let us take care of the rest. We look forward to serving you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Visit info + map */}
          <motion.div
            className="card-glass p-6 sm:p-8"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl text-fresh-brown sm:text-3xl">Find Us</h3>
            <p className="mt-1 text-sm text-fresh-brown/60">
              We'd love to welcome you at FreshBites.
            </p>

            <ul className="mt-6 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-fresh-brown/55">
                        {item.label}
                      </p>
                      <p className="mt-0.5 break-words text-sm font-medium leading-relaxed text-fresh-brown/85">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <li key={item.label} className="flex items-start gap-3">
                    {item.href ? (
                      <a href={item.href} className="flex items-start gap-3 transition hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 overflow-hidden rounded-2xl border border-fresh-brown/10">
              <iframe
                title="FreshBites location map"
                src="https://www.google.com/maps?q=Connaught+Place+New+Delhi&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Right: Reservation form */}
          <motion.form
            className="card-glass p-6 sm:p-8"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-display text-2xl text-fresh-brown sm:text-3xl">
              Reserve a Table
            </h3>
            <p className="mt-1 text-sm text-fresh-brown/60">
              Fill out the form and we'll confirm your booking within 2 hours.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="col-span-2 space-y-1.5 text-sm font-semibold text-fresh-brown sm:col-span-1">
                Full Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="form-input mt-1.5 block font-normal"
                />
              </label>

              <label className="col-span-2 space-y-1.5 text-sm font-semibold text-fresh-brown sm:col-span-1">
                Email *
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="form-input mt-1.5 block font-normal"
                />
              </label>

              <label className="col-span-2 space-y-1.5 text-sm font-semibold text-fresh-brown sm:col-span-1">
                Phone *
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="form-input mt-1.5 block font-normal"
                />
              </label>

              <label className="col-span-2 space-y-1.5 text-sm font-semibold text-fresh-brown sm:col-span-1">
                Number of Guests
                <select
                  name="guests"
                  className="form-input mt-1.5 block font-normal"
                >
                  <option value="">Select guests</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="9+">9+ Guests (large group)</option>
                </select>
              </label>

              <label className="col-span-2 space-y-1.5 text-sm font-semibold text-fresh-brown sm:col-span-1">
                Date *
                <input
                  type="date"
                  name="date"
                  className="form-input mt-1.5 block font-normal"
                />
              </label>

              <label className="col-span-2 space-y-1.5 text-sm font-semibold text-fresh-brown sm:col-span-1">
                Preferred Time
                <select
                  name="time"
                  className="form-input mt-1.5 block font-normal"
                >
                  <option value="">Select time</option>
                  {["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map(
                    (t) => (
                      <option key={t} value={t}>{t}</option>
                    )
                  )}
                </select>
              </label>

              <label className="col-span-2 space-y-1.5 text-sm font-semibold text-fresh-brown">
                Special Requests
                <textarea
                  rows={3}
                  name="message"
                  placeholder="Allergies, celebrations, seating preferences..."
                  className="form-input mt-1.5 block resize-none font-normal"
                />
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary mt-6 w-full justify-center"
            >
              Confirm Reservation
            </button>
            <p className="mt-3 text-center text-xs text-fresh-brown/45">
              We'll contact you within 2 hours to confirm your booking.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
