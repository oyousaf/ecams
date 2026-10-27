import Reveal from "../Reveal";

const steps = [
  {
    title: "Tell us the job",
    body: "Call, or send a quick quote request with your postcode and what needs doing.",
  },
  {
    title: "Get a clear price",
    body: "We confirm the final price before any work begins. No surprises on the day.",
  },
  {
    title: "We turn up and sort it",
    body: "Our mobile team brings everything needed, and leaves the place spotless.",
  },
];

export default function HowItWorks() {
  return (
    <section className="container-x py-20 md:py-28" aria-labelledby="how-heading">
      <Reveal>
        <p className="kicker">How it works</p>
        <h2 id="how-heading" className="mt-4 max-w-2xl text-display font-bold text-forest">
          Booked in three easy steps.
        </h2>
      </Reveal>

      <ol className="mt-14 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            delay={i * 0.08}
            className="relative rounded-[2rem] border border-forest/10 bg-sage-2 p-8 transition-colors hover:bg-sage"
          >
            <span className="font-display text-7xl leading-none font-extrabold text-lime [-webkit-text-stroke:2px_var(--color-deep)]">
              {i + 1}
            </span>
            <h3 className="mt-8 text-2xl font-bold text-forest">{s.title}</h3>
            <p className="mt-3 text-muted">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
