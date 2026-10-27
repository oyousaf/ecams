import Link from "next/link";

export function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={className}>
      <rect width="40" height="40" rx="12" fill="currentColor" />
      <path
        d="M27.5 9.5c-8.6.4-14.6 5.3-15 13.6-.1 1.8.2 3.5.8 5l-2.8 3 1.5 1.4 2.7-2.9c1.5.6 3.2.9 5 .7 7.6-.8 11.3-7.6 7.8-20.8Z"
        fill="#c8f169"
      />
      <path d="M14.2 27.4c2.6-4.7 6-8.5 10.3-11.6" stroke="#0f2a1f" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="ECAMS home">
      <LeafMark className={`size-9 transition-transform duration-500 ease-out-soft group-hover:-rotate-12 ${tone === "dark" ? "text-deep" : "text-forest-2 rounded-xl ring-1 ring-cream/15"}`} />
      <span className="leading-none">
        <span className={`block font-display text-[1.35rem] font-extrabold tracking-[-0.04em] ${tone === "dark" ? "text-forest" : "text-cream"}`}>
          ECAMS
        </span>
        <span className={`mt-0.5 block text-[0.625rem] font-medium tracking-[0.08em] uppercase ${tone === "dark" ? "text-muted" : "text-cream/70"}`}>
          Eco cleaning &amp; maintenance
        </span>
      </span>
    </Link>
  );
}
