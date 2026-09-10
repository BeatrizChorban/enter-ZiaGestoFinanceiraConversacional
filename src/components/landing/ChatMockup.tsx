import { useEffect, useRef, useState, type FormEvent } from "react";
import { Lock, MoreVertical, PlayCircle, Send, Video } from "lucide-react";
import WaButton from "./WaButton";

const FREE_MESSAGES = 4;

const WELCOME = [
  "Oi! Bem-vindo à Zia 💚",
  "Eu sou seu assistente financeiro no WhatsApp.",
  "",
  "Aqui a gente resolve a dor que todo empreendedor tem:",
  "💰 Vender bastante mas não saber quanto sobra",
  "❓ Ter medo de cobrar o preço certo",
  "📊 Ficar confuso com custo, margem e lucro",
  "",
  "Tudo no WhatsApp. Sem app novo, sem planilha, sem burocracia.",
  "",
  "Pra começar, qual é sua principal dúvida agora?",
  "• Preciso saber quanto cobrar por X",
  "• Não entendo se dá lucro",
  "• Tenho uma conta específica pra fazer",
  "• Outra coisa (me conta)",
].join("\n");

type ChatMessage = {
  id: number;
  from: "zia" | "visitor";
  text?: string;
  calc?: { price: number; cost: number };
};

const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const parseNumbers = (text: string) =>
  (text.match(/\d+(?:[.,]\d+)?/g) ?? [])
    .map((raw) => Number.parseFloat(raw.replace(",", ".")))
    .filter((n) => Number.isFinite(n));

const REPLY = {
  pricing:
    "Precificar é o que mais trava o empreendedor. Me diz duas coisas: quanto custa cada unidade e por quanto você quer vender. Eu calculo o preço ideal e te aviso se a margem está saudável.",
  profit:
    "A conta é simples: preço de venda − custo = margem. Exemplo: vendendo a R$ 5,00 com custo de R$ 2,20, a margem é R$ 2,80 por unidade (56%). Me manda os seus dois números que eu faço a conta exata agora.",
  greeting:
    "Oi! Tudo ótimo por aqui. Me conta qual é a sua dúvida: quanto cobrar, se está dando lucro, ou uma conta específica. Eu resolvo na hora.",
  oneNumber:
    "Já tenho um número. Pra fechar a conta, me diz o outro: quanto você vende e quanto custa cada unidade?",
  manyNumbers:
    "Vi vários números aí — pra eu não errar a conta, me manda só dois: o preço de venda e o custo por unidade.",
  loss: "Atenção: do jeito que está, cada venda dá prejuízo — você está vendendo por menos do que custa. Quer que eu calcule o preço mínimo pra você ter margem?",
  fallback:
    "Boa pergunta! Pra eu responder com precisão, me conta: o que você vende, por quanto vende e quanto custa cada unidade. Com isso eu calculo margem, lucro e preço ideal em 30 segundos.",
};

const isNameLike = (text: string) =>
  /^[a-zà-ú]{2,20}(\s+[a-zà-ú]{2,20})?$/i.test(text.trim());

const isGreeting = (text: string) =>
  /^(oi|ola|olá|eai|e ai|bom dia|boa tarde|boa noite|tudo bem|hey)/i.test(text.trim());

type Reply = { reply: Omit<ChatMessage, "id" | "from">; capturedName?: string };

const buildReply = (text: string, visitorName: string | null): Reply => {
  const numbers = parseNumbers(text);
  const lower = text.toLowerCase();

  if (numbers.length === 2) {
    const price = Math.max(...numbers);
    const cost = Math.min(...numbers);
    if (price > 0 && cost < price) {
      return { reply: { calc: { price, cost } } };
    }
    return { reply: { text: REPLY.loss } };
  }

  if (numbers.length > 2) return { reply: { text: REPLY.manyNumbers } };
  if (numbers.length === 1) return { reply: { text: REPLY.oneNumber } };

  if (isGreeting(text)) return { reply: { text: REPLY.greeting } };
  if (/cobrar|preç|precific|valor|quanto devo|quanto posso/.test(lower))
    return { reply: { text: REPLY.pricing } };
  if (/lucro|margem|sobra|vale a pena|preju/.test(lower))
    return { reply: { text: REPLY.profit } };

  if (!visitorName && isNameLike(text)) {
    const name = text.trim().replace(/\s+/g, " ");
    const pretty = name.charAt(0).toUpperCase() + name.slice(1);
    return {
      reply: {
        text: `Prazer, ${pretty}! Já guardei seu nome. Agora me conta: o que você vende e por quanto? Eu calculo sua margem na hora.`,
      },
      capturedName: pretty,
    };
  }

  return { reply: { text: REPLY.fallback } };
};

