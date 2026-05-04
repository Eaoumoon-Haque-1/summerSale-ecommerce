import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold">All Products</p>
        <h1 className="text-4xl font-bold text-gray-900">
          Summer Essentials Collection
        </h1>
        <p className="text-gray-600 mt-3">
          Browse all summer products and view details after login.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden border border-orange-100"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-orange-500 font-semibold">
                {product.category}
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-2">
                {product.name}
              </h2>

              <p className="text-gray-500 mt-2">{product.brand}</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-yellow-500 font-medium">
                  ⭐ {product.rating}
                </p>

                <p className="text-2xl font-bold text-orange-500">
                  ${product.price}
                </p>
              </div>

              <Link
                href={`/products/${product.id}`}
                className="mt-6 block w-full text-center rounded-2xl bg-orange-500 py-3 font-bold text-white hover:bg-orange-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}