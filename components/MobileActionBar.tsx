import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Thumb-reach call and quote buttons, mobile only. */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
      <div className="flex gap-2 rounded-full border border-forest/10 bg-paper/85 p-1.5 shadow-[0_10px_40px_-10px_rgb(15_42_31/0.4)] backdrop-blur-xl">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-sage py-3 text-sm font-semibold text-forest"
        >
          <Phone className="size-4" aria-hidden /> Call
        </a>
        <Link
          href="/quote"
          className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep flex flex-[1.6] items-center justify-center gap-2 rounded-full bg-forest py-3 text-sm font-semibold text-paper"
        >
          Get a free quote <ArrowUpRight className="size-4 text-lime" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
