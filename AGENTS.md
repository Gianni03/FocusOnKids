# Project Context: Focus On Kids

## 🎯 Objetivo del Proyecto
Estamos finalizando un proyecto de portafolio para una Consultora Educativa/Psicológica llamada "Focus On Kids".
El objetivo actual es **Visual Polish & Vibe Coding**: Queremos cerrar el sitio para mostrarlo. No necesitamos features nuevas complejas, sino asegurar que lo que existe se vea profesional, responsivo y sin errores visuales evidentes.

## 🛠 Tech Stack & Arquitectura
* **Core:** React (SPA), Vite.
* **Lenguaje:** JavaScript (JSX).
* **Estilos:** CSS Modules (`.module.css`) + Variables CSS globales.
* **Routing:** `react-router-dom` con **HashRouter** (Rutas con `#`).
* **Gestor de Paquetes:** pnpm.

## 📂 Estructura del Proyecto (Key Map)
El proyecto está modularizado por responsabilidades:

* `src/components/`: Componentes UI reutilizables (Botones, Modales, Header). Cada uno tiene su carpeta con `index.jsx` y `style.module.css`.
* `src/pages/`: Vistas principales (Home, Contacto, Servicios). Siguen el mismo patrón de módulos CSS.
* `src/hooks/`: Lógica extraída (`useForm`, `useModal`, `useResize`). **No modificar lógica compleja salvo que rompa la UI.**
* `src/utils/` & `src/helpers/`: Validaciones de formularios y wrappers HTTP.

## 🎨 Design System & Estilo
* **Enfoque:** CSS Modules.
* **Clases:** Usamos `styles.nombreClase`.
* **Responsive:** El sitio debe ser completamente fluido (Mobile First o Desktop First, pero consistente).
* **Vibe:** Profesional, confiable, colores suaves (identidad de psicología/educación).

## 🛑 Reglas para el Agente (AI Instructions)
1.  **Prioridad Visual:** Si algo se ve roto (imágenes estiradas, desbordes en móvil, texto ilegible), arréglalo primero.
2.  **No Refactorices por Refactorizar:** Mantén la estructura actual de carpetas y hooks. Solo cambia código si es necesario para arreglar un bug visual o de navegación.
3.  **Manejo de Errores:** Si un componente falla (ej. imagen no carga), implementa fallbacks visuales elegantes en lugar de dejar el espacio en blanco o el icono de error roto.
4.  **Consistencia:** Si tocas un botón, asegúrate de que el estilo coincida con el resto de `src/components/button`.
5.  **Imágenes:** Si faltan imágenes en `assets`, usa placeholders de calidad (ej. Unsplash) temporalmente para que el layout no se rompa.

## 📝 Tareas Pendientes (To-Do Vibe Check)
* [ ] **Revisión Mobile:** Verificar que el Header/Hamburgesa funcione y que no haya scroll horizontal indeseado.
* [ ] **Links Rotos:** Asegurar que todos los botones de "Ver más" o links del Footer lleven a algún lado (o al menos a una página "WIP" o scroll al top).
* [ ] **Formularios:** Verificar que el formulario de contacto se vea bien (inputs alineados) aunque no envíe el mail real (puedes simular el success).
* [ ] **Tipografía:** Unificar fuentes y tamaños de letra (evitar cambios bruscos de tamaño).