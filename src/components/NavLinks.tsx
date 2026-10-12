import { cacheLife } from "next/cache";
import Link from "next/link";

interface IBazarCategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}
const NavLinks = async () => {
    "use cache";
  cacheLife("hours");
let bazarCategory: IBazarCategory[] = [];

try {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/bazardor/categories`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories data");
  }

  bazarCategory = await res.json();
} catch (error) {
  console.error("Error fetching categories data:", error);
}

  return (
    <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto overflow-x-auto">
          <div className="flex w-max min-w-full gap-2 px-3 py-2">
            {bazarCategory.map((bCategory) => (
              <Link href={`/category/${bCategory.slug}`}
                key={bCategory.id}
                className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 text-[12px] transition hover:bg-gray-200 sm:text-base"
              >
                <span>{bCategory.icon}</span>
                <h2>{bCategory.nameBn}</h2>
              </Link>
            ))}
          </div>
        </div>
    </div>
  );
};

export default NavLinks;