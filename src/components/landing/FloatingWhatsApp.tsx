import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

const FloatingWhatsApp = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noreferrer"
    aria-label="Falar com a Zia no WhatsApp"
    className="animate-wa-pulse fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-brand-wa text-white shadow-xl shadow-black/20 transition-transform hover:scale-110"
  >
    <MessageCircle className="size-7" />
  </a>
);

export default FloatingWhatsApp;
