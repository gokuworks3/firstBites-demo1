import { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { contactInfo } from "../data/content";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function ContactSection() {
  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData(initialFormValues);
  };

  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-title">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="section-kicker">Visit Us</p>
          <h2 id="contact-title" className="section-heading">
            Plan Your Visit In New Delhi
          </h2>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 text-stone-700">
              <FaLocationDot className="mt-1 h-5 w-5 text-brand-600" aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-start gap-3 text-stone-700">
              <FaPhone className="mt-1 h-5 w-5 text-brand-600" aria-hidden="true" />
              <a href={`tel:${contactInfo.phone}`} className="transition hover:text-brand-700">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-start gap-3 text-stone-700">
              <FaEnvelope className="mt-1 h-5 w-5 text-brand-600" aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="transition hover:text-brand-700">
                {contactInfo.email}
              </a>
            </li>
          </ul>

          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-100">
            <iframe
              title="FreshBites location map"
              src={contactInfo.mapEmbedUrl}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="section-kicker">Contact Form</p>
          <h3 className="font-display text-3xl text-stone-900">Send Us A Message</h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
            For reservations, festive dining, or family catering, fill out the form and our team will get back soon.
          </p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="mb-1 block text-sm font-medium text-stone-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                aria-invalid={Boolean(errors.name)}
                className="w-full rounded-xl border border-brand-200 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
              {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-stone-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                className="w-full rounded-xl border border-brand-200 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
              {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-stone-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help"
                aria-invalid={Boolean(errors.message)}
                className="w-full rounded-xl border border-brand-200 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
              {errors.message ? <p className="mt-1 text-sm text-red-600">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-warm"
            >
              Send Message
            </button>

            {isSubmitted ? (
              <p className="text-sm font-medium text-green-700" role="status">
                Thank you! Your message has been sent successfully.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
