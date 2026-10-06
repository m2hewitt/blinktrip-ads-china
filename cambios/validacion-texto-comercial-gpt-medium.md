# Validación independiente — corrección de texto comercial

Resultado: **APROBADO**. Revisión independiente GPT medium, 2026-10-06, exclusivamente de la eliminación de financiación; no se repiten las 33 observaciones del bloque anterior aprobado.

## Alcance y fuente

- Checkout: `/Users/max/orca/workspaces/blinktrip/punto-1-oferta-precio`.
- Rama comprobada: `m2hewitt/punto-1-oferta-precio`.
- Base: `cfab8fe42e2cfcba9c84fe59b54ae5c5b2a7a3f0`.
- Diff completo respecto de la base inspeccionado: dos cadenas de JS, cache-buster del script HTML y una cita actualizada en `cambios/punto-1-oferta-precio.md`; el documento nuevo de corrección está ignorado por Git y se leyó por separado.
- No se editaron fuentes, historial de QA, rama ni índice; no se ejecutaron commit, push, merge, deploy ni contactos.

## Comandos y resultados

Todos los comandos de revisión, tras leer RTK, se ejecutaron con prefijo `rtk`; se usó `rtk proxy` para conservar resultados completos.

```sh
rtk proxy git branch --show-current
rtk proxy git diff --no-ext-diff cfab8fe42e2cfcba9c84fe59b54ae5c5b2a7a3f0
rtk proxy rg -n -i 'financi|financing|cuotas|pago.{0,30}fin|fin.{0,30}pago' public/
rtk proxy rg -n -i --hidden --no-ignore 'financi|financing|cuotas|pago.{0,30}fin|fin.{0,30}pago|installments|credit|crédito|mensualidades|sin inter[eé]s' public/
rtk proxy node --check public/landing-china-v3.js
rtk proxy git diff --check
```

Primera búsqueda: cero coincidencias (exit 1 esperado). La búsqueda ampliada incluyó todo `public/`, incluso archivos ignorados y metadatos: solo «Créditos de imágenes nuevas» en `public/img/CREDITS.md`, atribución de imágenes y no una oferta de crédito. Se inspeccionaron HTML, JSON embebido, JS, CSS, catálogo y demás archivos servidos; no quedan financiación/financiamiento/financing ni promesas de cuotas o pago financiado. Los documentos internos históricos no se consideran contenido de landing ni se reescribieron.

`node --check` y `git diff --check`: exit 0 sin salida. Comparación exacta mediante Python y `git show <base>:<archivo>`: JS igual a la base tras quitar únicamente los dos paréntesis «(consultá las opciones de financiación)»; HTML igual a la base cambiando únicamente `landing-china-v3.js?v=20261006a` a `20261006b`; CSS byte a byte idéntico, versión `20261006a` conservada.

Esto prueba que `WA_NUMBER`, `WA_MESSAGE`, construcción de href, eventos, GA4/GTM, catálogo, USD 3269 Express, vuelos, 5 noches, habitación doble y precio de referencia permanecen intactos. Ambas cadenas nuevas son naturales y solo eliminan la promesa anterior:

- `heroDKI`: «Precio de referencia desde USD 3.269. Un asesor arma tu presupuesto según fechas, duración y destinos.»
- `revealPrecioHeroOffer`: «Precio de referencia. Un asesor arma tu presupuesto según fechas, duración y destinos.»

No se agregó una promesa comercial sustituta.

## Browser local

Orca embedded, página propia `444c5eec-781d-47dd-80d6-5187ed0ffece`, servidor estático propio `http://127.0.0.1:8769/` con `python3 -m http.server 8769 --bind 127.0.0.1 --directory public`. Se leyeron las habilidades `orca-cli`, `orchestration` y `references/browser.md` del binario antes de operar.

Secuencia por caso: `orca goto --url <URL>`, `orca exec --command 'set viewport <ancho> <alto>'`, `orca eval` de dimensiones reales, texto, rectángulos, href y Performance Resource Timing, `orca snapshot`, `orca screenshot` y `orca console --limit 50`, siempre con `--page <id> --json` y prefijo RTK. Capturas decodificadas a PNG local y revisadas visualmente. Se corrigió una primera ronda en la que navegar restablecía las dimensiones de escritorio: las evidencias finales verifican `innerWidth/innerHeight` después de navegar y ajustar viewport.

