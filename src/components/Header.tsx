"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Logo } from "./Logo";

const SECCIONES = [
  { href: "#productos", label: "Productos" },
  { href: "#como-comprar", label: "Cómo comprar" },
  ...(site.local ? [{ href: "#local", label: "El local" }] : []),
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-linea bg-papel/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="iManzana Store, inicio" onClick={() => setAbierto(false)}>
          <Logo compacto />
        </a>

        <nav aria-label="Secciones" className="hidden items-center gap-8 text-sm font-medium md:flex">
          {SECCIONES.map((s) => (
            <a key={s.href} href={s.href} className="text-grafito transition-colors hover:text-tinta">
              {s.label}
            </a>
          ))}
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-tinta px-4 py-2 text-papel transition-colors hover:bg-tinta/80"
          >
            Escribinos
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={abierto}
          aria-controls="menu-mobile"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {abierto && (
        <nav id="menu-mobile" aria-label="Secciones" className="border-t border-linea px-4 pb-6 md:hidden">
          {SECCIONES.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setAbierto(false)}
              className="display block border-b border-linea py-4 text-2xl font-extrabold"
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
