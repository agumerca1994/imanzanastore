import type { Metadata } from "next";
import { Isotipo, Logo } from "@/components/Logo";

// Hoja de marca interna: muestra las versiones del logo y sirve para
// exportarlas a PNG (perfil de Instagram, WhatsApp Business, etc.).
export const metadata: Metadata = {
  title: "Marca | iManzana Store",
  robots: { index: false, follow: false },
};

function Muestra({ titulo, children, oscuro }: { titulo: string; children: React.ReactNode; oscuro?: boolean }) {
  return (
    <figure className="space-y-3">
      <div
        className={`grid min-h-56 place-items-center rounded-3xl p-10 ${
          oscuro ? "bg-tinta text-papel" : "border border-linea bg-papel"
        }`}
      >
        {children}
      </div>
      <figcaption className="text-sm text-grafito">{titulo}</figcaption>
    </figure>
  );
}

export default function Marca() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="display text-5xl font-black">Marca</h1>
      <p className="mt-3 text-grafito">Versiones del logo de iManzana Store en blanco y negro.</p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Muestra titulo="Logo completo, fondo claro">
          <span id="logo-claro" className="inline-block bg-papel p-6">
            <Logo />
          </span>
        </Muestra>
        <Muestra titulo="Logo completo, fondo oscuro" oscuro>
          <span id="logo-oscuro" className="inline-block bg-tinta p-6">
            <Logo variante="oscuro" />
          </span>
        </Muestra>
        <Muestra titulo="Perfil de Instagram / WhatsApp (se recorta en círculo)">
          {/* Margen de 12px alrededor del aro: el recorte circular de
              Instagram no llega a comérselo. */}
          <span id="perfil" className="grid size-64 place-items-center bg-papel">
            <span className="grid size-58 place-items-center rounded-full ring-[13px] ring-tinta ring-inset">
              <Isotipo className="h-24 w-auto" />
            </span>
          </span>
        </Muestra>
        <Muestra titulo="Perfil, versión oscura" oscuro>
          <span id="perfil-oscuro" className="grid size-64 place-items-center rounded-full bg-tinta">
            <Isotipo variante="oscuro" className="h-24 w-auto" />
          </span>
        </Muestra>
      </div>

      <p className="mt-12 text-sm text-grafito">
        Isotipo en vector: <a className="underline" href="/marca/isotipo.svg">isotipo.svg</a> ·{" "}
        <a className="underline" href="/marca/isotipo-invertido.svg">isotipo-invertido.svg</a>
      </p>
    </main>
  );
}
