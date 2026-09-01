import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, Send, Users } from "lucide-react";
import FadeUp from "./FadeUp";
import WaButton from "./WaButton";

const BUSINESS_TYPES = ["Alimentação", "Beleza", "Artesanato", "Moda", "Outro"];

const COMMUNITY_GROUP_URL =
  "https://chat.whatsapp.com/K5KnwuAwhDX99gQrNsYz5d?s=cl&p=a&mlu=4";

const CHIPS = [
  "acompanhamento próximo",
  "feedback direto com as founders",
  "molda o produto com a gente",
];

const Waitlist = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) nextErrors.name = "conta seu nome pra gente";
    if (phone.replace(/\D/g, "").length < 10)
      nextErrors.phone = "precisa de um whatsapp válido";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  const inputClass = (hasError?: string) =>
    `h-12 w-full rounded-xl border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:ring-2 ${
      hasError
        ? "border-destructive ring-destructive/30"
        : "border-input focus:border-brand-jade focus:ring-brand-jade/30"
    }`;

  return (
    <section id="piloto" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-brand-jade/10">
            <div className="grid lg:grid-cols-2">
              {/* left */}
              <div className="relative overflow-hidden bg-brand-forest p-10 text-brand-cream md:p-12">
                <div className="topo absolute inset-0 opacity-40" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-jade/50 bg-brand-jade/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-sand">
                    piloto · 2 semanas de teste
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-black lowercase leading-[1.05] tracking-tight md:text-4xl">
                    seja uma das primeiras a usar a zia.
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-brand-cream/70">
                    São <strong className="text-brand-cream">2 semanas de teste grátis</strong>,
                    com <strong className="text-brand-cream">vagas limitadas</strong> — só as 10
                    primeiras entram, com acompanhamento próximo e ajudando a moldar o produto.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {CHIPS.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-brand-cream/15 bg-brand-cream/5 px-3 py-1 font-mono text-[11px] text-brand-cream/70"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <a
                    href={COMMUNITY_GROUP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-wa px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:brightness-105"
                  >
                    <Users className="size-4" />
                    entrar no grupo vip da comunidade
                  </a>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-brand-cream/50">
                    vagas limitadas · grupo vip no whatsapp
                  </p>
                </div>
              </div>

              {/* right — form */}
              <div className="p-10 md:p-12">
                {submitted ? (
                  <div className="flex h-full flex-col items-start justify-center">
                    <span className="grid size-14 place-items-center rounded-full bg-brand-jade-soft text-brand-jade">
                      <CheckCircle2 className="size-8" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold lowercase tracking-tight">
                      recebido! a gente chama você no whatsapp.
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Enquanto isso, dá pra começar a conversar com a Zia e ver seus números de
                      verdade — sem compromisso.
                    </p>
                    <WaButton className="mt-6" message="Oi, Zia! Recebi o convite do piloto e quero testar.">
                      testar a zia agora
                    </WaButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="font-display text-2xl font-bold lowercase tracking-tight">
                      garanta sua vaga no piloto
                    </h3>
                    <div className="mt-6 space-y-4">
                      <div>
                        <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          seu nome
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex.: Carla"
                          className={inputClass(errors.name)}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs font-medium text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          whatsapp
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(11) 99888-8703"
                          className={inputClass(errors.phone)}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs font-medium text-destructive">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          tipo de negócio
                        </label>
                        <div className="relative">
                          <select
                            value={businessType}
                            onChange={(e) => setBusinessType(e.target.value)}
                            className={`${inputClass()} appearance-none pr-10 ${
                              businessType ? "" : "text-muted-foreground/60"
                            }`}
                          >
                            <option value="" disabled>
                              escolha uma opção
                            </option>
                            {BUSINESS_TYPES.map((type) => (
                              <option key={type} value={type} className="text-foreground">
                                {type}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-jade to-brand-cyan px-6 text-sm font-semibold text-white shadow-lg shadow-brand-jade/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-jade/30"
                      >
                        quero entrar no piloto
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                    <p className="mt-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                      <Send className="size-3" />
                      seus dados ficam só pra te chamar no piloto
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Waitlist;
