"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("user added successfully");
      redirect("/");
    }

    if (error) {
      toast.error("user already added");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google", // provider use
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github", // provider use
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white px-4 py-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl border border-green-100 bg-linear-to-br from-green-50 via-white to-emerald-100 p-4 shadow-xl sm:p-6"
      >
        <div className="mb-4 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-emerald-700 text-2xl text-white shadow-lg">
            🛒
          </div>

          <h1 className="text-lg font-bold text-gray-800 sm:text-2xl">
            সাইন আপ করুন
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            বাজার দর-এ যোগ দিন এবং বাজারের দাম জানুন।
          </p>
        </div>

        <fieldset className="fieldset mb-3">
          <legend className="fieldset-legend text-gray-700">
            আপনার নাম
          </legend>

          <input
            name="name"
            type="text"
            className="input w-full rounded-xl border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none"
            placeholder="আপনার পুরো নাম লিখুন"
            required
          />
        </fieldset>

      

        <fieldset className="fieldset mb-3">
          <legend className="fieldset-legend text-gray-700">
            ইমেইল
          </legend>

          <input
            name="email"
            type="email"
            className="input w-full rounded-xl border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none"
            placeholder="আপনার ইমেইল লিখুন"
            required
          />
        </fieldset>

        <fieldset className="fieldset mb-3">
          <legend className="fieldset-legend text-gray-700">
            পাসওয়ার্ড
          </legend>

          <input
            name="password"
            type="password"
            className="input w-full rounded-xl border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none"
            placeholder="একটি পাসওয়ার্ড দিন"
            required
          />
        </fieldset>
          <fieldset className="fieldset mb-3">
          <legend className="fieldset-legend text-gray-700">
            confirm your password
          </legend>

          <input
            name="password"
            type="password"
            className="input w-full rounded-xl border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none"
            placeholder="confirm password"
          />
        </fieldset>

        <button
          type="submit"
          className="btn w-full rounded-xl border-0 bg-linear-to-r from-green-600 to-emerald-700 text-base text-white shadow-md transition hover:from-green-700 hover:to-emerald-800"
        >
          সাইন আপ করুন
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
          <a
            href="/signin"
            className="font-semibold text-green-700 hover:text-emerald-800 hover:underline"
          >
            সাইন ইন করুন
          </a>
        </p>
      </form>

      <div className="flex w-full max-w-md flex-col gap-3">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn w-full rounded-xl border border-green-200 bg-white text-gray-700 shadow-sm hover:bg-green-50"
        >
          Google দিয়ে চালিয়ে যান
        </button>

        <button
          type="button"
          onClick={handleGithubSignIn}
          className="btn w-full rounded-xl border border-green-200 bg-white text-gray-700 shadow-sm hover:bg-green-50"
        >
          GitHub দিয়ে চালিয়ে যান
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;