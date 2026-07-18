import Link from "next/link";
import { products } from "@/data/products";

const shieldTheme = {
  "susta-can": { bg: "#E1F5EE", text: "#0F6E56" },
  "trene-can": { bg: "#E6F1FB", text: "#0C447C" },
  "testo-can": { bg: "#E1F5EE", text: "#0F6E56" },
  "nandro-can": { bg: "#EEEDFE", text: "#3C3489" },
  "deca-can": { bg: "#FAEEDA", text: "#854F0B" },
  "cypo-can": { bg: "#E6F1FB", text: "#0C447C" },
  "bolda-can": { bg: "#FBE4E4", text: "#9E2A2A" },
};

const hexPattern =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpolygon points='30,3 54,16 54,44 30,57 6,44 6,16' fill='none' stroke='%230f7a4f' stroke-opacity='0.18' stroke-width='1.2'/%3E%3C/svg%3E";

function ShieldIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function BoxIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 8 12 3 3 8l9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

function FlaskIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 2v6.5L4.5 17a2 2 0 0 0 1.75 3h11.5a2 2 0 0 0 1.75-3L15 8.5V2" />
      <path d="M8 2h8" />
      <path d="M9.5 14h5" />
    </svg>
  );
}

function DropletIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function ScaleIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v18" />
      <path d="M5 7h4l-2 5a2.2 2.2 0 0 1-4 0z" />
      <path d="M15 7h4l-2 5a2.2 2.2 0 0 1-4 0z" />
      <path d="M4 21h16" />
      <path d="M4.5 7 12 4.5 19.5 7" />
    </svg>
  );
}

export default function ProductComparisonTable() {
  return (
    <section className="bg-[#F7F8F7] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-2 md:px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-2 md:px-6 py-2 text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
            <span aria-hidden="true">✦</span>
            Premium Quality &middot; Proven Results
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center text-2xl font-extrabold tracking-tight md:text-4xl">
          <span className="text-[#0b203c]">Compare Our </span>
          <span className="bg-gradient-to-r from-[#0b203c] to-[#0f7a4f] bg-clip-text text-transparent">
            Product Range
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-5xl text-center text-base leading-relaxed text-gray-500 sm:text-lg">
          Explore our premium range of anabolic steroid products and compare
          key details to find the right solution for your goals.
        </p>

        {/* Divider */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-24 bg-gradient-to-r from-transparent to-emerald-600 sm:w-40" />
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-emerald-700 shadow-sm">
            <ScaleIcon />
          </span>
          <span className="h-px w-24 bg-gradient-to-l from-transparent to-emerald-600 sm:w-40" />
        </div>

        {/* Table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#0b203c] to-[#153552] text-white">
                  <th className="px-6 py-5 font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <BoxIcon /> Product
                    </span>
                  </th>
                  <th className="px-6 py-5 font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <FlaskIcon /> Active Compound
                    </span>
                  </th>
                  <th className="px-6 py-5 font-semibold">
                    <span className="inline-flex items-center gap-2">
                      <DropletIcon /> Concentration
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => {
                  const theme = shieldTheme[product.slug];
                  return (
                    <tr
                      key={product.slug}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50/70"}
                    >
                      <td className="px-6 py-4">
                        <Link
                          href={`/products/${product.slug}`}
                          className="group flex items-center gap-3"
                        >
                          <span
                            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                            style={{ background: theme.bg, color: theme.text }}
                          >
                            <ShieldIcon />
                          </span>
                          <span className="font-bold text-[#0b203c] group-hover:text-emerald-700">
                            {product.name}
                          </span>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {product.compound}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          <DropletIcon />
                          {product.dose}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quality banner */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 opacity-70"
            style={{
              backgroundImage: `url("${hexPattern}")`,
              backgroundSize: "40px 40px",
              backgroundRepeat: "repeat",
              maskImage:
                "radial-gradient(circle at top right, black, transparent 70%)",
            }}
          />
          <div className="relative flex items-start gap-5">
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <ShieldIcon width="26" height="26" />
            </span>
            <div>
              <h3 className="text-lg font-extrabold text-[#0b203c]">
                Quality You Can Trust
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                All our products are manufactured in state-of-the-art
                facilities and undergo rigorous testing to ensure purity,
                potency, and consistency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
