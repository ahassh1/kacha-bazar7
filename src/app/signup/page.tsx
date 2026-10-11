'use client'

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage =  () => {
    const onSubmit = async(e: React.SubmitEvent<HTMLElement>)=> {
        e.preventDefault()
 const formData = new FormData(e.target)
 const user = Object.fromEntries(formData.entries()) as {name:string, imageUrl:string, email: string, password: string}
 console.log(user);
 
 const {data, error} = await authClient.signUp.email({
      ...user,
      callbackURL:"/"
   })
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

          <h1 className="text-[19px] font-bold text-gray-800 sm:text-3xl">
            সাইন আপ করুন
          </h1>

          <p className="mt-2 text-sm text-gray-500">
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
            প্রোফাইল ছবির URL
          </legend>

          <input
            name="imageUrl"
            type="url"
            className="input w-full rounded-xl border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none"
            placeholder="https://example.com/image.jpg"
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

        <fieldset className="fieldset mb-5">
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

        <button
          type="submit"
          className="btn w-full rounded-xl border-0 bg-linear-to-r from-green-600 to-emerald-700 text-base text-white shadow-md transition hover:from-green-700 hover:to-emerald-800"
        >
          সাইন আপ করুন
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
          <a type="submit"
            href="/signin"
            className="font-semibold text-green-700 hover:text-emerald-800 hover:underline"
          >
            সাইন ইন করুন
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;