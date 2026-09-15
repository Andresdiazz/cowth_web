# Cowth — sitio oficial

Landing de marca y captación para Cowth. _Nadie crece solo._

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · sin dependencias extra.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

Otros comandos: `npm run build` (build de producción), `npm start` (servir el build),
`npm run lint`.

## Qué tocar primero

| Quiero cambiar…                    | Archivo                                       |
| ---------------------------------- | --------------------------------------------- |
| Correo, enlace de Calendly, redes  | `lib/site.ts`                                  |
| Copy de una sección                | `components/sections/<Sección>.tsx`            |
| Logo (PNG/SVG)                     | `public/logo/` + `components/ui/Logo.tsx`      |
| Colores y tipografía               | `app/globals.css` (bloque `@theme`)            |
| Destino de los formularios         | variable `NEXT_PUBLIC_LEAD_ENDPOINT`           |

### Conectar los formularios

Los formularios de Academy y Community validan y muestran estado de éxito en modo demo
mientras no haya endpoint. Para conectarlos, copia `.env.example` a `.env.local` y define:

```bash
NEXT_PUBLIC_LEAD_ENDPOINT="https://formspree.io/f/xxxxxxx"
```

Toda la integración vive en `lib/leads.ts`; no hay que tocar los componentes.

### Logo

Mientras `public/logo/` esté vacío, el sitio renderiza el wordmark tipográfico "cowth"
en Sora extrabold con el punto verde. Ver `public/logo/README.md` para activar los
archivos de imagen.

## Desplegar en Vercel

1. Sube el repo a GitHub:
   ```bash
   git add -A && git commit -m "Sitio Cowth v1"
   git remote add origin https://github.com/<usuario>/cowth-web.git
   git push -u origin main
   ```
2. En [vercel.com/new](https://vercel.com/new) importa el repositorio. Vercel detecta
   Next.js solo: no cambies build command ni output directory.
3. Si ya tienes endpoint de formularios, añádelo en **Settings → Environment Variables**
   como `NEXT_PUBLIC_LEAD_ENDPOINT` (Production y Preview).
4. Deploy. Cada push a `main` publica automáticamente.
5. Dominio: **Settings → Domains → Add** `cowth.co`, y apunta el DNS según indique Vercel.
6. Después de conectar el dominio, verifica que `url` en `lib/site.ts` sea el definitivo:
   de ahí salen las URLs canónicas, el sitemap y las Open Graph.

Alternativa por CLI: `npx vercel` (preview) y `npx vercel --prod` (producción).
