const points = [
  {
    title: "Clearly Identified\nActive Compounds",
    description:
      "View detailed information about active compounds and their concentrations.",
    accent: "#0b203c",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6.5L4.5 17a2 2 0 0 0 1.75 3h11.5a2 2 0 0 0 1.75-3L15 8.5V2" />
        <path d="M8 2h8" />
        <path d="M9.5 14h5" />
      </svg>
    ),
  },
  {
    title: "Dedicated Pages for\nEvery Product",
    description: "Explore comprehensive details for every available product.",
    accent: "#0b203c",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8 12 3 3 8l9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    title: "Information About\nKey Compounds",
    description:
      "In-depth information about testosterone and other anabolic compounds.",
    accent: "#0f7a4f",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="15" cy="12" r="2.5" />
        <path d="M8.2 7.1 12.8 10.6M8.2 16.9 12.8 13.4" />
        <path d="M17.5 12h2.5" />
      </svg>
    ),
  },
  {
    title: "Easy Comparison\nMade Simple",
    description:
      "Compare related formulations side-by-side to make informed decisions.",
    accent: "#0f7a4f",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M5 7h4l-2 5a2.2 2.2 0 0 1-4 0z" />
        <path d="M15 7h4l-2 5a2.2 2.2 0 0 1-4 0z" />
        <path d="M4 21h16" />
        <path d="M4.5 7 12 4.5 19.5 7" />
      </svg>
    ),
  },
  {
    title: "Educational Information\nYou Can Trust",
    description:
      "Learn more about individual compounds with reliable and easy-to-understand content.",
    accent: "#0b203c",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 9 12 4 2 9l10 5 10-5z" />
        <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
        <path d="M22 9v6" />
      </svg>
    ),
  },
];

export default function WhyExplore() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F7] py-16 md:py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 md:px-6 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
            <span aria-hidden="true">✦</span>
            Knowledge &middot; Transparency &middot; Trust
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          <span className="text-[#0b203c]">Why Explore </span>
          <span className="bg-gradient-to-r from-[#0b203c] to-[#0f7a4f] bg-clip-text text-transparent">
            AmericanAbolics?
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-5xl text-center text-base leading-relaxed text-gray-500 sm:text-lg">
          AmericanAbolics makes it easier to explore anabolic steroid
          products by providing clearly organized compound and product
          information in one place.
        </p>

        {/* Divider */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-600" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0b203c]">
            Visitors Can Find
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-600" />
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {points.slice(0, 4).map((point, i) => (
            <FeatureCard key={point.title} point={point} index={i} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-full sm:w-[calc(50%-0.75rem)]">
            <FeatureCard point={points[4]} index={4} />
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-[#0b203c] to-[#153552] px-6 py-8 sm:flex-row sm:gap-6 sm:px-10">
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 shadow-[0_0_0_1px_rgba(52,211,153,0.35),0_0_24px_rgba(16,185,129,0.35)]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <p className="text-center text-base leading-relaxed text-white sm:text-left sm:text-lg">
            Our goal is to provide clear and accessible product information
            while <span className="font-bold">maintaining transparency</span>{" "}
            about the compounds listed in our catalog.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ point, index }) {
  const [line1, line2] = point.title.split("\n");
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="relative flex items-start gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-7">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-2 select-none text-5xl font-extrabold text-gray-100"
      >
        {number}
      </span>

      <span
        className="mt-1 h-10 w-1 flex-shrink-0 rounded-full"
        style={{ background: point.accent }}
      />

      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        {point.icon}
      </span>

      <div className="relative">
        <h3 className="text-lg font-extrabold leading-tight text-[#0b203c]">
          {line1}
          <br />
          {line2}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {point.description}
        </p>
      </div>
    </div>
  );
}
