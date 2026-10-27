import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { categories, startingPrice } from "@/lib/services";

// Bento spans for the four categories, in the order they appear in lib/services.
const layout = [
  "md:col-span-7 md:row-span-2 min-h-[26rem] md:min-h-[36rem]",
  "md:col-span-5 min-h-[17rem]",
  "md:col-span-5 min-h-[17rem]",
  "md:col-span-12 min-h-[20rem] md:min-h-[22rem]",
];

export default function ServiceBento() {
  return (
    <section className="container-x py-20 md:py-28" aria-labelledby="services-heading">
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="kicker">What we do</p>
          <h2 id="services-heading" className="mt-4 max-w-2xl text-display font-bold text-forest">
            One call covers the whole property.
          </h2>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 self-start rounded-full bg-sage px-5 py-3 font-semibold text-forest transition-colors hover:bg-lime hover:text-deep md:self-auto"
        >
          All services <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-12">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.06} className={`${layout[i]} group relative`}>
            <Link
              href={`/services/${c.slug}`}
              className="relative flex h-full flex-col justify-end overflow-hidden rounded-[2rem] bg-deep p-6 text-cream md:p-8"
            >
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-deep via-deep/45 to-deep/0" aria-hidden />

              <span className="absolute top-5 right-5 inline-flex size-12 items-center justify-center rounded-full bg-paper/90 text-forest transition-all duration-500 ease-out-soft group-hover:rotate-45 group-hover:bg-lime hover:text-deep">
                <ArrowUpRight className="size-5" aria-hidden />
              </span>

              <div className="relative">
                <span className="inline-flex rounded-full bg-lime px-3 py-1 text-sm font-semibold text-deep">
                  From {startingPrice(c)}
                </span>
                <h3 className="mt-4 text-3xl font-bold md:text-4xl">{c.name}</h3>
                <p className="mt-2 max-w-md text-cream/80">{c.tagline}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
