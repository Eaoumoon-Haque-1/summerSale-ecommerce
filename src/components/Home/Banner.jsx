import Link from "next/link";
import banner from '@/assests/summersale.jpg'
import Image from "next/image";
import { ImFire } from "react-icons/im";
import { RiShoppingBag2Fill } from "react-icons/ri";
export default function Banner() {
  return (
    <section className=" bg-gradient-to-r from-orange-100 via-yellow-50 to-sky-100">
      <div className="w-10/12 mx-auto px-4 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div>
          <p className="inline-block px-4 py-2 mb-4 rounded-full bg-orange-500 text-white font-medium">
            Summer Sale 50% OFF
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Grab Your Summer Essentials Today
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-xl">
            Explore sunglasses, skincare, beach outfits, sandals, and more hot summer deals in one place.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition"
            >
              Shop Now <RiShoppingBag2Fill />
            </Link>

            <Link
              href="/products"
              className=" flex items-center gap-2 px-6 py-3 rounded-xl border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition"
            >
              Hot Deals <ImFire />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-70"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-300 rounded-full blur-2xl opacity-70"></div>

          <Image
            src={banner}
            alt="Summer sale"
            className="relative w-full max-h-[420px] object-contain drop-shadow-2xl rounded-4xl"
          />
        </div>

      </div>
    </section>
  );
}