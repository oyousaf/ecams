import Image from "next/image";
import { Droplets, Recycle, ShieldCheck } from "lucide-react";
import Reveal from "../Reveal";

const pillars = [
  {
    icon: Droplets,
    title: "Eco-friendly products",
    body: "The products we use are eco-friendly, tough on dirt and gentle on your home.",
  },
  {
    icon: ShieldCheck,
    title: "Safe for you and the environment",
    body: "Safe for clients and the environment alike, indoors and out.",
  },
  {
    icon: Recycle,
    title: "Waste taken care of",
    body: "Garden waste and clear-out items are taken away and disposed of properly.",
  },
];

export default function EcoBand() {
  return (
    <section className="dots relative overflow-hidden bg-deep py-20 text-cream md:py-28" aria-labelledby="eco-heading">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-6">
          <p className="kicker text-lime">The E in ECAMS</p>
          <h2 id="eco-heading" className="mt-4 text-display font-bold">
            Environmental is in our name, not just our marketing.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            Environmental Cleaning and Maintenance Services offers in-depth, mobile cleaning at your door at an affordable
            rate, using products that are safe for both you and the environment.
          </p>

          <ul className="mt-10 space-y-6">
            {pillars.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-5">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-lime text-deep">
                  <Icon className="size-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-xl font-semibold tracking-tight">{title}</span>
                  <span className="mt-1 block text-cream/75">{body}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-3/4 overflow-hidden rounded-[2rem] rounded-br-[5rem]">
              <Image src="/images/spray.webp" alt="Gloved hand holding a spray bottle" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-14 aspect-3/4 overflow-hidden rounded-[2rem] rounded-tl-[5rem]">
              <Image src="/images/lawn.webp" alt="Close-up of a freshly cut green lawn" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
