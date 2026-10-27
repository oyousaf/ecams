"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu after navigating.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50 pt-3">
      <div className="container-x">
        <div
          className={`flex items-center justify-between gap-4 rounded-full border py-2 pr-2 pl-4 transition-all duration-500 ease-out-soft ${
            scrolled
              ? "border-forest/10 bg-paper/80 shadow-[0_8px_30px_-12px_rgb(15_42_31/0.25)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors ${
                    active ? "bg-sage text-forest" : "text-ink/75 hover:bg-sage/60 hover:text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-sage/60 md:inline-flex"
            >
              <Phone className="size-4" aria-hidden />
              {site.phone}
            </a>
            <Link
              href="/quote"
              className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep hidden items-center gap-1.5 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-moss sm:inline-flex"
            >
              Get a quote
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep inline-flex size-11 items-center justify-center rounded-full bg-forest text-paper lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="container-x absolute inset-x-0 top-full mt-2 lg:hidden"
          >
            <nav aria-label="Mobile" className="rounded-[1.75rem] bg-deep p-3 text-cream shadow-2xl">
              {[{ href: "/", label: "Home" }, ...nav, { href: "/quote", label: "Get a quote" }].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold tracking-tight hover:bg-forest-2"
                >
                  {item.label}
                  <ArrowUpRight className="size-5 text-lime" aria-hidden />
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-lime px-4 py-4 font-semibold text-deep"
              >
                <Phone className="size-4" aria-hidden /> Call {site.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