| URL | Viewport real | Texto/Oferta | CTA y recortes | JS nuevo |
|---|---|---|---|---|
| `/?ag=precio` | 360×740 | Precio corregido, Express visible | Íntegros, sin overflow horizontal | 200 |
| `/?ag=precio` | 390×844 | Precio corregido, Express visible | Íntegros, sin overflow horizontal | 200 |
| `/?ag=PRECIO` | 360×740 | Precio corregido, Express visible | Íntegros, sin overflow horizontal | 200 |
| `/?ag=%20precio%20` | 360×740 | Precio corregido, Express visible | Íntegros, sin overflow horizontal | 200 |
| `/` | 390×844 | Variante original, Express hero oculto | Íntegros, sin overflow horizontal | 200 |
| `/?ag=tour` | 390×844 | Variante original, Express hero oculto | Íntegros, sin overflow horizontal | 200 |
| `/?ag=turismo` | 390×844 | Variante original, Express hero oculto | Íntegros, sin overflow horizontal | 200 |

En Precio, oferta completa «Desde USD 3.269», «por persona», «Vuelos internacionales incluidos», «5 noches · Habitación doble» y «Precio de referencia sujeto a confirmación». A 360, oferta x=16, ancho=328, borde inferior≈455; CTA x=16, ancho=328, borde inferior≈570 (viewport 740). A 390, oferta ancho=358 y CTA borde inferior≈570 (viewport 844). Sin recortes ni desbordes. No se exige mantener la altura anterior al píxel: el texto eliminado reduce naturalmente su altura.

Las tres variantes restantes conservaron los H1/subtítulos originales y overlay previo: sin ag «Paquetes personalizados a China desde Argentina»; tour «Tours a China organizados desde Argentina»; turismo «Viajá a los lugares imperdibles de China desde Argentina». Los datos completos y snapshots contienen los subtítulos conservados.

En los siete casos: búsqueda sobre `document.body.innerText` sin términos de financiación/cuotas; JS `landing-china-v3.js?v=20261006b` y CSS `20261006a` respondieron 200 en Resource Timing; consola sin entradas tipo error. Advertencias preexistentes de Hotjar sobre HTTP, eventos localhost y permisos de Meta Pixel; no son errores atribuibles al copy.

Se inspeccionaron los href sin pulsar ningún CTA ni abrir WhatsApp. Todos conservaron el mismo número y mensaje:

```text
https://wa.me/5491166036714?text=%5BACH%5D%20%C2%A1Hola%20BlinkTrip!%20Quiero%20armar%20un%20viaje%20personalizado%20a%20China%20y%20me%20gustar%C3%ADa%20recibir%20una%20propuesta%20seg%C3%BAn%20fechas%20y%20disponibilidad.
```

## Huellas SHA256

- `public/index.html`: `a9c491b54aae8ccddaac0ad9b07d478854652192120ae6745d9744015d8f9f27`
- `public/landing-china-v3.js`: `6a3dd7276fa8f08e56514b9553d52076b18bfb49aed0ccddd5b5b2a1b0cc9b45`
- `public/landing-china-v3.css`: `cee307b2c98a1bb3c7b1e0ab3ca1a769e0cbdd36c0b0ad62685409b9cefd9d83`

## Evidencia y límites

Capturas, snapshots, datos DOM/recursos y consola de cada caso en `/tmp/blinktrip-copy-correction-validation/`, agrupados por `precio-360`, `precio-390`, `PRECIO-360`, `trim-precio-360`, `default-390`, `tour-390` y `turismo-390`; resumen `all-results.json`, comparación `source-verification.txt`. Son datos temporales; este informe es la evidencia durable.

Revisión proporcional al copy; sin tests nuevos ni auditoría repetida de los otros 33 puntos. Validación local con viewport Chromium, no dispositivo físico ni producción. No se verificó una publicación ni se inició servicio/contacto comercial; los scripts de analítica existentes se ejecutan automáticamente al cargar la landing local. La primera consulta DOM tuvo un selector mal escrito por el revisor, corregido antes de recoger evidencia; no corresponde a un error del producto.

El revisor cierra su pestaña y servidor al concluir; no deja servicios propios activos. No hay defectos materiales pendientes. El coordinador puede preparar el commit separado; no se publicó nada. Revertir esa futura corrección restauraría las menciones comerciales no ofrecidas, por lo que cualquier rollback de esa clase debe volver a revisión antes de publicar.
