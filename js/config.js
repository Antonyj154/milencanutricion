/* =========================================================================
   MILENCA NUTRICIÓN · CONFIGURACIÓN CENTRALIZADA
   -------------------------------------------------------------------------
   Edita SOLO este archivo para cambiar teléfono, enlaces y datos de contacto.
   Todos los botones del sitio (WhatsApp, agendamiento, Instagram, ubicación)
   leen sus valores desde aquí.
   ========================================================================= */

window.SITE_CONFIG = {
  brand: {
    name: "Milenca Nutrición",
    tagline: "Nutrición funcional y digestiva",
  },

  /* -----------------------------------------------------------------------
     ⚠️  DATO PROVISIONAL · PENDIENTE DE REEMPLAZAR  ⚠️
     El número +593 99 999 9999 es SOLO DE EJEMPLO.
     Reemplázalo por el WhatsApp real de Milenca:
       - number:  solo dígitos, con código de país y SIN "+", espacios ni el 0
                  inicial del celular. Ej.: 0991234567  ->  "593991234567"
       - display: cómo se muestra el número en pantalla.
     Cuando lo reemplaces, cambia isPlaceholder a false.
     ----------------------------------------------------------------------- */
  whatsapp: {
    number: "593999999999",          // ⚠️ PROVISIONAL – REEMPLAZAR
    display: "+593 99 999 9999",     // ⚠️ PROVISIONAL – REEMPLAZAR
    isPlaceholder: true,             // ⚠️ Cambiar a false al poner el número real
  },

  instagram: {
    user: "@milencanutricion",
    url: "https://www.instagram.com/milencanutricion/",
  },

  /* Enlace único de agendamiento (Google Calendar). Todos los botones
     "Agendar" del sitio usan este valor. */
  calendarUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0I4gac_Pndn903UnLJBmKj-bqh4R9ty13rADWb9HGRUvhSXWnuFN1VwnufF_XWvlUgAp-SRGx-?fbclid=PAT01DUAVeDKtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp3yrIDY3u58mloZVPxoFfBhFBrBRPgVwMKOdrnq_lYJBividmystNfc4xSGf_aem_o03YlVkPK89z_mvOr9Tifw",

  /* Calendario incrustado en la sección "Agenda conmigo" (Inicio y Contacto).
     Es el mismo agendador; "?gv=true" es el formato de Google para incrustarlo. */
  calendarEmbedUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0I4gac_Pndn903UnLJBmKj-bqh4R9ty13rADWb9HGRUvhSXWnuFN1VwnufF_XWvlUgAp-SRGx-?gv=true",

  /* -----------------------------------------------------------------------
     ⚠️  PENDIENTE · FEED DE INSTAGRAM (últimas publicaciones)
     Instagram no permite mostrar publicaciones en una web estática sin un
     servicio intermedio conectado a la cuenta. Se usa Behold (behold.so):
       1. Crea una cuenta en https://behold.so y conecta @milencanutricion
          (debe ser una cuenta profesional de Instagram: Creador o Empresa).
       2. Crea un feed, elige el diseño (por ej. cuadrícula) y copia su "Feed ID".
       3. Pégalo abajo en feedId. Las publicaciones aparecerán solas en el Inicio.
     Mientras feedId esté vacío, se muestra un bloque que enlaza al perfil.
     ----------------------------------------------------------------------- */
  instagramFeed: {
    provider: "behold",
    feedId: "",                      // ⚠️ PENDIENTE – pegar aquí el Feed ID de Behold
  },

  /* Dirección: line1 y line2 se muestran en Inicio (modalidad presencial),
     Contacto y el pie de página de todas las páginas. Si cambias la dirección,
     actualiza también mapsUrl (el enlace "Cómo llegar" / "Ver en Google Maps"). */
  location: {
    line1: "Arcos Plaza 2",
    line2: "Samborondón, Ecuador",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Arcos+Plaza+2%2C+Samborond%C3%B3n%2C+Ecuador",
  },

  /* Mensajes predeterminados de WhatsApp.
     {ebook} se reemplaza automáticamente por el nombre del ebook. */
  messages: {
    general:
      "Hola Milenca, me gustaría recibir información sobre tus servicios de nutrición.",
    metaReset:
      "Hola Milenca, quiero comenzar el Método Meta Reset. ¿Podrías darme más información sobre el programa, su valor y la disponibilidad para empezar?",
    esencial:
      "Hola Milenca, quiero elegir el Plan Esencial. ¿Podrías darme más información sobre el plan, su valor y la disponibilidad para empezar?",
    ebook:
      "Hola Milenca, estoy interesado/a en adquirir el ebook {ebook}. ¿Podrías darme más información?",
    ebooksNews:
      "Hola Milenca, me gustaría que me avises cuando tus ebooks estén disponibles.",
  },
};
