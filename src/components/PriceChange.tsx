interface IPriceChangeProps {
  today: number;
  yesterday: number;
}

const PriceChange = ({ today, yesterday }: IPriceChangeProps) => {
  // Calculate percentage
  const change = ((today - yesterday) / yesterday) * 100;
  const isUp = change > 0;
  const isDown = change < 0;

  return (
    <span
      className={`font-semibold ${
        isUp
          ? "text-red-600"
          : isDown
            ? "text-green-600"
            : "text-gray-500"
      }`}
    >
      {/* conditional rendering + tofixed+ math.abs */}
          {isUp ? "▲" : isDown ? "▼" : "—"} {Math.abs(change).toLocaleString("bn-BD", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%      
    </span>
  );
};
export default PriceChange;