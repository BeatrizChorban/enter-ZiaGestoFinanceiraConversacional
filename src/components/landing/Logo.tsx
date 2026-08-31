import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <a
    href="#top"
    aria-label="Zia — voltar ao topo"
    className={cn("group inline-flex items-baseline gap-2", className)}
  >
    <span className="font-display text-2xl font-black lowercase leading-none tracking-tight">
      zi<span className="text-brand-cyan transition-colors group-hover:text-brand-sand">A</span>
    </span>
    <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">
      zèphira
    </span>
  </a>
);

export default Logo;
