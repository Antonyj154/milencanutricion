/* =========================================================================
   MILENCA NUTRICIÓN · Funcionalidad general
   - Enlaces centralizados (WhatsApp, calendario, Instagram, mapas)
   - Menú móvil accesible
   - Header al hacer scroll, animaciones de aparición
   - Formulario de contacto -> WhatsApp (sin backend)
   Los datos se leen desde js/config.js (window.SITE_CONFIG).
   ========================================================================= */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG;
  if (!CFG) {
    console.error("[Milenca] No se encontró js/config.js. Verifica que se cargue antes de main.js.");
    return;
  }

  /* ---------- Utilidades públicas (las usa también ebooks.js) ---------- */
  function waLink(message) {
    var base = "https://wa.me/" + String(CFG.whatsapp.number).replace(/\D/g, "");
    return message ? base + "?text=" + encodeURIComponent(message) : base;
  }
  function waMessage(key) {
    return (CFG.messages && CFG.messages[key]) || CFG.messages.general;
  }
  function setExternal(el, url) {
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }
  function getPath(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
  }

  window.MILENCA = { config: CFG, waLink: waLink, waMessage: waMessage, setExternal: setExternal };

  /* ---------- Enlaces dinámicos ---------- */
  function bindLinks(root) {
    var scope = root || document;

    // Agendamiento (Google Calendar)
    scope.querySelectorAll("[data-calendar]").forEach(function (el) {
      setExternal(el, CFG.calendarUrl);
    });

    // WhatsApp: data-wa="clave de mensaje" o data-wa-text="mensaje libre"
    scope.querySelectorAll("[data-wa], [data-wa-text]").forEach(function (el) {
      var text = el.getAttribute("data-wa-text") || waMessage(el.getAttribute("data-wa") || "general");
      setExternal(el, waLink(text));
    });

    scope.querySelectorAll("[data-instagram]").forEach(function (el) {
      setExternal(el, CFG.instagram.url);
    });

    scope.querySelectorAll("[data-maps]").forEach(function (el) {
      setExternal(el, CFG.location.mapsUrl);
    });

    // Textos: <span data-config="whatsapp.display"></span>
    scope.querySelectorAll("[data-config]").forEach(function (el) {
      var val = getPath(CFG, el.getAttribute("data-config"));
      if (typeof val === "string") el.textContent = val;
    });
  }
  window.MILENCA.bindLinks = bindLinks;
  bindLinks(document);

  /* ---------- Calendario incrustado ("Agenda conmigo") ---------- */
  document.querySelectorAll("iframe[data-calendar-embed]").forEach(function (frame) {
    if (CFG.calendarEmbedUrl) frame.src = CFG.calendarEmbedUrl;
  });

  /* ---------- Publicaciones de Instagram (enlaces desde config.js) ---------- */
  var igPosts = (CFG.instagram && CFG.instagram.posts) || [];
  document.querySelectorAll("[data-instagram-post]").forEach(function (el) {
    var url = igPosts[parseInt(el.getAttribute("data-instagram-post"), 10) - 1];
    if (url) setExternal(el, url);
  });

  /* ---------- Año dinámico ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("menu-principal");
  var mq = window.matchMedia("(max-width: 920px)");

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    menu.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    if (open) {
      var first = menu.querySelector("a");
      if (first) setTimeout(function () { first.focus(); }, 60);
    }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
      // Mantener el foco dentro del menú abierto (móvil)
      if (e.key === "Tab" && menu.classList.contains("is-open")) {
        var items = [toggle].concat(Array.prototype.slice.call(menu.querySelectorAll("a, button")));
        var firstEl = items[0], lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    });
    var onMq = function () { if (!mq.matches) setMenu(false); };
    if (mq.addEventListener) mq.addEventListener("change", onMq); else mq.addListener(onMq);
  }

  /* ---------- Header y botón flotante al hacer scroll ---------- */
  var header = document.querySelector(".site-header");
  var waFloat = document.querySelector(".wa-float");
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 8);
    if (waFloat) waFloat.classList.toggle("is-compact", y > 600);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---------- Aparición progresiva ---------- */
  function observeReveals(root) {
    var els = (root || document).querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }
  window.MILENCA.observeReveals = observeReveals;
  observeReveals(document);

  /* ---------- Formulario de contacto -> WhatsApp ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nombre = form.elements.nombre;
      var servicio = form.elements.servicio.value;
      var modalidad = form.elements.modalidad.value;
      var mensaje = form.elements.mensaje.value.trim();
      var error = document.getElementById("nombre-error");

      if (!nombre.value.trim()) {
        nombre.setAttribute("aria-invalid", "true");
        error.textContent = "Por favor, escribe tu nombre.";
        nombre.focus();
        return;
      }
      nombre.removeAttribute("aria-invalid");
      error.textContent = "";

      var lines = ["Hola Milenca, soy " + nombre.value.trim() + "."];
      if (servicio) lines.push("Me interesa: " + servicio + ".");
      if (modalidad) lines.push("Modalidad preferida: " + modalidad + ".");
      if (mensaje) lines.push("", mensaje);

      var url = waLink(lines.join("\n"));
      var win = window.open(url, "_blank");
      if (win) { win.opener = null; } else { window.location.href = url; }

      var status = document.getElementById("form-status");
      if (status) status.textContent = "Se abrió WhatsApp con tu mensaje. Solo tienes que pulsar «Enviar» en la aplicación.";
    });

    form.elements.nombre.addEventListener("input", function () {
      if (this.value.trim()) {
        this.removeAttribute("aria-invalid");
        document.getElementById("nombre-error").textContent = "";
      }
    });
  }
})();
