# Validación independiente GPT medium — Punto 1

**Resultado: APROBADO.** Fecha: 2026-10-06. Grok implementó; GPT medium realizó esta validación independiente, sin editar código ni ejecutar commit, push, deploy, merge o cambios de rama.

## Versión y alcance

Worktree: `/Users/max/orca/workspaces/blinktrip/punto-1-oferta-precio`.
Rama: `m2hewitt/punto-1-oferta-precio`. HEAD y base: `c7ddb6f5c7faa8a2763ae87e16044c795e148454`; implementación sin commit. Assets CSS/preload/JS: `v=20261006a`, nueva y coherente.

Archivos revisados: `public/index.html`, `public/landing-china-v3.css`, `public/landing-china-v3.js`, `cambios/punto-1-oferta-precio.md`. Leí las instrucciones AGENTS.md aportadas en el encargo y `/Users/max/.codex/RTK.md`; no encontré otro AGENTS.md en los directorios ascendentes revisados. Usé FFF multi_grep para PRODUCTS/WA_MESSAGE/heroDKI y lecturas acotadas del checkout. Las declaraciones del implementador no se usaron como evidencia de aceptación.

## Comandos y evidencia

- `rtk proxy node --check public/landing-china-v3.js`: exit 0, sin errores (ejecutado nuevamente al cierre).
- `rtk proxy git diff --check`: exit 0, sin errores.
- `rtk proxy git diff c7ddb6f5c7faa8a2763ae87e16044c795e148454 -- public/index.html public/landing-china-v3.css public/landing-china-v3.js`: revisado completo; solo adiciones de oferta, subtítulo condicional, overlay condicional y versiones de assets.
- Comparación programática: al retirar exclusivamente la función añadida del JS, el archivo es idéntico byte a byte a la base. Por ello PRODUCTS, COMMON, fechas/cupos, Feria, mapas, tarjetas, reseñas, WA_NUMBER, WA_MESSAGE, prefijo [ACH], eventos, btTrack/ATTR_KEYS y lógica posterior permanecen intactos.
- Todos los href estáticos existentes son idénticos a la base, salvo la versión CSS requerida; los href de enlaces renderizados coinciden también en las comparaciones DOM. GTM/GA4 y etiquetas externas no tienen cambios en el diff.
- No se añadieron recursos externos, dependencias, animaciones, listeners o elementos interactivos en la oferta. Tipografía y colores usan las reglas y variables existentes.

## Navegador local

Superficie: Orca embedded browser, Chromium 150, pestaña propia `0b1dad05-8322-48f5-87fc-0f9efd2fd8c7`, siempre dirigida mediante `--page`. Leí `orca-cli` y `references/browser.md` antes de operar. Servidores propios Python en 127.0.0.1:8765 (cambio) y :8766 (copia temporal de public con los tres archivos de la base obtenidos mediante git show), sin depender del sitio publicado.

Se fijó `set viewport` después de cada navegación porque Orca restaura su tamaño al navegar. `innerWidth`/`innerHeight` se comprobaron en cada observación; deviceScaleFactor 1, mobile false: se valida responsive a tamaños móviles reales de viewport, no emulación de hardware ni gestos táctiles. Se inspeccionaron visualmente las capturas de oferta a 360×740, 390×844 y 1280×900; texto y geometría completos se midieron por DOM.

## Matriz observada

| Variante | 360×740 | 390×844 | 1280×900 |
|---|---|---|---|
| `?ag=precio` | Oferta completa | Oferta completa | Oferta completa |
| `?ag=PRECIO` | Oferta completa | Oferta completa | Oferta completa |
| `?ag=%20precio%20` | Oferta completa | Oferta completa | Oferta completa |
| Sin ag | Oculta / igual base | Oculta / igual base | Oculta / igual base |
| `?ag=tour` | Oculta / igual base | Oculta / igual base | Oculta / igual base |
| `?ag=turismo` | Oculta / igual base | Oculta / igual base | Oculta / igual base |
| `?ag=desconocido` | Oculta / igual base | Oculta / igual base | Oculta / igual base |

