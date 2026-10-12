import Image from "next/image";
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Cintas } from "@/components/Cintas";
import {
  IlustracionIPad,
  IlustracionIPhone,
  IlustracionMac,
  IlustracionWatch,
} from "@/components/Dispositivos";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { esPendiente, mostrar, site } from "@/config/site";
import { linkWhatsApp } from "@/lib/whatsapp";

type Categoria = {
  nombre: string;
  Ilustracion: (p: { className?: string }) => React.JSX.Element;
  // Foto propia en /public (ej. "/productos/iphone.png", fondo transparente):
  // si está, reemplaza a la ilustración.
  foto?: string;
};

const CATEGORIAS: Categoria[] = [
  { nombre: "iPhone", Ilustracion: IlustracionIPhone },
  { nombre: "Mac", Ilustracion: IlustracionMac },
  { nombre: "iPad", Ilustracion: IlustracionIPad },
  { nombre: "Apple Watch", Ilustracion: IlustracionWatch },
];

const PASOS = [
  { titulo: "Escribinos", texto: "Contanos qué buscás por WhatsApp o Instagram y te pasamos stock y precio del día." },
  { titulo: "Elegí cómo pagar", texto: "De contado o en cuotas. Te contamos las opciones vigentes al momento de la compra." },
  {
    titulo: "Recibilo",
    texto: site.local
      ? "Lo enviamos a todo el país o lo retirás por el local."
      : "Lo enviamos a cualquier punto del país.",
  },
];

