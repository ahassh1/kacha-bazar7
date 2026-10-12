"use client";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

const ProfilePage = () => {

  // Update profile information
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const userUpdate = Object.fromEntries(formData.entries()) as {
      image: string;
      name: string;
    };
    const { data, error } = await authClient.updateUser({
      ...userUpdate,       // Save updated user
    });

    if (data) {
      toast.success("user profile updated successfully");
    }
    if (error) {
      toast.error("user can't updated");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-green-100 bg-linear-to-br from-green-50 via-white to-emerald-100 p-4 shadow-xl sm:p-6">
        <div className="mb-5 text-center sm:mb-6">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-green-500 to-emerald-700 text-2xl text-white shadow-lg">
            👤
          </div>

          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
            আমার প্রোফাইল
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <fieldset className="fieldset mb-3">
            <legend className="fieldset-legend text-gray-700">
              আপনার নাম
            </legend>

            <input
              name="name"
              type="text"
              className="input w-full rounded-xl border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none"
              placeholder="আপনার নাম লিখুন"
              required
            />
          </fieldset>
          <button
            type="submit"
            className="btn w-full rounded-xl border-0 bg-linear-to-r from-green-600 to-emerald-700 text-base text-white shadow-md transition hover:from-green-700 hover:to-emerald-800"
          >
            প্রোফাইল হালনাগাদ করুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;