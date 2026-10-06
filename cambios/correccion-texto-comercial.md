# Corrección — quitar financiación del copy público

## Motivo

No se ofrece financiación. El pedido es quitar esa mención y no hablar de financiación, financiamiento, cuotas ni pago financiado en el contenido que sirve la landing. No se reemplaza por otra promesa comercial.

## Qué se encontró antes de editar

En `public/` (HTML, JS y CSS) las únicas menciones eran dos cadenas de `public/landing-china-v3.js`: el subtítulo inicial de `heroDKI` para `?ag=precio` y el subtítulo que escribe `revealPrecioHeroOffer`. No había otra aparición de financiación ni de cuotas en el HTML, el CSS ni el catálogo. Las palabras «intereses» del HTML y del JS se refieren a intereses de viaje, no a un plan de pago, y se dejaron igual.

`cambios/punto-1-validacion-gpt-medium.md` no cita ese paréntesis. No se modificó: es el historial de evidencia del informe anterior.

## Textos que quedan

- Subtítulo inicial de Precio: «Precio de referencia desde USD 3.269. Un asesor arma tu presupuesto según fechas, duración y destinos.»
- Subtítulo del bloque destacado: «Precio de referencia. Un asesor arma tu presupuesto según fechas, duración y destinos.»

Siguen el precio de referencia, la frase del asesor, los títulos, la oferta Express, `PRODUCTS`, las condiciones, `WA_NUMBER`, `WA_MESSAGE`, los `href`, los eventos, GA4, GTM y el CSS.

## Archivos cambiados

- `public/landing-china-v3.js` — se eliminó «(consultá las opciones de financiación)» en las dos cadenas de Precio.
- `public/index.html` — solo el script pasó de `landing-china-v3.js?v=20261006a` a `landing-china-v3.js?v=20261006b`. El CSS sigue en `?v=20261006a`.
- `cambios/punto-1-oferta-precio.md` — se actualizó únicamente la cita del subtítulo actual del bloque destacado.
- `cambios/correccion-texto-comercial.md` — este documento.

La entrega incluye los dos documentos de esta corrección en el commit separado, aunque coincidan con la regla `*` de `.gitignore`.

## Base

- SHA de la base de esta corrección: `cfab8fe42e2cfcba9c84fe59b54ae5c5b2a7a3f0`
- Worktree: `/Users/max/orca/workspaces/blinktrip/punto-1-oferta-precio`
- Rama: `m2hewitt/punto-1-oferta-precio`

El coordinador registra esta corrección aprobada en un commit separado, titulado `fix: retirar menciones de financiación de la landing`. No se publicó ni desplegó en producción.

## Rollback

El deshacer va en un commit separado del punto 1. Revertir solo el commit de esta corrección:

```sh
git revert <SHA-del-commit-de-esta-correccion>
```

No usar el revert del commit de la oferta Express: ese volvería atrás también el bloque de precio. La base reversible de esta corrección es `cfab8fe42e2cfcba9c84fe59b54ae5c5b2a7a3f0`. Revertir la corrección volvería a introducir la mención de financiación no ofrecida: requiere nueva revisión comercial antes de publicar.

## Estado

APROBADO por validación independiente GPT medium el 2026-10-06. Evidencia y límites en `cambios/validacion-texto-comercial-gpt-medium.md`; commit separado a cargo del coordinador; publicación pendiente.
