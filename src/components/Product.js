export default function ProductSection() {
  const products = [
    {
      id: 1,
      name: "Susta Can",
      compound: "Testosterone Mix Compound",
      dose: "250 mg/ml",
      image: "1.png",
      hoverImage: "susta.jpeg",
      accent: "#c0392b",
      accentLight: "#FAECE7",
      accentText: "#993C1D",
      series: "Coral Series",
      icon: "🪸",
    },
    {
      id: 2,
      name: "Trene Can",
      compound: "Trenbolone Enanthate",
      dose: "200 mg/ml",
      image: "2.png",
      hoverImage: "trene.jpeg",
      accent: "#7F77DD",
      accentLight: "#EEEDFE",
      accentText: "#3C3489",
      series: "Purple Series",
      icon: "🐦",
    },
    {
      id: 3,
      name: "Testo Can",
      compound: "Testosterone Enanthate USP",
      dose: "250 mg/ml",
      image: "3.png",
      hoverImage: "testo.jpeg",
      accent: "#378ADD",
      accentLight: "#E6F1FB",
      accentText: "#0C447C",
      series: "Blue Series",
      icon: "🖊️",
    },
    {
      id: 4,
      name: "Nandro Can",
      compound: "Nandrolone Phenylpropionate",
      dose: "100 mg/ml",
      image: "4.png",
      hoverImage: "nandro.jpeg",
      accent: "#1D9E75",
      accentLight: "#E1F5EE",
      accentText: "#0F6E56",
      series: "Teal Series",
      icon: "🌿",
    },
    {
      id: 5,
      name: "Deca Can",
      compound: "Nandrolone Decanoate USP",
      dose: "250 mg/ml",
      image: "5.png",
      hoverImage: "deca.jpeg",
      accent: "#D85A30",
      accentLight: "#FAECE7",
      accentText: "#993C1D",
      series: "Coral Series",
      icon: "🪸",
    },
    {
      id: 6,
      name: "Cypo Can",
      compound: "Testosterone Cypionate USP",
      dose: "250 mg/ml",
      image: "6.png",
      hoverImage: "cypo.jpeg",
      accent: "#1D9E75",
      accentLight: "#E1F5EE",
      accentText: "#085041",
      series: "Teal Series",
      icon: "🌿",
    },
    {
      id: 7,
      name: "Bolda Can",
      compound: "Boldenone Undecylenate USP",
      dose: "250 mg/ml",
      image: "7.png",
      hoverImage: "bolda.jpeg",
      accent: "#BA7517",
      accentLight: "#FAEEDA",
      accentText: "#854F0B",
      series: "Amber Series",
      icon: "⭐",
    },
  ];

  return (
    <section className="bg-white py-20">
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .product-card {
          transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
          border: 1px solid #f0f0f0;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.10);
          border-color: #e0e0e0;
        }

        .primary-image {
          transition: transform 0.38s ease, opacity 0.35s ease;
          opacity: 1;
          transform: scale(1) translateY(0px);
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.18));
        }

        .hover-image {
          transition: transform 0.38s ease, opacity 0.35s ease;
          opacity: 0;
          transform: scale(0.82) translateY(8px);
          filter: drop-shadow(0 8px 18px rgba(0,0,0,0.22));
        }

        .product-card:hover .primary-image {
          opacity: 0;
          transform: scale(0.82) translateY(-8px);
        }

        .product-card:hover .hover-image {
          opacity: 1;
          transform: scale(1.1) translateY(-4px);
        }

        .arrow-icon {
          transition: transform 0.2s ease;
          display: inline-block;
        }

        .product-card:hover .arrow-icon {
          transform: translateX(4px);
        }

        .dose-pill {
          transition: background 0.25s ease;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Premium Quality
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Featured Products
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500">
            Pharmaceutical-grade injectable compounds. Prescription only.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group relative flex flex-col overflow-hidden rounded-2xl bg-white"
            >
              {/* Top Accent Bar */}
              <div
                className="h-1.5 w-full flex-shrink-0"
                style={{ background: product.accent }}
              />

              {/* Image Area */}
              <div className="relative w-full aspect-square overflow-hidden">
               

                {/* Primary Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="primary-image absolute inset-0 h-full w-full"
                  style={{ objectFit: "cover", zIndex: 2 }}
                />

                {/* Hover Image */}
                <img
                  src={product.hoverImage}
                  alt={`${product.name} detail`}
                  className="hover-image absolute inset-0 h-full w-full"
                  style={{ objectFit: "cover", zIndex: 3 }}
                />
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100" />

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-2 p-4">
                

                {/* Name */}
                <h3 className="text-base font-bold leading-tight text-gray-900">
                  {product.name}
                </h3>

                {/* Compound */}
                <p className="truncate text-xs text-gray-400">
                  {product.compound}
                </p>

                {/* Dose Pill */}
                <div
                  className="dose-pill mt-1 inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold"
                  style={{
                    borderColor: `${product.accent}44`,
                    color: product.accentText,
                    background: product.accentLight,
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                  </svg>
                  {product.dose}
                </div>
              </div>

              {/* Footer */}
              <div
                className="flex items-center justify-between border-t border-gray-100 px-4 py-3"
              >
                <span
                  className="text-xs font-medium"
                  style={{ color: product.accentText }}
                >
                  Contact for order{" "}
                  <span className="arrow-icon">→</span>
                </span>
                <span className="text-xs text-gray-300">#{product.id.toString().padStart(3, "0")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}