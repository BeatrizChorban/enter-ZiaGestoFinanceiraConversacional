import { Check, ChevronDown } from "lucide-react";
import ChatMockup from "./ChatMockup";
import WaButton from "./WaButton";

const TRUST_ITEMS = ["sem app novo", "sem cadastro", "sem planilha"];

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-forest text-brand-cream">
      {/* aerial textures */}
      <div className="aerial absolute inset-0" />
      <div className="topo absolute inset-0 opacity-50" />
      <div className="absolute -bottom-40 -left-32 size-[30rem] rounded-full bg-brand-cyan/10 blur-3xl" />
      <div className="absolute -right-24 top-1/4 size-80 rounded-full bg-brand-ember/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-cyan">
              feito para MEIs · 100% no whatsapp
            </span>

            <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,4.75rem)] font-black lowercase leading-[0.95] tracking-[-0.02em]">
              entenda seus ganhos em{" "}
              <span className="bg-gradient-to-r from-brand-cyan to-brand-sand bg-clip-text text-transparent">
                30 segundos.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-brand-cream/70">
              A Zia é a sua assistente de gestão financeira: conversa, calcula margem, lucro e
              fluxo de caixa — e responde na hora, no app que você já usa todos os dias.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WaButton message="Oi, Zia! Quero começar a entender meu negócio.">
                começar agora no whatsapp
              </WaButton>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-full border border-brand-cream/20 px-6 py-3.5 text-sm font-semibold text-brand-cream/80 transition-colors hover:border-brand-cream/40 hover:text-brand-cream"
              >
                ver como funciona
                <ChevronDown className="size-4" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_ITEMS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-cream/50"
                >
                  <span className="grid size-4 place-items-center rounded-full bg-brand-cyan/20 text-brand-cyan">
                    <Check className="size-2.5" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* right */}
          <div className="relative">
            <div className="animate-float absolute -top-5 right-1 z-10 rotate-2 rounded-2xl bg-brand-cream px-4 py-2.5 font-mono text-xs font-semibold text-brand-forest shadow-xl shadow-black/30">
              +2h50/semana de volta
            </div>
            <div className="animate-float absolute -bottom-5 left-0 z-10 -rotate-2 rounded-2xl border border-brand-cyan/30 bg-brand-forest-deep px-4 py-2.5 font-mono text-xs font-semibold text-brand-cyan shadow-xl shadow-black/30 [animation-delay:1.5s]">
              margem de 56% na hora
            </div>
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
