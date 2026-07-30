/**
 * data.js — Fulcro Consulting
 * -----------------------------------------------------------------
 * Aquí vive el contenido que más cambia con el tiempo: Soluciones,
 * Casos de uso, Diplomas y Preguntas Frecuentes. Para agregar algo
 * nuevo (por ejemplo, un demo en Loom cuando esté listo), solo agrega
 * un objeto nuevo al arreglo correspondiente — no toques index.html.
 *
 * Campos de cada solución (tarjetas individuales, sin categorías):
 *   id          -> identificador único, sin espacios
 *   titulo      -> título del servicio
 *   resumen     -> 1-2 líneas de beneficio, visibles en el frente
 *   icono       -> ícono de Lucide para el título (lucide.dev/icons)
 *   chips       -> (opcional) lista corta de ejemplos como burbujas, debajo
 *                  del resumen (ej. ["Cotizaciones", "Presentaciones"])
 *   stack       -> arreglo de 3-4 pasos { icono, label } para el diagrama
 *                  del frente (workflow / stack de herramientas)
 *   entregables -> lista que aparece al voltear la tarjeta
 *   ejemplo     -> micro-ejemplo entre comillas (opcional, "" si no aplica)
 *   demoUrl     -> link de Loom del demo. "" si aún no existe
 *                  (mientras tanto se muestra "Demo en camino" al voltear)
 */

