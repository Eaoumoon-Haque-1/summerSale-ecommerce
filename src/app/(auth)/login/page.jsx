"use client";

import { Suspense } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackURL = searchParams.get("callbackURL") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const { error } = await authClient.signIn.email({
      email: e.target.email.value,
      password: e.target.password.value,
      callbackURL,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push(callbackURL);
    router.refresh();
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL,
    });
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-[2rem] shadow-2xl border border-orange-100 p-8 md:p-10">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Welcome Back
      </h1>

      <p className="text-center text-gray-500 mt-3 mb-10">
        Login to continue shopping summer essentials
      </p>

      <form onSubmit={onSubmit} className="space-y-6">
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
          Login
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

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}