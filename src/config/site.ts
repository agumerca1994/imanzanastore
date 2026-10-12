// Todos los datos del negocio viven acá: cambiar un horario o el WhatsApp no
// debería obligar a tocar ningún componente.
//
// Los valores en PENDIENTE son de relleno hasta que el negocio los confirme.
// En pantalla se ven como "A confirmar" (ver `mostrar`) para que no pasen
// desapercibidos antes de publicar.

export const PENDIENTE = "__PENDIENTE__";

export type Local = {
  direccion: string;
  barrio: string;
  horarios: { dias: string; horas: string }[];
  // Texto de búsqueda para Google Maps (dirección completa).
  mapsQuery: string;
};

export const site = {
  nombre: "iManzana Store",
  dominio: "https://www.imanzanastore.com.ar",
  descripcion:
    "iPhone y accesorios con envío a todo el país. Consultá stock, precios y cuotas por WhatsApp.",

  whatsapp: {
    // Formato internacional sin "+" ni espacios: 549 + característica + número.
    numero: PENDIENTE,
    mensajeGeneral: "¡Hola iManzana! Quiero hacer una consulta.",
  },

  instagram: "https://www.instagram.com/store.imanzana/",
  email: PENDIENTE,

  // null si la venta es solo online: la sección del local no se muestra.
  local: {
    direccion: PENDIENTE,
    barrio: PENDIENTE,
    horarios: [
      { dias: "Lunes a viernes", horas: PENDIENTE },
      { dias: "Sábados", horas: PENDIENTE },
    ],
    mapsQuery: PENDIENTE,
  } as Local | null,

  legal: {
    razonSocial: PENDIENTE,
    cuit: PENDIENTE,
  },
} as const;

export function esPendiente(valor: string | undefined | null): boolean {
  return !valor || valor === PENDIENTE;
}

export function mostrar(valor: string): string {
  return esPendiente(valor) ? "A confirmar" : valor;
}
