import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import PriceTag from "@/components/PriceTag";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { categories, priceDisclaimer } from "@/lib/services";

export const metadata: Metadata = {
  title: "Prices",
  description: "Upfront prices for cleaning, gardening, clear-outs and car valeting in London from ECAMS.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Clear prices for every job."
        intro="Pick a service and book it, or ask for a quote if your job is a little different. Your final price is always confirmed before work begins."
      >
        <nav aria-label="Jump to category" className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full bg-sage px-4 py-2 text-sm font-semibold text-forest transition-colors hover:bg-lime hover:text-deep"
            >
              {c.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x space-y-6">
        {categories.map((c) => (
          <Reveal key={c.slug}>
            <section id={c.slug} className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-sage-2" aria-labelledby={`${c.slug}-h`}>
              <div className="flex flex-wrap items-center justify-between gap-4 px-6 pt-7 pb-4 md:px-8">
                <h2 id={`${c.slug}-h`} className="text-3xl font-bold text-forest md:text-4xl">
                  {c.name}
                </h2>
                <Link href={`/services/${c.slug}`} className="text-sm font-semibold text-moss underline-offset-4 hover:underline">
                  About this service
                </Link>
              </div>
              <ul className="divide-y divide-forest/10 bg-paper/60">
                {c.services.map((s) => (
                  <li key={s.id} className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
                    <div>
                      <h3 className="font-sans text-lg font-semibold tracking-normal text-forest">{s.name}</h3>
                      <p className="text-sm text-muted">{s.blurb}</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                      <PriceTag price={s.price} className="text-forest" />
                      <Link
                        href={`/quote?service=${s.id}`}
                        aria-label={`Book ${s.name}`}
                        className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-moss"
                      >
                        Book <ArrowUpRight className="size-4 text-lime" aria-hidden />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}

        <p className="max-w-4xl pt-2 text-sm text-muted">{priceDisclaimer}</p>
      </div>

      <CtaBand />
    </>
  );
}
