import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => (
  <a
    href="#piloto"
    className="fixed inset-x-0 top-0 z-50 flex h-10 items-center justify-center gap-2 bg-gradient-to-r from-brand-jade via-brand-cyan to-brand-jade px-4"
  >
    <span className="relative flex size-2 shrink-0" aria-hidden>
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/70" />
      <span className="relative inline-flex size-2 rounded-full bg-white" />
    </span>
    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:text-[11px]">
      teste grátis por 2 semanas · vagas limitadas
    </span>
    <span className="hidden items-center gap-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 underline underline-offset-4 sm:inline-flex">
      garantir vaga
      <ArrowRight className="size-3" />
    </span>
  </a>
);

export default AnnouncementBar;
