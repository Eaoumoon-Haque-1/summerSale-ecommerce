import Link from "next/link";
import { PiSunHorizonFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="  bg-orange-50 border-t mt-16">
      <div className="max-w-10/12 mx-auto px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-30">
        <div>
          <h2 className="text-2xl font-bold text-orange-500 flex items-center gap-2"> <PiSunHorizonFill className="h-10 w-10"/> SunCart</h2>
          <p className="mt-3 text-gray-600">
            Your summer essentials store for outfits, skincare, accessories, and beach products.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/my-profile">My Profile</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-gray-600">Email: support@suncart.com</p>
          <p className="text-gray-600">Phone: +880 1234-567890</p>

          <div className="flex gap-3 mt-4">
            <span className="btn p-2  btn-circle btn-sm bg-orange-500 text-white border-none">f</span>
            <span className="btn p-2 btn-circle btn-sm bg-orange-500 text-white border-none">in</span>
            <span className="btn p-2 btn-circle btn-sm bg-orange-500 text-white border-none">X</span>
          </div>
        </div>
      </div>

      <div className="text-center py-4 bg-orange-100 text-gray-600 text-sm">
        © 2026 SunCart. All rights reserved.
      </div>
    </footer>
  );
}