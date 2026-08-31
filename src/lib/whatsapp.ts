export const WHATSAPP_NUMBER = "5511998888703";

export const DEFAULT_WA_MESSAGE = "Oi, Zia! Quero entender melhor meu negócio no WhatsApp.";

export const waLink = (message: string = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
