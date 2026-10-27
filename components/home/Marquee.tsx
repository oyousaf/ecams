import { Leaf } from "lucide-react";

const words = [
  "Domestic cleaning",
  "End of tenancy",
  "Carpets & upholstery",
  "Window cleaning",
  "Oven cleaning",
  "Gardening",
  "Clear-outs",
  "Car valeting",
  "Bin cleaning",
  "Ironing",
  "Decorating",
];

export default function Marquee() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="flex items-center gap-6 px-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          {w}
          <Leaf className="size-5 text-lime" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="-rotate-1 overflow-hidden bg-deep py-5 text-cream">
      <div className="animate-marquee flex w-max">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
