import { Check } from "lucide-react";
import FadeUp from "./FadeUp";
import WaButton from "./WaButton";

const BASIC_FEATURES = [
  "Controle financeiro completo",
  "Precificação certa",
  "Análise financeira em tempo real",
  "Atendimento 100% no WhatsApp",
];

const PREMIUM_FEATURES = [
  "Tudo do Plano Básico",
  "Funcionalidades avançadas",
  "Suporte prioritário",
  "Insights personalizados",
  "Gestão ampliada do negócio",
];

const PlanCard = ({
  name,
  price,
  priceSuffix,
  tagline,
  features,
  highlighted = false,
  ctaMessage,
}: {
  name: string;
  price: string;
  priceSuffix: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  ctaMessage: string;
}) => (
  <div
    className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5 ${
      highlighted
        ? "bg-gradient-to-br from-brand-cream via-brand-cream to-brand-cyan-soft shadow-2xl shadow-brand-cyan/20 ring-2 ring-brand-jade"
        : "border border-brand-cream/15 bg-brand-cream/95 shadow-xl shadow-black/20"
    }`}
  >
    {highlighted && (
      <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-brand-jade px-4 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
        mais completo
      </span>
    )}

    <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-jade">
      {name}
    </p>
    <div className="mt-4 flex items-end gap-2">
      <span className="font-mono text-4xl font-bold tracking-tight text-brand-forest md:text-5xl">
        {price}
      </span>
      <span className="pb-1.5 text-xs text-brand-forest/60">{priceSuffix}</span>
    </div>
    <p className="mt-2 text-sm leading-relaxed text-brand-forest/60">{tagline}</p>

    <ul className="mt-7 flex-1 space-y-3">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-brand-forest/80">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-jade-soft text-brand-jade">
            <Check className="size-3" />
          </span>
          {feature}
        </li>
      ))}
    </ul>

    <WaButton className="mt-8 w-full" message={ctaMessage}>
      quero começar
    </WaButton>
  </div>
);

const Pricing = () => (
  <section id="planos" className="relative overflow-hidden bg-brand-forest py-24 text-brand-cream md:py-32">
    <div className="aerial absolute inset-0 opacity-70" />
    <div className="absolute -bottom-40 left-1/4 size-96 rounded-full bg-brand-jade/10 blur-3xl" />

    <div className="relative mx-auto max-w-5xl px-6">
      <FadeUp className="text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-cyan">
          planos
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-black lowercase leading-[1.02] tracking-tight md:text-5xl">
          escolha o seu jeito de crescer.
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-brand-cream/60">
          Valores sugeridos pelos 45 respondentes da validação de mercado. Sem fidelidade —
          começa quando você quiser.
        </p>
      </FadeUp>

      <div className="mt-20 grid gap-6 pt-6 md:grid-cols-2">
        <FadeUp>
          <PlanCard
            name="plano básico"
            price="R$ 79,90"
            priceSuffix="/mês"
            tagline="Para começar a ver seus números com clareza."
            features={BASIC_FEATURES}
            ctaMessage="Oi, Zia! Quero assinar o Plano Básico."
          />
        </FadeUp>
        <FadeUp delay={0.12}>
          <PlanCard
            name="plano premium"
            price="R$ 99–149"
            priceSuffix="/mês"
            tagline="Para quem quer gestão ampliada e atenção especial."
            features={PREMIUM_FEATURES}
            highlighted
            ctaMessage="Oi, Zia! Quero saber mais sobre o Plano Premium."
          />
        </FadeUp>
      </div>
    </div>
  </section>
);

export default Pricing;