const FULCRO_SOLUCIONES = [
  {
    id: "whatsapp-instagram-ia",
    titulo: "Agente de IA para WhatsApp e Instagram",
    resumen: "Responde a tus clientes y genera reservas, rentas y ventas 24/7.",
    icono: "message-circle-heart",
    stack: [
      { icono: "message-circle", label: "Cliente escribe por WhatsApp o Instagram" },
      { icono: "workflow", label: "n8n orquesta la conversación" },
      { icono: "brain", label: "IA responde con tu base de conocimiento" },
      { icono: "inbox", label: "Bandeja Chatwoot + CRM" }
    ],
    entregables: [
      "Setup completo (herramientas y APIs)",
      "1 workflow portable de n8n en JSON",
      "1 base de conocimiento en Docs",
      "1 base de datos en Sheets",
      "1 bandeja compartida en Chatwoot",
      "1 frontend en WhatsApp o Instagram",
      "1 guía de uso y mantenimiento",
      "1 CRM ligero"
    ],
    ejemplo: "",
    demoUrl: "https://www.loom.com/share/bff99d7ab4064337be0e268e81f296cc"
  },
  {
    id: "exprime-ia-taller",
    titulo: "Exprime ChatGPT y/o Claude",
    resumen: "Taller de IA personalizado. Alineamos agenda en conjunto y capacitamos a tu equipo con un plan diferenciado por rol.",
    icono: "graduation-cap",
    stack: [
      { icono: "calendar-clock", label: "Alineamos agenda con tu equipo" },
      { icono: "graduation-cap", label: "90 min de taller de IA personalizado" },
      { icono: "file-text", label: "Notas y documentación del taller" }
    ],
    entregables: [
      "Plan de estudios diferenciado por rol",
      "90 minutos de capacitación en vivo",
      "Correo con notas y recursos del taller"
    ],
    ejemplo: "",
    demoUrl: ""
  },
  {
    id: "reporte-proyectos",
    titulo: "Reporte automático de proyectos y tareas",
    resumen: "Resumen del estado de tus proyectos y tareas, compartido periódicamente contigo y/o tu equipo por WhatsApp o el canal que prefieras.",
    icono: "list-checks",
    stack: [
      { icono: "list-checks", label: "Tu gestor de proyectos" },
      { icono: "workflow", label: "n8n extrae el avance" },
      { icono: "clipboard-list", label: "Resumen periódico" },
      { icono: "send", label: "Enviado por WhatsApp o correo" }
    ],
    entregables: [
      "Setup completo (herramientas y APIs conectadas a tu gestor de proyectos)",
      "1 workflow portable de n8n en JSON",
      "Plantilla de reporte periódico",
      "Entrega automática por WhatsApp, correo o el canal que elijas",
      "1 guía de uso y mantenimiento"
    ],
    ejemplo: "\"Lunes 9:00am: 12 tareas completadas, 3 en riesgo de retraso, 1 bloqueada — necesita tu input.\"",
    demoUrl: ""
  },
  {
    id: "google-maps",
    titulo: "Fortalece tu presencia en Google Maps",
    resumen: "Optimizamos tu perfil de negocio en Google Business Profile e implementamos un sistema para captar y responder reseñas.",
    icono: "map-pin",
    stack: [
      { icono: "map-pin", label: "Tu perfil de Google Business" },
      { icono: "workflow", label: "n8n dispara la solicitud post-servicio" },
      { icono: "star", label: "Cliente deja una reseña" },
      { icono: "reply", label: "Respuesta automática" }
    ],
    entregables: [
      "Auditoría y optimización de tu perfil de Google Business Profile",
      "1 workflow portable de n8n en JSON para solicitar reseñas después de cada servicio",
      "1 sistema de respuesta a reseñas (plantillas + alertas)",
      "1 guía de uso y mantenimiento"
    ],
    ejemplo: "\"Nueva reseña de 5★ en Google — respondida automáticamente en menos de 1 hora.\"",
    demoUrl: ""
  },
  {
    id: "resultados-clave",
    titulo: "Resultados clave, cuando los necesites",
    resumen: "Recibe tus resultados clave diarios y/o semanales por correo, en el horario que tú elijas — siempre.",
    icono: "calendar-clock",
    stack: [
      { icono: "database", label: "Tus fuentes de datos" },
      { icono: "workflow", label: "n8n arma el resumen" },
      { icono: "mail", label: "Reporte enviado a tu correo" }
    ],
    entregables: [
      "Setup completo (herramientas y APIs)",
      "1 workflow portable de n8n en JSON",
      "Plantilla de reporte por correo",
      "1 guía de uso y mantenimiento"
    ],
    ejemplo: "\"Buenos días. Ayer: 42 chats atendidos, 96% satisfacción, 3 ventas cerradas.\"",
    demoUrl: ""
  },
  {
    id: "dashboards",
    titulo: "Decisiones basadas en datos",
    resumen: "Toma decisiones con paneles interactivos. Todo en un solo lugar.",
    icono: "bar-chart-3",
    stack: [
      { icono: "database", label: "Tus fuentes de datos" },
      { icono: "plug", label: "Conexión en vivo" },
      { icono: "bar-chart-3", label: "Panel interactivo" }
    ],
    entregables: [
      "Setup completo (herramientas y APIs)",
      "Conexión a tus fuentes de datos actuales",
      "1 panel interactivo (dashboard)",
      "1 guía de uso y mantenimiento"
    ],
    ejemplo: "Panel en vivo: ventas, tiempos de respuesta y satisfacción, actualizados en tiempo real.",
    demoUrl: ""
  },
  {
    id: "pregunta-a-tus-datos",
    titulo: "Contrata a tu propio asistente de IA",
    resumen: "Tu punto de apoyo conectado con la información de tu empresa para que comparta lo que necesites, cuando lo necesites y con el alcance que tú autorices.",
    icono: "message-square-text",
    chips: ["Cotizaciones", "Presentaciones", "Procesos", "Políticas"],
    stack: [
      { icono: "folder", label: "Tus archivos y bases de datos" },
      { icono: "workflow", label: "n8n conecta todo" },
      { icono: "message-square-text", label: "Pregúntale como a un asistente" }
    ],
    entregables: [
      "Setup completo (herramientas y APIs)",
      "Conexión a tus archivos y bases de datos",
      "1 workflow portable de n8n en JSON",
      "1 guía de uso y mantenimiento"
    ],
    ejemplo: "\"¿Cuántas reservas tuvimos este mes vs. el anterior?\" → Respuesta al instante.",
    demoUrl: ""
  },
  {
    id: "sitio-web",
    titulo: "Crea o mejora tu sitio web",
    resumen: "Construimos tu página web desde cero o la mejoramos — con la opción de integrarle un chatbot de IA.",
    icono: "globe",
    stack: [
      { icono: "search", label: "Diagnóstico de tu sitio o marca" },
      { icono: "layout-template", label: "Diseño y desarrollo" },
      { icono: "message-circle", label: "Chatbot integrado (opcional)" },
      { icono: "rocket", label: "Publicación y entrega" }
    ],
    entregables: [
      "Diagnóstico y propuesta de estructura",
      "Diseño responsivo (escritorio y móvil)",
      "Desarrollo e integración de dominio y hosting",
      "Chatbot de IA integrado (si se contrata)",
      "1 guía de uso y mantenimiento"
    ],
    ejemplo: "",
    demoUrl: ""
  },
  {
    id: "crm-ligero",
    titulo: "Da seguimiento inteligente con CRM ligero",
    resumen: "Implementamos tecnología de Google o Notion para almacenar información y acciones clave de cada cliente. Se automatizan recordatorios, notificaciones y reportes.",
    icono: "user-check",
    stack: [
      { icono: "user-plus", label: "Cliente y su historial" },
      { icono: "workflow", label: "n8n organiza las acciones clave" },
      { icono: "bell", label: "Recordatorios y notificaciones" },
      { icono: "file-bar-chart", label: "Reportes automáticos" }
    ],
    entregables: [
      "Setup completo (Google Sheets o Notion + APIs)",
      "1 workflow portable de n8n en JSON",
      "Automatización de recordatorios y notificaciones",
      "Plantilla de reporte periódico",
      "1 guía de uso y mantenimiento"
    ],
    ejemplo: "\"Recordatorio automático: dar seguimiento a Cliente X — sin respuesta hace 3 días.\"",
    demoUrl: ""
  }
];

