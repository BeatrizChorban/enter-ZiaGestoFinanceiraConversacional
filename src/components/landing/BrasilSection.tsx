import FadeUp from "./FadeUp";

const BrasilSection = () => (
  <section id="brasil" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <FadeUp className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-jade">
          brasilidade
        </span>
        <h2 className="mt-4 font-display text-4xl font-black lowercase leading-[1.02] tracking-tight md:text-5xl">
          o brasil que a zia atende.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
          do rio à feira, da encomenda ao delivery: a zia nasceu pra quem move o brasil — um
          negócio de cada vez.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-12">
          <div className="mx-auto -rotate-1 max-w-4xl overflow-hidden rounded-[2rem] border-[10px] border-white bg-white shadow-2xl shadow-brand-jade/15 transition-transform duration-300 hover:rotate-0">
            <img
              src="/brand/brasil-fotos.png"
              alt="O Brasil que a Zia atende"
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-5 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            o brasil que a zia atende
          </p>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default BrasilSection;
