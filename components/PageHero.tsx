import Reveal from "./Reveal";

type Props = {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
};

export default function PageHero({ kicker, title, intro, children }: Props) {
  return (
    <section className="container-x pt-14 pb-12 md:pt-20 md:pb-16">
      <Reveal>
        <p className="kicker">
          <span className="size-2 rounded-full bg-lime ring-4 ring-lime/30" aria-hidden />
          {kicker}
        </p>
        <h1 className="mt-5 max-w-4xl text-display font-bold text-forest">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{intro}</p>}
        {children}
      </Reveal>
    </section>
  );
}