// Casos de uso ilustrativos — deja claro que son escenarios de demostración
// hasta que tengas casos reales de clientes para reemplazarlos.
const FULCRO_CASOS_USO = [
  {
    industria: "Despacho / firma de servicios profesionales",
    icono: "briefcase",
    pasos: ["Cliente escribe por WhatsApp", "IA responde y agenda", "Asesor humano da seguimiento"],
    resultado: "Menos tiempo administrativo respondiendo lo mismo una y otra vez",
    metrica: "-40%",
    metricaLabel: "tiempo administrativo"
  },
  {
    industria: "Inmobiliaria",
    icono: "home",
    pasos: ["Prospecto pregunta por una propiedad", "Asistente IA cotiza y envía ficha técnica", "Asesor cierra la visita"],
    resultado: "Cotizaciones automáticas, sin esperar a que un asesor esté libre",
    metrica: "24/7",
    metricaLabel: "respuesta instantánea"
  },
  {
    industria: "Negocio con reservaciones",
    icono: "calendar-check",
    pasos: ["Cliente escribe por WhatsApp", "IA confirma disponibilidad", "Reservación agendada y confirmada"],
    resultado: "Reservaciones automáticas, incluso fuera de horario de atención",
    metrica: "0",
    metricaLabel: "reservas perdidas por falta de respuesta"
  }
];

const FULCRO_FAQ = [
  {
    pregunta: "¿Cómo empezamos a trabajar juntos?",
    respuesta: "Con una llamada de 15 minutos, sin costo, para entender qué necesitas y confirmar que podemos ayudarte. De ahí seguimos el proceso que ves en la sección \"Cómo trabajamos\"."
  },
  {
    pregunta: "¿Cuánto cuesta un proyecto con Fulcro?",
    respuesta: "Depende del alcance. Después de la llamada inicial y la videollamada de presentación, te enviamos una propuesta y cotización por correo — no hay paquetes genéricos de precio fijo porque cada operación es distinta."
  },
  {
    pregunta: "¿Cómo funciona el pago?",
    respuesta: "El proyecto se cubre en dos partes: 50% de anticipo para arrancar y el resto contra-entrega, una vez validado el resultado final."
  },
  {
    pregunta: "¿Qué pasa si no me gusta el primer resultado?",
    respuesta: "El proceso incluye dos rondas de piloto y ajustes antes de la entrega final — tienes oportunidad de dar feedback dos veces antes de que se considere terminado."
  },
  {
    pregunta: "¿Qué pasa después de la entrega final?",
    respuesta: "Hacemos un handover completo con documentación, para que tu equipo pueda operar la solución sin depender de nosotros. Si prefieres seguir acompañado, existe un retainer mensual opcional de mantenimiento preventivo o soporte bajo demanda."
  },
  {
    pregunta: "¿Necesito tener WhatsApp Business o alguna herramienta previa?",
    respuesta: "No necesariamente. Si ya usas alguna herramienta (WhatsApp Business, Chatwoot, un CRM), la integramos. Si no tienes nada montado, te ayudamos a definir qué necesitas desde cero."
  },
  {
    pregunta: "¿Mis datos y los de mis clientes están seguros?",
    respuesta: "Sí. Trabajamos con proveedores tecnológicos reconocidos (Meta, Anthropic, Google) y no compartimos ni vendemos información a terceros. Puedes ver el detalle completo en nuestra Política de Privacidad."
  },
  {
    pregunta: "¿Trabajan con negocios fuera de México?",
    respuesta: "Sí, hemos operado proyectos en México, El Salvador y EUA. La atención y los agentes de IA pueden ser bilingües (español/inglés)."
  },
  {
    pregunta: "¿Cuánto tiempo toma implementar una solución?",
    respuesta: "Varía según el alcance, pero el proceso completo (desde la primera llamada hasta la entrega final) suele tomar entre 3 y 6 semanas."
  }
];

