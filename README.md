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
| Cualquier texto del sitio          | `lib/dictionaries/es.ts` y `lib/dictionaries/en.ts` |
| Maquetación de una sección         | `components/sections/<Sección>.tsx`            |
| Logo (PNG/SVG)                     | `public/logo/` + `components/ui/Logo.tsx`      |
| Colores y tipografía               | `app/globals.css` (bloque `@theme`)            |
| Precios y copy de Cowth Lab        | `lib/dictionaries/es.ts` / `en.ts` → `labPage` |
| Destino de los leads (Systeme.io)  | variables `SYSTEME_API_KEY` / `SYSTEME_TAG_ID_*` |
| Número de WhatsApp                 | `lib/site.ts` → `whatsapp.number`              |

## Español e inglés

El sitio vive en dos rutas: `/es` (por defecto, `cowth.co` redirige ahí) y `/en`, con un
selector en el navbar. Cada idioma es una URL propia con su canonical y sus `hreflang`,
así que Google indexa las dos y un cliente de USA puede llegar directo a la versión en
inglés.

Todo el copy está en `lib/dictionaries/`. `es.ts` es la fuente de verdad: define la forma
del diccionario, y TypeScript falla el build si `en.ts` deja de tener exactamente las
mismas claves. Es decir, **no se puede olvidar traducir algo**: si añades un texto en
español, el build no pasa hasta que exista su versión en inglés.

Las secciones no llevan texto escrito dentro; reciben `dict` como prop desde
`app/[lang]/page.tsx`. Para añadir un idioma: crea el diccionario, agrégalo a
`locales` en `lib/i18n.ts` y listo, las rutas y el sitemap se generan solos.

### Cowth Lab (`/lab`) y captura de leads con Systeme.io

Landing dedicada del estudio de tecnología, con precios siempre visibles. Vive en
`/es/lab` y `/en/lab` (y `/lab` a secas redirige a `/es/lab`).

**Modo pauta**: `/lab?src=ads` oculta el header, el footer y el botón flotante de
WhatsApp, y deja un único CTA ("Ver precios"). Los parámetros `utm_source`,
`utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `fbclid` y `src` que
traiga la URL se leen en `app/[lang]/lab/page.tsx` y viajan hasta el envío del
formulario. Para probarlo:

```
http://localhost:3000/es/lab?src=ads&utm_source=facebook&utm_campaign=lanzamiento
```

**Todos los leads del sitio** (Academy, Community, Lab, y la lista de espera del Kit en
`/kit-90-dias`) pasan por la ruta interna `app/api/lead/route.ts`, que reenvía a
Systeme.io desde el servidor (`lib/systeme.ts`) usando la API key con el header
`X-API-Key`. La key nunca llega al navegador.

Para activarlo:

1. Copia `.env.example` a `.env.local`.
2. En tu cuenta de Systeme.io, genera una key en **Perfil → Public API keys** y ponla en
   `SYSTEME_API_KEY`.
3. Crea un tag por origen (**Contacts → Tags**: Academy, Community, Lab, Kit-waitlist) y
   copia el ID numérico de cada uno en `SYSTEME_TAG_ID_ACADEMY`, `SYSTEME_TAG_ID_COMMUNITY`,
   `SYSTEME_TAG_ID_LAB` y `SYSTEME_TAG_ID_KIT`.

Sin `SYSTEME_API_KEY`, `/api/lead` responde en modo demo: valida y muestra éxito, pero no
guarda el lead en ningún lado — así la UI es revisable sin backend, igual que antes.
`FORMS_ENABLED` en `components/forms/LeadForm.tsx` ya está en `true`.

El número de WhatsApp del botón flotante y del CTA de `/lab` es un placeholder
(`site.whatsapp.number` en `lib/site.ts`): reemplázalo por el real antes de publicar.

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
