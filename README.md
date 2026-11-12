# Milenca Nutrición · Sitio web

Sitio web estático (HTML5 + CSS3 + JavaScript vanilla) de **Milenca Nutrición**, listo para publicarse en **GitHub Pages** sin instalar nada ni compilar.

## Estructura

```
/
├── index.html          Inicio (Quién soy, enfoque, Meta Reset, planes, modalidades, agenda, Instagram)
├── ebooks.html         Catálogo de ebooks (se genera desde js/ebooks.js)
├── contacto.html       Contacto, formulario -> WhatsApp y agenda
├── .nojekyll           Indica a GitHub Pages que publique los archivos tal cual
├── css/styles.css      Estilos (colores, tipografías, componentes, responsive)
├── js/config.js        ⚙️ CONFIGURACIÓN CENTRAL (WhatsApp, Instagram, calendario, dirección, mensajes)
├── js/main.js          Menú móvil, enlaces dinámicos, animaciones, formulario
├── js/ebooks.js        📚 Lista de ebooks (agregar / editar productos aquí)
└── assets/
    ├── images/         Todas las fotos y el logo (ver tabla abajo)
    └── icons/          Íconos de la pestaña del navegador y del celular
```

## Publicar en GitHub Pages

1. Sube **todo el contenido de esta carpeta** a la raíz del repositorio (*Add file → Upload files*).
2. En el repositorio ve a **Settings → Pages**.
3. Elige *Deploy from a branch*, rama `main` y carpeta **`/ (root)`**. Guarda.
4. En 1–2 minutos el sitio estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## 🖼️ Imágenes: cuál es cuál y cómo cambiarlas

Todas las imágenes del sitio son archivos dentro de `assets/`. El nombre indica **la página** y **el elemento**. Para cambiar una imagen, sube a la misma carpeta un archivo **con exactamente el mismo nombre** y GitHub reemplaza el anterior. No hay que tocar el código.

### `assets/images/`

| Archivo | Dónde aparece | Recomendado |
|---|---|---|
| `inicio-logo.png` | Logo del encabezado y del pie de página (en las tres páginas) | PNG cuadrado, 256 px o más |
| `inicio-presentacion.webp` | Foto de «Hola, soy Milenca» | Vertical, 1000 px de ancho |
| `inicio-enfoque-principal.webp` | Foto grande (arco) de la sección «Mi enfoque» | 1200 px |
| `inicio-enfoque-detalle.webp` | Círculo pequeño de la sección «Mi enfoque» | Cuadrada, 720 px |
| `inicio-metareset-recetario.webp` | Portada del recetario de regalo en la tarjeta de Meta Reset | Vertical (portada) |
| `inicio-instagram-1.webp`, `-2.webp`, `-3.webp` | Miniaturas de las 3 publicaciones de «Sígueme en Instagram» | Verticales 4:5 (ej. 720 × 900 px) |
| `inicio-cierre.webp` | Foto del bloque final «Empieza a construir…» | 1200 px |
| `ebooks-encabezado.webp` | Foto del encabezado de Ebooks, a la derecha del título | Vertical, 900 px de ancho |
| `ebooks-proximamente.webp` | Foto del bloque «Próximamente» | 1200 px |
| `ebooks-recetario.webp` | Portada del recetario antiinflamatorio en Ebooks | Vertical (portada) |
| `contacto-encabezado.webp` | Foto del encabezado de Contacto, a la derecha del título | Vertical, 900 px de ancho |
| `general-compartir-enlace.jpg` | Imagen que se ve al compartir el enlace por WhatsApp o redes | 1200 × 630 px, JPG |
| `ebooks/…` | Portadas de cada ebook del catálogo (se indican en `js/ebooks.js`) | Vertical 3:4 |

### `assets/icons/`

| Archivo | Dónde aparece |
|---|---|
| `general-icono-pestana.png` | Ícono de la pestaña del navegador (64 px) |
| `general-icono-celular.png` | Ícono al guardar el sitio en la pantalla de un iPhone (180 px) |
| `general-icono-app.png` | Ícono al instalar el sitio en Android (512 px) |

### Cómo preparar una foto

