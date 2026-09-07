      const WA_NUMBER = "5491166036714";

      /* DKI: adapta H1 y subtítulo del hero según el ad group de Google Ads.
         Uso en la URL final del anuncio: ?ag=precio | tour | turismo
         (si no hay parámetro válido, se mantiene el copy por defecto). */
      (function heroDKI() {
        const VARIANTS = {
          precio: {
            h1: "¿Cuánto cuesta viajar a China <span>desde Argentina</span>?",
            sub: "Precio de referencia desde USD 3.269 (consultá las opciones de financiación). Un asesor arma tu presupuesto según fechas, duración y destinos.",
          },
          tour: {
            h1: "Tours a China organizados <span>desde Argentina</span>",
            sub: "Recorridos probados con vuelos, hoteles, guía en español y traslados. Elegí un itinerario base y adaptalo con un asesor.",
          },
          turismo: {
            h1: "Viajá a los lugares imperdibles de China <span>desde Argentina</span>",
            sub: "Gran Muralla, Ciudad Prohibida, Guerreros de Terracota y más, en paquetes organizados que adaptás con un asesor.",
          },
        };
        try {
          const ag = (new URLSearchParams(location.search).get("ag") || "")
            .toLowerCase()
            .trim();
          const v = VARIANTS[ag];
          if (!v) return;
          const h1 = document.getElementById("heroH1");
          const sub = document.getElementById("heroSub");
          if (h1) h1.innerHTML = v.h1;
          if (sub) sub.textContent = v.sub;
        } catch (e) {
          /* si algo falla, se conserva el copy por defecto */
        }
      })();
      const COMMON =
        "Vuelos internacionales · Hoteles · Guía en español · Traslados y excursiones programadas · Soporte 24/7 de BlinkTrip";
      const PRODUCTS = [
        {
          id: "panda",
          family: "acompanadas",
          customerName: "China & encuentro con los Osos Panda",
          sourceName: "Piamonte",
          startDate: "2026-10-03",
          dateWindow: null,
          dateMode: "fixed",
          days: 14,
          nights: 11,
          priceUsd: 4866,
          priceLabel: "Desde USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Pekín (3n) → Luoyang → Xi’an (2n) → Chengdú (2n) → Shanghái (4n)",
          hook: "Incluye una experiencia con pandas en el Centro de Cría de Chengdú.",
          highlights: [
            "Grutas de Longmen",
            "Gran Buda de Leshan",
            "4 noches en Shanghái",
          ],
          accompaniment: "Acompañante de Piamonte",
          minPassengers: 20,
          availability: { used: 19, total: 24 },
          image: "panda",
          whatsappIntent: "panda",
          badges: ["Longmen", "Leshan"],
          particular:
            "Vuelos Ethiopian vía Adís Abeba. Actividad con pandas informada por el operador.",
        },
        {
          id: "crown-hk",
          family: "acompanadas",
          customerName: "China, Hangzhou & Hong Kong",
          sourceName: "Crown Travel",
          startDate: "2026-10-03",
          dateWindow: null,
          dateMode: "fixed",
          days: 19,
          nights: 15,
          priceUsd: 7497,
          priceLabel: "Desde USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Beijing (3n) → Xi’an (2n) → Guilin (2n) → Hangzhou (2n) → Suzhou (1n) → Shanghái (2n) → Hong Kong (3n)",
          hook: "Combina Hangzhou y Suzhou antes de finalizar en Hong Kong.",
          highlights: [
            "Crucero por el Río Li",
            "Lago del Oeste",
            "3 noches en Hong Kong",
          ],
          accompaniment: "Coordinador desde Buenos Aires",
          minPassengers: 10,
          availability: { used: 11, total: 16 },
          image: "shanghai",
          whatsappIntent: "crown-hk",
          badges: ["Río Li", "Hangzhou + Suzhou"],
          particular:
            "Vuelos Ethiopian vía Adís Abeba. Desayuno y 8 comidas según programa.",
        },
        {
          id: "tibet",
          family: "acompanadas",
          customerName: "China & Tíbet",
          sourceName: "Midas",
          startDate: "2026-10-10",
          dateWindow: null,
          dateMode: "fixed",
          days: 22,
          nights: 18,
          priceUsd: 10500,
          priceLabel: "Desde USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Beijing (4n) → Xi’an (2n) → Lhasa/Tíbet (3n) → Chengdú (2n) → Zhangjiajie (2n) → Furong (1n) → Fenghuang (2n) → Shanghái (2n)",
          hook: "Recorre Tíbet, Furong, Fenghuang y las montañas de Zhangjiajie.",
          highlights: [
            "Palacio Potala",
            "Monasterios Sera y Jokhang",
            "Autorización de ingreso incluida",
          ],
          accompaniment: "Tour leader",
          minPassengers: 10,
          availability: { used: 10, total: 12 },
          image: "tibet",
          whatsappIntent: "tibet",
          badges: ["Potala", "Avatar"],
          particular:
            "Vuelos Turkish vía Estambul. Incluye la autorización especial de ingreso al Tíbet.",
        },
        {
          id: "toselli-hk",
          family: "acompanadas",
          customerName: "China & Hong Kong",
          sourceName: "Toselli",
          startDate: "2026-10-23",
          dateWindow: null,
          dateMode: "fixed",
          days: 21,
          nights: 20,
          priceUsd: 8480,
          priceLabel: "Desde USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Beijing (3n) → Xi’an (2n) → Chengdú (2n) → Zhangjiajie (2n) → Shanghái (4n, con Suzhou) → Guilin (2n, con Yangshuo) → Hong Kong (3n)",
          hook: "Combina pandas, Zhangjiajie, Guilin, Suzhou y Hong Kong.",
          highlights: ["Puente de Cristal", "Monte Tianmen", "Torre Shanghai"],
          accompaniment: "Guía local en español en el recorrido",
          minPassengers: 15,
          availability: { used: 9, total: 20 },
          image: "xian",
          whatsappIntent: "toselli-hk",
          badges: ["Pandas", "Avatar"],
          particular:
            "Vuelos Ethiopian. 13 comidas según programa. Tipo de acompañamiento desde Argentina pendiente de confirmación.",
        },
        {
          id: "estambul",
          family: "acompanadas",
          customerName: "China y Estambul · Solas & Solo",
          sourceName: "Eurovips",
          startDate: "2026-11-15",
          dateWindow: null,
          dateMode: "fixed",
          days: 20,
          nights: 17,
          priceUsd: 6850,
          priceLabel: "Desde USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Beijing (4n) → Luoyang (1n) → Xi’an (2n) → Guilin (2n) → Hangzhou (2n) → Suzhou (1n) → Shanghái (2n) → Estambul (3n)",
          hook: "Formato Solas & Solo, con Templo Shaolin y tres noches en Estambul.",
          highlights: [
            "Templo Shaolin",
            "Río Li y Guilin",
            "Hangzhou y Suzhou",
          ],
          accompaniment: "Guía local en español en el recorrido",
          minPassengers: null,
          availability: { used: 12, total: 18 },
          image: "istanbul",
          whatsappIntent: "estambul",
          badges: ["Shaolin", "Río Li"],
          particular:
            "Vuelos Turkish TK16. Tipo de acompañamiento desde Argentina pendiente de confirmación.",
        },
        {
          id: "express",
          family: "circuitos",
          customerName: "China esencial express",
          sourceName: "Clásico-01",
          startDate: null,
          dateWindow: "Consultá fechas disponibles",
          dateMode: "flexible",
          days: 6,
          nights: 5,
          priceUsd: 3269,
          priceLabel: "Desde USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route: "Beijing (3n) → Shanghái (2n)",
          hook: "Lo esencial de China en seis días y el menor precio entre los itinerarios de referencia.",
          highlights: [
            "Gran Muralla de Mutianyu",
            "Ciudad Prohibida",
            "Tren bala a Shanghái",
          ],
          mapHighlights: [
            "Gran Muralla de Mutianyu",
            "Ciudad Prohibida",
            "Tren bala a Shanghái",
            "Torre Shanghai",
          ],
          accompaniment: "Guía local en español",
          minPassengers: null,
          image: "great-wall-hero",
          whatsappIntent: "express",
          badges: ["Gran Muralla", "Ciudad Prohibida"],
          particular: "",
          noIncluye:
            "Opcionales no incluidos: pato laqueado, acrobacia ERA y tren Maglev.",
        },
        {
          id: "guilin",
          family: "circuitos",
          customerName: "China clásica y Guilin",
          sourceName: "Clásico-03",
          startDate: null,
          dateWindow: "Consultá fechas disponibles",
          dateMode: "flexible",
          days: 11,
          nights: 10,
          priceUsd: 4455,
          priceLabel: "Desde USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Beijing (3n) → Xi’an (2n) → Guilin (3n, con Longji y Yangshuo) → Shanghái (2n)",
          hook: "La China de paisaje kárstico, arrozales y crucero por el Río Li.",
          highlights: [
            "Terrazas de Longji",
            "Crucero Guilin–Yangshuo",
            "Guerreros de Terracota",
          ],
          mapHighlights: [
            "Gran Muralla de Mutianyu",
            "Guerreros de Terracota",
            "Terrazas de Longji",
            "Crucero Guilin–Yangshuo",
            "Torre Shanghai",
          ],
          accompaniment: "Guía local en español",
          minPassengers: null,
          image: "guilin",
          whatsappIntent: "guilin",
          badges: ["Longji", "Río Li"],
          particular: "Tren bala y vuelos internos indicados.",
          noIncluye: "Opcionales del programa no incluidos.",
        },
        {
          id: "avatar",
          family: "circuitos",
          customerName: "China: aventura y paisajes de Avatar",
          sourceName: "Clásico-07",
          startDate: null,
          dateWindow: "Consultá fechas disponibles",
          dateMode: "flexible",
          days: 11,
          nights: 10,
          priceUsd: 4710,
          priceLabel: "Desde USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route: "Beijing (3n) → Xi’an (2n) → Zhangjiajie (3n) → Shanghái (2n)",
          hook: "Un circuito de aventura centrado en Zhangjiajie y sus paisajes de Avatar.",
          highlights: [
            "Puente de Cristal",
            "Elevador de Bailong",
            "Monte Tianmen",
          ],
          mapHighlights: [
            "Gran Muralla de Mutianyu",
            "Guerreros de Terracota",
            "Puente de Cristal",
            "Elevador de Bailong",
            "Monte Tianmen",
            "Torre Shanghai",
          ],
          accompaniment: "Guía local en español",
          minPassengers: null,
          image: "zhangjiajie",
          whatsappIntent: "avatar",
          badges: ["Puente de Cristal", "Monte Tianmen"],
          particular: "",
          noIncluye:
            "El tren de la Galería de Diez Millas se abona por separado.",
        },
        {
          id: "imperial",
          family: "circuitos",
          customerName: "China imperial y montañas de Avatar",
          sourceName: "BlinkTrip",
          startDate: null,
          dateWindow: "dynamic-imperial",
          dateMode: "flexible",
          days: 14,
          nights: 13,
          priceUsd: 5980,
          priceLabel: "USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Beijing (3n) → Xi’an (2n) → Chengdú (2n) → Chongqing (2n) → Zhangjiajie (2n) → Shanghái (2n)",
          hook: "Combina Chongqing con pandas, capitales imperiales y los paisajes de Avatar.",
          highlights: [
            "Hongyadong y monorriel",
            "Gran Buda de Leshan",
            "Monte Tianmen",
          ],
          accompaniment: "Guía local en español",
          minPassengers: null,
          image: "chongqing",
          whatsappIntent: "imperial",
          badges: ["Pandas", "Chongqing"],
          particular:
            "Trenes bala y vuelo interno según programa. Bicicleta en la muralla de Xi’an opcional.",
        },
        {
          id: "suenos",
          family: "circuitos",
          customerName: "Sueños de China y Japón",
          sourceName: "BlinkTrip",
          startDate: null,
          dateWindow: "agosto a noviembre de 2026",
          dateMode: "flexible",
          days: 16,
          nights: 14,
          priceUsd: 6790,
          priceLabel: "USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Tokio (2n) → Kawaguchiko (1n) → Kyoto (2n) → Osaka (1n) → Pekín (3n) → Qufu (1n) → Xuzhou (1n) → Nanjing (1n) → Shanghái (2n)",
          hook: "El único producto del catálogo que combina seis noches en Japón con ocho en China.",
          highlights: [
            "Tokio, Kyoto y Osaka",
            "Pekín y Shanghái",
            "Qufu, Xuzhou y Nanjing",
          ],
          accompaniment: "Guía local según programa",
          minPassengers: null,
          image: "japan",
          whatsappIntent: "suenos",
          badges: ["Tokio + Kioto", "Pekín + Shanghái"],
          particular:
            "Servicios y guías se confirman según el programa de cada país.",
        },
        {
          id: "destacado",
          family: "circuitos",
          customerName: "Lo más destacado de China",
          sourceName: "Clásico-06",
          startDate: null,
          dateWindow: "Consultá fechas disponibles",
          dateMode: "flexible",
          days: 16,
          nights: 15,
          priceUsd: 6990,
          priceLabel: "USD",
          priceBasis: "precio de referencia por persona, en habitación doble",
          route:
            "Beijing (3n) → Xi’an (2n) → Chengdú (2n) → Guilin (3n) → Hangzhou (2n) → Suzhou (1n) → Shanghái (2n)",
          hook: "El gran recorrido con el sur del Yangtsé, jardines, agua, té, pandas y Guilin.",
          highlights: [
            "Pueblo de agua de Tongli",
            "Té Longjing en Hangzhou",
            "Longji y Río Li",
          ],
          accompaniment: "Guía local en español",
          minPassengers: null,
          image: "yuyuan",
          whatsappIntent: "destacado",
          badges: ["Pandas", "Tongli"],
          particular:
            "Trenes bala, vuelos internos y auto privado según programa.",
        },
        {
          id: "feria-canton",
          // Producto de negocios, no de ocio: no se personaliza, no lleva aéreo
          // internacional y el precio es por fase. Vive en su propia sección
          // (#ferias) para no contaminar el ancla "desde USD 3.269" ni la nota
          // de precios "por persona en habitación doble" de #itinerarios.
          family: "ferias",
          customerName: "Feria de Cantón · Edición 140",
          sourceName: "ChinaPass",
          startDate: "2026-10-14",
          dateWindow: "3 fases entre octubre y noviembre de 2026",
          dateMode: "phases",
          days: 7,
          nights: 6,
          priceUsd: 1499,
          priceLabel: "USD",
          priceUnit: "por fase",
          priceBasis:
            "precio por persona y por fase, impuestos incluidos, sin aéreo internacional",
          route: "Cantón (6n)",
          hook: "La mayor feria comercial del mundo, con acompañamiento de ChinaPass y logística resuelta para viajar a comprar.",
          phases: [
            { name: "Fase 1", dates: "14 al 20 de octubre de 2026" },
            { name: "Fase 2", dates: "22 al 28 de octubre de 2026" },
            { name: "Fase 3", dates: "30 de octubre al 5 de noviembre de 2026" },
          ],
          highlights: [
            "Shuttle bus diario a la Feria",
            "Hotel 5★ con ubicación preferencial",
            "Navegación nocturna por el Río Perla",
            "Seguro Terrawind",
          ],
          mapHighlights: [
            "Complejo ferial de Cantón",
            "Navegación nocturna por el Río Perla",
          ],
          includes:
            "Hotel 5★ con ubicación preferencial y desayuno buffet · Shuttle bus diario a la Feria · Traslados privados · Cena de bienvenida grupal · Navegación nocturna por el Río Perla · Asistencia en cambio de divisas · Seguro Terrawind",
          excludes: "aéreo internacional",
          accompaniment: "Acompañamiento de ChinaPass durante la feria",
          minPassengers: null,
          // TODO(assets): reemplazar por img/canton.webp cuando esté disponible.
          image: "hongkong",
          whatsappIntent: "feria-canton",
          badges: ["Feria de Cantón", "Río Perla"],
          particular:
            "Programa operado por ChinaPass. Cupos, tarifas y disponibilidad de cada fase se confirman al momento de reservar.",
        },
      ];
      const CITY_COORDS = {
        Beijing: { x: 601.7, y: 113.0 },
        "Xi’an": { x: 410.1, y: 281.9 },
        Guilin: { x: 444.6, y: 551.9 },
        Zhangjiajie: { x: 449.5, y: 436.1 },
        Chengdú: { x: 284.7, y: 392.9 },
        Chongqing: { x: 348.4, y: 423.2 },
        Shanghái: { x: 732.1, y: 373.1 },
        // Proyección lineal del mapa: x = 25.707·lon − 2390.6, y = 1310.1 − 30·lat.
        Cantón: { x: 521.1, y: 616.2 },
      };
      const CHINA_PATH =
        "M385.0,664.8L351.3,650.6L354.3,626.6L315.6,609.7L281.4,633.8L223.9,635.4L224.4,675.3L212.1,674.1L207.8,657.3L183.8,665.6L177.9,649.1L158.7,645.4L167.3,621.2L150.7,614.2L150.0,586.4L117.3,592.7L123.9,552.4L145.5,534.1L145.3,482.8L136.2,483.5L119.8,455.0L111.1,463.5L84.4,457.6L92.0,447.1L78.1,426.6L61.4,438.9L41.7,430.6L-26.3,478.1L-79.8,461.2L-105.7,490.5L-112.6,467.2L-180.1,472.7L-281.8,400.2L-305.7,408.9L-357.3,367.9L-366.3,370.9L-375.7,334.4L-354.4,335.0L-367.0,289.6L-360.8,280.9L-378.5,270.4L-384.6,245.6L-432.6,235.7L-441.3,210.5L-479.0,195.9L-459.8,188.4L-467.1,157.9L-493.7,151.8L-498.0,126.5L-467.1,95.5L-429.0,99.4L-413.8,79.3L-382.6,77.7L-328.2,48.7L-330.1,30.0L-314.1,15.2L-321.9,-31.4L-337.6,-36.5L-290.8,-50.5L-269.5,-43.8L-274.7,-57.9L-256.4,-105.6L-211.2,-94.9L-193.3,-101.9L-189.0,-137.5L-165.9,-145.9L-157.3,-162.7L-133.4,-164.9L-129.1,-146.6L-69.1,-120.3L-50.7,-87.0L-60.1,-55.8L-54.6,-45.9L13.3,-38.3L60.4,-18.3L87.0,28.4L218.4,33.9L308.1,62.1L354.1,41.4L447.4,26.8L486.9,-1.3L473.2,-21.0L486.0,-41.9L540.8,-38.3L554.4,-51.7L583.2,-53.7L628.4,-87.6L690.9,-90.1L655.6,-129.5L588.8,-120.6L579.2,-133.9L609.0,-184.7L639.6,-175.4L675.3,-192.0L672.8,-202.2L713.6,-252.9L711.2,-267.0L696.7,-273.6L748.0,-293.6L787.1,-296.4L839.6,-281.3L857.4,-260.9L888.5,-184.0L965.7,-155.8L976.1,-121.3L1015.1,-121.4L1061.9,-141.2L1073.6,-121.4L1058.6,-109.0L1031.5,-43.9L999.1,-49.8L976.7,-35.4L983.8,8.7L965.0,33.9L948.8,20.1L943.6,36.6L901.2,50.4L903.8,68.4L867.2,58.5L804.0,112.3L724.2,148.1L741.1,128.4L726.9,123.6L752.5,95.0L741.5,80.8L724.5,83.0L668.0,134.5L637.3,136.0L634.0,157.3L667.0,168.7L671.5,194.0L688.1,195.4L713.6,175.0L762.8,187.9L754.5,205.0L699.0,223.9L672.9,264.5L701.2,281.8L716.3,330.1L741.5,353.0L695.2,351.9L712.7,350.5L741.5,378.2L699.3,402.7L726.6,400.9L747.8,413.9L733.0,425.5L744.9,425.3L743.6,436.0L731.6,436.1L735.7,461.2L713.5,469.7L695.4,511.0L683.7,506.4L691.2,520.0L672.1,526.3L684.5,529.9L684.6,548.3L673.2,546.5L659.7,571.4L638.8,575.8L644.3,582.6L626.6,602.3L614.8,600.6L603.5,621.6L540.4,634.7L527.6,617.0L528.4,643.3L447.7,669.9L446.1,701.2L434.1,699.1L435.4,665.6L426.0,659.3L415.2,667.2L398.0,652.9Z";
      const HIGHLIGHT_GEO = {
        "Gran Muralla de Mutianyu": {
          kind: "city",
          city: "Beijing",
          photo: "img/map-great-wall.webp",
          label: "Gran Muralla China",
          dx: -165,
          dy: 72,
        },
        "Ciudad Prohibida": {
          kind: "city",
          city: "Beijing",
          photo: "img/map-forbidden-city.webp",
          dx: -165,
          dy: 72,
        },
        "Tren bala a Shanghái": {
          kind: "segment",
          from: "Beijing",
          to: "Shanghái",
          photo: "img/map-cr400.webp",
          label: "Tren bala CR400",
          t: 0.42,
          dx: 80,
          dy: 60,
        },
        "Guerreros de Terracota": {
          kind: "city",
          city: "Xi’an",
          photo: "img/map-terracotta.webp",
          dx: -158,
          dy: 54,
        },
        "Terrazas de Longji": {
          kind: "city",
          city: "Guilin",
          photo: "img/map-longji.webp",
          dx: -166,
          dy: 70,
        },
        "Crucero Guilin–Yangshuo": {
          kind: "city",
          city: "Guilin",
          photo: "img/map-li-river.webp",
          label: "Crucero por el Río Li",
          dx: -166,
          dy: 70,
        },
        "Puente de Cristal": {
          kind: "city",
          city: "Zhangjiajie",
          photo: "img/map-glass-bridge.webp",
          dx: -250,
          dy: 62,
        },
        "Elevador de Bailong": {
          kind: "city",
          city: "Zhangjiajie",
          photo: "img/map-bailong.webp",
          dx: -250,
          dy: 62,
        },
        "Monte Tianmen": {
          kind: "city",
          city: "Zhangjiajie",
          photo: "img/map-tianmen.webp",
          dx: -250,
          dy: 62,
        },
        "Torre Shanghai": {
          kind: "city",
          city: "Shanghái",
          photo: "img/shanghai.webp",
          label: "Torre de Shanghái",
          dx: 132,
          dy: 54,
        },
        "Complejo ferial de Cantón": {
          kind: "city",
          city: "Cantón",
          photo: "img/map-canton-fair.webp",
          label: "Feria de Cantón",
          dx: -170,
          dy: -46,
        },
        "Navegación nocturna por el Río Perla": {
          kind: "city",
          city: "Cantón",
          photo: "img/map-pearl-river.webp",
          label: "Crucero por el Río Perla",
          dx: -170,
          dy: -46,
        },
      };
      const MAP_PACKAGE_IDS = ["express", "guilin", "avatar"];
      const FAIR_ID = "feria-canton";
      // Ids con mini-mapa propio dentro del detalle (mobile).
      const MINI_MAP_IDS = [...MAP_PACKAGE_IDS, FAIR_ID];
      function parseRouteStops(routeStr) {
        return routeStr.split("→").map((seg) => {
          const m = seg.trim().match(/^(.+?)\s*\((\d+)n/);
          if (!m)
            throw new Error(
              'No pude parsear el segmento de ruta: "' + seg + '"',
            );
          return { city: m[1].trim(), nights: parseInt(m[2], 10) };
        });
      }
      function buildRoutePath(pts) {
        if (!pts.length) return "";
        if (pts.length < 2)
          return "M" + pts[0].x.toFixed(1) + "," + pts[0].y.toFixed(1);
        let d = "M" + pts[0].x.toFixed(1) + "," + pts[0].y.toFixed(1);
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1],
            b = pts[i];
          const mx = (a.x + b.x) / 2,
            my = (a.y + b.y) / 2;
          const dx = b.x - a.x,
            dy = b.y - a.y;
          const len = Math.hypot(dx, dy) || 1;
          const perpX = -dy / len,
            perpY = dx / len;
          const dir = perpY < 0 ? 1 : -1; // curvar siempre hacia arriba
          const bow = Math.min(len * 0.16, 72);
          const cx = mx + perpX * bow * dir,
            cy = my + perpY * bow * dir;
          d +=
            "Q" +
            cx.toFixed(1) +
            "," +
            cy.toFixed(1) +
            " " +
            b.x.toFixed(1) +
            "," +
            b.y.toFixed(1);
        }
        return d;
      }
      let activeMapProductId = null;
      let mapRouteFrame = 0;
      let mapViewBoxFrame = 0;
      let mapResizeFrame = 0;
      let mapRenderVersion = 0;
      function svgEl(name, attrs = {}) {
        const el = document.createElementNS(
          "http://www.w3.org/2000/svg",
          name,
        );
        Object.entries(attrs).forEach(([key, value]) =>
          el.setAttribute(key, String(value)),
        );
        return el;
      }
      // Mobile: build a standalone copy of the base China map (neighbors + land)
      // reusing the existing inline paths' `d` (no duplication of the giant path
      // data). Returns the svg and its empty overlay <g> for renderMapRoute.
      function buildMiniMapSvg() {
        const svg = svgEl("svg", {
          viewBox: "0 0 900 760",
          role: "img",
          "aria-label": "Mapa del recorrido",
        });
        [".route-map-neighbors", ".route-map-land"].forEach((sel) => {
          const src = document.querySelector(sel);
          if (!src) return;
          svg.appendChild(
            svgEl("path", {
              class: src.getAttribute("class"),
              d: src.getAttribute("d"),
            }),
          );
        });
        const overlay = svgEl("g", { class: "mini-map-overlay" });
        svg.appendChild(overlay);
        return { svg, overlay };
      }
      const mqDesktopMap = matchMedia("(min-width: 1024px)");
      // Mobile: render (once) the per-card mini-map inside an expanded card.
      function renderMiniMapFor(productId) {
        const host = document.querySelector(
          '.pkg-mini-map[data-mini-map="' + productId + '"]',
        );
        if (!host || host.dataset.rendered === "1") return;
        if (!MINI_MAP_IDS.includes(productId)) return;
        const { svg, overlay } = buildMiniMapSvg();
        host.appendChild(svg);
        host.dataset.rendered = "1";
        host.setAttribute("aria-hidden", "false");
        renderMapRoute(productId, { animate: true, svg, overlay });
      }
      function resolveMapHighlights(product) {
        const names = product.mapHighlights || product.highlights;
        return names.flatMap((name) => {
          const geo = HIGHLIGHT_GEO[name];
          if (!geo) {
            console.warn(
              "[Mapa] Highlight sin referencia geográfica, se omite:",
              name,
            );
            return [];
          }
          return [{ name, ...geo }];
        });
      }
      function renderHighlightPostcard(
        overlay,
        items,
        anchor,
        dx,
        dy,
        isNarrow,
        textClass,
      ) {
        const metrics = isNarrow
          ? {
              photoWidth: 104,
              photoHeight: 72,
              padding: 12,
              gap: 14,
              rowGap: 10,
              minTextWidth: 150,
              maxTextWidth: 224,
              fontSize: 25,
              lineHeight: 29,
              radius: 16,
            }
          : {
              photoWidth: 54,
              photoHeight: 38,
              padding: 6,
              gap: 8,
              rowGap: 5,
              minTextWidth: 96,
              maxTextWidth: 148,
              fontSize: 13,
              lineHeight: 15,
              radius: 9,
            };
        // Measure real rendered text width so cards fit their labels exactly
        // (character counts don't map to pixels, which caused overflow).
        const measureText = (str) => {
          const probe = svgEl("text", {
            class: textClass,
            x: -9999,
            y: -9999,
            visibility: "hidden",
          });
          probe.textContent = str;
          overlay.appendChild(probe);
          const w = probe.getComputedTextLength();
          probe.remove();
          return w;
        };
        const wrapByWidth = (label, maxWidth) => {
          const words = String(label).split(/\s+/).filter(Boolean);
          const lines = [];
          let current = "";
          for (const word of words) {
            const candidate = current ? current + " " + word : word;
            if (!current || measureText(candidate) <= maxWidth) current = candidate;
            else {
              lines.push(current);
              current = word;
            }
          }
          if (current) lines.push(current);
          // Cap at two lines; fold any overflow words back onto the last line.
          if (lines.length > 2) lines.splice(1, lines.length - 1, lines.slice(1).join(" "));
          return lines.length ? lines : [""];
        };
        // Highlights without artwork render as a text-only callout instead of
        // an empty photo tile, so a missing image reads as intentional.
        const hasPhoto = items.some((item) => item.photo);
        const photoWidth = hasPhoto ? metrics.photoWidth : 0;
        const photoHeight = hasPhoto ? metrics.photoHeight : 0;
        const gap = hasPhoto ? metrics.gap : 0;
        const labels = items.map((item) =>
          wrapByWidth(item.label || item.name, metrics.maxTextWidth),
        );
        let widestLine = 0;
        labels.forEach((lines) =>
          lines.forEach((line) => {
            widestLine = Math.max(widestLine, measureText(line));
          }),
        );
        const textWidth = Math.min(
          metrics.maxTextWidth,
          Math.max(metrics.minTextWidth, Math.ceil(widestLine)),
        );
        // Without the photo setting the row height, consecutive labels would
        // sit almost flush against the divider — give them the gap back.
        const rowGap = hasPhoto ? metrics.rowGap : metrics.rowGap * 2;
        const rowHeights = labels.map((lines) =>
          Math.max(photoHeight, lines.length * metrics.lineHeight),
        );
        const width =
          metrics.padding * 2 + photoWidth + gap + textWidth;
        const height =
          metrics.padding * 2 +
          rowHeights.reduce((sum, value) => sum + value, 0) +
          rowGap * Math.max(0, items.length - 1);
        const centerX = anchor.x + dx;
        const centerY = anchor.y + dy;
        const x = centerX - width / 2;
        const y = centerY - height / 2;
        const edgeX = dx < 0 ? x + width : x;
        const edgeY = Math.max(y + metrics.padding, Math.min(y + height - metrics.padding, anchor.y));
        overlay.appendChild(
          svgEl("path", {
            class: "route-highlight-leader",
            d: `M${anchor.x},${anchor.y} Q${(anchor.x + edgeX) / 2},${edgeY} ${edgeX},${edgeY}`,
            "aria-hidden": "true",
          }),
        );
        // Positioning lives on an outer group; the pop animation lives on the
        // inner group. Otherwise the animated CSS `transform` overrides the
        // translate() attribute and the card flashes at the SVG origin.
        const positioner = svgEl("g", {
          transform: `translate(${x},${y})`,
          "aria-hidden": "true",
        });
        const group = svgEl("g", {
          class: "route-highlight-callout",
        });
        group.appendChild(
          svgEl("rect", {
            class:
              textClass === "route-highlight-segment-text"
                ? "route-highlight-segment-bg"
                : "route-highlight-bg",
            width,
            height,
            rx: metrics.radius,
            ry: metrics.radius,
          }),
        );
        let rowY = metrics.padding;
        items.forEach((item, index) => {
          const rowHeight = rowHeights[index];
          const photoY = rowY + (rowHeight - photoHeight) / 2;
          const clipId = `map-photo-${mapRenderVersion}-${index}-${(item.name || "hito").replace(/[^a-z0-9]/gi, "")}`;
          if (hasPhoto) {
            group.appendChild(
              svgEl("rect", {
                class: "route-highlight-photo-fallback",
                x: metrics.padding,
                y: photoY,
                width: photoWidth,
                height: photoHeight,
                rx: metrics.radius / 2,
                ry: metrics.radius / 2,
              }),
            );
            const clipPath = svgEl("clipPath", { id: clipId });
            clipPath.appendChild(
              svgEl("rect", {
                x: metrics.padding,
                y: photoY,
                width: photoWidth,
                height: photoHeight,
                rx: metrics.radius / 2,
                ry: metrics.radius / 2,
              }),
            );
            group.appendChild(clipPath);
            if (item.photo)
              group.appendChild(
                svgEl("image", {
                  class: "route-highlight-photo",
                  href: item.photo,
                  x: metrics.padding,
                  y: photoY,
                  width: photoWidth,
                  height: photoHeight,
                  preserveAspectRatio: "xMidYMid slice",
                  "clip-path": `url(#${clipId})`,
                  "aria-hidden": "true",
                  focusable: "false",
                }),
              );
          }
          const text = svgEl("text", {
            class: textClass,
            x: metrics.padding + photoWidth + gap,
          });
          const firstBaseline =
            rowY +
            rowHeight / 2 -
            ((labels[index].length - 1) * metrics.lineHeight) / 2 +
            metrics.fontSize * 0.34;
          labels[index].forEach((line, lineIndex) => {
            const tspan = svgEl("tspan", {
              x: metrics.padding + photoWidth + gap,
              y: firstBaseline + lineIndex * metrics.lineHeight,
            });
            tspan.textContent = line;
            text.appendChild(tspan);
          });
          group.appendChild(text);
          rowY += rowHeight;
          if (index < items.length - 1) {
            const dividerY = rowY + rowGap / 2;
            group.appendChild(
              svgEl("line", {
                class: "route-highlight-divider",
                x1: metrics.padding,
                x2: width - metrics.padding,
                y1: dividerY,
                y2: dividerY,
              }),
            );
            rowY += rowGap;
          }
        });
        positioner.appendChild(group);
        overlay.appendChild(positioner);
        return { x, y, width, height };
      }
      function renderCityHighlight(overlay, city, items, isNarrow) {
        const c = CITY_COORDS[city];
        if (!c) {
          console.warn("[Mapa] Ciudad sin coordenadas para highlights:", city);
          return null;
        }
        const originalDx = items[0].dx;
        const mobileCardHalfWidth = 166;
        const dx = isNarrow
          ? Math.sign(originalDx || -1) *
            Math.max(Math.abs(originalDx), mobileCardHalfWidth + 70)
          : originalDx;
        return renderHighlightPostcard(
          overlay,
          items,
          { x: c.x, y: c.y - 10 },
          dx,
          items[0].dy,
          isNarrow,
          "route-highlight-text",
        );
      }
      function renderSegmentHighlight(overlay, item, isNarrow) {
        const from = CITY_COORDS[item.from];
        const to = CITY_COORDS[item.to];
        if (!from || !to) {
          console.warn("[Mapa] Tramo sin coordenadas para highlight:", item.name);
          return null;
        }
        return renderHighlightPostcard(
          overlay,
          [item],
          {
            x: from.x + (to.x - from.x) * item.t,
            y: from.y + (to.y - from.y) * item.t,
          },
          item.dx,
          item.dy,
          isNarrow,
          "route-highlight-segment-text",
        );
      }
      function targetMapViewBox(svg, pts, calloutBounds, isNarrow) {
        const frame = svg.closest(".route-map-frame");
        const rect = frame.getBoundingClientRect();
        const ratio =
          rect.width && rect.height
            ? rect.width / rect.height
            : isNarrow
              ? 1 / 1.05
              : 1.18;
        const markerPad = isNarrow ? 90 : 68;
        const boxes = [
          ...pts.map((p) => ({
            x: p.x - markerPad,
            y: p.y - (isNarrow ? 105 : 70),
            width: markerPad * 2,
            height: isNarrow ? 230 : 90,
          })),
          ...calloutBounds.filter(Boolean),
        ];
        let minX = Math.min(...boxes.map((box) => box.x));
        let minY = Math.min(...boxes.map((box) => box.y));
        let maxX = Math.max(...boxes.map((box) => box.x + box.width));
        let maxY = Math.max(...boxes.map((box) => box.y + box.height));
        const padding = isNarrow ? 42 : 58;
        minX -= padding;
        minY -= padding;
        maxX += padding;
        maxY += padding;
        // Single-destination products (no route to trace) can zoom in further:
        // the multi-city floors would leave most of the frame empty.
        const singleStop = pts.length < 2;
        const minWidth = singleStop ? (isNarrow ? 430 : 450) : isNarrow ? 620 : 650;
        const minHeight = singleStop ? (isNarrow ? 400 : 375) : isNarrow ? 570 : 540;
        let width = Math.max(maxX - minX, minWidth);
        let height = Math.max(maxY - minY, minHeight);
        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;
        if (width / height < ratio) width = height * ratio;
        else height = width / ratio;
        return [centerX - width / 2, centerY - height / 2, width, height];
      }
      function setMapViewBox(svg, target, animate, version) {
        cancelAnimationFrame(mapViewBoxFrame);
        const reduceMotion = matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        const current = svg
          .getAttribute("viewBox")
          .trim()
          .split(/\s+/)
          .map(Number);
        if (!animate || reduceMotion || current.some(Number.isNaN)) {
          svg.setAttribute("viewBox", target.map((n) => n.toFixed(1)).join(" "));
          return;
        }
        const startedAt = performance.now();
        const duration = 320;
        const tick = (now) => {
          if (version !== mapRenderVersion) return;
          const progress = Math.min(1, (now - startedAt) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = current.map(
            (start, index) => start + (target[index] - start) * eased,
          );
          svg.setAttribute("viewBox", value.map((n) => n.toFixed(1)).join(" "));
          if (progress < 1) mapViewBoxFrame = requestAnimationFrame(tick);
        };
        mapViewBoxFrame = requestAnimationFrame(tick);
      }
      function renderMapRoute(productId, { animate = true, svg, overlay } = {}) {
        const version = ++mapRenderVersion;
        cancelAnimationFrame(mapRouteFrame);
        const product = PRODUCTS.find((p) => p.id === productId);
        if (!product)
          throw new Error("Producto no encontrado para el mapa: " + productId);
        const stops = parseRouteStops(product.route);
        const pts = stops.map((stop) => {
          const coords = CITY_COORDS[stop.city];
          if (!coords)
            throw new Error('Sin coordenadas para la ciudad: "' + stop.city + '"');
          return { ...coords, city: stop.city, nights: stop.nights };
        });
        const highlights = resolveMapHighlights(product);
        const cityHighlights = new Map();
        highlights
          .filter((item) => item.kind === "city")
          .forEach((item) => {
            if (!cityHighlights.has(item.city)) cityHighlights.set(item.city, []);
            cityHighlights.get(item.city).push(item);
          });
        overlay = overlay || document.getElementById("routeMapOverlay");
        svg = svg || overlay.ownerSVGElement;
        const isNarrow = matchMedia("(max-width: 480px)").matches;
        const reduceMotion = matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        overlay.replaceChildren();
        const line = svgEl("path", {
          d: buildRoutePath(pts),
          class: "route-line",
        });
        overlay.appendChild(line);
        const calloutBounds = [];
        cityHighlights.forEach((items, city) =>
          calloutBounds.push(
            renderCityHighlight(overlay, city, items, isNarrow),
          ),
        );
        highlights
          .filter((item) => item.kind === "segment")
          .forEach((item) =>
            calloutBounds.push(
              renderSegmentHighlight(overlay, item, isNarrow),
            ),
          );
        pts.forEach((point, index) => {
          const segmentEndsHere =
            isNarrow &&
            highlights.some(
              (item) => item.kind === "segment" && item.to === point.city,
            );
          const label = svgEl("text", {
            class: "route-pin-label",
            x: point.x,
            y: segmentEndsHere ? point.y + 78 : point.y - (isNarrow ? 58 : 32),
            "text-anchor": "middle",
          });
          label.textContent = point.city;
          overlay.appendChild(label);
          const markerScale = isNarrow ? 2.15 : 1;
          const marker = svgEl("g", {
            class: "route-pin",
            transform: `translate(${point.x},${point.y}) scale(${markerScale})`,
          });
          const circle = svgEl("circle", { r: 10 });
          if (!reduceMotion) circle.style.animationDelay = index * 70 + "ms";
          const number = svgEl("text", {
            class: "route-pin-num",
            y: 4,
            "text-anchor": "middle",
          });
          number.textContent = String(index + 1);
          marker.append(circle, number);
          overlay.appendChild(marker);
          const callout = cityHighlights.get(point.city)?.[0];
          const nightsDirection = callout?.dx < 0 ? 1 : -1;
          const nightsX = point.x + (isNarrow ? 58 : 30) * nightsDirection;
          const nightsY = point.y - (isNarrow ? 22 : 14);
          const nightsScale = isNarrow ? 2.15 : 1;
          const nights = svgEl("g", {
            class: "route-pin-nights",
            transform: `translate(${nightsX},${nightsY}) scale(${nightsScale})`,
          });
          nights.appendChild(
            svgEl("rect", {
              class: "route-pin-nights-bg",
              x: -17,
              y: -10.5,
              width: 34,
              height: 21,
              rx: 10.5,
              ry: 10.5,
            }),
          );
          const nightsText = svgEl("text", {
            class: "route-pin-nights-text",
            y: 3.8,
            "text-anchor": "middle",
          });
          nightsText.textContent = point.nights + "n";
          nights.appendChild(nightsText);
          overlay.appendChild(nights);
        });
        if (!animate) {
          overlay
            .querySelectorAll(".route-highlight-callout, .route-pin circle")
            .forEach((element) => {
              element.style.animation = "none";
            });
        }
        const targetViewBox = targetMapViewBox(
          svg,
          pts,
          calloutBounds,
          isNarrow,
        );
        setMapViewBox(svg, targetViewBox, animate, version);
        const routeDescription = stops
          .map(
            (stop, index) =>
              `${index + 1}. ${stop.city}, ${stop.nights} noches`,
          )
          .join("; ");
        svg.setAttribute(
          "aria-label",
          `Mapa de ${product.customerName}. Recorrido: ${routeDescription}. Hitos: ${highlights.map((item) => item.label || item.name).join("; ")}.`,
        );
        if (animate && !reduceMotion) {
          const lineLength = line.getTotalLength();
          line.style.strokeDasharray = lineLength;
          line.style.strokeDashoffset = lineLength;
          mapRouteFrame = requestAnimationFrame(() => {
            if (version !== mapRenderVersion) return;
            line.style.transition =
              "stroke-dashoffset 650ms cubic-bezier(0.22, 1, 0.36, 1)";
            line.style.strokeDashoffset = "0";
          });
        }
      }
      function routeCardName(card) {
        return card.querySelector(".pkg-compact-name")?.textContent?.trim() || "";
      }
      function hasTextSelectionIn(root) {
        const sel = window.getSelection();
        if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return false;
        if (!String(sel).replace(/\s+/g, "")) return false;
        const node = sel.anchorNode;
        if (!node) return false;
        const el = node.nodeType === 1 ? node : node.parentElement;
        return !!(el && root.contains(el));
      }
      function syncRouteCardSelectA11y(card) {
        if (!card || !card.closest("#routeMapCards")) return;
        const select = card.querySelector(".pkg-compact-select");
        if (!select) return;
        const name = routeCardName(card);
        const toggle = card.querySelector("[data-toggle]");
        const detailId =
          toggle?.getAttribute("aria-controls") || "detail-" + card.dataset.id;
        const open = toggle?.getAttribute("aria-expanded") === "true";
        if (mqDesktopMap.matches) {
          select.removeAttribute("aria-expanded");
          select.removeAttribute("aria-controls");
          select.setAttribute(
            "aria-pressed",
            String(card.classList.contains("active")),
          );
          select.setAttribute("aria-label", "Mostrar " + name + " en el mapa");
        } else {
          select.removeAttribute("aria-pressed");
          select.setAttribute("aria-expanded", String(open));
          select.setAttribute("aria-controls", detailId);
          select.setAttribute(
            "aria-label",
            (open ? "Cerrar recorrido de " : "Ver recorrido de ") + name,
          );
        }
      }
      function syncAllRouteCardSelectA11y() {
        document
          .querySelectorAll("#routeMapCards .pkg-compact")
          .forEach(syncRouteCardSelectA11y);
      }
      function activateMapCard(productId, { force = false, animate = true } = {}) {
        if (!force && activeMapProductId === productId) return;
        activeMapProductId = productId;
        // Scoped to #routeMapCards: #ferias reuses .route-map-cards but drives
        // its own map, so a global selector would cross-wire the two sections.
        document
          .querySelectorAll("#routeMapCards .pkg-compact")
          .forEach((card) => {
            const active = card.dataset.id === productId;
            card.classList.toggle("active", active);
            syncRouteCardSelectA11y(card);
          });
        renderMapRoute(productId, { animate });
      }
      const ATTR_KEYS = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "gclid",
        "wbraid",
        "gbraid",
      ];
      function captureAttribution() {
        const params = new URLSearchParams(location.search);
        const current = {};
        ATTR_KEYS.forEach((k) => {
          if (params.get(k)) current[k] = params.get(k);
        });
        try {
          const saved = JSON.parse(
            sessionStorage.getItem("bt_attribution") || "{}",
          );
          const merged = { ...saved, ...current };
          sessionStorage.setItem("bt_attribution", JSON.stringify(merged));
          return merged;
        } catch {
          return current;
        }
      }
      const ATTRIBUTION = captureAttribution();
      window.dataLayer = window.dataLayer || [];
      window.BT_EVENTS = window.BT_EVENTS || [];
      const TRACK_GUARD = new Map();
      function btTrack(event, payload = {}) {
        const data = { event, ...payload, attribution: ATTRIBUTION };
        const key = event + JSON.stringify(payload);
        const now = Date.now();
        if (now - (TRACK_GUARD.get(key) || 0) < 700) return;
        TRACK_GUARD.set(key, now);
        window.dataLayer.push(data);
        window.BT_EVENTS.push(data);
      }
      function shortHash(value) {
        let h = 2166136261;
        for (const c of value) {
          h ^= c.charCodeAt(0);
          h = Math.imul(h, 16777619);
        }
        return (h >>> 0).toString(36).slice(0, 5).toUpperCase();
      }
      function refFor(id) {
        const raw = ATTR_KEYS.map((k) => ATTRIBUTION[k] || "").join("|");
        return (
          "BT-CN-" + id + (raw.replace(/\|/g, "") ? "-" + shortHash(raw) : "")
        );
      }
      btTrack("landing_view", {
        landing_id: "china_ppc_v3",
        positioning: "custom_first",
        lead_ref: refFor("landing"),
      });
      function money(n) {
        return new Intl.NumberFormat("es-AR").format(n);
      }
      function displayDate(p) {
        if (p.dateWindow === "dynamic-imperial") {
          const now = new Date();
          const end = new Date(2026, 10, 30);
          if (now > end) return "Consultá fechas disponibles";
          const start = Math.max(
            now.getFullYear() === 2026 ? now.getMonth() : 6,
            6,
          );
          const names = [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
          ];
          return names[start] + " a noviembre de 2026";
        }
        if (p.startDate)
          return new Intl.DateTimeFormat("es-AR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            timeZone: "America/Argentina/Buenos_Aires",
          }).format(new Date(p.startDate + "T12:00:00-03:00"));
        return p.dateWindow;
      }
      const WA_MESSAGE =
        "[ACH] ¡Hola BlinkTrip! Quiero armar un viaje personalizado a China y me gustaría recibir una propuesta según fechas y disponibilidad.";
      function waLink() {
        return (
          "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MESSAGE)
        );
      }
      // All entry points intentionally open the same WhatsApp URL. The CRM
      // classifies these conversations from the shared [ACH] prefix.
      const itineraryMessage = () => WA_MESSAGE;
      const accompaniedMessage = () => WA_MESSAGE;
      const productMessage = () => WA_MESSAGE;
      const genericMessage = () => WA_MESSAGE;
      function cardAvailabilityHtml(p) {
        const a = p.availability;
        if (!a || !a.total) return "";
        const used = a.used || 0;
        const total = a.total;
        const left = Math.max(total - used, 0);
        const percent = Math.round((used / total) * 100);
        const level = percent >= 75 ? "hot" : percent >= 55 ? "warm" : "open";
        const filled = Math.max(1, Math.round((used / total) * 12));
        const bars = Array.from({ length: 12 }, (_, i) => {
          const tone = i < 6 ? "cool" : i < 9 ? "warm" : "hot";
          return `<span class="${i < filled ? "is-filled " + tone : ""}"></span>`;
        }).join("");
        const leftText = left === 1 ? "Queda 1 lugar" : "Quedan " + left + " lugares";
        return `<div class="pkg-availability ${level}" aria-label="${used} de ${total} cupos ocupados en esta salida"><span class="availability-label">Cupos</span><div class="availability-top"><strong>${leftText}</strong><span>${percent}%</span></div><div class="availability-meter" aria-hidden="true">${bars}</div><span class="availability-sub">${used}/${total} ocupados</span></div>`;
      }
      function accompaniedCardHtml(p) {
        return `<article class="group-card"><img src="img/${p.image}.webp" alt="${p.customerName}" width="1200" height="800" loading="lazy"><div class="group-card-body"><span class="group-date">Salida ${displayDate(p)}</span><h3>${p.customerName}</h3><div class="group-meta"><span>${p.nights} noches</span><strong>Desde USD ${money(p.priceUsd)}</strong></div>${cardAvailabilityHtml(p)}<a class="btn btn-wa btn-sm pkg-wa" data-wa data-product="${p.id}" data-journey-type="accompanied" data-cta-location="accompanied_cross_sell" href="${waLink(accompaniedMessage(p))}" target="_blank" rel="noopener"><svg class="btn-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.988-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>Consultar salida</a></div></article>`;
      }
      const FEATURED_ACCOMPANIED = [
        "panda",
        "estambul",
        "crown-hk",
        "toselli-hk",
        "tibet",
      ];
      document.getElementById("accompaniedList").innerHTML =
        FEATURED_ACCOMPANIED.map((id) => PRODUCTS.find((p) => p.id === id))
          .map(accompaniedCardHtml)
          .join("");
      const WA_ICO =
        '<svg class="btn-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.988-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>';
      function priceBasisLine(p) {
        const b = String(p.priceBasis || "");
        if (/por persona/i.test(b) && /habitaci[oó]n doble/i.test(b)) {
          return "Por persona en habitación doble";
        }
        return b;
      }
      function cardHtmlCompact(p) {
        const detailId = "detail-" + p.id;
        const cities = parseRouteStops(p.route)
          .map((s) => s.city)
          .join(" · ");
        const incluye = p.particular
          ? `<p><b>Incluye:</b> ${p.particular}</p><p class="common">${COMMON}</p>`
          : `<p><b>Incluye:</b> ${COMMON}</p>`;
        const noIncluye = p.noIncluye
          ? `<p><b>No incluye / opcionales:</b> ${p.noIncluye}</p>`
          : "";
        const waHref = waLink(itineraryMessage(p));
        const waCard = `<a class="btn btn-wa btn-sm pkg-wa" data-wa data-product="${p.id}" data-journey-type="custom" data-cta-location="itinerary_card" href="${waHref}" target="_blank" rel="noopener">${WA_ICO}Consultar viaje</a>`;
        const waDetail = `<a class="btn btn-wa pkg-wa" data-wa data-product="${p.id}" data-journey-type="custom" data-cta-location="itinerary_detail" href="${waHref}" target="_blank" rel="noopener">${WA_ICO}Consultar este viaje por WhatsApp</a>`;
        return `<article class="pkg-compact" data-id="${p.id}"><button class="pkg-compact-select" type="button" data-map-select="${p.id}" aria-pressed="false" aria-label="Mostrar ${p.customerName} en el mapa"><img class="pkg-compact-thumb" src="img/${p.image}.webp" alt="" width="120" height="120" loading="lazy"><span class="pkg-compact-body"><span class="pkg-compact-name">${p.customerName}</span><span class="pkg-compact-kicker">${p.nights} noches · ${p.days} días</span><span class="pkg-compact-cities">${cities}</span><span class="pkg-compact-offer"><span class="pkg-compact-price">${p.priceLabel} ${money(p.priceUsd)}</span><span class="pkg-compact-basis">${priceBasisLine(p)}</span><span class="pkg-compact-flights">Vuelos internacionales incluidos</span></span></span></button><div class="pkg-compact-actions"><button class="pkg-compact-info" type="button" data-toggle="${p.id}" aria-label="Ver recorrido de ${p.customerName}" aria-expanded="false" aria-controls="${detailId}">Ver recorrido ⌄</button>${waCard}<span class="pkg-compact-wa-note">Te responde un asesor por WhatsApp</span></div><div class="pkg-compact-detail pkg-detail" id="${detailId}" aria-hidden="true" hidden><div class="detail-inner"><div class="detail-grid"><p><b>Por qué elegirlo:</b> ${p.hook}</p><p><b>Recorrido:</b> ${p.route}</p></div><div class="highlights">${p.highlights.map((x) => `<span><b class="hl-check">✓</b> ${x}</span>`).join("")}</div><p><b>Acompañamiento:</b> ${p.accompaniment}</p>${incluye}${noIncluye}<div class="pkg-mini-map route-map-frame" data-mini-map="${p.id}" aria-hidden="true"></div><div class="pkg-compact-cta"><p class="pkg-compact-cta-title">¿Te interesa este recorrido?</p><p class="pkg-compact-cta-lead">Podemos adaptar fechas, hoteles y duración.</p>${waDetail}<p class="pkg-compact-cta-note">Sin compromiso.</p></div></div></div></article>`;
      }
      document.getElementById("routeMapCards").innerHTML =
        MAP_PACKAGE_IDS.map((id) => PRODUCTS.find((p) => p.id === id))
          .map(cardHtmlCompact)
          .join("") +
        `<div class="pkg-custom-card"><div class="pkg-custom-body"><div class="pkg-custom-meta"><span class="pkg-name">¿Querés combinar ideas de varios recorridos?</span></div><p class="pkg-custom-note">Contanos qué te interesa y evaluamos una propuesta según fechas y disponibilidad.</p></div><div class="pkg-actions"><a class="btn btn-ghost btn-sm" data-wa data-intent="custom-itineraries" data-journey-type="custom" data-cta-location="itinerary_custom_card" href="${waLink(genericMessage("custom-itineraries"))}" target="_blank" rel="noopener">${WA_ICO}Armar mi viaje</a></div></div>`;
      syncAllRouteCardSelectA11y();
      document
        .querySelectorAll("#routeMapCards .pkg-compact")
        .forEach((card) => {
          // Un solo listener por tarjeta. En mobile el resumen entero (foto,
          // precio, padding) abre el detalle; "Ver recorrido" sigue siendo
          // source=user. No se usa touchstart para no pelear con el scroll.
          card.addEventListener("click", (e) => {
            if (mqDesktopMap.matches) {
              if (e.target.closest(".pkg-compact-select")) {
                activateMapCard(card.dataset.id);
              }
              return;
            }
            if (e.target.closest(".pkg-compact-detail")) return;
            const toggle = card.querySelector("[data-toggle]");
            if (!toggle) return;
            const control = e.target.closest(
              "a, button, input, select, textarea",
            );
            if (control) {
              if (toggle === control || toggle.contains(control)) return;
              if (!control.closest(".pkg-compact-select")) return;
            }
            if (hasTextSelectionIn(card)) return;
            togglePkgDetail(toggle, "card");
          });
        });
      // The standalone (desktop) map — specific selector so it is not confused
      // with the per-card `.pkg-mini-map.route-map-frame` copies, which come
      // first in the DOM.
      const bigMapFrame = document.querySelector(
        ".route-map-layout > .route-map-frame",
      );
      function initDesktopMap() {
        activateMapCard("express", { force: true, animate: false });
      }
      if (mqDesktopMap.matches) initDesktopMap();
      if ("ResizeObserver" in window && bigMapFrame) {
        new ResizeObserver(() => {
          if (!mqDesktopMap.matches) return; // big map hidden on mobile
          cancelAnimationFrame(mapResizeFrame);
          mapResizeFrame = requestAnimationFrame(() => {
            if (activeMapProductId)
              renderMapRoute(activeMapProductId, { animate: false });
          });
        }).observe(bigMapFrame);
      }
      // Re-init when crossing the desktop/mobile breakpoint (rotation/resize).
      mqDesktopMap.addEventListener("change", (e) => {
        if (e.matches) {
          initDesktopMap();
        } else {
          document
            .querySelectorAll('.pkg-mini-map[data-rendered="1"]')
            .forEach((host) => {
              const svg = host.querySelector("svg");
              const overlay = host.querySelector(".mini-map-overlay");
              if (svg && overlay)
                renderMapRoute(host.dataset.miniMap, {
                  animate: false,
                  svg,
                  overlay,
                });
            });
        }
        syncAllRouteCardSelectA11y();
      });
      // ── Feria de Cantón (#ferias) ──────────────────────────────────────
      // Bloque aparte de #itinerarios: es un producto de negocios de fecha
      // fija, no se personaliza y NO incluye aéreo internacional, así que no
      // puede compartir ni el COMMON de inclusiones ni la nota de precios
      // "por persona en habitación doble". Reusa las clases de tarjeta y
      // mapa, pero maneja su propio SVG.
      function fairCardHtml(p) {
        const detailId = "detail-" + p.id;
        const phases = p.phases
          .map((f) => `<li><b>${f.name}:</b> ${f.dates}</li>`)
          .join("");
        return `<article class="pkg-compact pkg-compact--fair active" data-id="${p.id}"><button class="pkg-compact-select" type="button" data-map-select="${p.id}" aria-pressed="true" aria-label="Mostrar ${p.customerName} en el mapa"><img class="pkg-compact-thumb" src="img/${p.image}.webp" alt="" width="120" height="120" loading="lazy"><span class="pkg-compact-body"><span class="pkg-compact-name">${p.customerName}</span><span class="pkg-compact-chips"><span>Cantón / Guangzhou</span><span>3 fases</span></span><span class="pkg-compact-meta"><b>${p.nights} noches</b><span>${p.priceLabel} ${money(p.priceUsd)} ${p.priceUnit}</span></span><span class="pkg-flag">Sin aéreo internacional</span></span></button><div class="pkg-compact-actions"><button class="pkg-compact-info" data-toggle="${p.id}" aria-label="Ver detalle de ${p.customerName}" aria-expanded="false" aria-controls="${detailId}">Ver detalle ▾</button><a class="btn btn-wa btn-sm pkg-wa" data-wa data-product="${p.id}" data-journey-type="fair" data-cta-location="fair_card" href="${waLink(productMessage(p))}" target="_blank" rel="noopener"><svg class="btn-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.988-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>Consultar fase</a></div><div class="pkg-compact-detail pkg-detail" id="${detailId}" aria-hidden="true" hidden><div class="detail-inner"><div class="pkg-mini-map route-map-frame" data-mini-map="${p.id}" aria-hidden="true"></div><div class="detail-grid"><p><b>Sede:</b> Cantón / Guangzhou (${p.nights}n) · ${p.days} días</p><p><b>Por qué elegirlo:</b> ${p.hook}</p></div><div class="fair-phases"><b>Fases de la Edición 140:</b><ul>${phases}</ul></div><div class="highlights">${p.highlights.map((x) => `<span><b class="hl-check">✓</b> ${x}</span>`).join("")}</div><p><b>Acompañamiento:</b> ${p.accompaniment}</p><p><b>A tener en cuenta:</b> ${p.particular}</p><p class="fair-excludes"><b>No incluye:</b> ${p.excludes}. El vuelo desde Argentina se cotiza por separado.</p><p class="common">${p.includes}</p></div></div></article>`;
      }
      const fairCardsHost = document.getElementById("fairCards");
      const fairProduct = PRODUCTS.find((p) => p.id === FAIR_ID);
      if (fairCardsHost && fairProduct) {
        fairCardsHost.innerHTML = fairCardHtml(fairProduct);
        const fairFrame = document.getElementById("fairMapFrame");
        let fairMap = null;
        let fairResizeFrame = 0;
        // Desktop only: the frame is display:none under 1024px, where the
        // in-detail .pkg-mini-map takes over (same rule as #itinerarios).
        const renderFairMap = (animate) => {
          if (!fairFrame || !mqDesktopMap.matches) return;
          if (!fairMap) {
            fairMap = buildMiniMapSvg();
            fairFrame.appendChild(fairMap.svg);
          }
          renderMapRoute(FAIR_ID, {
            animate,
            svg: fairMap.svg,
            overlay: fairMap.overlay,
          });
        };
        renderFairMap(false);
        fairCardsHost
          .querySelector("[data-map-select]")
          .addEventListener("click", () => {
            // Mismo dead click que en #itinerarios: bajo 1024px renderFairMap()
            // sale por su propia guarda de mqDesktopMap y el tap no hace nada.
            if (!mqDesktopMap.matches) {
              const fairToggle = fairCardsHost.querySelector("[data-toggle]");
              if (fairToggle) {
                fairToggle.dataset.expandSource = "card";
                fairToggle.click();
              }
              return;
            }
            renderFairMap(true);
          });
        if ("ResizeObserver" in window && fairFrame) {
          new ResizeObserver(() => {
            if (!mqDesktopMap.matches) return;
            cancelAnimationFrame(fairResizeFrame);
            fairResizeFrame = requestAnimationFrame(() => renderFairMap(false));
          }).observe(fairFrame);
        }
        mqDesktopMap.addEventListener("change", (e) => {
          if (e.matches) renderFairMap(false);
        });
      }
      let selectedProduct = null;
      function selectProduct(p) {
        selectedProduct = p;
        const a = document.getElementById("stickyWa");
        a.href = waLink();
        a.dataset.product = p.id;
        a.dataset.journeyType =
          p.family === "acompanadas"
            ? "accompanied"
            : p.family === "ferias"
              ? "fair"
              : "custom";
        // La barra sticky tapa el header justo cuando el usuario expande un
        // itinerario. Que nombre lo que está mirando en vez del copy genérico.
        const stickyLabel = document.getElementById("stickyLabel");
        const stickyProduct = document.getElementById("stickyProduct");
        if (stickyLabel)
          stickyLabel.textContent = `${p.nights} noches · ${p.priceLabel} ${money(p.priceUsd)}`;
        if (stickyProduct) stickyProduct.textContent = p.customerName;
      }
      function setPkgDetailOpen(toggle, { open, source }) {
        const p = PRODUCTS.find((x) => x.id === toggle.dataset.toggle);
        if (!p) return;
        const detail = document.getElementById("detail-" + p.id);
        if (!detail) return;
        const isFair = p.family === "ferias";
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute(
          "aria-label",
          (open ? "Cerrar" : "Ver") +
            (isFair ? " detalle de " : " recorrido de ") +
            p.customerName,
        );
        detail.hidden = !open;
        detail.setAttribute("aria-hidden", String(!open));
        toggle.textContent = isFair
          ? open
            ? "Cerrar detalle ▴"
            : "Ver detalle ▾"
          : open
            ? "Cerrar recorrido ⌃"
            : "Ver recorrido ⌄";
        btTrack("package_expand", { product_id: p.id, open, source });
        if (open) selectProduct(p);
        if (open && !mqDesktopMap.matches) renderMiniMapFor(p.id);
        syncRouteCardSelectA11y(toggle.closest(".pkg-compact"));
      }
      function togglePkgDetail(toggle, source) {
        const open = toggle.getAttribute("aria-expanded") !== "true";
        setPkgDetailOpen(toggle, { open, source });
      }
      document.addEventListener("click", (e) => {
        const toggle = e.target.closest("[data-toggle]");
        if (toggle) {
          const tagged = toggle.dataset.expandSource;
          const source = tagged || (e.isTrusted ? "user" : "auto");
          if (tagged) delete toggle.dataset.expandSource;
          togglePkgDetail(toggle, source);
        }
        const productLink = e.target.closest("[data-product]");
        if (productLink) {
          const p = PRODUCTS.find((x) => x.id === productLink.dataset.product);
          if (p) selectProduct(p);
        }
        const wa = e.target.closest("[data-wa]");
        if (wa) {
          btTrack("wa_click", {
            product_id: wa.dataset.product || null,
            cta_location: wa.dataset.ctaLocation || "unknown",
            journey_type: wa.dataset.journeyType || null,
          });
        }
      });
      const REVIEWS = [
        {
          name: "Janet Siu A.",
          trip: "China",
          text: "Hicimos un excelente viaje a China, por lo cual estoy muy agradecida a la empresa por todo el acompañamiento recibido en la organización del mismo. Cumplieron con todas nuestras expectativas y más.",
        },
        {
          name: "Sergio D.",
          trip: "China",
          text: "Excelente servicio en el viaje a China que realicé, todo perfecto. Es el lugar indicado para comprar otros viajes. Excelente atención.",
        },
        {
          name: "Ana C.",
          trip: "Europa",
          text: "Su predisposición y rapidez me dieron la confianza para contratar el viaje: los vuelos, el circuito y muchas dudas resueltas en tiempo y forma. No tuve que encargarme de nada, eso fue un plus.",
        },
        {
          name: "Amilcar T.",
          trip: "Jamaica",
          text: "Sabiendo de tantas estafas que hay en las redes, tenía un poco de temor, pero esa sensación fue desvaneciéndose gracias al excelente desempeño que demostraron. Aéreos, traslados, hotelería, seguros… todo perfectamente armado por Leandro.",
        },
        {
          name: "Maria Yamila R.",
          trip: "El Calafate y Ushuaia",
          text: "Organizaron día por día mi viaje: me recibieron y fueron a buscar al aeropuerto, planearon mis excursiones para aprovechar el día al máximo y avisaron a los hoteles por mi tema de alimentación.",
        },
        {
          name: "Aníbal A.",
          trip: "Perú",
          text: "Todo impecable, lo disfrutamos mucho. Destaco el acompañamiento permanente y la respuesta inmediata ante dudas y situaciones a resolver. Ya compramos otro paquete para nuestra hija.",
        },
        {
          name: "Silvia V.",
          trip: "Italia",
          text: "Hice el tour Bellezas de Puglia, Sur de Italia y Sicilia. Todo salió a la perfección: vuelos, transfers en horario, hoteles muy buenos y bien ubicados, excursiones muy bonitas.",
        },
        {
          name: "Fenicia M.",
          trip: "Italia",
          text: "Desde el primer momento, Abril estuvo atenta a cada detalle, resolviendo dudas y adaptando el viaje a nuestras necesidades. Todo salió exactamente como estaba planificado.",
        },
        {
          name: "Leticia B.",
          trip: "Nueva York",
          text: "Desde el principio me sentí bien cuidada con la atención personalizada de su equipo. Guías locales apasionados, tours gastronómicos auténticos. La logística fue perfecta, sin preocupaciones.",
        },
        {
          name: "Erika U.",
          trip: "Río de Janeiro",
          text: "Tenía que hacer un regalo sorpresa a una viajera exigente, así que no podía tener fallas. Me ayudaron hasta eligiendo el mejor lugar para el recital, ajustando todo a la calidad que buscaba con el presupuesto que tenía.",
        },
        {
          name: "Susana C.",
          trip: "República Dominicana",
          text: "El lugar es increíble. Desde la agencia nos solucionaron todo el viaje: los pasajes, la estadía y los traslados. Gracias Leandro por todo lo que hiciste por nosotros.",
        },
        {
          name: "Alicia C.",
          trip: "Bariloche",
          text: "Leandro organizó el paquete al detalle. Nos sorprendieron gratamente cuando se comunicaron para ofrecerme ayuda al enterarse de que nos habíamos quedado varados en el aeropuerto por el paro de controladores.",
        },
        {
          name: "Alejandro N.",
          trip: "Las Vegas, Nueva York y Miami",
          text: "Genial la atención de los chicos, en particular de Leandro, tanto antes, durante y después del viaje. Hicimos tres destinos, con los transfers desde y hacia el aeropuerto, lo cual nos facilitó todo.",
        },
        {
          name: "Gisela M.",
          trip: "Cancún",
          text: "Mariana, mi agente, se encargó de todo. Además me ayudó porque teníamos muchas dudas sobre nuestro primer viaje al exterior con nuestro bebé. Solo puedo agradecer la dedicación en elegir opciones que se adecuaran a nuestra familia.",
        },
        {
          name: "Barbara Cecilia R.",
          trip: "Jamaica",
          text: "Estuvieron atentos cuando los necesitamos y resolvieron al instante el inconveniente que tuvimos. La atención de Abril y Pablo, excelente. Nos enviaron antes de viajar todo lo necesario por mail.",
        },
      ];
      const GLOGO =
        '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>';
      function reviewCard(r) {
        return `<div class="rev"><div class="stars">★★★★★</div><p>“${r.text}”</p><div class="who"><span class="av">${GLOGO}</span><div><b>${r.name}</b><span>Viajó a ${r.trip}</span></div></div></div>`;
      }
      (function renderReviews() {
        const host = document.getElementById("revCols");
        if (!host) return;
        const COLS = 3,
          cols = Array.from({ length: COLS }, () => []);
        REVIEWS.forEach((r, i) => cols[i % COLS].push(r));
        host.innerHTML = cols
          .map((items) => {
            // duplicado: el loop translateY(-50%) queda continuo
            const inner = items.map(reviewCard).join("").repeat(2);
            return `<div class="rev-col"><div class="rev-track">${inner}</div></div>`;
          })
          .join("");
      })();
      document.querySelectorAll("[data-wa]").forEach((a) => {
        if (!a.dataset.product)
          a.href = waLink();
        a.target = "_blank";
        a.rel = "noopener";
        a.addEventListener("click", () =>
          btTrack("whatsapp_click", {
            intent: a.dataset.intent || "product",
            product_id: a.dataset.product || selectedProduct?.id || null,
            journey_type:
              a.dataset.journeyType ||
              (a.dataset.intent?.startsWith("custom") ? "custom" : "product"),
            cta_location: a.dataset.ctaLocation || "unknown",
            lead_ref: refFor(a.dataset.product || a.dataset.intent || "custom"),
          }),
        );
      });
      const waFloat = document.getElementById("waFloat"),
        waPopup = document.getElementById("waPopup"),
        waButton = document.getElementById("waButton"),
        waIconChat = document.getElementById("waIconChat"),
        waIconClose = document.getElementById("waIconClose");
      function waSetOpen(open) {
        waFloat.classList.toggle("open", open);
        waButton.setAttribute("aria-expanded", String(open));
        waPopup.hidden = !open;
        waPopup.setAttribute("aria-hidden", String(!open));
        waPopup.inert = !open;
        waIconChat.style.display = open ? "none" : "";
        waIconClose.style.display = open ? "" : "none";
        if (open) waPopup.querySelector(".wa-contact")?.focus();
      }
      waButton.addEventListener("click", (e) => {
        e.stopPropagation();
        waSetOpen(!waFloat.classList.contains("open"));
      });
      document.addEventListener("click", (e) => {
        if (!waFloat.contains(e.target)) waSetOpen(false);
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") waSetOpen(false);
      });
      addEventListener(
        "scroll",
        () => {
          document.querySelector("header.site").style.padding =
            scrollY > 20 ? "8px var(--gutter)" : "14px var(--gutter)";
        },
        { passive: true },
      );
      const stickyBarEl = document.getElementById("stickyBar");
      const siteHeaderEl = document.querySelector("header.site");
      if (stickyBarEl && siteHeaderEl) {
        new IntersectionObserver(
          ([entry]) => {
            stickyBarEl.classList.toggle("is-visible", !entry.isIntersecting);
          },
          { threshold: 0 },
        ).observe(siteHeaderEl);
      }
