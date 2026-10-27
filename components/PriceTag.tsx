import type { Price } from "@/lib/services";

export default function PriceTag({ price, className = "" }: { price: Price; className?: string }) {
  if (price.label) {
    return <span className={`font-display font-semibold tracking-tight ${className}`}>{price.label}</span>;
  }
  return (
    <span className={`inline-flex items-baseline gap-1.5 whitespace-nowrap ${className}`}>
      {price.from && <span className="text-[0.75em] font-medium opacity-70">From</span>}
      <span className="font-display text-[1.35em] leading-none font-bold tracking-tight">{price.amount}</span>
      {price.unit && <span className="text-[0.75em] font-medium opacity-70">{price.unit}</span>}
    </span>
  );
}