1. Abre [squoosh.app](https://squoosh.app), sube la foto, elige formato **WebP** (calidad 75–85) y descárgala. Así pesa poco y la página carga rápido.
2. Ponle el mismo nombre que la imagen que quieres reemplazar (por ejemplo `inicio-presentacion.webp`).
3. Súbela a `assets/images/` en GitHub y pulsa **Commit changes**.
4. Si sigues viendo la imagen anterior, recarga con **Ctrl + F5**.

Las fotos se recortan solas para llenar su marco, sin deformarse. Si el recorte no deja ver bien lo importante, se ajusta en el HTML con `object-position` (está indicado junto a cada imagen con un comentario ✏️).

Los dibujos de hojas, destellos e íconos pequeños no son archivos: forman parte del diseño (código).

## ⚙️ Datos de contacto, enlaces y mensajes

Todo está en **`js/config.js`**. Al cambiarlo ahí se actualiza en todo el sitio:

- **WhatsApp:** `whatsapp.number` (solo dígitos con código de país, ej. `593980549220`) y `whatsapp.display` (como se muestra).
- **Instagram:** usuario, enlace al perfil y las 3 publicaciones (`instagram.posts`).
- **Calendario:** `calendarEmbedUrl` (agenda incrustada) y `calendarUrl` (abrir en pestaña nueva).
- **Dirección:** `location.line1`, `location.line2` y `location.mapsUrl`.
- **Mensajes predeterminados de WhatsApp:** `messages`.

Los **precios** de los planes están escritos en `index.html` (busca `$150`, `$120` y `$100`).

## Instagram («Sígueme en Instagram»)

La sección muestra **3 publicaciones + un botón al perfil**.

- Los enlaces de las publicaciones están en `js/config.js` → `instagram.posts`, en orden.
- La miniatura de cada una es un archivo: `inicio-instagram-1.webp`, `inicio-instagram-2.webp` e `inicio-instagram-3.webp` (verticales 4:5, como se ven en Instagram).
- Para cambiar una publicación: cambia su enlace en `config.js` y reemplaza su miniatura.
- Si falta el archivo de una miniatura, ese recuadro se muestra como un enlace con el ícono de Instagram.

Instagram no permite que una web estática lea las publicaciones automáticamente, por eso las miniaturas son archivos.

## Agenda conmigo

El agendador de Google Calendar está incrustado en la sección **«Agenda conmigo»** del Inicio y de Contacto. Todos los botones «Agendar…» bajan hasta esa sección (desde Ebooks, llevan al Inicio y bajan a la agenda). Debajo del calendario hay un enlace para abrirlo en una pestaña nueva.

## Agregar un ebook

Abre **`js/ebooks.js`** y agrega un objeto a la lista `EBOOKS` (hay un ejemplo comentado al inicio del archivo):

```js
{
  id: "guia-ejemplo",
  nombre: "Nombre del ebook",
  categoria: "Guía",
  descripcion: "Descripción breve.",
  info: ["Formato PDF"],
  precio: "$XX",                                     // o "" para no mostrar precio
  portada: "assets/images/ebooks/guia-ejemplo.webp", // o "" para portada automática
  estado: "disponible"                               // o "proximamente"
},
```

- Guarda las portadas en `assets/images/ebooks/`.
- En cuanto exista un ebook sin `demo: true`, las tarjetas de demostración y el bloque «Próximamente» se ocultan solos.
- El botón «Solicitar por WhatsApp» envía: *"Hola Milenca, estoy interesado/a en adquirir el ebook [NOMBRE]. ¿Podrías darme más información?"*

## Pendiente

| Dato | Dónde |
|---|---|
| Texto de presentación de Milenca | `index.html`, comentario `✏️ TEXTO DE PRESENTACIÓN EDITABLE` |
| Ebooks (nombres, precios, portadas) | `js/ebooks.js` |
| Fotos de «Mi enfoque», del cierre y de «Próximamente» | Son de baja resolución (salen del recetario impreso); conviene reemplazarlas |

## SEO y redes sociales

Cada página tiene título, descripción, Open Graph y datos estructurados con la ubicación en Samborondón. Cuando conozcas la URL final, conviene reemplazar `assets/images/general-compartir-enlace.jpg` en las etiquetas `og:image` / `twitter:image` de los tres `.html` por la URL completa (ej.: `https://usuario.github.io/milenca-nutricion/assets/images/general-compartir-enlace.jpg`), para que la vista previa aparezca al compartir el enlace.

## Vista previa local

Abre `index.html` en el navegador, o desde esta carpeta ejecuta `python3 -m http.server` y visita `http://localhost:8000`.
