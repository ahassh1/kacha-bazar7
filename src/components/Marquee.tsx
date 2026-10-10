import MarqueeText from "react-marquee-text";
import PriceChange from "./PriceChange";

interface IMarqueeItem {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
}

const Marquee = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      next: { revalidate: 3600 },
    }
  );

  // Check API response
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const marqueeItem: IMarqueeItem[] = await res.json();

  return (
    <div className="w-full overflow-hidden border-y border-emerald-100 bg-linear-to-r from-green-50 via-white to-emerald-50 py-1.5 shadow-sm">
      <div className="overflow-hidden text-xs sm:text-sm">
        <MarqueeText
          duration={13}
          direction="right"
          className="hover:[animation-play-state:paused]"
        >
          {marqueeItem.map((item) => (
            <div
              key={item.id}
              className="mx-1.5 inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-emerald-100/80 bg-linear-to-r from-white to-green-50 px-2.5 py-1.5 shadow-sm transition hover:border-green-200 hover:shadow-md sm:mx-2 sm:gap-2"
            >
              <span>{item.categoryIcon}</span>

              <span className="font-medium text-gray-700">
                {item.nameBn}
              </span>

              <span className="font-bold text-emerald-800">
                ৳{item.today}
              </span>

              <span className="text-gray-500">
                টাকা/{item.unit === "kg" ? "কেজি" : item.unit}
              </span>

              {/* Show price change */}
              <PriceChange
                today={item.today}
                yesterday={item.yesterday}
              />
            </div>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;