import { useEffect, useRef, useState, type FormEvent } from "react";
import { MoreVertical, PlayCircle, Send, Video } from "lucide-react";
import WaButton from "./WaButton";

const TimeStamp = ({ value, delay = 0 }: { value: string; delay?: number }) => (
  <span
    className="msg-in self-end pb-1 text-[9px] font-medium tracking-wide text-brand-forest/40"
    style={{ animationDelay: `${delay}ms` }}
  >
    {value}
  </span>
);

const TypingBubble = () => (
  <div className="msg-in flex self-start pl-1">
    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="animate-typing-bounce size-1.5 rounded-full bg-brand-forest/50"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  </div>
);

const ChatMockup = () => {
  const [input, setInput] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [sent, setSent] = useState(false);
  const [typing, setTyping] = useState(false);
  const [replied, setReplied] = useState(false);
  const [scriptedTyping, setScriptedTyping] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // the scripted "typing…" only shows while the demo result is arriving
  useEffect(() => {
    const timer = window.setTimeout(() => setScriptedTyping(false), 2300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!sent) return;
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [sent, typing, replied]);

  const focusDemo = () => {
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (sent || !input.trim()) return;
    const name = input.trim().replace(/\s+/g, " ");
    setVisitorName(name.charAt(0).toUpperCase() + name.slice(1));
    setInput("");
    setSent(true);
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setReplied(true);
    }, 1600);
  };

  const hint = replied
    ? "fim da demo · continue no whatsapp"
    : sent
      ? "a zia está digitando…"
      : "demo · só 1 mensagem, sem cadastro";

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#efe7dc] shadow-2xl shadow-black/40">
        {/* header */}
        <div className="flex items-center gap-3 bg-brand-forest-deep px-4 py-3">
          <div className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full bg-white/10">
            <img src="/brand/zia-mark.png" alt="Zia" className="h-4 w-auto" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-brand-cream">Zia</p>
            <p className="flex items-center gap-1.5 text-[11px] text-brand-cream/60">
              <span className="size-1.5 shrink-0 rounded-full bg-brand-wa" />
              online agora
            </p>
          </div>
          <Video className="size-4 shrink-0 text-brand-cream/60" />
          <MoreVertical className="size-4 shrink-0 text-brand-cream/60" />
        </div>

        {/* messages */}
        <div
          ref={scrollRef}
          className="flex h-[31rem] flex-col gap-2.5 overflow-y-auto px-3 py-5"
        >
          {/* 1 · Zia */}
          <div
            className="msg-in flex max-w-[84%] items-end gap-1.5 self-start"
            style={{ animationDelay: "250ms" }}
          >
            <div className="rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-brand-forest shadow-sm">
              Oi! Eu sou a Zia. Bora entender o seu lucro hoje?
            </div>
            <TimeStamp value="14:02" delay={250} />
          </div>

          {/* 2 · exemplo */}
          <div
            className="msg-in flex max-w-[84%] items-end gap-1.5 self-end"
            style={{ animationDelay: "950ms" }}
          >
            <TimeStamp value="14:02" delay={950} />
            <div className="rounded-2xl rounded-br-md bg-[#d9fdd3] px-3.5 py-2.5 text-[13px] leading-relaxed text-brand-forest shadow-sm">
              Bolo de pote — vendo a R$ 5,00, custo R$ 2,20 por unidade.
            </div>
          </div>

          {/* 3 · typing */}
          {scriptedTyping && (
            <div className="msg-in flex self-start pl-1" style={{ animationDelay: "1600ms" }}>
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="animate-typing-bounce size-1.5 rounded-full bg-brand-forest/50"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* 4 · Zia result */}
          <div
            className="msg-in flex max-w-[92%] items-end gap-1.5 self-start"
            style={{ animationDelay: "2200ms" }}
          >
            <div className="rounded-2xl rounded-bl-md bg-white px-3.5 py-3 text-[13px] leading-relaxed text-brand-forest shadow-sm">
              <p>
                Fechou! Cada bolo de pote te dá <strong>R$ 2,80 de margem</strong>:
              </p>
              <div className="mt-2.5 space-y-1.5 font-mono text-[12px]">
                <div className="flex items-center justify-between rounded-lg bg-brand-cream px-3 py-1.5">
                  <span className="text-brand-forest/60">preço de venda</span>
                  <span className="font-semibold text-brand-forest">R$ 5,00</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-brand-cream px-3 py-1.5">
                  <span className="text-brand-forest/60">custo por unidade</span>
                  <span className="font-semibold text-brand-forest">R$ 2,20</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-brand-jade-soft px-3 py-1.5">
                  <span className="font-semibold text-brand-jade">margem</span>
                  <span className="font-semibold text-brand-jade">R$ 2,80 · 56%</span>
                </div>
              </div>
              <p className="mt-2.5">
                Vendendo 100 por semana →{" "}
                <strong className="font-mono">+R$ 280 de lucro</strong>.
              </p>
              <p className="mt-2.5 border-t border-brand-forest/10 pt-2.5">
                Agora é a sua vez: <strong>como posso te chamar?</strong>
              </p>
            </div>
            <TimeStamp value="14:03" delay={2200} />
          </div>

          {/* 5 · visitor's name */}
          {sent && (
            <div className="msg-in flex max-w-[84%] items-end gap-1.5 self-end">
              <TimeStamp value="agora" />
              <div className="rounded-2xl rounded-br-md bg-[#d9fdd3] px-3.5 py-2.5 text-[13px] leading-relaxed text-brand-forest shadow-sm">
                {visitorName}
              </div>
            </div>
          )}

          {/* 6 · Zia typing on the visitor's message */}
          {typing && <TypingBubble />}

          {/* 7 · Zia's personalized reply */}
          {replied && (
            <div className="msg-in flex max-w-[92%] items-end gap-1.5 self-start">
              <div className="rounded-2xl rounded-bl-md bg-white px-3.5 py-3 text-[13px] leading-relaxed text-brand-forest shadow-sm">
                <p>
                  Prazer, <strong>{visitorName}</strong>! Agora eu já sei como te chamar.
                </p>
                <p className="mt-2">
                  Uma ideia do que eu faço no seu negócio: se você vende a{" "}
                  <strong>R$ 5,00</strong> e custa <strong>R$ 2,20</strong>, sua margem é{" "}
                  <strong>R$ 2,80 (56%)</strong> — em 30 segundos, sem planilha.
                </p>
                <p className="mt-2">
                  A demo termina aqui, mas a Zia não para. Me chama no WhatsApp que eu calculo
                  os números reais do seu negócio.
                </p>
              </div>
              <TimeStamp value="agora" />
            </div>
          )}
        </div>

        {/* input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 pb-3">
          <input
            ref={inputRef}
            id="zia-demo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={sent}
            placeholder={sent ? "demo encerrada — continue no whatsapp" : "Digite seu nome…"}
            aria-label="Seu nome para a Zia"
            className="h-11 min-w-0 flex-1 rounded-full bg-white px-4 text-[13px] text-brand-forest shadow-sm outline-none transition-colors placeholder:text-brand-forest/35 focus:ring-2 focus:ring-brand-jade/40 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={sent || !input.trim()}
            aria-label="Enviar mensagem"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-wa text-white shadow-md transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2.5">
        {!sent && (
          <button
            type="button"
            onClick={focusDemo}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-jade to-brand-cyan px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-jade/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <PlayCircle className="size-4" />
            testar a zia agora
          </button>
        )}

        {replied && (
          <WaButton
            className="px-5 py-2.5 text-xs"
            message="Oi, Zia! Testei a demo no site e quero ver os números do meu negócio."
          >
            continuar no whatsapp
          </WaButton>
        )}

        <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-brand-cream/50">
          {hint}
        </p>
      </div>
    </div>
  );
};

export default ChatMockup;
