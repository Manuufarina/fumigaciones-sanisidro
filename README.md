# Control de Fumigaciones - San Isidro

Sistema interactivo para el seguimiento de fumigaciones por sección catastral del Municipio de San Isidro.

## Características

- 🗺️ **Mapa catastral interactivo** con zoom y navegación
- ✏️ **Editor de polígonos** para definir secciones personalizadas
- 📊 **Seguimiento mensual** de fumigaciones por sección
- 💾 **Exportar/Importar** datos en formato JSON
- 📱 **Responsive** - funciona en desktop y móvil

## Uso

### Modo Edición (dibujar polígonos)
1. Click en "✏️ Editar polígonos"
2. Seleccionar circunscripción y sección
3. Click en el mapa para agregar puntos del contorno
4. "✓ Terminar" para guardar el polígono
5. "📤 Exportar polígonos" para guardar el trabajo

### Modo Normal (registrar fumigaciones)
1. Click en una sección del mapa
2. Seleccionar fecha y agregar notas
3. "📤 Exportar datos" para backup

### Controles
- **Scroll** = Zoom in/out
- **Alt + Click** = Mover mapa
- **Click** = Seleccionar sección

## Desarrollo

```bash
npm install
npm run dev
```

## Deploy

El proyecto está configurado para deploy estático en Vercel.

## Dirección de Control de Vectores
Municipalidad de San Isidro, Buenos Aires, Argentina