function BotonWhatsApp({ mensaje, children }: { mensaje?: string; children: React.ReactNode }) {
  return (
    <a
      href={linkWhatsApp(mensaje)}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-2 rounded-full bg-wa px-6 py-3.5 font-semibold text-white transition-colors hover:bg-wa-oscuro"
    >
      <MessageCircle size={20} aria-hidden />
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-grafito">{children}</p>;
}

export default function Home() {
  const local = site.local;
  const mapaListo = local && !esPendiente(local.mapsQuery);
  const anio = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.nombre,
    url: site.dominio,
    description: site.descripcion,
    sameAs: [site.instagram],
    ...(local && !esPendiente(local.direccion)
      ? { address: { "@type": "PostalAddress", streetAddress: local.direccion, addressCountry: "AR" } }
      : {}),
  };

  return (
    <>
      <Header />

      <main id="inicio">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-12 pb-6 sm:px-6 sm:pt-16">
          <Eyebrow>Tienda online · Envíos a todo el país</Eyebrow>
          <h1 className="display max-w-5xl text-[clamp(2.4rem,6.2vw,5.25rem)] font-black">
            Tu próximo iPhone,{" "}
            <span className="text-grafito">a un mensaje de distancia.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-grafito">
            iPhone, Mac, iPad, Apple Watch y accesorios con atención personalizada. Escribinos y te pasamos stock,
            precios y cuotas del día.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BotonWhatsApp>Escribinos por WhatsApp</BotonWhatsApp>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-tinta px-6 py-3.5 font-semibold transition-colors hover:bg-tinta hover:text-papel"
            >
              Ver promos en Instagram
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </div>
        </section>

        <Cintas />

        {/* Productos */}
        <section id="productos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="display text-[clamp(2rem,5vw,3.5rem)] font-black">
            Qué tenemos. <span className="text-grafito">Y qué te conseguimos.</span>
          </h2>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {CATEGORIAS.map(({ nombre, Ilustracion, foto }) => (
              <li key={nombre}>
                <a
                  href={linkWhatsApp(`¡Hola iManzana! Quiero consultar por ${nombre}.`)}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col rounded-3xl bg-niebla p-4 transition-colors hover:bg-linea sm:p-6"
                >
                  <span className="relative block aspect-square">
                    {foto ? (
                      <Image src={foto} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain" />
                    ) : (
                      <Ilustracion className="size-full transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1.5 motion-safe:group-hover:scale-[1.03]" />
                    )}
                  </span>
                  <span className="display mt-2 text-xl font-black sm:text-2xl">{nombre}</span>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-grafito group-hover:text-tinta">
                    Consultar <ArrowUpRight size={16} aria-hidden />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 md:grid-cols-2">
            <a
              href={linkWhatsApp("¡Hola iManzana! Quiero consultar por accesorios.")}
              target="_blank"
              rel="noopener"
              className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl bg-tinta p-8 text-papel sm:p-10"
            >
              <span
                aria-hidden
                className="display contorno pointer-events-none absolute -right-4 -bottom-6 text-[6.5rem] font-black opacity-25 select-none"
              >
                Accesorios
              </span>
              <span className="relative">
                <span className="display block text-2xl font-black sm:text-3xl">Accesorios</span>
                <span className="mt-2 block max-w-xs text-papel/70">Fundas, vidrios templados, cargadores, cables y AirPods.</span>
              </span>
              <span className="relative inline-flex items-center gap-2 font-semibold">
                Consultar accesorios <ArrowUpRight size={18} aria-hidden />
              </span>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener"
              className="flex flex-col justify-between gap-6 rounded-3xl border border-linea p-8 transition-colors hover:border-tinta sm:p-10"
            >
              <span>
                <span className="display block text-2xl font-black sm:text-3xl">Promos de la semana</span>
                <span className="mt-2 block max-w-xs text-grafito">Todas las semanas hay ofertas nuevas. Las publicamos primero en Instagram.</span>
              </span>
              <span className="inline-flex items-center gap-2 font-semibold">
                @store.imanzana <ArrowUpRight size={18} aria-hidden />
              </span>
            </a>
          </div>
        </section>

        {/* Cómo comprar: los pasos son una secuencia real, por eso van numerados. */}
        <section id="como-comprar" className="border-y border-linea bg-niebla">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <h2 className="display text-[clamp(2rem,5vw,3.5rem)] font-black">Cómo comprar.</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {PASOS.map((paso, i) => (
                <li key={paso.titulo} className="border-t-2 border-tinta pt-6">
                  <span className="display text-5xl font-black text-grafito/40">{i + 1}</span>
                  <h3 className="display mt-4 text-2xl font-black">{paso.titulo}</h3>
                  <p className="mt-3 text-grafito">{paso.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* El local */}
        {local && (
          <section id="local" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-start">
              <div>
                <h2 className="display text-[clamp(2rem,5vw,3.5rem)] font-black">
                  Vení a verlo. <span className="text-grafito">En persona.</span>
                </h2>
                <p className="mt-8 flex items-start gap-3 text-lg">
                  <MapPin className="mt-1 shrink-0" size={20} aria-hidden />
                  <span>
                    {mostrar(local.direccion)}
                    <span className="block text-grafito">{mostrar(local.barrio)}</span>
                  </span>
                </p>
                <dl className="mt-8 divide-y divide-linea border-y border-linea">
                  {local.horarios.map((h) => (
                    <div key={h.dias} className="flex justify-between gap-4 py-3">
                      <dt className="text-grafito">{h.dias}</dt>
                      <dd className="font-semibold">{mostrar(h.horas)}</dd>
                    </div>
                  ))}
                </dl>
                {mapaListo && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local.mapsQuery)}`}
                    target="_blank"
                    rel="noopener"
                    className="mt-8 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
                  >
                    Cómo llegar <ArrowUpRight size={18} aria-hidden />
                  </a>
                )}
              </div>
              {mapaListo ? (
                <iframe
                  title={`Mapa de ${site.nombre}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(local.mapsQuery)}&output=embed`}
                  className="aspect-[4/3] w-full rounded-3xl border border-linea"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="grid aspect-[4/3] w-full place-items-center rounded-3xl bg-niebla p-8 text-center text-grafito">
                  El mapa aparece cuando se confirme la dirección del local.
                </div>
              )}
            </div>
          </section>
        )}

        {/* Contacto */}
        <section id="contacto" className="bg-tinta text-papel">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <h2 className="display max-w-4xl text-[clamp(2.2rem,6vw,4.75rem)] font-black">
              ¿Qué estás buscando? <span className="text-papel/50">Preguntanos.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <BotonWhatsApp>Escribinos por WhatsApp</BotonWhatsApp>
            </div>
            <ul className="mt-12 flex flex-col gap-4 text-lg sm:flex-row sm:gap-10">
              <li>
                <a href={site.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                  <Instagram size={20} aria-hidden /> @store.imanzana
                </a>
              </li>
              {!esPendiente(site.email) && (
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                    <Mail size={20} aria-hidden /> {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-tinta text-papel/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-papel/15 px-4 py-10 text-sm sm:px-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <span className="block text-papel">
              <Logo variante="oscuro" />
            </span>
            <p>
              © {anio} {esPendiente(site.legal.razonSocial) ? site.nombre : site.legal.razonSocial}
              {!esPendiente(site.legal.cuit) && ` · CUIT ${site.legal.cuit}`}
            </p>
          </div>
          <p className="max-w-md md:text-right">
            iPhone, AirPods y Apple son marcas de Apple Inc. {site.nombre} es un comercio independiente, no afiliado a Apple.
          </p>
        </div>
      </footer>

      {/* WhatsApp siempre a mano en el celular */}
      <a
        href={linkWhatsApp()}
        target="_blank"
        rel="noopener"
        aria-label="Escribinos por WhatsApp"
        className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-wa text-white shadow-lg transition-colors hover:bg-wa-oscuro md:hidden"
      >
        <MessageCircle size={26} aria-hidden />
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
