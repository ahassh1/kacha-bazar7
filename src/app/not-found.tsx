import Image from 'next/image';
import Link from 'next/link';
import pageNotFoundImg from '@/assets/pagenotfound.jpg';

const PageNotFound = () => {
    return (
        <div>
            <section className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-10 text-center">
                <Image
                    src={pageNotFoundImg}
                    alt="পেজ পাওয়া যায়নি"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="mb-6 w-full max-w-xs object-contain sm:max-w-sm"
                />

                <h1 className="text-2xl font-bold text-white sm:text-3xl">
                    ৪০৪ - পেজটি পাওয়া যায়নি
                </h1>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
                    দুঃখিত! আপনি যে পেজটি খুঁজছেন, সেটি পাওয়া যায়নি।
                    সঠিক বাজারদর ও নিত্যপ্রয়োজনীয় পণ্যের তথ্য জানতে
                    হোম পেজে ফিরে যান।
                </p>

                <Link
                    href="/"
                    className="mt-6 rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d5ff33]"
                >
                    হোম পেজে ফিরে যান
                </Link>
            </section>
        </div>
    );
};

export default PageNotFound;