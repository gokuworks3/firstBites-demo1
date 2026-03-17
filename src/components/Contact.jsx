import { motion } from "framer-motion";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const contactInfo = [
  {
    icon: FaLocationDot,
    label: "Address",
    value: "24 Spice Market Road, Connaught Place, New Delhi 110001",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@freshbites.in",
  },
  {
    icon: FaClock,
    label: "Hours",
    value: "Mon-Fri: 11AM-10PM | Sat-Sun: 10AM-11PM",
  },
];

function Contact() {
  return (
    <motion.section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-wrap">
        <p className="section-kicker">Contact & Reservation</p>
        <h2 className="section-title mb-10">Plan Your FreshBites Experience</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="card-glass rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl text-fresh-brown sm:text-3xl">Visit Us</h3>
            <ul className="mt-6 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fresh-orange/10 text-fresh-orange">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-fresh-brown/65">
                        {item.label}
                      </p>
                      <p className="break-words text-sm leading-relaxed text-fresh-brown/85">
                        {item.value}
                      </p>
                    </div>
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

          <motion.form
            className="card-glass rounded-3xl p-6 sm:p-8"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <h3 className="font-display text-2xl text-fresh-brown sm:text-3xl">Reserve a Table</h3>
            <p className="mt-2 text-sm text-fresh-brown/75">
              Submit your reservation details and our team will contact you shortly.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <label className="space-y-1 text-sm font-medium text-fresh-brown">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-fresh-brown/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-fresh-orange"
                />
              </label>

              <label className="space-y-1 text-sm font-medium text-fresh-brown">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-fresh-brown/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-fresh-orange"
                />
              </label>

              <label className="space-y-1 text-sm font-medium text-fresh-brown">
                Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  className="w-full rounded-xl border border-fresh-brown/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-fresh-orange"
                />
              </label>

              <label className="space-y-1 text-sm font-medium text-fresh-brown">
                Date
                <input
                  type="date"
                  name="date"
                  className="w-full rounded-xl border border-fresh-brown/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-fresh-orange"
                />
              </label>

              <label className="space-y-1 text-sm font-medium text-fresh-brown">
                Message
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Any special requests?"
                  className="w-full rounded-xl border border-fresh-brown/20 bg-white px-4 py-3 text-sm outline-none transition focus:border-fresh-orange"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-fresh-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Send Reservation Request
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
