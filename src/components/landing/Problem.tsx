import FadeUp from "./FadeUp";

const STATS = [
  {
    value: "3h",
    label: "por semana perdidas tentando entender margem, lucro e fluxo de caixa",
    accent: "text-brand-jade",
  },
  {
    value: "60%",
    label: "das empreendedoras tomam decisões com insegurança e ansiedade",
    accent: "text-brand-cyan",
  },
  {
    value: "67%",
    label: "não conseguem definir o preço certo dos próprios produtos",
    accent: "text-brand-olive",
  },
  {
    value: "75%",
    label: "já perderam dinheiro por falta de controle financeiro",
    accent: "text-brand-forest",
  },
];

const Problem = () => (
  <section id="problema" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <FadeUp>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-jade">
              a dor
            </span>
            <h2 className="mt-4 font-display text-4xl font-black lowercase leading-[1.02] tracking-tight md:text-5xl">
              trabalhar o dia inteiro e não saber se está lucrando.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              A Zia nasceu de 45 respondentes, 20 entrevistas profundas e 10 clientes em
              potencial do setor de alimentação. O problema não é falta de esforço — é falta de
              visão.
            </p>
          </div>
          <div className="hidden w-64 shrink-0 -rotate-2 overflow-hidden rounded-3xl border border-border shadow-xl shadow-brand-jade/10 lg:block">
            <img
              src="/brand/serra.jpg"
              alt="Serra verde entre nuvens"
              className="h-44 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </FadeUp>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <FadeUp key={stat.value} delay={i * 0.08}>
            <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-jade/10">
              <p className={`font-mono text-5xl font-bold tracking-tight ${stat.accent}`}>
                {stat.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