const TimeStamp = () => (
  <span className="msg-in self-end pb-1 text-[9px] font-medium tracking-wide text-brand-forest/40">
    agora
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

const CalcCard = ({ price, cost }: { price: number; cost: number }) => {
  const margin = price - cost;
  const percent = Math.round((margin / price) * 100);
  return (
    <>
      <p>Fechou! Deixa eu fazer a conta:</p>
      <div className="mt-2.5 space-y-1.5 font-mono text-[12px]">
        <div className="flex items-center justify-between rounded-lg bg-brand-cream px-3 py-1.5">
          <span className="text-brand-forest/60">preço de venda</span>
          <span className="font-semibold text-brand-forest">{brl(price)}</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-brand-cream px-3 py-1.5">
          <span className="text-brand-forest/60">custo por unidade</span>
          <span className="font-semibold text-brand-forest">{brl(cost)}</span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-brand-jade-soft px-3 py-1.5">
          <span className="font-semibold text-brand-jade">margem</span>
          <span className="font-semibold text-brand-jade">
            {brl(margin)} · {percent}%
          </span>
        </div>
      </div>
      <p className="mt-2.5">
        Vendendo 100 por semana →{" "}
        <strong className="font-mono">+{brl(margin * 100)} de lucro</strong>.
      </p>
    </>
  );
};

const ChatMockup = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, from: "zia", text: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [visitorName, setVisitorName] = useState<string | null>(null);
  const [remaining, setRemaining] = useState(FREE_MESSAGES);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef(1);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const focusDemo = () => {
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || remaining <= 0 || typing) return;

    const { reply, capturedName } = buildReply(text, visitorName);
    if (capturedName) setVisitorName(capturedName);

    setMessages((prev) => [...prev, { id: idRef.current++, from: "visitor", text }]);
    setInput("");
    setRemaining((r) => r - 1);
    setTyping(true);

    timerRef.current = window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: idRef.current++, from: "zia", ...reply }]);
    }, 1500);
  };

  const started = remaining < FREE_MESSAGES;
  const finished = remaining === 0;

  const hint = finished
    ? "fim das mensagens grátis · continue no whatsapp"
    : typing
      ? "a zia está digitando…"
      : started
        ? `demo · ${remaining} de ${FREE_MESSAGES} mensagens grátis`
        : `demo · ${FREE_MESSAGES} mensagens grátis, sem cadastro`;

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
          {messages.map((message, index) => (
            <div key={message.id} className="flex flex-col gap-2.5">
              <div
                className={`msg-in flex max-w-[92%] items-end gap-1.5 ${
                  message.from === "visitor" ? "self-end" : "self-start"
                }`}
                style={index === 0 ? { animationDelay: "250ms" } : undefined}
              >
                {message.from === "visitor" && <TimeStamp />}
                <div
                  className={`rounded-2xl px-3.5 py-3 text-[13px] leading-relaxed text-brand-forest shadow-sm ${
                    message.from === "visitor"
                      ? "rounded-br-md bg-[#d9fdd3]"
                      : "rounded-bl-md bg-white"
                  } ${message.text ? "whitespace-pre-line" : ""}`}
                >
                  {message.calc ? (
                    <CalcCard price={message.calc.price} cost={message.calc.cost} />
                  ) : (
                    message.text
                  )}
                </div>
                {message.from === "zia" && <TimeStamp />}
              </div>

              {/* LGPD notice right under the welcome message */}
              {index === 0 && (
                <p className="mx-auto flex items-center gap-1.5 rounded-full bg-[#e6dcd0] px-3 py-1 text-[10px] font-medium text-brand-forest/60">
                  <Lock className="size-3" />
                  dados protegidos por LGPD
                </p>
              )}
            </div>
          ))}

          {typing && <TypingBubble />}
        </div>

        {/* input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 pb-3">
          <input
            ref={inputRef}
            id="zia-demo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={finished}
            placeholder={finished ? "mensagens grátis encerradas" : "Digite sua dúvida…"}
            aria-label="Mensagem para a Zia"
            className="h-11 min-w-0 flex-1 rounded-full bg-white px-4 text-[13px] text-brand-forest shadow-sm outline-none transition-colors placeholder:text-brand-forest/35 focus:ring-2 focus:ring-brand-jade/40 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={finished || typing || !input.trim()}
            aria-label="Enviar mensagem"
            className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-wa text-white shadow-md transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>

      <div className="mt-4 flex flex-col items-center gap-2.5">
        {!started ? (
          <button
            type="button"
            onClick={focusDemo}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-jade to-brand-cyan px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-jade/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <PlayCircle className="size-4" />
            testar a zia agora
          </button>
        ) : (
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
