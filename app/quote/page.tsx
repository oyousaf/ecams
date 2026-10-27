import type { Metadata } from "next";
import { Clock, Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { allServices } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Quote or Book",
  description: "Request a free quote or book a cleaning, gardening or car valeting job with ECAMS in London.",
};

export default async function QuotePage({ searchParams }: PageProps<"/quote">) {
  const { service, intent } = await searchParams;
  const preset = typeof service === "string" && allServices.some((s) => s.id === service) ? service : undefined;

  return (
    <>
      <PageHero
        kicker="Get a quote"
        title="Fair prices, guaranteed."
        intro="Can’t find the exact service you’re looking for? Don’t worry, we’ve got you. Tell us what you need and we’ll come back to you with a quote."
      />

      <section className="container-x grid gap-8 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <QuoteForm defaultService={preset} defaultIntent={intent === "booking" ? "booking" : undefined} />
        </div>

        <aside className="space-y-4 lg:col-span-4">
          <div className="rounded-[2rem] bg-deep p-8 text-cream">
            <h2 className="text-3xl font-bold">Rather talk?</h2>
            <p className="mt-3 text-cream/80">Give Alex and the team a call or drop us an email.</p>
            <a
              href={site.phoneHref}
              className="mt-6 flex items-center gap-3 rounded-2xl bg-lime px-5 py-4 font-semibold text-deep"
            >
              <Phone className="size-5" aria-hidden /> {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 flex items-center gap-3 rounded-2xl border border-cream/20 px-5 py-4 font-medium break-all hover:border-lime"
            >
              <Mail className="size-5 shrink-0 text-lime" aria-hidden /> {site.email}
            </a>
          </div>
          <div className="flex gap-4 rounded-[2rem] border border-forest/10 p-6">
            <Clock className="size-6 shrink-0 text-moss" aria-hidden />
            <p className="text-sm text-muted">
              Every price is confirmed before work begins. Quotes depend on size, condition, access and any waste removal.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
