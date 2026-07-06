const features = [
  {
    label: "USP\nStandards",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Lab Tested\n& Verified",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6.5L4.5 17a2 2 0 0 0 1.75 3h11.5a2 2 0 0 0 1.75-3L15 8.5V2" />
        <path d="M8 2h8" />
        <path d="M9.5 14h5" />
      </svg>
    ),
  },
  {
    label: "Consistent Quality\nEvery Batch",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
      </svg>
    ),
  },
];

const stats = [
  {
    value: "12+",
    label: "Years in Pharmaceutical\nManufacturing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    value: "50K+",
    label: "Orders Delivered\nWorldwide",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
      </svg>
    ),
  },
  {
    value: "99.8%",
    label: "Verified Product\nPurity",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Dedicated Customer\nSupport",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
        <rect x="3" y="14" width="4" height="7" rx="2" />
        <rect x="17" y="14" width="4" height="7" rx="2" />
      </svg>
    ),
  },
];

const hexPattern =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpolygon points='30,3 54,16 54,44 30,57 6,44 6,16' fill='none' stroke='%23ffffff' stroke-opacity='0.14' stroke-width='1.2'/%3E%3C/svg%3E";

function Vial({ x }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="2" y="150" width="96" height="140" rx="10" fill="#eef6f1" stroke="#c9ddd0" strokeWidth="2" />
      <rect x="10" y="196" width="80" height="76" fill="#ffffff" stroke="#dbe6e0" strokeWidth="1.5" />
      <rect x="-4" y="118" width="108" height="34" rx="6" fill="#0f7a4f" />
      <rect x="-8" y="140" width="116" height="14" rx="4" fill="#c9ccce" />
      <text x="50" y="215" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f2f22">
        AMERICAN
      </text>
      <text x="50" y="228" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f7a4f">
        ANABOLICS
      </text>
      <line x1="20" y1="238" x2="80" y2="238" stroke="#c9d6cf" strokeWidth="1.5" />
      <text x="50" y="249" textAnchor="middle" fontSize="5.5" fill="#6b7c74">
        PHARMACEUTICAL GRADE
      </text>
      <text x="50" y="258" textAnchor="middle" fontSize="5.5" fill="#6b7c74">
        INJECTABLE COMPOUND
      </text>
      <rect x="10" y="266" width="80" height="14" fill="#0f7a4f" />
      <text x="50" y="275.5" textAnchor="middle" fontSize="5" fontWeight="700" fill="#ffffff">
        FOR RESEARCH USE ONLY
      </text>
    </g>
  );
}

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#F4F5F3] py-10 md:py-0">
      <style>{`
        .about-green-panel {
          clip-path: polygon(68% 0%, 100% 0%, 100% 100%, 42% 100%);
          background: linear-gradient(160deg, #0b203c 0%, #153552 100%);
        }
        .about-hex-panel {
          clip-path: polygon(68% 0%, 100% 0%, 100% 100%, 42% 100%);
          background-image: url("${hexPattern}");
          background-size: 60px 60px;
          background-repeat: repeat;
        }
       
        .about-frame {
          clip-path: polygon(9% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 16%);
        }
        .about-panel {
          clip-path: polygon(9% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 16%);
        }
        .stat-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
          border-color: #649be9;
        }
      `}</style>

      {/* Decorative geometry (desktop only — keeps mobile text legible) */}
      <div className="about-green-panel pointer-events-none absolute inset-0 hidden lg:block" />
      <div className="about-hex-panel pointer-events-none absolute inset-0 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: content */}
          <div className="md:mb-18">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-sky-600" />
              <span className="rounded-full bg-sky-700 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                About Us
              </span>
              <span className="h-px w-8 bg-sky-600" />
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-gray-900">American </span>
              <span className="text-sky-900">Anabolics</span>
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-sky-600" />

            <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg">
              American Anabolics is a pharmaceutical-grade manufacturer dedicated
              to producing injectable compounds under rigorous USP standards.
              Every batch is formulated with consistent dosing, verified purity
              and strict quality control — from raw compound to final vial —
              so every customer can order with confidence.
            </p>

            {/* Feature row */}
            <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-6">
              {features.map((f, i) => (
                <div key={f.label} className="flex items-center gap-5 sm:gap-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                      {f.icon}
                    </span>
                    <p className="whitespace-pre-line text-sm font-semibold leading-tight text-gray-800">
                      {f.label}
                    </p>
                  </div>
                  {i < features.length - 1 && (
                    <span className="hidden h-10 w-px bg-gray-200 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: illustration panel */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="about-frame absolute -inset-2 bg-white" />
            <div className="relative z-10 mt-16 grid grid-cols-2 gap-5 sm:gap-6  ">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="stat-card rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm sm:p-8"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                {stat.icon}
              </span>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-sky-700 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 whitespace-pre-line text-xs font-medium leading-relaxed text-gray-500 sm:text-sm">
                {stat.label}
              </p>
              <span className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-sky-200" />
            </div>
          ))}
        </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
