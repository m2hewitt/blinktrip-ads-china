# Punto 1 — Oferta de precio en el hero (`?ag=precio`)

Validación independiente APROBADA por GPT medium; Grok solo implementó. Informe: [punto-1-validacion-gpt-medium.md](punto-1-validacion-gpt-medium.md).

## Motivo y alcance

Los clics del grupo Precio llegan a `?ag=precio`. El hero ya cambia el título y menciona USD 3.269 en el subtítulo, pero el monto no tiene jerarquía de oferta y la base por persona y los vuelos no están junto al precio, antes del primer CTA de WhatsApp del hero.

Este cambio agrega esa oferta de referencia solo en esa variante. No cubre los puntos 2 a 10 de la auditoría, no rediseña la landing. Se entrega en una rama aislada con un único commit; no se publicó ni desplegó en producción.

## Base

- SHA de la base del worktree: `c7ddb6f5c7faa8a2763ae87e16044c795e148454`
- Worktree: `/Users/max/orca/workspaces/blinktrip/punto-1-oferta-precio`
- Rama: `m2hewitt/punto-1-oferta-precio`. El coordinador registra esta entrega en un único commit después de la validación independiente GPT.

## Archivos de esta implementación

- `public/index.html` — bloque `#heroOffer` oculto entre `#heroSub` y el badge de visa; `id` en el overlay de precio; cache `?v=20261006a` en el preload, la hoja y el script.
- `public/landing-china-v3.css` — reglas solo del bloque `.hero-offer` y de `[hidden]` en ese bloque y en el overlay.
- `public/landing-china-v3.js` — `revealPrecioHeroOffer()`, después de `money()` y de `PRODUCTS`.
- `cambios/punto-1-oferta-precio.md` — este documento.

Grok no ejecutó tests, lint, `node --check`, comparaciones de aceptación ni pruebas de navegador. Esos controles corresponden exclusivamente a GPT medium y están documentados en el informe independiente.

## Propuesta textual

En `?ag=precio`, y solo si existe el producto `express` con precio numérico, noches numéricas, nombre, `priceLabel` y `priceBasis` que indique persona y habitación doble, el hero queda así:

- H1, sin cambio de DKI: «¿Cuánto cuesta viajar a China desde Argentina?»
- Subtítulo adaptado, sin el monto: «Precio de referencia. Un asesor arma tu presupuesto según fechas, duración y destinos.»
- Contexto: «Recorrido base · China esencial express»
- Precio: «Desde USD 3.269» y, al lado, «por persona»
- «Vuelos internacionales incluidos»
- «5 noches · Habitación doble»
- «Precio de referencia sujeto a confirmación»
- Badge de visa, botones y nota de WhatsApp: texto y tamaño iguales a la base
- El overlay «Recorrido base desde USD 3.269 · Express 5 noches» se oculta solo en este caso. La foto y la leyenda «Gran Muralla China, Beijing» no cambian.

Nombre, precio y noches salen de `PRODUCTS` id `express` (`customerName`, `priceLabel`, `priceUsd` vía `money()` en `es-AR`, `nights`). Con el modelo vigente eso es China esencial express, Desde USD 3.269 y 5 noches. «por persona» y «Habitación doble» se muestran porque `priceBasis` es «precio de referencia por persona, en habitación doble». No se editó `PRODUCTS`.

«Vuelos internacionales incluidos» es la frase ya publicada en la tarjeta de circuitos y coherente con `COMMON` para express. No es un campo propio de `PRODUCTS` y no se aplica a la Feria, que sigue con su exclusión de aéreo internacional.

`ag=tour`, `ag=turismo`, la URL sin `ag` y un `ag` desconocido no abren el bloque, no cambian el subtítulo de precio y conservan el overlay. Si `express` no cumple las condiciones de arriba, `?ag=precio` también conserva el subtítulo anterior, con el monto, y el overlay.

## Invariantes

- Número de WhatsApp, `WA_MESSAGE`, prefijo `[ACH]` y los `href` existentes no se modificaron.
- No se tocó GA4, Ads, GTM, `dataLayer` ni eventos.
- No se modificaron precios, fechas, cupos, `PRODUCTS`, `COMMON`, mapas, tarjetas, salidas acompañadas, Feria, reseñas ni el texto migratorio.
- No hay CTA de reserva o compra, ni promesa de tarifa final o cupos.
- El precio de express no se copia al resto de los circuitos. No hay descuentos, cuotas ni ahorros calculados.
- Sin animaciones, dependencias, imágenes nuevas ni listeners de clic en el bloque.

## Rollback

Para deshacer la entrega, usar el SHA del commit único de esta rama, titulado `feat: destacar oferta Express en el hero de Precio`:

```sh
git revert <SHA-del-commit-atomico-del-coordinador>
```

Ese revert deshace este punto si el commit contiene solo estos archivos. Tras una integración mediante squash se usa el SHA resultante de la integración, no el SHA previo del worktree. No hace falta un commit de respaldo previo: la base es `c7ddb6f5c7faa8a2763ae87e16044c795e148454` y el commit conserva este punto como una unidad reversible.

## Estado

Validación independiente APROBADA por GPT medium en Orca local a 360×740, 390×844 y 1280×900, incluyendo comparación de las otras variantes contra la base. Grok solo implementó; GPT medium solo validó y actualizó documentación de QA. Evidencia, mediciones y límites en [punto-1-validacion-gpt-medium.md](punto-1-validacion-gpt-medium.md). El coordinador registra el commit; la integración y publicación quedan pendientes.

## Corrección comercial posterior

El subtítulo actual de este documento incorpora la corrección solicitada el 2026-10-06. Grok la implementó y GPT medium la aprobó independientemente: [validacion-texto-comercial-gpt-medium.md](validacion-texto-comercial-gpt-medium.md). El informe original conserva la evidencia de la versión anterior. Si se revierte el bloque de oferta, conservar el texto comercial corregido y volver a validar el resultado antes de publicar.
