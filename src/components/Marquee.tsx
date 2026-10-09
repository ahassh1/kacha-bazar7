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
  "use cache";

  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  // Check API response
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const marqueeItem: IMarqueeItem[] = await res.json();

  return (
    <div className="mt-2 w-full overflow-hidden bg-sky-50 py-1 shadow-sm">
      <div className="overflow-hidden text-xs sm:text-sm">
        <MarqueeText
          duration={15}
          direction="right"
          className="hover:[animation-play-state:paused]"
        >
          {marqueeItem.map((item) => (
            <div
              key={item.id}
              className="mx-1.5 inline-flex shrink-0 items-center gap-1.5 rounded-md bg-white px-2 py-1 sm:mx-2 sm:gap-2"
            >
              <span>{item.categoryIcon}</span>

              <span className="font-medium text-gray-800">
                {item.nameBn}
              </span>

              <span className="font-bold text-gray-900">
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