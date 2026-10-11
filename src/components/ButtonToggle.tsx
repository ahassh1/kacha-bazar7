"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { authClient } from "@/lib/auth-client";
const ButtonToggle = () => {
    const [isOpen, setIsOpen] = useState(false);  //state false here
    const handleSignOut = async () => {   //Handle user sign out
    await authClient.signOut();
  };
    return (
        <div>
               <div className="relative">
  <button
    onClick={() => setIsOpen(!isOpen)}   //true
    className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:px-4"
  >
    <span>আমার অ্যাকাউন্ট</span>
    <ChevronDown
      size={16}
      className={`transition-transform duration-200 ${  //conditional rendering er maddhome icon toggle
        isOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {isOpen && (
    <div className="absolute right-0 z-50 mt-2 flex w-40 flex-col gap-2 rounded-xl border border-gray-100 bg-white p-2 shadow-lg sm:w-44">
      <Link
        href="/profile"
        onClick={() => setIsOpen(false)}
        className="rounded-lg cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
      >
        আমার প্রোফাইল
      </Link>

      <button
        onClick={handleSignOut}
        className="w-full cursor-pointer rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-left text-sm font-semibold text-red-600 transition hover:bg-red-100"
      >
        সাইন আউট
      </button>
    </div> 
  )}
</div>
        </div>
    );
};

export default ButtonToggle;