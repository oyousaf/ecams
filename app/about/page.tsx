import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName}: friendly, experienced professionals offering eco-friendly mobile cleaning and maintenance in London.`,
};

const values = [
  { title: "Experienced & friendly", body: "Great service begins and ends with experienced and friendly professionals." },
  { title: "On schedule", body: "We complete our jobs efficiently and on schedule, every time." },
  { title: "Lasting relationships", body: "We go above and beyond to form lasting relationships with our clients." },
  { title: "Eco-friendly", body: "The products we use are safe for both the environment and our clients." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About ECAMS"
        title="If you can’t, we can."
        intro="Since founding ECAMS, we’ve worked with numerous clients throughout the area, offering in-depth, mobile cleaning and maintenance at your door at an affordable rate."
      />

      <section className="container-x grid gap-6 lg:grid-cols-12">
        <Reveal className="relative min-h-80 overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] lg:col-span-7">
          <Image src="/images/kitchen.webp" alt="Clean, bright kitchen with white units and pendant lights" fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col justify-end rounded-[2.5rem] bg-deep p-8 text-cream md:p-12 lg:col-span-5">
          <p className="font-display text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
            Indoors or outdoors: gardens, car washes, clear-outs, residential and commercial cleaning, carpets, furniture
            and windows.
          </p>
          <p className="mt-6 text-cream/70">One team. One call. Led by director {site.director}.</p>
        </Reveal>
      </section>

      <section className="container-x py-20 md:py-28" aria-labelledby="values">
        <h2 id="values" className="max-w-2xl text-display font-bold text-forest">
          What you can expect from us.
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 0.06} className="rounded-[2rem] bg-sage-2 p-7">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-lime font-display font-bold text-deep">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-2xl font-bold text-forest">{v.title}</h3>
              <p className="mt-2 text-muted">{v.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
