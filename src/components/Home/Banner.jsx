import Link from "next/link";
import { ImFire } from "react-icons/im";
import { RiShoppingBag2Fill } from "react-icons/ri";
export default function Banner() {
  return (
    <section
      className="relative min-h-[520px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.25)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 w-full">
        <div className="max-w-xl text-white">
          <p className="inline-block px-4 py-2 mb-4 rounded-full bg-orange-500 font-medium">
            Summer Sale 50% OFF
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Grab Your Summer Essentials
          </h1>

          <p className="mt-5 text-lg text-gray-100">
            Shop sunglasses, skincare, beach outfits, sandals, and hot summer deals.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-400 text-orange-400 hover:text-white font-semibold hover:bg-orange-500"
            >
              Shop Now <RiShoppingBag2Fill />
            </Link>

            <Link
              href="/products"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-400 text-orange-400 hover:text-white font-semibold hover:bg-orange-500"
            >
              Hot Deals <ImFire />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}