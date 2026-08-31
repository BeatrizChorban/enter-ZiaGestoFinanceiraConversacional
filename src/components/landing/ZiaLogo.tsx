import { cn } from "@/lib/utils";

/**
 * "ziA" wordmark with satellite-texture letter fills, echoing the brand
 * identity (desert dunes z · volcanic plume over teal ocean i · forest + ice A).
 */
const LETTERS = [
  { char: "z", gradient: "from-[#c9a276] via-[#b4895e] to-[#7a5a3c]" },
  { char: "i", gradient: "from-[#e04010] via-[#3aa6a9] to-[#12394a]" },
  { char: "A", gradient: "from-[#274032] via-[#7a8f7e] to-[#e8e5ec]" },
];

const ZiaLogo = ({ className }: { className?: string }) => (
  <span
    className={cn(
      "font-display text-2xl font-black leading-none tracking-tight",
      className
    )}
  >
    {LETTERS.map(({ char, gradient }) => (
      <span
        key={char}
        className={cn("bg-gradient-to-b bg-clip-text text-transparent", gradient)}
      >
        {char}
      </span>
    ))}
  </span>
);

export default ZiaLogo;
