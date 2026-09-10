import { useEffect, useState } from "react";
import Logo from "./Logo";
import WaButton from "./WaButton";

const NAV_LINKS = [
  { href: "#como-funciona", label: "como funciona" },
  { href: "#recursos", label: "recursos" },
  { href: "#para-quem", label: "para quem é" },
  { href: "#planos", label: "planos" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-10 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-brand-forest/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo className="text-brand-cream" />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brand-cream/60 transition-colors hover:text-brand-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WaButton className="px-5 py-2.5 text-xs">
          <span className="hidden sm:inline">chamar no whatsapp</span>
          <span className="sm:hidden">whatsapp</span>
        </WaButton>
      </div>
    </header>
  );
};

export default Navbar;
