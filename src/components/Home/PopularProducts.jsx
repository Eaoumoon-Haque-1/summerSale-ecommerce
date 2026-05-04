import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export default function PopularProducts() {
  const popularProducts = products.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="text-center mb-10">
        <p className="text-orange-500 font-semibold">Popular Products</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Hot Summer Picks 🔥
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">
            <div className="relative w-full h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="mt-2 text-yellow-500">⭐ {product.rating}</p>
              <p className="mt-2 text-orange-500 font-bold">${product.price}</p>

              <Link
                href={`/products/${product.id}`}
                className="mt-4 block text-center bg-orange-500 text-white py-3 rounded-xl font-semibold"
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