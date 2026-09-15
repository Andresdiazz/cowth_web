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
| Correo, enlace de agenda, redes    | `lib/site.ts`                                  |
| Copy de una sección                | `components/sections/<Sección>.tsx`            |
| Logo (PNG/SVG)                     | `public/logo/` + `components/ui/Logo.tsx`      |
| Colores y tipografía               | `app/globals.css` (bloque `@theme`)            |
| Destino de los formularios         | variable `NEXT_PUBLIC_LEAD_ENDPOINT`           |

### Activar los formularios

Hoy los formularios de Academy y Community están deliberadamente inactivos: muestran un
estado "Muy pronto" y ofrecen el correo como alternativa, porque todavía no hay dónde
guardar los leads. El flujo completo (validación, envío, estado de éxito) ya está escrito.

Para encenderlos cuando exista Systeme.io:

1. En `components/forms/LeadForm.tsx`, pon `FORMS_ENABLED` en `true`.
2. Copia `.env.example` a `.env.local` y define el endpoint:
   ```bash
   NEXT_PUBLIC_LEAD_ENDPOINT="https://tu-endpoint-de-systeme-o-formspree"
   ```

La integración vive en `lib/leads.ts`; no hay que tocar las secciones.

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
