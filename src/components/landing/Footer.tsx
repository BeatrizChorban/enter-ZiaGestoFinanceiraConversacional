import Logo from "./Logo";
import WaButton from "./WaButton";

const FOOTER_LINKS = [
  { href: "#como-funciona", label: "como funciona" },
  { href: "#recursos", label: "recursos" },
  { href: "#para-quem", label: "para quem é" },
  { href: "#planos", label: "planos" },
  { href: "#piloto", label: "piloto" },
];

const Footer = () => (
  <footer className="bg-brand-forest-deep text-brand-cream">
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-cream/50">
            Gestão financeira simples, conversacional e em tempo real para MEIs — 100% no
            WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-cream/40">
              navegue
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-cream/60 transition-colors hover:text-brand-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-cream/40">
              fale com a gente
            </p>
            <div className="mt-4">
              <WaButton className="px-5 py-2.5 text-xs">
                chamar no whatsapp
              </WaButton>
            </div>
            <p className="mt-4 font-mono text-xs text-brand-cream/50">
              feito no brasil
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-brand-cream/40 md:flex-row md:items-center md:justify-between">
        <p>© 2026 zèphira · todos os direitos reservados</p>
        <p>privacidade &amp; LGPD — seus dados só são usados para te atender.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
