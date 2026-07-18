"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What anabolic steroid products do AmericanAbolics feature?",
    a: "AmericanAbolics currently features products containing Testosterone Enanthate, Testosterone Cypionate, Trenbolone Enanthate, Nandrolone Decanoate, Nandrolone Phenylpropionate, Boldenone Undecylenate, and a mixed testosterone formulation.",
  },
  {
    q: "What testosterone products are available?",
    a: "The current testosterone range includes Testo Can with Testosterone Enanthate 250 mg/ml, Cypo Can with Testosterone Cypionate 250 mg/ml, and Susta Can with a Testosterone Mix Compound 250 mg/ml.",
  },
  {
    q: "What is the difference between Testosterone Enanthate and Testosterone Cypionate?",
    a: "Testosterone Enanthate and Testosterone Cypionate are both esterified forms of testosterone. Their chemical ester structures and pharmacokinetic characteristics differ, although both are considered longer-acting testosterone formulations.",
  },
  {
    q: "What nandrolone compounds are featured?",
    a: "AmericanAbolics currently features Nandrolone Decanoate 250 mg/ml as Deca Can and Nandrolone Phenylpropionate 100 mg/ml as Nandro Can.",
  },
  {
    q: "Does AmericanAbolics provide information about each compound?",
    a: "Yes. Each product should have a dedicated page containing information about its active compound, concentration, formulation, specifications, safety considerations, and other relevant product details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white pt-20">
      <style>{`
        .faq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }
        .faq-panel.open {
          grid-template-rows: 1fr;
        }
        .faq-panel > div {
          overflow: hidden;
        }
        .faq-toggle {
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .faq-toggle.open {
          transform: rotate(45deg);
        }
        .faq-item {
          transition: border-color 0.25s ease, background 0.25s ease;
        }
      `}</style>

      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Support
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500">
            Everything you need to know before you order.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item overflow-hidden rounded-2xl border ${
                  isOpen
                    ? "border-emerald-200 bg-emerald-50/40"
                    : "border-gray-100 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`faq-toggle flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border text-base font-medium ${
                      isOpen
                        ? "open border-emerald-600 bg-emerald-600 text-white"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div className={`faq-panel ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">
                      {item.a}
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
