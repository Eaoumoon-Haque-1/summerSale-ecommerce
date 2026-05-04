"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const { error } = await authClient.signUp.email({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      image: e.target.image.value,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/login");
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-[2rem] shadow-2xl border border-orange-100 p-8 md:p-10">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mt-3 mb-10">
        Register to explore SunCart summer deals
      </p>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Photo URL
          </label>
          <input
            name="image"
            type="url"
            required
            placeholder="https://example.com/photo.jpg"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-orange-500 py-4 font-bold text-white hover:bg-orange-600 transition"
        >
          Register
        </button>
      </form>

      <div className="flex items-center gap-4 my-8">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-sm text-gray-500">or continue with</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full rounded-2xl border border-gray-300 py-4 font-semibold flex items-center justify-center gap-3 hover:bg-orange-50 transition"
      >
        <GrGoogle />
        Google
      </button>
    </div>
  );
}