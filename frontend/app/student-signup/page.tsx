"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/lib/firebase";

export default function StudentSignupPage() {
const router = useRouter();
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] =
useState(false);

const handleGoogleSignup = async () => {
  try {
    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    console.log(result.user);

    router.push("/student-dashboard");

  } catch (error: any) {
  console.error(error);
  alert(error.message);
}
};

return ( <div className="relative min-h-screen overflow-hidden bg-slate-950">


  {/* Background Effects */}
  <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
  <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

  <div className="relative z-10 flex min-h-screen">

    {/* Left Side */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="hidden lg:flex w-1/2 flex-col justify-center px-20 text-white"
    >
      <h1 className="text-5xl font-bold leading-tight">
        Join InCrafto Today
      </h1>

      <p className="mt-6 text-lg text-slate-300">
        Learn in-demand skills, work on real-world projects and
        build a successful career with expert guidance.
      </p>

      <div className="mt-10 space-y-5">

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400" />
          Industry-Focused Training
        </div>

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400" />
          Real Client Projects
        </div>

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400" />
          Placement Assistance
        </div>

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400" />
          Certification Programs
        </div>

      </div>
    </motion.div>

    {/* Right Side */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex w-full lg:w-1/2 items-center justify-center px-6 py-10"
    >
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

        <h2 className="text-3xl font-bold text-white text-center">
          Create Account
        </h2>

        <p className="mt-2 text-center text-slate-400">
          Start your learning journey today
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

              <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute right-4 top-3.5 text-slate-400"
>
  {showPassword ? (
    <EyeOff size={18} />
  ) : (
    <Eye size={18} />
  )}
</button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-3.5 text-slate-400"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <Link
  href="/student-dashboard"
  className="block w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white text-center transition hover:scale-[1.02]"
>
  Create Account
</Link>

        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-white/10" />
          <span className="px-3 text-sm text-slate-500">
            OR
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <button
  type="button"
  onClick={handleGoogleSignup}
  className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3 text-white transition hover:bg-white/10"
>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-5 w-5"
          >
            <path fill="#FFC107" d="M43.6 20H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.3 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.6 5.1C9.4 39.6 16.1 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20H42V20H24v8h11.3c-1.1 3.2-3.5 5.7-6.8 7.3l6.3 5.2C39.4 37.1 44 31.1 44 24c0-1.3-.1-2.7-.4-4z"/>
          </svg>

          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            href="/student-login"
            className="font-semibold text-blue-400"
          >
            Login
          </Link>
        </p>

      </div>
    </motion.div>
  </div>
</div>


);
}
