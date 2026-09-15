import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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

export default async function OpengraphImage() {
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
          <div style={{ color: "#6E6E6E", fontSize: 24, letterSpacing: 6 }}>
            ECOSISTEMA DE CRECIMIENTO · LATAM
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
            Nadie crece solo
            <span style={{ color: "#22E38A" }}>.</span>
          </div>
          <div style={{ color: "#9B9B9B", fontSize: 34, marginTop: 28 }}>{site.descriptor}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "#FAFAFA", fontSize: 44, fontWeight: 800, letterSpacing: -2, display: "flex" }}>
            cowth
            <span style={{ color: "#22E38A" }}>.</span>
          </div>
          <div style={{ color: "#6E6E6E", fontSize: 26 }}>cowth.co</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: sora ? [{ name: "Sora", data: sora, weight: 800, style: "normal" }] : undefined,
    },
  );
}
