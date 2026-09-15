import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : "es";
  const dict = getDictionary(lang);

  return [{ id: lang, size, contentType, alt: `${site.name} — ${dict.meta.ogDescriptor}` }];
}

/** Sora extrabold para que la OG use la tipografía de marca; si falla la red, ImageResponse usa su fuente por defecto. */
async function loadSora(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((res) => res.text());

    const url = css.match(/src: url\((https:\/\/[^)]+\.(?:woff2?|ttf))\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : "es";
  const dict = getDictionary(lang);
  const sora = await loadSora();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "80px",
          fontFamily: sora ? "Sora" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#22E38A" }} />
          <div style={{ color: "#8A8A8A", fontSize: 24, letterSpacing: 6 }}>
            {dict.meta.ogEyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#FAFAFA",
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 1,
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {dict.meta.ogTitle}
            <span style={{ color: "#22E38A" }}>.</span>
          </div>
          <div style={{ color: "#A8A8A8", fontSize: 34, marginTop: 28 }}>
            {dict.meta.ogDescriptor}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              color: "#FAFAFA",
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: -2,
              display: "flex",
            }}
          >
            cowth
            <span style={{ color: "#22E38A" }}>.</span>
          </div>
          <div style={{ color: "#8A8A8A", fontSize: 26 }}>cowth.co</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: sora ? [{ name: "Sora", data: sora, weight: 800, style: "normal" }] : undefined,
    },
  );
}
