import {
  BellRing,
  CalendarCheck,
  Calculator,
  MessageSquareText,
  Receipt,
  TrendingUp,
} from "lucide-react";
import FadeUp from "./FadeUp";

const FEATURES = [
  {
    icon: MessageSquareText,
    title: "conversa simples",
    desc: "A Zia pergunta, você responde. Nada de telas, menus ou planilhas — tudo por mensagem.",
    chip: "bg-brand-cyan-soft text-brand-cyan",
  },
  {
    icon: Calculator,
    title: "cálculo em tempo real",
    desc: "Receita, custo, margem e fluxo de caixa na hora, com os seus números de verdade.",
    chip: "bg-brand-ember-soft text-brand-ember",
  },
  {
    icon: TrendingUp,
    title: "precificação correta",
    desc: "Preço certo a partir dos seus custos reais — chega de chute e de vender no prejuízo.",
    chip: "bg-[hsl(var(--sand)/0.25)] text-brand-olive",
  },
  {
    icon: Receipt,
    title: "leitura de notas fiscais",
    desc: "Manda a foto da nota: a Zia lê, registra e já soma no seu controle. Sem digitar nada.",
    chip: "bg-brand-ember-soft text-brand-ember",
  },
  {
    icon: BellRing,
    title: "alertas proativos",
    desc: "A Zia avisa quando identifica oportunidade ou risco financeiro — antes de virar problema.",
    chip: "bg-brand-cyan-soft text-brand-cyan",
  },
  {
    icon: CalendarCheck,
    title: "resumo semanal",
    desc: "Toda semana, um resumo da saúde financeira do seu negócio, direto na conversa.",
    chip: "bg-[hsl(var(--sand)/0.25)] text-brand-olive",
  },
];

const Features = () => (
  <section id="recursos" className="bg-background py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <FadeUp>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-ember">
          recursos
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-black lowercase leading-[1.02] tracking-tight md:text-5xl">
          uma assistente que cuida das contas por você.
        </h2>
      </FadeUp>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <FadeUp key={feature.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-ember/30 hover:shadow-xl hover:shadow-brand-ember/10">
              <div
                className={`grid size-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${feature.chip}`}
              >
                <feature.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold lowercase tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
