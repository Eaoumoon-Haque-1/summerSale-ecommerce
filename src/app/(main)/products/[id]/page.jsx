import { auth } from "@/lib/auth";
import products from "@/data/products.json";
import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProductDetailsPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/login?callbackURL=/products/${params.id}`);
  }

  const product = products.find((item) => item.id == Number(params.id));

  if (!product) {
    return <h1 className="text-center py-20 text-3xl">Product Not Found</h1>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-orange-500 font-semibold">{product.category}</p>

          <h1 className="text-4xl font-bold mt-3">{product.name}</h1>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <div className="mt-6 space-y-3 text-lg">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Rating:</strong> ⭐ {product.rating}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p className="text-2xl font-bold text-orange-500">
              ${product.price}
            </p>
          </div>

          <button className="mt-8 px-8 py-4 rounded-2xl bg-orange-500 text-white font-bold hover:bg-orange-600">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}