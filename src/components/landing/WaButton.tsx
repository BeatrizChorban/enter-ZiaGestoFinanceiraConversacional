import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/whatsapp";

interface WaButtonProps {
  children: ReactNode;
  message?: string;
  className?: string;
}

const WaButton = ({ children, message, className }: WaButtonProps) => (
  <a
    href={waLink(message)}
    target="_blank"
    rel="noreferrer"
    className={cn(
      "group inline-flex items-center justify-center gap-2 rounded-full bg-brand-wa px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-wa/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-wa/30 hover:brightness-105",
      className
    )}
  >
    <MessageCircle className="size-4 shrink-0" />
    {children}
  </a>
);

export default WaButton;
