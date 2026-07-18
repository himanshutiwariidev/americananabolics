import Link from "next/link";
import { compoundCategories, getProductsByCategory } from "@/data/products";

export const metadata = {
  title: "Testosterone Products | AmericanAbolics",
  description: compoundCategories.testosterone.description,
};

export default function TestosteroneProductsPage() {
  const testosteroneProducts = getProductsByCategory("testosterone");

  return (
    <main className="min-h-screen bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/shop" className="hover:text-emerald-700">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Testosterone Products</span>
        </nav>

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {compoundCategories.testosterone.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
          {compoundCategories.testosterone.description}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testosteroneProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={`/${product.image}`}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-1 p-5">
                <h2 className="text-base font-bold text-gray-900">
                  {product.name}
                </h2>
                <p className="text-xs text-gray-400">{product.compound}</p>
                <span
                  className="mt-2 inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-semibold"
                  style={{
                    color: product.accentText,
                    background: product.accentLight,
                  }}
                >
                  {product.dose}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
