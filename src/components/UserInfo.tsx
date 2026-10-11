"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const session = authClient.useSession();    //usesession hook call
  const user = session?.data?.user;

  const handleSignOut = async () => {   //Handle user sign out
    await authClient.signOut();
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {user ? (
        <div className="flex items-center gap-2 rounded-xl border border-green-100 bg-white p-2 shadow-sm sm:gap-3 sm:px-3">
          {/* User Avatar */}
          <div className="avatar">
            <div className="w-9 rounded-full ring-2 ring-green-500 ring-offset-2 sm:w-11">
              {user.image ? (
                <Image  src={user?.image} alt={user?.name}  width={44}
  height={44}
  className="rounded-full"/>
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-green-600 to-emerald-700 text-sm font-bold text-white">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          <div className="hidden min-w-0 sm:block">
            <p className="max-w-32 truncate text-sm font-semibold text-gray-800">
              {user.name}
            </p>
            <p className="text-xs text-green-700">ব্যবহারকারী</p>
          </div>

          <button
            onClick={handleSignOut}
            className="rounded-lg border border-red-100 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100 sm:px-3 sm:py-2 sm:text-sm cursor-pointer"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <>
          {/* Sign In Link */}
          <Link
            href="/signin"
            className="rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs font-medium text-emerald-800 shadow-sm transition hover:bg-emerald-50 sm:px-4 sm:text-sm"
          >
            সাইন ইন
          </Link>

          {/* Sign Up Link */}
          <Link
            href="/signup"
            className="rounded-lg bg-linear-to-r from-green-700 to-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-green-200 transition hover:from-green-800 hover:to-emerald-700 sm:px-4 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </>
      )}
    </div>
  );
};
export default UserInfo;