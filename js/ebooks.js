/* =========================================================================
   MILENCA NUTRICIÓN · CATÁLOGO DE EBOOKS
   -------------------------------------------------------------------------
   Para agregar, editar o quitar ebooks, modifica SOLO la lista EBOOKS.

   Campos de cada ebook:
     id          Identificador único, sin espacios (ej.: "guia-digestiva").
     nombre      Nombre del ebook (aparece en la tarjeta y en el mensaje de WhatsApp).
     categoria   Etiqueta corta (ej.: "Recetario", "Guía").            [opcional]
     descripcion Descripción breve (1–2 frases).
     info        Lista de datos adicionales (ej.: ["PDF", "40 páginas"]). [opcional]
     precio      Texto del precio (ej.: "$15"). Déjalo "" para no mostrarlo. [opcional]
     portada     Ruta relativa de la portada, ej.: "assets/images/ebooks/mi-ebook.webp".
                 Si se deja "", se genera una portada tipográfica automática. [opcional]
     estiloPortada  "petrol" | "sage" | "cream" (solo para portadas automáticas). [opcional]
     estado      "disponible"  -> botón "Solicitar por WhatsApp"
                 "proximamente"-> etiqueta "Próximamente" y botón para recibir aviso
     demo        true SOLO en los productos de demostración. Los productos demo se
                 ocultan automáticamente cuando existe al menos un ebook real.

   ⚠️ CONTENIDO PENDIENTE: Aún no se han definido nombres, precios ni portadas.
      Los elementos con demo: true son marcadores visuales de "Próximamente".

   EJEMPLO para copiar (reemplaza los datos por los reales):
   {
     id: "nombre-del-ebook",
     nombre: "Nombre del ebook",
     categoria: "Guía",
     descripcion: "Descripción breve del contenido del ebook.",
     info: ["Formato PDF"],
     precio: "",
     portada: "assets/images/ebooks/nombre-del-ebook.webp",
     estado: "disponible"
   },
   ========================================================================= */

var EBOOKS = [
  {
    id: "demo-1",
    demo: true,
    nombre: "Nuevo ebook en preparación",
    categoria: "En preparación",
    descripcion: "Contenido pendiente de publicación. Muy pronto encontrarás aquí una nueva guía de Milenca Nutrición.",
    info: ["Formato digital", "Solicitud por WhatsApp"],
    precio: "",
    portada: "",
    estiloPortada: "petrol",
    estado: "proximamente",
  },
  {
    id: "demo-2",
    demo: true,
    nombre: "Nuevo ebook en preparación",
    categoria: "En preparación",
    descripcion: "Contenido pendiente de publicación. Muy pronto encontrarás aquí un nuevo material práctico para tu día a día.",
    info: ["Formato digital", "Solicitud por WhatsApp"],
    precio: "",
    portada: "",
    estiloPortada: "sage",
    estado: "proximamente",
  },
  {
    id: "demo-3",
    demo: true,
    nombre: "Nuevo ebook en preparación",
    categoria: "En preparación",
    descripcion: "Contenido pendiente de publicación. Muy pronto encontrarás aquí nuevas herramientas para aprender sobre alimentación y bienestar.",
    info: ["Formato digital", "Solicitud por WhatsApp"],
    precio: "",
    portada: "",
    estiloPortada: "cream",
    estado: "proximamente",
  },
];

