# iManzana Store

Web de iManzana Store (Catamarca): iPhone, Mac, iPad, Apple Watch y accesorios,
con consultas por WhatsApp. Next.js 15 + Tailwind CSS 4, sin backend.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build
```

## Dónde se cambia cada cosa

- **Datos del negocio** (WhatsApp, dirección, horarios, email, razón social):
  `src/config/site.ts`. Lo que todavía no está confirmado se ve en la página
  como "A confirmar". Si `local` es `null`, la sección del local no aparece.
- **Logo**: `src/components/Logo.tsx`. Las versiones sueltas (SVG y PNG para
  redes) están en `public/marca/` y en la página interna `/marca`, que no se
  indexa. Si cambia la forma, actualizar también `src/app/icon.svg`.
- **Categorías de productos**: `CATEGORIAS` en `src/app/page.tsx`. Cada una
  usa una ilustración propia; con una foto propia en `public/productos/` se
  reemplaza agregando `foto: "/productos/archivo.png"`.

## Producción

Imagen Docker con el servidor standalone de Next (`Dockerfile`), pensada para
Easypanel. Expone el puerto 3000.

```bash
docker build -t imanzanastore .
docker run -p 3000:3000 imanzanastore
```
