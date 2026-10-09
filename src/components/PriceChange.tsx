interface IPriceChangeProps {
  today: number;
  yesterday: number;
}

const PriceChange = ({ today, yesterday }: IPriceChangeProps) => {
  // Calculate percentage
  const change =
    yesterday > 0 ? ((today - yesterday) / yesterday) * 100 : 0;

  // Check price direction
  const isUp = change > 0;

  return (
    <span
      className={`font-semibold ${
        isUp
          ? "text-red-600"
          : change < 0
            ? "text-green-600"
            : "text-gray-500"
      }`}
    >
      {isUp ? "▲" : change < 0 ? "▼" : "—"}{" "}
      {Math.abs(change).toFixed(1)}%
    </span>
  );
};

export default PriceChange;