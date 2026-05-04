"use client";

import Image from "next/image";
import Link from "next/link";
import { PiSunHorizonFill } from "react-icons/pi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-10/12 mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-orange-500 flex items-center gap-2"
        >
          <PiSunHorizonFill className="h-14 w-14" />
          SunCart
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/products" className="hover:text-orange-500">Products</Link>
          <Link href="/my-profile" className="hover:text-orange-500">My Profile</Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Image
                src={user.image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"}
                alt={user.name || "User"}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover"
              />

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 rounded-lg border border-orange-500 text-orange-500 hover:text-white hover:bg-orange-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}