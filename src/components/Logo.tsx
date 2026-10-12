// Logo de iManzana: una manzana armada con dos pastillas superpuestas, el
// brillo como punto y el cabito inclinado. Versión en blanco y negro: la
// mitad izquierda va en contorno y la derecha llena.

type Variante = "claro" | "oscuro";

const COLORES: Record<Variante, { tinta: string; papel: string }> = {
  claro: { tinta: "var(--color-tinta, #0b0b0c)", papel: "var(--color-papel, #fff)" },
  oscuro: { tinta: "var(--color-papel, #fff)", papel: "var(--color-tinta, #0b0b0c)" },
};

// Si se cambia la forma, copiarla también a src/app/icon.svg y
// public/marca/*.svg.
//
// Puntos calculados: (49.42, 139.3) y (72.44, 139.12) son donde el círculo de
// 22 toca el borde exterior de cada pastilla; (60.6, 127.1) es la punta que
// tapa. El triángulo queda dentro del trazo y de la pastilla negra.
const UNION_ABAJO = "M49.42 139.3 L60.6 127.1 L72.44 139.12 A22 22 0 0 0 49.42 139.3 Z";
export function Isotipo({ variante = "claro", className }: { variante?: Variante; className?: string }) {
  const { tinta, papel } = COLORES[variante];
  return (
    <svg viewBox="0 0 126 150" className={className} aria-hidden>
      {/* Mitad izquierda: el trazo va centrado en el borde, por eso el rect se
          achica la mitad del grosor (3.5) de cada lado. Por fuera mide 62 de
          ancho y la misma altura que la negra: más fina parecería quedar atrás. */}
      <rect x="5.5" y="43.5" width="55" height="97" rx="27.5" fill={papel} stroke={tinta} strokeWidth="7" />
      <rect x="56" y="40" width="68" height="104" rx="34" fill={tinta} />
      {/* Unión de abajo: rellena la punta entre las dos pastillas con un arco
          de radio 22 tangente a ambas, así la base pasa de una a otra en curva. */}
      <path d={UNION_ABAJO} fill={tinta} />
      {/* Brillo sobre el lado derecho de la mitad negra */}
      <circle cx="102" cy="66" r="9" fill={papel} />
      <line x1="62" y1="30" x2="80" y2="7" stroke={tinta} strokeWidth="13" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  variante = "claro",
  compacto = false,
}: {
  variante?: Variante;
  // Compacto: para el header, sin la línea de "Store · Catamarca".
  compacto?: boolean;
}) {
  const principal = variante === "claro" ? "text-tinta" : "text-papel";
  const secundario = variante === "claro" ? "text-grafito" : "text-papel/60";
  return (
    <span className={`inline-flex items-center gap-2.5 ${principal}`}>
      <Isotipo variante={variante} className={compacto ? "h-8 w-auto" : "h-14 w-auto"} />
      <span className="flex flex-col leading-none">
        <span className={`font-sans font-extrabold tracking-[-0.03em] ${compacto ? "text-[1.35rem]" : "text-[1.9rem]"}`}>
          iManzana
        </span>
        <span
          className={`mt-1 font-sans font-bold whitespace-nowrap uppercase ${secundario} ${
            compacto ? "text-[0.6rem] tracking-[0.32em]" : "text-[0.7rem] tracking-[0.38em]"
          }`}
        >
          {compacto ? "Store" : "Store · Catamarca"}
        </span>
      </span>
    </span>
  );
}
