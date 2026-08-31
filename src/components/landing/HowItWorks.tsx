import FadeUp from "./FadeUp";

const STEPS = [
  {
    num: "01",
    title: "abre o whatsapp",
    desc: "Sem app novo, sem cadastro, sem planilha. Se você sabe mandar mensagem, você já sabe usar a Zia.",
  },
  {
    num: "02",
    title: "conversa com a zia",
    desc: "Ela pergunta o básico: o que você vende, por quanto vende e quanto custa. Nada de formulário gigante.",
  },
  {
    num: "03",
    title: "recebe seus números",
    desc: "Margem, lucro e fluxo de caixa em até 30 segundos — calculados na hora, do seu jeito.",
  },
];

const HowItWorks = () => (
  <section
    id="como-funciona"
    className="relative overflow-hidden bg-brand-forest py-24 text-brand-cream md:py-32"
  >
    <div className="topo absolute inset-0 opacity-40" />
    <div className="absolute -top-32 right-0 size-96 rounded-full bg-brand-cyan/10 blur-3xl" />

    <div className="relative mx-auto max-w-6xl px-6">
      <FadeUp>
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-cyan">
          como funciona
        </span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-black lowercase leading-[1.02] tracking-tight md:text-5xl">
          do zero ao número certo em 3 passos.
        </h2>
      </FadeUp>

      <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
        {STEPS.map((step, i) => (
          <FadeUp key={step.num} delay={i * 0.12}>
            <div className="relative border-t border-brand-cream/15 pt-8">
              <span className="absolute -top-px left-0 h-px w-16 bg-brand-cyan" />
              <p className="font-mono text-sm text-brand-cyan">passo {step.num}</p>
              <h3 className="mt-3 font-display text-2xl font-bold lowercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-cream/65">{step.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