/* ---------------- Renderizado (no es necesario editar debajo) ---------------- */
(function () {
  "use strict";

  var grid = document.getElementById("catalog-grid");
  if (!grid || !window.MILENCA) return;

  var M = window.MILENCA;
  var CFG = M.config;

  var reales = EBOOKS.filter(function (e) { return !e.demo; });
  var lista = reales.length ? reales : EBOOKS;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function svgUse(id, cls) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", cls || "icon");
    svg.setAttribute("aria-hidden", "true");
    var use = document.createElementNS(ns, "use");
    use.setAttribute("href", "#" + id);
    svg.appendChild(use);
    return svg;
  }

  function cover(ebook) {
    if (ebook.portada) {
      var img = el("img", "cover-img");
      img.src = ebook.portada;
      img.alt = "Portada del ebook " + ebook.nombre;
      img.loading = "lazy";
      img.decoding = "async";
      img.width = 300;
      img.height = 400;
      return img;
    }
    var c = el("div", "cover-gen cover-gen--" + (ebook.estiloPortada || "petrol"));
    c.setAttribute("aria-hidden", "true");
    c.appendChild(el("span", "cover-gen__brand", CFG.brand.name));
    var title = el("span", "cover-gen__title", ebook.demo ? "Próximamente" : ebook.nombre);
    var wrap = el("div");
    wrap.appendChild(el("div", "cover-gen__line"));
    wrap.lastChild.style.marginBottom = ".7rem";
    wrap.appendChild(title);
    c.appendChild(wrap);
    c.appendChild(svgUse("i-branch", "botanical"));
    return c;
  }

  function card(ebook, i) {
    var disponible = ebook.estado === "disponible";
    var art = el("article", "ebook-card reveal");
    art.setAttribute("data-delay", String(i % 3));
    if (ebook.demo) art.setAttribute("data-demo", "true");

    var media = el("div", "ebook-card__media");
    var badge = el("span", "ebook-card__badge" + (disponible ? "" : " ebook-card__badge--soon"), disponible ? "Disponible" : "Próximamente");
    media.appendChild(badge);
    media.appendChild(cover(ebook));
    art.appendChild(media);

    var body = el("div", "ebook-card__body");
    if (ebook.categoria) body.appendChild(el("span", "ebook-card__cat", ebook.categoria));
    body.appendChild(el("h3", null, ebook.nombre));
    if (ebook.descripcion) body.appendChild(el("p", "ebook-card__desc", ebook.descripcion));

    if (ebook.info && ebook.info.length) {
      var ul = el("ul", "ebook-card__info");
      ul.setAttribute("aria-label", "Información adicional");
      ebook.info.forEach(function (t) { ul.appendChild(el("li", null, t)); });
      body.appendChild(ul);
    }

    var foot = el("div", "ebook-card__foot");
    if (ebook.precio) foot.appendChild(el("span", "ebook-card__price", ebook.precio));
    else foot.appendChild(el("span", "ebook-card__price ebook-card__price--muted", disponible ? "Consulta el valor" : "Pendiente de publicación"));

    var btn = el("a", "btn btn--sm " + (disponible ? "btn--accent" : "btn--ghost"));
    btn.appendChild(svgUse("i-wa"));
    var msg;
    if (disponible) {
      btn.appendChild(document.createTextNode("Solicitar por WhatsApp"));
      msg = CFG.messages.ebook.replace("{ebook}", ebook.nombre);
      btn.setAttribute("aria-label", "Solicitar por WhatsApp el ebook " + ebook.nombre);
    } else {
      btn.appendChild(document.createTextNode("Avísame por WhatsApp"));
      msg = ebook.demo ? CFG.messages.ebooksNews : CFG.messages.ebook.replace("{ebook}", ebook.nombre);
      btn.setAttribute("aria-label", "Pedir aviso por WhatsApp cuando esté disponible: " + ebook.nombre);
    }
    M.setExternal(btn, M.waLink(msg));
    foot.appendChild(btn);
    body.appendChild(foot);
    art.appendChild(body);
    return art;
  }

  grid.innerHTML = "";
  lista.forEach(function (e, i) { grid.appendChild(card(e, i)); });

  var count = document.getElementById("catalog-count");
  if (count) {
    count.textContent = reales.length
      ? reales.length + (reales.length === 1 ? " ebook" : " ebooks")
      : "Nuevos ebooks en preparación";
  }

  // Mostrar el bloque "Próximamente" solo mientras no haya ebooks reales
  var soon = document.getElementById("coming-soon");
  if (soon) soon.hidden = reales.length > 0;

  if (M.observeReveals) M.observeReveals(grid);
})();
