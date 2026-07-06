"use client";
import { useEffect, useState, useCallback } from "react";

const products = [
  {
    image: "one.png",
    name: "Susta Can",
    tagline: "Testosterone Mix Compound",
    dose: "250 mg/ml",
    description:
      "Advanced testosterone blend formulated for consistent performance and sustained muscle support across every cycle.",
    color: "#c0392b",
    accentLight: "#FAECE7",
    accentText: "#993C1D",
    tag: "Best Seller",
  },
  {
    image: "two.png",
    name: "Trene Can",
    tagline: "Trenbolone Enanthate",
    dose: "200 mg/ml",
    description:
      "High-purity Trenbolone Enanthate engineered for experienced athletes seeking elite-level strength and conditioning.",
    color: "#7F77DD",
    accentLight: "#EEEDFE",
    accentText: "#3C3489",
    tag: "Pro Grade",
  },
  {
    image: "three.png",
    name: "Testo Can",
    tagline: "Testosterone Enanthate USP",
    dose: "250 mg/ml",
    description:
      "Premium-grade Testosterone Enanthate delivering reliable hormone support with pharmaceutical precision.",
    color: "#378ADD",
    accentLight: "#E6F1FB",
    accentText: "#0C447C",
    tag: "USP Grade",
  },
  {
    image: "four.png",
    name: "Nandro Can",
    tagline: "Nandrolone Phenylpropionate",
    dose: "100 mg/ml",
    description:
      "Fast-acting NPP formulation crafted with rigorous pharmaceutical-grade standards for consistent results.",
    color: "#1D9E75",
    accentLight: "#E1F5EE",
    accentText: "#0F6E56",
    tag: "Fast Acting",
  },
  {
    image: "five.png",
    name: "Deca Can",
    tagline: "Nandrolone Decanoate USP",
    dose: "250 mg/ml",
    description:
      "Long-lasting Nandrolone Decanoate offering dependable quality and consistency for sustained performance cycles.",
    color: "#D85A30",
    accentLight: "#FAECE7",
    accentText: "#993C1D",
    tag: "Long Ester",
  },
  {
    image: "six.png",
    name: "Cypo Can",
    tagline: "Testosterone Cypionate USP",
    dose: "250 mg/ml",
    description:
      "High-purity Testosterone Cypionate manufactured to the most rigorous pharmaceutical quality standards.",
    color: "#1D9E75",
    accentLight: "#E1F5EE",
    accentText: "#085041",
    tag: "USP Grade",
  },
  {
    image: "seven.png",
    name: "Bolda Can",
    tagline: "Boldenone Undecylenate USP",
    dose: "250 mg/ml",
    description:
      "Trusted Boldenone formulation engineered to professional-grade standards for serious athletes.",
    color: "#BA7517",
    accentLight: "#FAEEDA",
    accentText: "#854F0B",
    tag: "Pro Grade",
  },
];

