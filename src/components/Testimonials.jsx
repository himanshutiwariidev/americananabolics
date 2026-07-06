"use client";

import { GoogleIcon, FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";

const platformMeta = {
  google: { label: "Google", Icon: GoogleIcon },
  facebook: { label: "Facebook", Icon: FacebookIcon },
  instagram: { label: "Instagram", Icon: InstagramIcon },
  x: { label: "X", Icon: XIcon },
};

const testimonials = [
  {
    name: "Marcus R.",
    location: "Texas, USA",
    platform: "google",
    rating: 5,
    text: "Packaging was extremely discreet and professional. Everything arrived exactly as described and right on schedule. Ordering process was smooth from start to finish.",
  },
  {
    name: "Daniel K.",
    location: "Berlin, DE",
    platform: "instagram",
    rating: 5,
    text: "Been reordering from this catalog for months. Batch consistency and label detail give me real confidence in what I'm getting every single time.",
  },
  {
    name: "Alex T.",
    location: "Toronto, CA",
    platform: "facebook",
    rating: 5,
    text: "Customer support answered every question before I placed my order. Communication was clear, honest, and quick — exactly what you want from a pharmacy supplier.",
  },
  {
    name: "Ryan P.",
    location: "Sydney, AU",
    platform: "x",
    rating: 4,
    text: "Shipping took a couple of extra days but support kept me updated the whole way. Product quality made the wait completely worth it.",
  },
  {
    name: "Chris V.",
    location: "Manchester, UK",
    platform: "google",
    rating: 5,
    text: "The whole ordering experience feels premium — from the site to the packaging to the vials themselves. Clearly a team that cares about quality control.",
  },
  {
    name: "Jordan M.",
    location: "Miami, USA",
    platform: "instagram",
    rating: 5,
    text: "Third order placed, zero issues so far. Verified batch codes matched what was listed on site, which sold me on trusting them long term.",
  },
];

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < rating ? "#F59E0B" : "#E5E7EB"}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <style>{`
        .testimonial-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
          border-color: #d1fae5;
        }
      `}</style>

      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Client Reviews
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Trusted by Customers Everywhere
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Verified feedback collected across Google, Facebook, Instagram and X.
          </p>

          {/* Aggregate rating strip */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-5 rounded-2xl border border-gray-100 bg-gray-50/70 px-6 py-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <StarRow rating={5} />
              <span className="text-sm font-bold text-gray-900">4.9/5</span>
              <span className="text-xs text-gray-400">(2,300+ reviews)</span>
            </div>
            <div className="hidden h-6 w-px bg-gray-200 sm:block" />
            <div className="flex items-center gap-4">
              <GoogleIcon className="h-5 w-5" />
              <FacebookIcon className="h-5 w-5" />
              <InstagramIcon className="h-5 w-5" />
              <XIcon className="h-5 w-5 text-gray-900" />
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const { Icon, label } = platformMeta[t.platform];
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <div
                key={i}
                className="testimonial-card flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <StarRow rating={t.rating} />
                  <Icon className="h-5 w-5 flex-shrink-0" />
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">
                      {t.location} · Verified on {label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
