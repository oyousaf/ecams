import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="kicker">404</p>
      <h1 className="mt-4 text-display font-bold text-forest">This page has been tidied away.</h1>
      <p className="mt-4 max-w-md text-lg text-muted">The page you’re after doesn’t exist, but everything else is spotless.</p>
      <Link
        href="/"
        className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-4 font-semibold text-paper hover:bg-moss"
      >
        Back to home <ArrowUpRight className="size-4 text-lime" aria-hidden />
      </Link>
    </section>
  );
}
