const ITEMS = [
  "+2h50 de volta por semana",
  "respostas em até 30 segundos",
  "45 respondentes na validação",
  "10 clientes no piloto",
  "100% no whatsapp",
];

const StatsStrip = () => (
  <div className="overflow-hidden border-y border-brand-jade/40 bg-brand-jade py-3.5 text-brand-cream">
    <div className="animate-marquee flex w-max items-center">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={i}
          className="flex items-center whitespace-nowrap font-mono text-sm font-medium tracking-wide"
        >
          <span className="px-6">{item}</span>
          <span className="text-brand-cyan">◆</span>
        </span>
      ))}
    </div>
  </div>
);

export default StatsStrip;
