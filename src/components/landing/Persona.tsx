import { Check } from "lucide-react";
import FadeUp from "./FadeUp";

const TRAITS = [
  "25–45 anos",
  "alimentação",
  "MEI ou autônoma",
  "R$ 2–20k/mês",
  "100% whatsapp",
];

const BULLETS = [
  "sem curva de aprendizado — só 3% das MPEs têm maturidade digital avançada",
  "funciona no app que a Carla já abre 100% dos dias",
  "preço que cabe no MEI, com retorno rápido",
];

const Persona = () => (
  <section
    id="para-quem"
    className="bg-gradient-to-b from-background via-brand-ember-soft/40 to-background py-24 md:py-32"
  >
    <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
      {/* text */}
      <FadeUp>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-ember">
          para quem é
        </span>
        <h2 className="mt-4 font-display text-4xl font-black lowercase leading-[1.02] tracking-tight md:text-5xl">
          feita para quem vende por encomenda, ifood ou porta a porta.
        </h2>
        <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
          A Carla tem 1 a 3 anos de negócio, usa caderninho e planilha — e passa o dia inteiro
          no WhatsApp. Ela não quer aprender um sistema novo. Ela quer resposta.
        </p>
        <ul className="mt-7 space-y-3">
          {BULLETS.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-ember-soft text-brand-ember">
                <Check className="size-3" />
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </FadeUp>

      {/* carla card */}
      <FadeUp delay={0.15}>
        <div className="relative mx-auto w-full max-w-md">
          <div className="topo absolute inset-0 -rotate-2 rounded-[2rem] opacity-40" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-brand-ember/10">
            <div className="flex items-center gap-4 border-b border-border/70 bg-brand-forest p-6 text-brand-cream">
              <div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-brand-ember to-brand-sand font-display text-2xl font-black lowercase text-white">
                c
              </div>
              <div>
                <p className="font-display text-xl font-bold lowercase tracking-tight">carla</p>
                <p className="font-mono text-xs text-brand-cream/60">bolos por encomenda · são paulo</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {TRAITS.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] font-medium text-foreground/80"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-2.5 rounded-2xl bg-[#efe7dc] p-4">
                <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#d9fdd3] px-3.5 py-2.5 text-[13px] leading-relaxed text-brand-forest shadow-sm">
                  Zia, quanto devo cobrar no bolo de pote?
                </div>
                <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-brand-forest shadow-sm">
                  Com custo de R$ 2,20/un, o ideal fica entre{" "}
                  <strong>R$ 4,50 e R$ 5,50</strong> — margem de 44% a 56%. Dentro do que a sua
                  região paga.
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

export default Persona;
