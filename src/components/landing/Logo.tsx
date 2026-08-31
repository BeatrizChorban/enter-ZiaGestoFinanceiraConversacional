import { cn } from "@/lib/utils";
import ZiaLogo from "./ZiaLogo";

const Logo = ({ className }: { className?: string }) => (
  <a
    href="#top"
    aria-label="Zia — voltar ao topo"
    className={cn("group inline-flex items-baseline gap-2.5", className)}
  >
    <ZiaLogo className="text-2xl transition-transform duration-300 group-hover:scale-105" />
    <span className="font-display text-xs font-medium lowercase tracking-wide opacity-50">
      zèphira
    </span>
  </a>
);

export default Logo;
