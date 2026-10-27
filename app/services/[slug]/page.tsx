import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import PriceTag from "@/components/PriceTag";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { categories, getCategory, priceDisclaimer } from "@/lib/services";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) return {};
  return { title: `${c.name} in London`, description: c.intro, openGraph: { images: [c.image] } };
}

export default async function CategoryPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) notFound();
  const others = categories.filter((o) => o.slug !== c.slug);

  return (
    <>
      <PageHero kicker={`Services · ${c.short}`} title={c.tagline} intro={c.intro}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/quote?service=${c.services[0].id}`}
            className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep inline-flex items-center gap-2 rounded-full bg-forest px-6 py-4 font-semibold text-paper transition-colors hover:bg-moss"
          >
            Book {c.name.toLowerCase()} <ArrowUpRight className="size-4 text-lime" aria-hidden />
          </Link>
        </div>
      </PageHero>

      <section className="container-x">
        <Reveal className="relative aspect-16/9 overflow-hidden rounded-[2.5rem] md:aspect-21/9">
          <Image src={c.image} alt={c.imageAlt} fill priority sizes="100vw" className="object-cover" />
        </Reveal>
      </section>

      <section className="container-x grid gap-10 py-20 md:py-24 lg:grid-cols-12" aria-labelledby="price-list">
        <Reveal className="lg:col-span-4">
          <h2 id="price-list" className="text-4xl font-bold text-forest md:text-5xl">
            Prices
          </h2>
          <p className="mt-4 text-muted">{priceDisclaimer}</p>
          <ul className="mt-8 space-y-3 text-forest">
            {["Eco-friendly products", "Mobile service: we come to you", "Final price confirmed before work begins"].map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-lime">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {c.services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 0.05} className="flex flex-col justify-between gap-8 rounded-[2rem] bg-sage-2 p-7">
              <div>
                <h3 className="font-sans text-xl font-semibold tracking-tight text-forest">{s.name}</h3>
                <p className="mt-2 text-muted">{s.blurb}</p>
              </div>
              <div className="flex items-end justify-between gap-4">
                <PriceTag price={s.price} className="text-xl text-forest" />
                <Link
                  href={`/quote?service=${s.id}`}
                  aria-label={`Book ${s.name}`}
                  className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-moss"
                >
                  Book <ArrowUpRight className="size-4 text-lime" aria-hidden />
                </Link>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-x" aria-labelledby="more-services">
        <h2 id="more-services" className="text-3xl font-bold text-forest">
          More from ECAMS
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/services/${o.slug}`}
              className="group flex items-center gap-4 rounded-3xl border border-forest/10 p-3 pr-5 transition-colors hover:bg-sage-2"
            >
              <span className="relative size-20 shrink-0 overflow-hidden rounded-2xl">
                <Image src={o.image} alt="" fill sizes="80px" className="object-cover" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight text-forest">{o.name}</span>
              <ArrowUpRight className="ml-auto size-5 text-moss transition-transform group-hover:rotate-45" aria-hidden />
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
