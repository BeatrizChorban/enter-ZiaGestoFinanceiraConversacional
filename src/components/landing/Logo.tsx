import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <a
    href="#top"
    aria-label="Zia — voltar ao topo"
    className={cn("group inline-flex items-center gap-2.5", className)}
  >
    <img
      src="/brand/zia-logo.png"
      alt="Zia"
      className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
    />
    <span className="font-display text-xs font-medium lowercase tracking-wide opacity-50">
      zèphira
    </span>
  </a>
);

export default Logo;
