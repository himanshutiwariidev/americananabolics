import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} - ${product.compound} | AmericanAbolics`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/shop" className="hover:text-emerald-700">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{product.name}</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="overflow-hidden rounded-2xl border border-gray-100">
            <img
              src={`/${product.image}`}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div
              className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: product.accentLight, color: product.accentText }}
            >
              {product.series}
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-500 sm:text-lg">
              {product.description}
            </p>

            <dl className="mt-8 divide-y divide-gray-100 rounded-2xl border border-gray-100">
              <div className="flex items-center justify-between px-5 py-4">
                <dt className="text-sm font-semibold text-gray-900">
                  Active Compound
                </dt>
                <dd className="text-sm text-gray-500">{product.compound}</dd>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <dt className="text-sm font-semibold text-gray-900">
                  Concentration
                </dt>
                <dd className="text-sm text-gray-500">{product.dose}</dd>
              </div>
            </dl>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Contact for order
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
