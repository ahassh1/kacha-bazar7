'use client'
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async(e: React.SubmitEvent<HTMLElement>)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData.entries()) as{password:"string", email:"string"}
     const { data, error } = await authClient.signIn.email({
    ...user,
    callbackURL: "/",
  });
       if(data){
         toast.success('user added successfully')
         redirect("/")
       }
       if(error){
        toast.error('user already added')
       } 
  }
  return (
   <div className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
  <form onSubmit={onSubmit} className="w-full max-w-md rounded-2xl border border-green-100 bg-linear-to-br from-green-50 via-white to-emerald-100 p-6 shadow-xl sm:p-8">   
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-green-500 to-emerald-700 text-3xl text-white shadow-lg">
            🛒
          </div>

          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            আবার ফিরে আসুন!
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            আপনার বাজার দর অ্যাকাউন্টে সাইন ইন করুন।
          </p>
        </div>

        <fieldset className="fieldset mb-4">
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

        <fieldset className="fieldset mb-6">
          <legend className="fieldset-legend text-gray-700">
            পাসওয়ার্ড
          </legend>

          <input
            name="password"
            type="password"
            className="input w-full rounded-xl border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none"
            placeholder="আপনার পাসওয়ার্ড লিখুন"
            required
          />
        </fieldset>

        <button
          type="submit"
          className="btn w-full rounded-xl border-0 bg-linear-to-r from-green-600 to-emerald-700 text-base text-white shadow-md transition hover:from-green-700 hover:to-emerald-800"
        >
          সাইন ইন করুন
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          নতুন ব্যবহারকারী?{" "}
          <a
            href="/signup"
            className="font-semibold text-green-700 hover:text-emerald-800 hover:underline"
          >
            অ্যাকাউন্ট তৈরি করুন
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;