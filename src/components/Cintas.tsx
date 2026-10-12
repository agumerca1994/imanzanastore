// El recurso gráfico de la marca en Instagram: el texto repetido en
// diagonal, una cinta rellena y otra en contorno, cruzadas.
const LEMA = ["La tienda online", "iPhone", "Accesorios", "Envíos a todo el país"];

function Pista({ contorno, sentido }: { contorno?: boolean; sentido: "izq" | "der" }) {
  // Dos copias idénticas: la animación corre la pista media longitud.
  const items = [...LEMA, ...LEMA, ...LEMA, ...LEMA];
  return (
    <div className={`flex w-max ${sentido === "izq" ? "cinta-izq" : "cinta-der"}`} aria-hidden>
      {items.map((t, i) => (
        <span
          key={i}
          className={`display flex items-center gap-6 pr-6 text-[clamp(1.6rem,4.5vw,3.25rem)] font-black uppercase italic ${
            contorno ? "contorno" : ""
          }`}
        >
          {t}
          <span className="not-italic text-[0.5em]" style={{ WebkitTextFillColor: "currentColor" }}>
            ●
          </span>
        </span>
      ))}
    </div>
  );
}

export function Cintas() {
  return (
    <div className="relative h-[clamp(9rem,22vw,15rem)] overflow-hidden" role="presentation">
      <div className="absolute inset-x-[-5%] top-[18%] -rotate-[4deg] border-y border-tinta bg-papel py-3 text-tinta">
        <Pista contorno sentido="der" />
      </div>
      <div className="absolute inset-x-[-5%] top-[42%] rotate-[3deg] bg-tinta py-3 text-papel shadow-[0_20px_40px_-20px_rgb(0_0_0/0.5)]">
        <Pista sentido="izq" />
      </div>
    </div>
  );
}
