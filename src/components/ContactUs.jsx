"use client";

const PHONE_DISPLAY = "+91 98600 66098";
const PHONE_TEL = "+919860066098";
const WHATSAPP_LINK = "https://wa.me/919860066098";
const EMAIL = "sanketgidwani01@gmail.com";

const contactMethods = [
  {
    label: "Call Us",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: WHATSAPP_LINK,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.15-1.35a10 10 0 0 0 4.89 1.25h.01c5.52 0 10-4.48 10-10s-4.48-10-10.01-10zm5.85 14.3c-.25.7-1.45 1.35-2 1.44-.53.09-1.2.13-1.94-.12-.45-.15-1.02-.34-1.76-.66-3.1-1.34-5.12-4.46-5.28-4.67-.15-.21-1.26-1.68-1.26-3.2s.8-2.27 1.08-2.58c.28-.31.6-.38.8-.38.2 0 .4 0 .57.01.19.01.43-.07.67.51.25.6.85 2.08.92 2.23.07.15.12.33.02.54-.1.21-.15.34-.3.52-.15.18-.31.4-.44.54-.15.15-.3.32-.13.62.17.31.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.37 1.46.31.15.49.13.67-.08.18-.21.77-.9.98-1.21.21-.31.41-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.57.36.08.13.08.75-.17 1.45z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
];

export default function ContactUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <style>{`
        .contact-input {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
          outline: none;
        }
        .contact-submit {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(16, 185, 129, 0.28);
        }
        .contact-method {
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
        }
        .contact-method:hover {
          transform: translateX(4px);
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.35);
        }
      `}</style>

      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-gray-500">
            Have a question about an order or a product? Send us a message or
            reach out directly.
          </p>
        </div>

        <div className="mt-14 ">
          {/* Left: Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    className="contact-input w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="contact-input w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="contact-input w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="contact-input w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="contact-submit w-full rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact info panel */}
{/*           <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-slate-300 sm:p-10">
            <div className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                Prefer to talk directly? Reach our team through any of the
                channels below — we typically respond within a few hours.
              </p>

              <div className="mt-8 space-y-3">
                {contactMethods.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.label === "WhatsApp" ? "_blank" : undefined}
                    rel={m.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="contact-method flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      {m.icon}
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                        {m.label}
                      </span>
                      <span className="block text-sm font-semibold text-white sm:text-base">
                        {m.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Mon–Sat, 9:00 AM – 8:00 PM IST
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
