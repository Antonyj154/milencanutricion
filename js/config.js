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

  /* WhatsApp de Milenca. Se usa en TODOS los botones de WhatsApp del sitio.
       - number:  solo dígitos, con código de país y SIN "+", espacios ni el 0
                  inicial del celular. Ej.: 0980549220  ->  "593980549220"
       - display: cómo se muestra el número en pantalla. */
  whatsapp: {
    number: "593980549220",
    display: "+593 98 054 9220",
  },

  instagram: {
    user: "@milencanutricion",
    url: "https://www.instagram.com/milencanutricion/",
    /* Publicaciones que se muestran en el Inicio ("Sígueme en Instagram"), en orden.
       La miniatura de cada una es un archivo en assets/images/:
       inicio-instagram-1.webp, inicio-instagram-2.webp e inicio-instagram-3.webp */
    posts: [
      "https://www.instagram.com/p/DbFSF-hHGQl/",
      "https://www.instagram.com/p/DVB6BbiD9PY/",
      "https://www.instagram.com/p/DfD904mlQLx/",
    ],
  },

  /* Agendador de Google Calendar en una pestaña nueva. Solo lo usa el enlace
     "¿No se muestra el calendario? Ábrelo en una nueva pestaña". Los botones
     "Agendar" bajan a la sección "Agenda conmigo", donde está incrustado. */
  calendarUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0I4gac_Pndn903UnLJBmKj-bqh4R9ty13rADWb9HGRUvhSXWnuFN1VwnufF_XWvlUgAp-SRGx-?fbclid=PAT01DUAVeDKtleHRuA2FlbQIxMABwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp3yrIDY3u58mloZVPxoFfBhFBrBRPgVwMKOdrnq_lYJBividmystNfc4xSGf_aem_o03YlVkPK89z_mvOr9Tifw",

  /* Calendario incrustado en la sección "Agenda conmigo" (Inicio y Contacto).
     Es el mismo agendador; "?gv=true" es el formato de Google para incrustarlo. */
  calendarEmbedUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0I4gac_Pndn903UnLJBmKj-bqh4R9ty13rADWb9HGRUvhSXWnuFN1VwnufF_XWvlUgAp-SRGx-?gv=true",

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
      "Hola Milenca, quiero comenzar el Método Meta Reset. ¿Podrías darme más información sobre el programa y la disponibilidad para empezar?",
    esencial:
      "Hola Milenca, quiero elegir el Plan Esencial. ¿Podrías darme más información sobre el plan y la disponibilidad para empezar?",
    ebook:
      "Hola Milenca, estoy interesado/a en adquirir el ebook {ebook}. ¿Podrías darme más información?",
    ebooksNews:
      "Hola Milenca, me gustaría que me avises cuando tus ebooks estén disponibles.",
  },
};
