# fulcro-site

> Landing page de Fulcro Consulting · Fulcro Consulting's landing page
>
> **Flujos de trabajo que funcionan. · Workflows that work.**

---

**ES** — Sitio público de Fulcro Consulting. Consultoría de experiencia de cliente, productividad y analítica con IA, para negocios de servicios en México, El Salvador y EUA.

**EN** — Public site for Fulcro Consulting. Customer experience, productivity, and analytics consulting powered by AI, for service businesses in Mexico, El Salvador, and the US.

---

## Stack

- HTML estático + Tailwind CSS (compilado con `@tailwindcss/cli`, sin build en producción)
- Alpine.js — tarjetas expandibles, acordeón de FAQ, carrusel del hero
- AOS (Animate On Scroll) — animaciones al hacer scroll
- Lucide — íconos
- Desplegado con GitHub Pages · Deployed via GitHub Pages

## Cómo editar contenido

- **Soluciones, Casos de uso y FAQ** viven en [`data.js`](./data.js) — agrega o edita un objeto ahí, no toques `index.html`.
- **Colores y tipografía de marca** están en [`build/input.css`](./build/input.css) (bloque `@theme`).
- Después de tocar `build/input.css`, recompila con:
  ```bash
  npm install
  npx @tailwindcss/cli -i build/input.css -o css/styles.css --minify
  ```
- Si solo editas `index.html` o `data.js`, no necesitas recompilar nada.

## Analítica

Google Search Console, Google Analytics 4 y Microsoft Clarity están comentados en el `<head>` de `index.html`, listos para pegar tus IDs reales.

## Contacto · Contact

📧 `fherrador.95@gmail.com` · 📱 `+52 999 121 4977` · 📍 Mérida, Yucatán, México

---

© 2026 Fulcro Consulting · Fernando Herrador
