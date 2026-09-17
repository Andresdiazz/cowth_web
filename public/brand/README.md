# Kit de marca Cowth

Archivos listos para redes, prensa y presentaciones. Todo sale del mismo logo que usa el
sitio: **Sora ExtraBold**, `letter-spacing: -0.04em`, con el punto verde separado `0.12em`.

En los SVG el texto está **convertido a curvas**, así que se abren igual en cualquier
ordenador aunque no tenga Sora instalada, y no se pixelan a ningún tamaño.

## Colores

| Uso              | Hex       |
| ---------------- | --------- |
| Fondo / tinta    | `#0A0A0A` |
| Texto del logo   | `#FAFAFA` |
| Verde de acento  | `#22E38A` |

## Qué usar en cada caso

### Logo (el del sitio: wordmark + punto)

| Archivo                       | Cuándo usarlo                                        |
| ----------------------------- | ---------------------------------------------------- |
| `cowth-logo.*`                | Sobre fondos oscuros. Fondo transparente.             |
| `cowth-logo-fondo-negro.*`    | Cuando necesitas el logo ya montado sobre negro.      |
| `cowth-logo-oscuro.*`         | Sobre fondos **claros** (el crema desaparece en blanco). |

### Ícono (la "c" con el punto)

| Archivo                        | Cuándo usarlo                          |
| ------------------------------ | -------------------------------------- |
| `cowth-icono.*`                | Cuadrado, transparente, sobre oscuro.  |
| `cowth-icono-fondo-negro.*`    | Cuadrado con el fondo negro redondeado.|
| `cowth-icono-oscuro.*`         | Cuadrado, transparente, sobre claro.   |

### Foto de perfil

| Archivo                  | Tamaño      | Notas                                              |
| ------------------------ | ----------- | -------------------------------------------------- |
| `cowth-perfil-1080.png`  | 1080 × 1080 | Fondo negro a sangre, sin esquinas redondeadas.     |
| `cowth-perfil-400.png`   | 400 × 400   | El mismo, para donde pidan un archivo más ligero.   |

Son a sangre a propósito: las redes recortan la foto en círculo, y un fondo con esquinas
redondeadas dejaría cuatro muescas. La marca está al 58% del ancho para que sobreviva
entera a ese recorte.

### Lockup horizontal (extra)

`cowth-lockup.*` combina el ícono y el wordmark en una línea. **No existe en el sitio**:
lo añadí porque es el formato que piden las cabeceras de LinkedIn, YouTube o un banner.
Aquí el wordmark va sin punto, porque el acento verde ya lo pone el ícono.

## Formatos

Cada pieza está en `svg/` y en `png/`.

- **SVG** para todo lo que sea imprimible, vectorial o vaya a escalarse: es el original.
- **PNG** a 3000px de ancho (logos) y 1024px (íconos), con transparencia real donde toca.

Si alguien te pide "el logo en alta", manda el SVG. Si el sistema no lo acepta —Instagram,
por ejemplo—, manda el PNG.

## Espacio libre

Deja alrededor del logo un margen mínimo igual a la mitad de su altura. Las versiones
`-fondo-negro` ya lo traen incorporado.

## Cómo se regeneran

Estos archivos no se dibujaron a mano: se generan desde la tipografía para que coincidan
exactamente con el sitio. Si algún día cambia el logo, hay que regenerarlos en vez de
retocarlos, y verificar el resultado contra el render real del navegador.
