import Link from "next/link";

const categories = [
  {
    title: "Testosterone Products",
    count: "3 Products",
    description:
      "Our testosterone product range includes Testosterone Enanthate, Testosterone Cypionate, and a Testosterone Mix Compound. While these products are based on testosterone, their ester composition and formulation differ. Explore individual product pages to compare available concentrations and specifications.",
    cta: "Explore Testosterone Products",
    href: "/products/testosterone",
    accent: "#378ADD",
    accentLight: "#E6F1FB",
    accentText: "#0C447C",
    icon: <VialIcon />,
  },
  {
    title: "Nandrolone Products",
    count: "2 Products",
    description:
      "AmericanAbolics currently features two nandrolone compounds: Nandrolone Decanoate and Nandrolone Phenylpropionate (NPP). Both are esterified forms of nandrolone, but their attached esters give them different pharmacokinetic characteristics.",
    cta: "Explore Nandrolone Products",
    href: "/products/nandrolone",
    accent: "#1D9E75",
    accentLight: "#E1F5EE",
    accentText: "#0F6E56",
    icon: <MoleculeIcon />,
  },
  {
    title: "Trenbolone Enanthate",
    count: "1 Product",
    description:
      "Our product catalog includes Trenbolone Enanthate 200 mg/ml as Trene Can. The dedicated product page provides detailed information about its active compound, concentration, and formulation.",
    cta: "Explore Trene Can",
    href: "/products/trene-can",
    accent: "#7F77DD",
    accentLight: "#EEEDFE",
    accentText: "#3C3489",
    icon: <AmpouleIcon />,
  },
  {
    title: "Boldenone Undecylenate",
    count: "1 Product",
    description:
      "Bolda Can contains Boldenone Undecylenate 250 mg/ml. Visitors can explore its dedicated page for complete compound and product information.",
    cta: "Explore Bolda Can",
    href: "/products/bolda-can",
    accent: "#BA7517",
    accentLight: "#FAEEDA",
    accentText: "#854F0B",
    icon: <DropletIcon />,
  },
];

const hexPattern =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpolygon points='30,3 54,16 54,44 30,57 6,44 6,16' fill='none' stroke='%230f7a4f' stroke-opacity='0.16' stroke-width='1.2'/%3E%3C/svg%3E";

function VialIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2v6.5L4.5 17a2 2 0 0 0 1.75 3h11.5a2 2 0 0 0 1.75-3L15 8.5V2" />
      <path d="M8 2h8" />
      <path d="M9.5 14h5" />
    </svg>
  );
}

function MoleculeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="15" cy="12" r="2.5" />
      <path d="M8.2 7.1 12.8 10.6M8.2 16.9 12.8 13.4" />
      <path d="M17.5 12h2.5" />
    </svg>
  );
}

function AmpouleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="5" rx="1.5" />
      <path d="M10 7v3M14 7v3" />
      <path d="M7 10h10l-1.4 9.1a2 2 0 0 1-2 1.9h-3.2a2 2 0 0 1-2-1.9L7 10z" />
      <path d="M9.3 14.5h5.4" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 9 5-9 5-9-5 9-5z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export default function ProductsIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 hidden h-72 w-72 opacity-60 lg:block"
        style={{
          backgroundImage: `url("${hexPattern}")`,
          backgroundSize: "44px 44px",
          backgroundRepeat: "repeat",
          maskImage:
            "radial-gradient(circle at top right, black, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-emerald-50 blur-3xl"
      />

      <div className="relative mx-auto  md:px-6 px-2">
        <div className="mx-auto  text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white md:px-6 px-2 py-2 md:text-xs text-[10px] font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
            <span aria-hidden="true">✦</span>
            Pharmaceutical Grade &middot; USP Standards
          </span>

          <h1 className="mt-4 text-2xl font-semibold md:font-extrabold tracking-tight md:text-5xl">
            <span className="text-[#0b203c]">Anabolic Steroid Products &amp; </span>
            <span className="bg-gradient-to-r from-[#0b203c] to-[#0f7a4f] bg-clip-text text-transparent">
              Testosterone Compounds
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-5xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Explore the AmericanAbolics range of anabolic steroid products,
            featuring Testosterone Enanthate, Testosterone Cypionate,
            Trenbolone Enanthate, Nandrolone Decanoate, Nandrolone
            Phenylpropionate, Boldenone Undecylenate, and testosterone mix
            compounds. Browse our product range to find clear information
            about active compounds, concentrations, formulations, and product
            specifications.
          </p>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-600 sm:w-32" />
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-emerald-700 shadow-sm">
              <LayersIcon />
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-600 sm:w-32" />
          </div>
          <h2 className="mt-4 text-center text-2xl font-extrabold tracking-tight text-[#0b203c] sm:text-3xl">
            Explore Products by Compound
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div
                  className="h-1.5 w-full flex-shrink-0"
                  style={{ background: category.accent }}
                />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <span
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: category.accentLight, color: category.accentText }}
                    >
                      {category.icon}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
                      style={{ background: category.accentLight, color: category.accentText }}
                    >
                      {category.count}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#0b203c]">
                    {category.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                    {category.description}
                  </p>

                  <Link
                    href={category.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: category.accentText }}
                  >
                    {category.cta}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
