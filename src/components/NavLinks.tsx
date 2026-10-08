interface IBazarCategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  "use cache";

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  if (!res.ok) {
    throw new Error("that's failed to fetch");
  }

  const bazarCategory = await res.json();

  return (
    <div className="w-full bg-white shadow-sm">
      <nav className="sticky top-0 z-50">
        <div className="container mx-auto overflow-x-auto">
          <div className="flex w-max min-w-full gap-2 px-3 py-2">
            {bazarCategory.map((category: IBazarCategory) => (
              <div
                key={category.id}
                className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1 text-[12px] transition hover:bg-gray-200 sm:text-base"
              >
                <span>{category.icon}</span>

                <h2>{category.nameBn}</h2>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;