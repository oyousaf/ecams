import type { Metadata } from "next";
import { ArrowUpRight, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Google Reviews",
  description: "Read what customers say about ECAMS cleaning and maintenance services on Google.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        kicker="Reviews"
        title="Trusted by homes across London."
        intro="Every review is from a real ECAMS customer on Google. Had a job done recently? We’d love to hear how it went."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep inline-flex items-center gap-2 rounded-full bg-forest px-6 py-4 font-semibold text-paper transition-colors hover:bg-moss"
          >
            Read our Google reviews <ArrowUpRight className="size-4 text-lime" aria-hidden />
          </a>
          <a
            href={site.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-forest/15 px-6 py-4 font-semibold text-forest transition-colors hover:border-forest"
          >
            <Star className="size-4 fill-lime" aria-hidden /> Leave a review
          </a>
        </div>
      </PageHero>

      {/* TODO: replace with verbatim Google reviews (author first name + text) once supplied. */}
      <section className="container-x">
        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-[2rem] border-2 border-dashed border-forest/15 p-8 text-muted">
              <div className="flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-5 fill-lime stroke-deep" />
                ))}
              </div>
              <p className="mt-5">Customer review coming soon.</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
