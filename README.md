# Láser Bulevar

Sitio web estático de Láser Bulevar, centro de depilación láser y estética en Jaén. Está construido con Astro y TypeScript, sin CMS, formularios, analítica ni servicios externos de publicación.

## Desarrollo local

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev
```

Comandos disponibles:

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run check`: comprueba Astro y TypeScript.
- `npm run build`: genera la versión de producción en `dist/`.
- `npm run preview`: previsualiza localmente la compilación.

## Dónde editar el contenido

- Los datos de contacto, dirección, horario, Maps y valoración están centralizados en `src/config/business.ts`.
- Los textos generales de servicios y sus preguntas frecuentes están en `src/content/services.ts`.
- Las páginas están en `src/pages/` y los componentes compartidos en `src/components/`.
- Las imágenes editoriales están en `src/assets/images/`. No representan las instalaciones, el equipo ni resultados reales del centro.
- Los estilos y variables visuales están en `src/styles/global.css`.

Antes de publicar conviene volver a comprobar el horario, el teléfono y la valoración de Google.

## Sustituir imágenes y logotipo

Las tres fotografías actuales son recursos editoriales originales generados para esta primera versión. Se pueden sustituir conservando los nombres de archivo o actualizando sus importaciones. Astro genera automáticamente formatos y tamaños adaptativos durante la compilación.

La cabecera usa una marca tipográfica temporal. Cuando exista un logotipo definitivo, debe añadirse como recurso local accesible, manteniendo también el nombre del negocio como texto para lectores de pantalla.

## Borradores legales

`/legal/aviso-legal/` y `/legal/privacidad/` son borradores marcados como `noindex`. Antes de publicar deben revisarse y completarse con la razón social o titular, NIF y un correo de contacto válido.

## Publicación posterior en Vercel

Este repositorio no se despliega automáticamente. Para publicarlo más adelante en Vercel:

1. Importar el repositorio desde GitHub.
2. Seleccionar Astro como framework.
3. Usar `npm run build` como comando de compilación.
4. Usar `dist` como directorio de salida.
5. Asociar `laserbulevar.com` cuando el dominio esté preparado.

No se necesitan variables de entorno para esta versión.
