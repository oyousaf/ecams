"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import PriceTag from "../PriceTag";
import Reveal from "../Reveal";
import { categories, priceDisclaimer } from "@/lib/services";

export default function PriceExplorer() {
  const [active, setActive] = useState(categories[0].slug);
  const category = categories.find((c) => c.slug === active)!;

  return (
    <section className="bg-sage-2 py-20 md:py-28" aria-labelledby="prices-heading">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Honest pricing</p>
            <h2 id="prices-heading" className="mt-4 max-w-2xl text-display font-bold text-forest">
              Prices up front, not hidden behind a form.
            </h2>
          </div>
        </Reveal>

        <div role="tablist" aria-label="Service categories" className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((c) => (
            <button
              key={c.slug}
              role="tab"
              type="button"
              aria-selected={active === c.slug}
              aria-controls="price-panel"
              onClick={() => setActive(c.slug)}
              className={`relative shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                active === c.slug ? "text-paper" : "text-forest hover:bg-sage"
              }`}
            >
              {active === c.slug && (
                <motion.span
                  layoutId="price-tab"
                  className="absolute inset-0 rounded-full bg-forest"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">{c.name}</span>
            </button>
          ))}
        </div>

        <div id="price-panel" role="tabpanel" className="mt-6 overflow-hidden rounded-[2rem] bg-paper">
          <AnimatePresence mode="wait">
            <motion.ul
              key={category.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="divide-y divide-forest/10"
            >
              {category.services.map((s) => (
                <li key={s.id} className="group flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
                  <div>
                    <h3 className="font-sans text-lg font-semibold tracking-normal text-forest">{s.name}</h3>
                    <p className="mt-1 text-sm text-muted">{s.blurb}</p>
                  </div>
                  <div className="flex items-center justify-between gap-5 sm:justify-end">
                    <PriceTag price={s.price} className="text-forest" />
                    <Link
                      href={`/quote?service=${s.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-sage px-4 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-lime hover:text-deep"
                    >
                      Book <ArrowUpRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <p className="mt-6 max-w-4xl text-sm text-muted">{priceDisclaimer}</p>
      </div>
    </section>
  );
}
