import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <a
    href="#top"
    aria-label="Zia — voltar ao topo"
    className={cn("group inline-flex items-center gap-2.5", className)}
  >
    <img
      src="/brand/zia-mark.png"
      alt="Zia"
      className="h-7 w-auto transition-transform duration-300 group-hover:scale-105"
    />
    <span className="font-display text-xl font-black lowercase leading-none tracking-tight">
      zia
    </span>
    <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 sm:inline">
      zèphira
    </span>
  </a>
);

export default Logo;
