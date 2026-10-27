import { ArrowUpRight, Star } from "lucide-react";
import Reveal from "../Reveal";
import { site } from "@/lib/site";

// Real reviews only: this links out to the Google listing rather than quoting reviews
// we haven't been given. Swap in verbatim quotes once Alex supplies them.
export default function ReviewsTeaser() {
  return (
    <section className="container-x pt-20 md:pt-28" aria-labelledby="reviews-heading">
      <Reveal className="grid gap-8 rounded-[2.5rem] border border-forest/10 bg-paper p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
        <div>
          <div className="flex gap-1 text-moss" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-lime stroke-deep" />
            ))}
          </div>
          <h2 id="reviews-heading" className="mt-5 text-4xl font-bold text-forest md:text-5xl">
            Don’t take our word for it.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            See what customers across {site.area} say about ECAMS on Google.
          </p>
        </div>
        <a
          href={site.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep inline-flex items-center gap-2 self-start rounded-full bg-forest px-6 py-4 font-semibold text-paper transition-colors hover:bg-moss md:self-auto"
        >
          Read our Google reviews <ArrowUpRight className="size-4 text-lime" aria-hidden />
        </a>
      </Reveal>
    </section>
  );
}