33 observaciones: 21 del cambio y 12 de la base. Las 12 comparaciones no-precio coinciden exactamente en textos del hero, badge migratorio, itinerarios, Feria, acompañadas y footer; enlaces renderizados y geometría/CSS calculado del hero, imagen, H1, subtítulo, badge, acciones, primer CTA e itinerarios. En las 33 observaciones scrollWidth = innerWidth, sin overflow horizontal. La oferta no es botón y contiene cero enlaces/botones.

Las nueve observaciones precio muestran exactamente: «Recorrido base · China esencial express», «Desde USD 3.269», «por persona», «Vuelos internacionales incluidos», «5 noches · Habitación doble», «Precio de referencia sujeto a confirmación». La foto conserva su tamaño; el overlay duplicado desaparece solo con precio. La tarifa se contextualiza como Express y no se generaliza a Feria ni a los demás circuitos.

## Geometría de oferta y CTA (px)

| Viewport | Oferta y / bottom | Primer CTA y | Precio font-size | Nota font-size | Foto ancho × alto |
|---|---|---|---|---|---|
| 360×740 | 360.61 / 479.84 | 547.45 | 27.2px | 12.48px | 328.00 × 218.66 |
| 390×844 | 360.61 / 479.94 | 547.55 | 27.3px | 12.48px | 358.00 × 238.66 |
| 1280×900 | 457.30 / 587.95 | 640.95 | 37.6px | 12.48px | 630.73 × 486.39 |

Todos los campos medidos están dentro del ancho del viewport y no tienen contenedores con recorte. Precio dominante respecto de las condiciones; las condiciones completas son legibles en las capturas. El bloque queda íntegramente encima del CTA, también dentro del primer viewport en los tres tamaños.

No se modificaron reglas de dimensiones/padding del hero ni de foto. Como efecto natural de insertar contenido, la altura del hero precio pasa de 820.95 a 950.56 px (360), de 840.95 a 970.66 px (390), y de 658.39 a 764.47 px (1280); la foto conserva exactamente ancho/alto frente a la base precio. Se interpreta la restricción de dimensiones como prohibición de redimensionar/rediseñar hero/foto, compatible con la adición autorizada del bloque; se explicita el crecimiento natural para revisión del coordinador.

## Navegación, consola y assets

Se navegó localmente con parámetro y sin él. «Ver itinerarios» tiene href #itinerarios, idéntico a la base. El comando click por ref de Orca devolvió éxito sin activar el enlace; se comprobó mediante activación DOM del enlace, sin tocar WhatsApp, y medición posterior a la animación existente: con precio URL `?ag=precio#itinerarios`, scrollY 927, heading y 98.91; sin ag URL `/#itinerarios`, scrollY 831, heading y 99.39. La lectura inmediata durante el smooth scroll devolvía 0; los resultados finales fueron observados en llamadas posteriores independientes.

Href WhatsApp inspeccionado sin pulsar: `https://wa.me/5491166036714?text=...`; mensaje decodificado: `[ACH] ¡Hola BlinkTrip! Quiero armar un viaje personalizado a China y me gustaría recibir una propuesta según fechas y disponibilidad.` No se contactó el número ni se generaron clics de conversión de WhatsApp.

Consola: cero mensajes type=error en las observaciones. Advertencias existentes sobre localhost, Meta pixel y Hotjar/HTTPS aparecen también al usar la base; no atribuibles a esta adición. Todos los assets locales solicitados observados mediante Resource Timing responseStatus dieron 200, incluidos CSS y JS versionados; no se observaron 404. No se fuerza descarga de toda imagen lazy: el control cubre requests efectivamente emitidos y los recursos modificados.

## Capturas y datos reproducibles

Directorio absoluto: `/tmp/blinktrip-point1-validation/`. Los archivos `changed-*` y `base-*` son capturas de viewport; no full-page. Capturas principales inspeccionadas:

- `/tmp/blinktrip-point1-validation/changed-precio-360x740.png`
- `/tmp/blinktrip-point1-validation/changed-precio-390x844.png`
- `/tmp/blinktrip-point1-validation/changed-precio-1280x900.png`
- `/tmp/blinktrip-point1-validation/base-default-1280x900.png`
- `/tmp/blinktrip-point1-validation/navigation-precio-observed-360x740.png`

