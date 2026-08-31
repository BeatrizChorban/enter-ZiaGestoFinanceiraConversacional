import { MoreVertical, Send, Video } from "lucide-react";

const TimeStamp = ({ value, delay }: { value: string; delay: number }) => (
  <span
    className="msg-in self-end pb-1 text-[9px] font-medium tracking-wide text-brand-forest/40"
    style={{ animationDelay: `${delay}ms` }}
  >
    {value}
  </span>
);

const ChatMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#efe7dc] shadow-2xl shadow-black/40">
      {/* header */}
      <div className="flex items-center gap-3 bg-brand-forest-deep px-4 py-3">
        <div className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-ember font-display text-lg font-black lowercase text-white">
          z
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
      <div className="flex min-h-[21.5rem] flex-col gap-2.5 px-3 py-5">
        {/* 1 · Zia */}
        <div className="msg-in flex max-w-[84%] items-end gap-1.5 self-start" style={{ animationDelay: "250ms" }}>
          <div className="rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-brand-forest shadow-sm">
            Oi, Carla! Bora entender seu lucro hoje. Qual produto você quer calcular?
          </div>
          <TimeStamp value="14:02" delay={250} />
        </div>

        {/* 2 · Carla */}
        <div className="msg-in flex max-w-[84%] items-end gap-1.5 self-end" style={{ animationDelay: "950ms" }}>
          <TimeStamp value="14:02" delay={950} />
          <div className="rounded-2xl rounded-br-md bg-[#d9fdd3] px-3.5 py-2.5 text-[13px] leading-relaxed text-brand-forest shadow-sm">
            Bolo de pote — vendo a R$ 5,00, custo R$ 2,20 por unidade.
          </div>
        </div>

        {/* 3 · typing */}
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
              <div className="flex items-center justify-between rounded-lg bg-brand-ember-soft px-3 py-1.5">
                <span className="font-semibold text-brand-ember">margem</span>
                <span className="font-semibold text-brand-ember">R$ 2,80 · 56%</span>
              </div>
            </div>
            <p className="mt-2.5">
              Vendendo 100 por semana → <strong className="font-mono">+R$ 280 de lucro</strong>.
              Precificação redondinha.
            </p>
          </div>
          <TimeStamp value="14:03" delay={2200} />
        </div>
      </div>

      {/* input */}
      <div className="flex items-center gap-2 px-3 pb-3">
        <div className="flex flex-1 items-center rounded-full bg-white px-4 py-2.5 text-[13px] text-brand-forest/35 shadow-sm">
          Digite uma mensagem…
        </div>
        <div className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-wa text-white shadow-md">
          <Send className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default ChatMockup;
