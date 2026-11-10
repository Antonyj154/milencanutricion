# Milenca Nutrición · Sitio web

Sitio web estático (HTML5 + CSS3 + JavaScript vanilla) para **Milenca Nutrición**, listo para publicarse en **GitHub Pages** sin instalar nada ni compilar.

## Estructura

```
/
├── index.html          Inicio (hero, presentación, Meta Reset, planes, modalidades, CTA)
├── ebooks.html         Catálogo de ebooks (se genera desde js/ebooks.js)
├── contacto.html       Contacto, agendamiento y formulario -> WhatsApp
├── .nojekyll           Indica a GitHub Pages que publique los archivos tal cual
├── css/styles.css      Estilos (paleta, tipografías, componentes, responsive)
├── js/config.js        ⚙️ CONFIGURACIÓN CENTRAL (teléfono, enlaces, mensajes)
├── js/main.js          Menú móvil, enlaces dinámicos, animaciones, formulario
├── js/ebooks.js        📚 Lista de ebooks (agregar / editar productos aquí)
└── assets/
    ├── images/         Fotografías (WebP) e imagen para redes (og-image.jpg)
    └── icons/          Favicon, íconos de app y manifest
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `milenca-nutricion`).
2. Sube **todo el contenido de esta carpeta** a la raíz del repositorio (botón *Add file → Upload files*, o con `git push`).
3. En el repositorio ve a **Settings → Pages**.
4. En **Build and deployment** elige *Source: Deploy from a branch*, rama `main` y carpeta **`/ (root)`**. Guarda.
5. En 1–2 minutos el sitio estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

Todas las rutas son relativas, por lo que funciona tanto en un repositorio de proyecto como en un dominio propio.

## ⚠️ Datos pendientes de reemplazar

| Dato | Dónde | Estado |
|---|---|---|
| Número de WhatsApp `+593 99 999 9999` | `js/config.js` → `whatsapp.number` y `whatsapp.display` (y luego `isPlaceholder: false`) | **PROVISIONAL** |
| Fotografía de Milenca | Subir `assets/images/milenca.webp` (aparece sola en «Quién soy») | Pendiente |
| Feed de Instagram | `js/config.js` → `instagramFeed.feedId` (ver sección *Instagram*) | Pendiente |
| Texto de presentación | `index.html`, comentario `✏️ TEXTO DE PRESENTACIÓN EDITABLE` | Texto base editable |
| Ebooks (nombres, precios, portadas) | `js/ebooks.js` | Pendiente (se muestran tarjetas «Próximamente») |
| Fotografías de «Mi enfoque» | `assets/images/bowl-antiinflamatorio.webp` y `alimentos-naturales.webp` | Fotos de stock en 1800 px (WebP). Se pueden sustituir por fotos propias con el mismo nombre. Licencia [Pexels](https://www.pexels.com/license/) (uso comercial, sin atribución obligatoria). |

> El número de WhatsApp solo lleva dígitos con código de país, sin `+`, espacios ni el `0` inicial: `0991234567` → `593991234567`.

## Cambiar teléfono, enlaces o mensajes

Todo está en **`js/config.js`**: WhatsApp, Instagram, enlace del calendario de Google, ubicación y los mensajes predeterminados de WhatsApp. Al cambiarlo ahí se actualizan todos los botones del sitio.

## Agregar un ebook

Abre **`js/ebooks.js`** y agrega un objeto a la lista `EBOOKS` (hay un ejemplo comentado al inicio del archivo):

```js
{
  id: "guia-ejemplo",
  nombre: "Nombre del ebook",
  categoria: "Guía",
  descripcion: "Descripción breve.",
  info: ["Formato PDF"],
  precio: "$XX",                                   // o "" para no mostrar precio
  portada: "assets/images/ebooks/guia-ejemplo.webp", // o "" para portada automática
  estado: "disponible"                             // o "proximamente"
},
```

- Guarda las portadas en `assets/images/ebooks/` (formato vertical 3:4, idealmente WebP).
- En cuanto exista un ebook sin `demo: true`, las tarjetas de demostración y el bloque «Próximamente» se ocultan automáticamente.
- El botón «Solicitar por WhatsApp» envía: *"Hola Milenca, estoy interesado/a en adquirir el ebook [NOMBRE]. ¿Podrías darme más información?"*

## Foto de Milenca («Quién soy»)

Es lo primero que se ve en el Inicio. Sube una foto vertical (4:5, ~1000×1250 px, idealmente WebP) a `assets/images/` con el nombre **`milenca.webp`** y aparecerá automáticamente. Mientras no exista, se muestra un monograma «M» decorativo.

## Agenda conmigo (calendario incrustado)

El agendador de Google Calendar está incrustado en la sección **«Agenda conmigo»** del Inicio y de Contacto. Su dirección está en `js/config.js` → `calendarEmbedUrl`. Los botones «Agendar consulta» siguen abriendo el calendario en una pestaña nueva (`calendarUrl`).

## Instagram (últimas publicaciones)

Instagram no permite mostrar publicaciones en una web estática sin un servicio intermedio conectado a la cuenta. El sitio está preparado para **Behold** (behold.so):

1. Crea una cuenta en https://behold.so y conecta **@milencanutricion**. Debe ser una cuenta profesional de Instagram (Creador o Empresa), lo cual se cambia gratis desde la configuración de Instagram.
2. Crea un feed, elige el diseño (por ejemplo, cuadrícula de 4 o 6 publicaciones) y copia su **Feed ID**.
3. Pégalo en `js/config.js` → `instagramFeed.feedId` y sube el archivo.

Las publicaciones se actualizan solas. Mientras `feedId` esté vacío, la sección muestra un bloque con imágenes de la marca que enlaza al perfil.

## SEO y redes sociales

- Cada página tiene título, meta description, Open Graph y datos estructurados (Schema.org) con la ubicación en Samborondón.
- Cuando conozcas la URL final, conviene reemplazar `assets/images/og-image.jpg` en las etiquetas `og:image` / `twitter:image` por la URL absoluta (ej.: `https://usuario.github.io/milenca-nutricion/assets/images/og-image.jpg`) para que la vista previa aparezca en WhatsApp y redes.

## Vista previa local

Abre `index.html` en el navegador, o desde esta carpeta ejecuta `python3 -m http.server` y visita `http://localhost:8000`.