Capturas de otras variantes y tamaños (base/cambio):

- `/tmp/blinktrip-point1-validation/base-default-1280x900.png`
- `/tmp/blinktrip-point1-validation/base-default-360x740.png`
- `/tmp/blinktrip-point1-validation/base-default-390x844.png`
- `/tmp/blinktrip-point1-validation/base-desconocido-1280x900.png`
- `/tmp/blinktrip-point1-validation/base-desconocido-360x740.png`
- `/tmp/blinktrip-point1-validation/base-desconocido-390x844.png`
- `/tmp/blinktrip-point1-validation/base-tour-1280x900.png`
- `/tmp/blinktrip-point1-validation/base-tour-360x740.png`
- `/tmp/blinktrip-point1-validation/base-tour-390x844.png`
- `/tmp/blinktrip-point1-validation/base-turismo-1280x900.png`
- `/tmp/blinktrip-point1-validation/base-turismo-360x740.png`
- `/tmp/blinktrip-point1-validation/base-turismo-390x844.png`
- `/tmp/blinktrip-point1-validation/changed-default-1280x900.png`
- `/tmp/blinktrip-point1-validation/changed-default-360x740.png`
- `/tmp/blinktrip-point1-validation/changed-default-390x844.png`
- `/tmp/blinktrip-point1-validation/changed-desconocido-1280x900.png`
- `/tmp/blinktrip-point1-validation/changed-desconocido-360x740.png`
- `/tmp/blinktrip-point1-validation/changed-desconocido-390x844.png`
- `/tmp/blinktrip-point1-validation/changed-tour-1280x900.png`
- `/tmp/blinktrip-point1-validation/changed-tour-360x740.png`
- `/tmp/blinktrip-point1-validation/changed-tour-390x844.png`
- `/tmp/blinktrip-point1-validation/changed-turismo-1280x900.png`
- `/tmp/blinktrip-point1-validation/changed-turismo-360x740.png`
- `/tmp/blinktrip-point1-validation/changed-turismo-390x844.png`

Datos: `/tmp/blinktrip-point1-validation/observations.json`, `base-precio.json`, `navigation-precio-observed.json`; scripts de QA temporales en el mismo directorio, sin tests añadidos al repositorio.

## Defectos y riesgo residual

No encontré defectos materiales que requieran correcciones de Grok. Las líneas revisadas de implementación son index.html:193 (bloque), :233 (overlay), CSS:291 (reglas condicionales/oferta), :443 (overlay), JS:1234 (función), :1245 (lectura posterior a PRODUCTS).

La validación cubre implementación local y responsive en Chromium, no todos los motores, hardware móvil, gestos táctiles, rendimiento o conversión comercial. No se inventaron LCP/INP/CLS ni porcentajes de mejora. La tarifa y condiciones se contrastan con el catálogo vigente del repositorio, sin auditar proveedores externos. No hay pendientes materiales de punto 1 bajo el alcance observado.

## Identidad exacta de fuente validada (SHA-256)

- `public/index.html`: `cfe707f75f01c21a6c1cf1791c2b7f80a374a393c66a514e684a1bd2b6d3b64d`
- `public/landing-china-v3.css`: `cee307b2c98a1bb3c7b1e0ab3ca1a769e0cbdd36c0b0ad62685409b9cefd9d83`
- `public/landing-china-v3.js`: `1168fdd60b9cbc9a554b09149b2b7bc0383fef1c43f7eb7e7601c4c0974ff712`

## Cierre

Se cerró únicamente la pestaña propia y se detuvieron los dos servidores iniciados por QA (sesiones 22881 y 30191, salida 130 por Ctrl+C). Los SHA-256 de los tres fuentes al cierre coinciden con los revisados. Documentación editada por GPT: este informe y solo las notas de estado/rollback de `cambios/punto-1-oferta-precio.md`, autorizado por follow-up del coordinador. La carpeta cambios está excluida del status Git ordinario; los documentos existen en disco y el coordinador deberá incluirlos explícitamente si desea versionarlos.
