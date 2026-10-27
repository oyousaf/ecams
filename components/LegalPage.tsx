export default function LegalPage({ title, updated, children }: { title: string; updated?: string; children: React.ReactNode }) {
  return (
    <article className="container-x max-w-3xl! pt-14 pb-24 md:pt-20">
      <p className="kicker">Legal</p>
      <h1 className="mt-4 text-5xl font-bold text-forest md:text-6xl">{title}</h1>
      {updated && <p className="mt-3 text-sm text-muted">{updated}</p>}
      <div className="mt-10 space-y-5 text-lg text-ink/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-forest">
        {children}
      </div>
    </article>
  );
}