/**
 * Diplomas y certificaciones — se muestran en un carrusel horizontal.
 * fuenteLogo: slug de simpleicons.org si existe (ej. "coursera", "crehana"),
 * o "" para usar un ícono de Lucide genérico como respaldo.
 */
const FULCRO_DIPLOMAS = [
  { titulo: "AI Fluency: Framework & Foundations", institucion: "Anthropic", fecha: "2026", fuenteLogo: "claude" },
  { titulo: "Build AI Agents with n8n", institucion: "LinkedIn Learning", fecha: "May 2026", fuenteLogo: "" },
  { titulo: "Agentic AI: Harnessing AI Agents to Reinvent Business, Work & Life", institucion: "LinkedIn Learning", fecha: "Mar 2026", fuenteLogo: "" },
  { titulo: "Automate Your Workflows with Generative AI", institucion: "LinkedIn Learning · PMI", fecha: "Mar 2026", fuenteLogo: "" },
  { titulo: "AI Case Studies in Different Business Industries", institucion: "LinkedIn Learning · PMI", fecha: "May 2026", fuenteLogo: "" },
  { titulo: "Generative AI Tools for Productivity and Research", institucion: "LinkedIn Learning", fecha: "Mar 2025", fuenteLogo: "" },
  { titulo: "AI-Powered Presentations con ChatGPT y Copilot", institucion: "LinkedIn Learning · NASBA", fecha: "Sep 2025", fuenteLogo: "" },
  { titulo: "Using Veo 3 for AI-Generated Video", institucion: "LinkedIn Learning", fecha: "Mar 2026", fuenteLogo: "" },
  { titulo: "Google Data Studio: Reportes y dashboards", institucion: "Crehana", fecha: "Abr 2023", fuenteLogo: "crehana" },
  { titulo: "Análisis de negocio con Excel y Python", institucion: "Crehana", fecha: "Mar 2024", fuenteLogo: "crehana" },
  { titulo: "Excel: Análisis de data y tablas dinámicas", institucion: "Crehana", fecha: "Nov 2023", fuenteLogo: "crehana" },
  { titulo: "Lean Operations y eficiencia", institucion: "Crehana", fecha: "Sep 2023", fuenteLogo: "crehana" },
  { titulo: "Introducción a Lean Six Sigma", institucion: "Crehana", fecha: "Ago 2023", fuenteLogo: "crehana" },
  { titulo: "Lean Project Management", institucion: "Crehana", fecha: "Sep 2023", fuenteLogo: "crehana" },
  { titulo: "Liderazgo y habilidades de negociación", institucion: "Tec de Monterrey · Coursera", fecha: "2021", fuenteLogo: "coursera" },
  { titulo: "Leading Your Team Through Change", institucion: "LinkedIn Learning", fecha: "Jul 2025", fuenteLogo: "" },
  { titulo: "Business Development Foundations", institucion: "LinkedIn Learning", fecha: "Ago 2025", fuenteLogo: "" }
];
