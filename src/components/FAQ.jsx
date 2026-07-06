"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need a prescription to place an order?",
    a: "Yes. Every product on this site is Rx only. Our team verifies prescription and licensing details before any order is confirmed and shipped.",
  },
  {
    q: "How is my order packaged and shipped?",
    a: "All orders are packed in discreet, temperature-appropriate, tamper-evident packaging and shipped with tracking so you can follow delivery status end to end.",
  },
  {
    q: "How can I verify the authenticity of a product?",
    a: "Every vial carries a batch code printed on the label. You can contact our support team with that code at any time to confirm authenticity and manufacturing details.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship to a range of international regions where regulations permit it. Reach out with your location and we'll confirm availability and estimated delivery timelines.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept major bank transfers and select secure payment processors. Full payment details are shared directly with verified customers during order confirmation.",
  },
  {
    q: "What is your returns and replacement policy?",
    a: "If an order arrives damaged or incorrect, contact us within 48 hours of delivery with photos and your order number, and we'll arrange a replacement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
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
