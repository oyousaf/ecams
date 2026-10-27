import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { categories, startingPrice } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Domestic and end-of-tenancy cleaning, carpets, windows, ovens, bins, gardening, clear-outs and mobile car valeting across London.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Everything your home, garden and car need."
        intro="Indoors or outdoors, one local team handles it all, using eco-friendly products that are safe for both the environment and our clients."
      />

      <section className="container-x space-y-4 pb-8">
        {categories.map((c, i) => (
          <Reveal key={c.slug}>
            <Link
              href={`/services/${c.slug}`}
              className="group grid overflow-hidden rounded-[2rem] bg-sage-2 transition-colors hover:bg-sage md:grid-cols-12"
            >
              <div className={`relative min-h-64 md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-8 md:col-span-7 md:p-12">
                <div>
                  <span className="inline-flex rounded-full bg-lime px-3 py-1 text-sm font-semibold text-deep">
                    From {startingPrice(c)}
                  </span>
                  <h2 className="mt-5 text-4xl font-bold text-forest md:text-5xl">{c.name}</h2>
                  <p className="mt-4 max-w-lg text-lg text-muted">{c.intro}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {c.services.slice(0, 3).map((s) => (
                      <li key={s.id} className="rounded-full border border-forest/15 px-3 py-1 text-sm text-forest/80">
                        {s.name.replace(/ –.*$/, "")}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-deep text-lime transition-transform duration-500 ease-out-soft group-hover:rotate-45">
                    <ArrowUpRight className="size-5" aria-hidden />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <CtaBand title="Can’t see what you need?" body="Get in touch and tell us the service you require. We’ll come back to you with a quote." />
    </>
  );
}
