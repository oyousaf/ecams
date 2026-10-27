import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Tell us the job. We’ll tell you the price.",
  body = "Free, no-obligation quotes. Your final price is always confirmed before any work begins.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x py-16 md:py-24">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-lime px-6 py-14 text-deep sm:px-12 md:py-20">
        <svg
          viewBox="0 0 200 200"
          aria-hidden
          className="pointer-events-none absolute -right-16 -bottom-24 size-[26rem] text-lime-2 md:size-[34rem]"
        >
          <path
            fill="currentColor"
            d="M168 18c-62 3-105 38-108 98-1 13 1 25 6 36l-20 22 11 10 19-21c11 4 23 6 36 5 55-6 81-55 56-150Z"
          />
        </svg>
        <div className="relative max-w-3xl">
          <h2 className="text-display font-bold">{title}</h2>
          <p className="mt-5 max-w-xl text-lg text-deep/80">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-deep px-6 py-4 font-semibold text-cream transition-colors hover:bg-forest-2"
            >
              Get a free quote <ArrowUpRight className="size-4 text-lime" aria-hidden />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-deep/20 px-6 py-4 font-semibold transition-colors hover:border-deep"
            >
              <Phone className="size-4" aria-hidden /> {site.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
