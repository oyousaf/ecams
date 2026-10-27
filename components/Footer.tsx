import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { categories } from "@/lib/services";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="dots bg-deep pt-20 pb-44 text-cream/80 md:pb-12">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-cream/75">
              {site.legalName}. Mobile cleaning and maintenance across {site.area}, using eco-friendly products that are
              safe for your family and the environment.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={site.socials.instagram}
                aria-label="ECAMS on Instagram"
                className="inline-flex size-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-lime hover:text-lime"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={site.socials.facebook}
                aria-label="ECAMS on Facebook"
                className="inline-flex size-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-lime hover:text-lime"
              >
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold tracking-normal text-cream">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`} className="hover:text-lime">
                    {c.name}
                  </Link>
                </li>
              ))}
              {nav
                .filter((n) => n.href !== "/services")
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="hover:text-lime">
                      {n.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-normal text-cream">Get in touch</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-3 hover:text-lime">
                  <Phone className="size-4 text-lime" aria-hidden /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 break-all hover:text-lime">
                  <Mail className="size-4 shrink-0 text-lime" aria-hidden /> {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin className="size-4 text-lime" aria-hidden /> Covering {site.area}
              </li>
            </ul>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 font-semibold text-deep transition-colors hover:bg-lime-2"
            >
              Get a free quote <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/15 pt-6 text-sm text-cream/60 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">© {new Date().getFullYear()} {site.legalName}</p>
          <ThemeToggle />
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            <li>
              <Link href="/modern-slavery" className="hover:text-lime">
                Modern Slavery
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-lime">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:text-lime">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