const DURATION = 4500;

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    setActive(index);
    setProgressKey((k) => k + 1);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
      setProgressKey((k) => k + 1);
      setAnimKey((k) => k + 1);
    }, DURATION);
    return () => clearInterval(interval);
  }, [paused]);

  const product = products[active];

  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-white py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes floatProduct {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.55); opacity: 0; }
        }

        .product-float {
          animation: floatProduct 5s ease-in-out infinite;
        }
        .anim-fade-up {
          animation: fadeSlideUp 0.5s cubic-bezier(.22,.68,0,1.2) forwards;
        }
        .anim-fade-in {
          animation: fadeSlideIn 0.45s ease forwards;
        }
        .anim-scale-in {
          animation: scaleIn 0.55s cubic-bezier(.22,.68,0,1.2) forwards;
        }
        .progress-bar {
          transform-origin: left;
          animation: progressFill ${DURATION}ms linear forwards;
        }
        .thumb-btn {
          transition: transform 0.22s ease, box-shadow 0.22s ease, opacity 0.22s ease;
        }
        .thumb-btn:hover { opacity: 1 !important; }
        .thumb-btn.active {
          transform: scale(1.12);
          box-shadow: 0 8px 24px rgba(0,0,0,0.14);
        }
        .contact-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .glow-ring {
          animation: pulseRing 2s ease-out infinite;
        }

        .dot-nav button {
          transition: width 0.3s ease, background 0.3s ease;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          row-gap: 0;
          grid-template-areas:
            "tag"
            "name"
            "tagline"
            "dose"
            "image"
            "gallery"
            "dots"
            "description"
            "cta";
        }
        @media (min-width: 1024px) {
          .showcase-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 4rem;
            align-items: center;
            grid-template-areas:
              "tag image"
              "name image"
              "tagline image"
              "dose image"
              "description image"
              "cta image"
              "gallery image"
              "dots image";
          }
        }
      `}</style>

      {/* Subtle page-level background tint */}
      <div
        className="pointer-events-none absolute inset-0 transition-colors duration-700"
        style={{ background: `${product.color}06` }}
      />

      {/* Large faded background letter */}
      <div
        className="pointer-events-none absolute right-[-2rem] top-1/2 -translate-y-1/2 select-none text-[22rem] font-black leading-none opacity-[0.03] transition-all duration-700"
        style={{ color: product.color }}
        aria-hidden="true"
      >
        {product.name.charAt(0)}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="showcase-grid">

          {/* Eyebrow tag */}
          <div
            key={`tag-${animKey}`}
            className="anim-fade-in mb-5 inline-flex items-center gap-2 justify-self-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest lg:justify-self-start"
            style={{
              gridArea: "tag",
              borderColor: `${product.color}44`,
              background: product.accentLight,
              color: product.accentText,
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: product.color }}
            />
            {product.tag}
          </div>

          {/* Product name */}
          <h2
            key={`name-${animKey}`}
            className="anim-fade-up justify-self-center text-center text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:justify-self-start lg:text-left"
            style={{ gridArea: "name", animationDelay: "0.05s", opacity: 0 }}
          >
            {product.name}
          </h2>

          {/* Tagline */}
          <p
            key={`tagline-${animKey}`}
            className="anim-fade-up justify-self-center mt-3 text-center text-lg font-semibold sm:text-xl lg:justify-self-start lg:text-left"
            style={{ gridArea: "tagline", color: product.color, animationDelay: "0.1s", opacity: 0 }}
          >
            {product.tagline}
          </p>

          {/* Dose badge */}
          <div
            key={`dose-${animKey}`}
            className="anim-fade-up justify-self-center mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium lg:justify-self-start"
            style={{
              gridArea: "dose",
              animationDelay: "0.15s",
              opacity: 0,
              background: product.accentLight,
              color: product.accentText,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
            </svg>
            {product.dose}
          </div>

          {/* Description */}
          <p
            key={`desc-${animKey}`}
            className="anim-fade-up mx-auto mt-6 max-w-md text-center text-base leading-relaxed text-gray-500 sm:text-lg lg:mx-0 lg:text-left"
            style={{ gridArea: "description", animationDelay: "0.18s", opacity: 0 }}
          >
            {product.description}
          </p>

          {/* CTA row */}
          <div
            key={`cta-${animKey}`}
            className="anim-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ gridArea: "cta", animationDelay: "0.22s", opacity: 0 }}
          >
            <button
              className="contact-btn rounded-full px-8 py-3.5 text-sm font-semibold text-white"
              style={{ background: product.color }}
            >
              Contact for order
            </button>
            <span className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Prescription only · Rx
            </span>
          </div>

          {/* Thumbnails */}
          <div
            className="scrollbar-hide mt-10 flex gap-2.5 overflow-x-auto pb-2 w-full justify-center lg:justify-start"
            style={{ gridArea: "gallery" }}
          >
            {products.map((p, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`View ${p.name}`}
                className={`thumb-btn relative flex-shrink-0 h-[60px] w-[60px] mt-3 overflow-hidden rounded-xl bg-white border-2  ${
                  active === index ? "active" : "border-gray-100 opacity-55"
                }`}
                style={{
                  borderColor: active === index ? p.color : undefined,
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-contain p-1.5 "
                />
                {active === index && (
                  <div className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden bg-gray-100">
                    <div
                      key={progressKey}
                      className="progress-bar h-full w-full"
                      style={{ background: p.color }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Dot navigation */}
          <div
            className="dot-nav mt-5 flex items-center gap-1.5 justify-center lg:justify-start"
            style={{ gridArea: "dots" }}
          >
            {products.map((p, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.name}`}
                className="h-1.5 rounded-full"
                style={{
                  width: active === i ? "28px" : "6px",
                  background: active === i ? product.color : "#d1d5db",
                }}
              />
            ))}
          </div>

          {/* Product image */}
          <div
            className="relative mx-auto mt-10 flex h-[340px] max-w-[460px] items-center justify-center overflow-hidden rounded-3xl sm:h-[440px] md:h-[520px] lg:mt-0 "
            style={{ gridArea: "image", background: `${product.accentLight}` }}
          >

            {/* Inner ring glow */}
            <div
              className="absolute inset-0 rounded-3xl "
              style={{
                boxShadow: `inset 0 0 60px ${product.color}18`,
                transition: "box-shadow 0.6s ease",
              }}
            />

            {/* Corner accent lines */}
            <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg opacity-30" style={{ borderColor: product.color }} />
            <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg opacity-30" style={{ borderColor: product.color }} />
            <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg opacity-30" style={{ borderColor: product.color }} />
            <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 rounded-br-lg opacity-30" style={{ borderColor: product.color }} />

            {/* Pulse ring behind product */}
            <div
              key={`ring-${animKey}`}
              className="glow-ring absolute h-48 w-48 rounded-full "
              style={{ background: `${product.color}18` }}
            />

            {/* Product number indicator */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold "
              style={{ background: `${product.color}18`, color: product.accentText }}
            >
              <span>{String(active + 1).padStart(2, "0")}</span>
              <span style={{ color: `${product.color}66` }}>/</span>
              <span>{String(products.length).padStart(2, "0")}</span>
            </div>

            {/* Product image */}
            <img
              key={`img-${animKey}`}
              src={product.image}
              alt={product.name}
              className="anim-scale-in product-float relative z-10 max-h-[78%] max-w-[78%] object-contain "
              style={{
                filter: `drop-shadow(0 20px 40px ${product.color}44)`,
                opacity: 0,
              }}
            />

            {/* Bottom label strip */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-3.5 backdrop-blur-sm"
              style={{ background: `${product.color}12`, borderTop: `1px solid ${product.color}22` }}
            >
              <span className="text-xs font-semibold" style={{ color: product.accentText }}>
                {product.tagline}
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                style={{ background: product.accentLight, color: product.accentText }}
              >
                {product.dose}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}