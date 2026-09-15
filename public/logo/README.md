# Logos de Cowth

Coloca aquí los archivos de marca:

- `cowth-principal.png` — logo principal
- `cowth-blanco.png` — versión blanca (la que usa el sitio, fondo oscuro)
- `cowth-icono.png` — ícono suelto (favicon / redes)

Para activarlos, edita `components/ui/Logo.tsx` y reemplaza:

```ts
const LOGO_ASSET: { src: string; width: number; height: number } | null = null;
```

por:

```ts
const LOGO_ASSET = { src: "/logo/cowth-blanco.png", width: 420, height: 120 };
```

Cuando tengas los SVG definitivos, basta con cambiar la extensión en esa misma línea.
Mientras el valor sea `null`, el sitio renderiza el wordmark tipográfico "cowth" en Sora
extrabold con el punto verde de acento.
