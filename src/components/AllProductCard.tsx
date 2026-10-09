import type { IProduct } from "@/types/products";
import PriceChange from "./PriceChange";

interface IProps {
  show: IProduct;
}

const AllProductCard = ({ show }: IProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-50 text-2xl">
          {show.categoryIcon}
        </div>

        <div className="min-w-0">
          <h2 className="truncate font-bold text-gray-900">
            {show.nameBn}
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            প্রতি {show.unit === "kg" ? "কেজি" : show.unit}
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2 border-t border-gray-100 pt-3">
        <div>
          <p className="text-sm text-gray-500">আজকের দাম</p>
          <h3 className="mt-1 text-2xl font-bold text-green-700">
            ৳{show.today.toLocaleString("bn-BD")}
          </h3>
        </div>

        <div className="pb-1 text-sm">
          <PriceChange
            today={show.today}
            yesterday={show.yesterday}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;