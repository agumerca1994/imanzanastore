import { esPendiente, site } from "@/config/site";

// Link de wa.me con el mensaje precargado. Sin número confirmado cae al
// perfil de Instagram, que es el otro canal de consultas.
export function linkWhatsApp(mensaje: string = site.whatsapp.mensajeGeneral): string {
  if (esPendiente(site.whatsapp.numero)) return site.instagram;
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}
