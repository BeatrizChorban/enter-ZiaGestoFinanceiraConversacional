import { Award, GraduationCap } from "lucide-react";
import FadeUp from "./FadeUp";

const FOUNDERS = [
  {
    initial: "b",
    name: "beatriz chorban",
    role: "co-fundadora · engenheira de produção",
    chip: "from-brand-jade to-brand-cyan",
    text: "antes do diploma, ela já era empreendedora de verdade: vendeu bolo de pote. como a carla, além de produzir, precisava vender, precificar e entender o próprio lucro. foi lá que nasceu a dor que a zia veio resolver.",
  },
  {
    initial: "j",
    name: "jonathan leandro",
    role: "co-fundador · engenheiro de produção",
    chip: "from-brand-cyan to-brand-jade",
    text: "cresceu ajudando o pai, vendedor de papel de parede, que tocava o negócio inteiro sozinho — da compra à venda. viu de perto o que é empreender sem rede de apoio. e jurou que ia mudar essa realidade.",
  },
];

const Founders = () => (
  <section id="historia" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      {/* intro */}
      <FadeUp className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-jade">
          a nossa história
        </span>
        <h2 className="mt-4 font-display text-4xl font-black lowercase leading-[1.02] tracking-tight md:text-5xl">
          a zia nasceu de quem já viveu essa luta.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
          somos a beatriz e o jonathan — engenheiros de produção pelo instituto federal de são
          paulo (ifsp). criamos a zia na turma ii do sebrae supernova e saímos de lá como a
          única equipe destaque do estado.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-jade/30 bg-brand-jade-soft/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand-jade">
          <Award className="size-3.5" />
          única equipe destaque de são paulo · sebrae supernova · turma ii
        </span>
      </FadeUp>

      {/* founder cards */}
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {FOUNDERS.map((founder, i) => (
          <FadeUp key={founder.name} delay={i * 0.1}>
            <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-jade/30 hover:shadow-xl hover:shadow-brand-jade/10">
              <div className="flex items-center gap-4">
                <div
                  className={`grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br font-display text-2xl font-black lowercase text-white shadow-lg ${founder.chip}`}
                >
                  {founder.initial}
                </div>
                <div>
                  <p className="font-display text-xl font-bold lowercase tracking-tight">
                    {founder.name}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    <GraduationCap className="size-3.5 text-brand-jade" />
                    {founder.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {founder.text}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* mission */}
      <FadeUp delay={0.15}>
        <div className="relative mt-5 overflow-hidden rounded-3xl bg-brand-forest p-8 text-brand-cream md:p-10">
          <div className="topo absolute inset-0 opacity-30" />
          <p className="relative max-w-3xl font-display text-xl font-bold lowercase leading-relaxed tracking-tight md:text-2xl">
            a zia existe pra revolucionar a realidade de quem empreende no brasil — do micro ao
            médio, do autônomo à família que depende do próprio negócio. porque quem produz
            também tem que vender, precificar e decidir. e não devia fazer isso no escuro.
          </p>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default Founders;
