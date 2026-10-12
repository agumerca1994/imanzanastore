// Ilustraciones propias de cada categoría, en el blanco y negro de la marca.
// Son dibujos genéricos (no fotos de Apple) para no usar material con derechos
// de terceros. Con fotos propias se reemplazan desde `foto` en page.tsx.

type Props = { className?: string };

const CUERPO = "var(--color-tinta)";
const DETALLE = "#2b2b30";
const ALUMINIO = "#cfcfcb";

// Pantalla apagada con reflejo diagonal: se lee como vidrio sin inventar
// una interfaz.
function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-pantalla`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#55555c" />
        <stop offset="0.55" stopColor="#26262b" />
        <stop offset="1" stopColor="#3d3d44" />
      </linearGradient>
      <linearGradient id={`${id}-brillo`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.18" />
        <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

export function IlustracionIPhone({ className }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <Defs id="iphone" />
      {/* Dorso, detrás y apenas girado */}
      <g transform="rotate(8 140 103)">
        <rect x="104" y="30" width="72" height="146" rx="15" fill={CUERPO} />
        <rect x="111" y="37" width="32" height="32" rx="9" fill={DETALLE} />
        <circle cx="120" cy="46" r="6" fill="#111" stroke="#4a4a50" strokeWidth="1.5" />
        <circle cx="120" cy="60" r="6" fill="#111" stroke="#4a4a50" strokeWidth="1.5" />
        <circle cx="134" cy="53" r="6" fill="#111" stroke="#4a4a50" strokeWidth="1.5" />
      </g>
      {/* Frente */}
      <rect x="30" y="24" width="74" height="152" rx="16" fill={CUERPO} />
      <rect x="34.5" y="28.5" width="65" height="143" rx="12" fill="url(#iphone-pantalla)" />
      <rect x="34.5" y="28.5" width="65" height="143" rx="12" fill="url(#iphone-brillo)" />
      <rect x="57" y="34" width="20" height="6.5" rx="3.25" fill={CUERPO} />
    </svg>
  );
}

export function IlustracionMac({ className }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <Defs id="mac" />
      <rect x="32" y="46" width="136" height="90" rx="7" fill={CUERPO} />
      <rect x="37" y="51" width="126" height="80" rx="2.5" fill="url(#mac-pantalla)" />
      <rect x="37" y="51" width="126" height="80" rx="2.5" fill="url(#mac-brillo)" />
      <rect x="92" y="51" width="16" height="4" rx="2" fill={CUERPO} />
      <path d="M18 136 H182 L176 146 Q175 148 172 148 H28 Q25 148 24 146 Z" fill={ALUMINIO} />
      <rect x="86" y="136" width="28" height="3.5" rx="1.75" fill="#b3b3af" />
    </svg>
  );
}

export function IlustracionIPad({ className }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <Defs id="ipad" />
      <g transform="rotate(-6 100 100)">
        <rect x="26" y="48" width="148" height="106" rx="12" fill={CUERPO} />
        <rect x="32" y="54" width="136" height="94" rx="7" fill="url(#ipad-pantalla)" />
        <rect x="32" y="54" width="136" height="94" rx="7" fill="url(#ipad-brillo)" />
        <circle cx="100" cy="51" r="1.4" fill="#4a4a50" />
      </g>
      {/* Lápiz apoyado delante */}
      <g transform="rotate(-6 100 100)">
        <rect x="44" y="164" width="104" height="7" rx="3.5" fill={ALUMINIO} />
        <path d="M148 164 L160 167.5 L148 171 Z" fill="#b3b3af" />
      </g>
    </svg>
  );
}

export function IlustracionWatch({ className }: Props) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <Defs id="watch" />
      <rect x="77" y="16" width="46" height="58" rx="8" fill={ALUMINIO} />
      <rect x="77" y="126" width="46" height="58" rx="8" fill={ALUMINIO} />
      <rect x="64" y="58" width="72" height="84" rx="20" fill={CUERPO} />
      <rect x="69.5" y="63.5" width="61" height="73" rx="15" fill="url(#watch-pantalla)" />
      <rect x="69.5" y="63.5" width="61" height="73" rx="15" fill="url(#watch-brillo)" />
      <rect x="135" y="80" width="7" height="15" rx="2.5" fill={DETALLE} />
      <rect x="135.5" y="103" width="4.5" height="13" rx="2" fill={DETALLE} />
      {/* Anillo de actividad, el gesto que identifica a un reloj inteligente */}
      <circle cx="100" cy="100" r="17" fill="none" stroke="#4a4a50" strokeWidth="6" />
      <circle
        cx="100"
        cy="100"
        r="17"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="80 107"
        transform="rotate(-90 100 100)"
      />
    </svg>
  );
}
