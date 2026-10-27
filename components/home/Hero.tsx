"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const points = ["Eco-friendly products", "We come to you", "Price confirmed before we start"];

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease } };

  return (
    <section className="container-x grid items-center gap-12 pt-10 pb-16 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
      <div className="lg:col-span-7">
        <motion.p {...rise(0)} className="kicker rounded-full bg-sage px-3.5 py-1.5">
          <span className="size-2 rounded-full bg-moss" aria-hidden />
          Mobile cleaning &amp; maintenance across {site.area}
        </motion.p>

        <motion.h1 {...rise(0.08)} className="mt-6 text-hero font-extrabold text-forest">
          Spotless homes, gardens &amp; cars.{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10 dark:text-lime">Kinder</span>
            <motion.span
              aria-hidden
              className="absolute inset-x-[-0.06em] bottom-[0.06em] z-0 h-[0.36em] dark:-bottom-[0.04em] dark:h-[0.09em] origin-left rounded-full bg-lime"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease }}
            />
          </span>{" "}
          to the planet.
        </motion.h1>

        <motion.p {...rise(0.16)} className="mt-7 max-w-xl text-lg text-muted md:text-xl">
          From weekly home cleans and end-of-tenancy deep cleans to garden makeovers and driveway car valets. One local
          team, eco-friendly products, fair upfront prices.
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/quote"
            className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 font-semibold text-paper transition-colors hover:bg-moss"
          >
            Get a free quote
            <ArrowUpRight
              className="size-5 text-lime transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-full border-2 border-forest/15 px-7 py-4 font-semibold text-forest transition-colors hover:border-forest"
          >
            See prices
          </Link>
        </motion.div>

        <motion.ul {...rise(0.32)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink/80">
          {points.map((p) => (
            <li key={p} className="inline-flex items-center gap-2">
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-lime">
                <Check className="size-3.5 text-deep" strokeWidth={3} aria-hidden />
              </span>
              {p}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className="relative lg:col-span-5"
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.1, ease }}
      >
        <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] rounded-tl-[7rem] bg-sage">
          <Image
            src="/images/hero-window.webp"
            alt="Cleaner in gloves wiping down a sash window"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[30%_center]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-deep/40 via-transparent to-transparent" aria-hidden />
        </div>

        {/* Rotating eco seal */}
        <div className="absolute -top-6 right-3 size-28 rounded-full bg-deep p-2 shadow-xl sm:-right-6 sm:size-36">
          <svg viewBox="0 0 100 100" className="animate-spin-slow size-full text-lime" aria-hidden>
            <defs>
              <path id="seal" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="9.6" fontWeight="600" letterSpacing="2.1" fill="currentColor">
              <textPath href="#seal">ECO-FRIENDLY PRODUCTS • MOBILE • LONDON •</textPath>
            </text>
          </svg>
          <svg viewBox="0 0 40 40" className="absolute inset-0 m-auto size-10" aria-hidden>
            <path
              d="M27.5 9.5c-8.6.4-14.6 5.3-15 13.6-.1 1.8.2 3.5.8 5l-2.8 3 1.5 1.4 2.7-2.9c1.5.6 3.2.9 5 .7 7.6-.8 11.3-7.6 7.8-20.8Z"
              fill="#c8f169"
            />
          </svg>
          <span className="sr-only">Eco-friendly products, mobile service across London</span>
        </div>

        {/* Floating price card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-3xl bg-paper/95 p-4 pr-6 shadow-[0_20px_50px_-15px_rgb(15_42_31/0.45)] backdrop-blur sm:-left-8"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-lime font-display text-lg font-bold text-deep">
            £
          </span>
          <span>
            <span className="block text-xs font-medium text-muted">Domestic cleaning</span>
            <span className="font-display text-2xl font-bold tracking-tight text-forest">
              £30 <span className="text-sm font-medium text-muted">per hour</span>
            </span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
