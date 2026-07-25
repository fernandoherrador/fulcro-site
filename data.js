/**
 * data.js — Fulcro Consulting
 * -----------------------------------------------------------------
 * Aquí vive el contenido que más cambia con el tiempo: Soluciones,
 * Casos de uso, Diplomas y Preguntas Frecuentes. Para agregar algo
 * nuevo (por ejemplo, un demo en Loom cuando esté listo), solo agrega
 * un objeto nuevo al arreglo correspondiente — no toques index.html.
 *
 * Campos de cada solución:
 *   id        -> identificador único, sin espacios
 *   categoria -> "Experiencia" | "Productividad" | "Analítica" (agrupa la tarjeta)
 *   titulo    -> título de la tarjeta
 *   resumen   -> 1-2 líneas que aparecen siempre visibles en la tarjeta
 *   bullets   -> detalle que aparece al expandir (opcional, [] si no aplica)
 *   demoUrl   -> link de Loom del demo. Déjalo como "" si aún no existe
 *   icono     -> nombre de ícono de Lucide (lucide.dev/icons)
 */

const FULCRO_SOLUCIONES = [
  // ── Experiencia ──────────────────────────────────────────────
  {
    id: "whatsapp-ia",
    categoria: "Experiencia",
    titulo: "Atención 24/7 en WhatsApp",
    resumen: "Atención bilingüe a tus clientes, impulsada por IA, a cualquier hora.",
    icono: "message-circle-heart",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "bandeja-compartida",
    categoria: "Experiencia",
    titulo: "Bandeja compartida de conversaciones",
    resumen: "Todo tu equipo atendiendo desde un solo lugar, sin chats perdidos.",
    icono: "inbox",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "desempeno-asesores",
    categoria: "Experiencia",
    titulo: "Medición de desempeño",
    resumen: "Tiempos de respuesta y calidad de atención de cada asesor, visibles.",
    icono: "gauge",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "engagement-web",
    categoria: "Experiencia",
    titulo: "Engagement en tu página web",
    resumen: "Mejora la experiencia de tus visitantes con IA integrada a tu sitio.",
    icono: "globe",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "seguimiento-recordatorios",
    categoria: "Experiencia",
    titulo: "Seguimiento automático",
    resumen: "Recordatorios en el momento exacto — ningún cliente se pierde.",
    icono: "bell-ring",
    bullets: [],
    demoUrl: ""
  },

  // ── Productividad ─────────────────────────────────────────────
  {
    id: "capacitacion-ia",
    categoria: "Productividad",
    titulo: "Capacitación en Claude y ChatGPT",
    resumen: "Tu equipo aprende a sacarle el máximo provecho a la IA en su trabajo diario.",
    icono: "graduation-cap",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "propuestas-rapidas",
    categoria: "Productividad",
    titulo: "Propuestas comerciales más rápidas",
    resumen: "Entrega cotizaciones y propuestas antes que la competencia.",
    icono: "file-text",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "asistente-interno",
    categoria: "Productividad",
    titulo: "Asistente interno de IA",
    resumen: "Entrenado con la información de tu empresa — tu equipo le pregunta y responde.",
    icono: "sparkles",
    bullets: [
      "Genera cotizaciones en segundos, pidiéndoselas por chat.",
      "Responde preguntas frecuentes, políticas, permisos, vacaciones, etc.",
      "Acelera la capacitación de nuevos empleados.",
      "Encuentra cualquier archivo en segundos."
    ],
    demoUrl: ""
  },

  // ── Analítica ──────────────────────────────────────────────────
  {
    id: "dashboards",
    categoria: "Analítica",
    titulo: "Dashboards interactivos",
    resumen: "Visualiza tus datos con gráficos claros, sin abrir una hoja de cálculo.",
    icono: "bar-chart-3",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "reporte-semanal",
    categoria: "Analítica",
    titulo: "Reporte semanal automático",
    resumen: "Resultados clave en tu correo — mismo día, misma hora, cada semana.",
    icono: "calendar-clock",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "analisis-por-chat",
    categoria: "Analítica",
    titulo: "Análisis por chat",
    resumen: "Pide un resumen de tus hojas de cálculo o documentos, y lo tienes al instante.",
    icono: "message-square-text",
    bullets: [],
    demoUrl: ""
  },
  {
    id: "insights-negocio",
    categoria: "Analítica",
    titulo: "Insights accionables",
    resumen: "Convierte los datos que ya captura tu negocio en decisiones concretas.",
    icono: "lightbulb",
    bullets: [],
    demoUrl: ""
  }
];

// Categorías — orden y descripción corta para los encabezados de sección
const FULCRO_CATEGORIAS = [
  { nombre: "Experiencia", desc: "Cómo viven tus clientes cada interacción contigo.", color: "blue" },
  { nombre: "Productividad", desc: "Cómo trabaja tu equipo por dentro, todos los días.", color: "indigo" },
  { nombre: "Analítica", desc: "Cómo ves y decides sobre tu negocio, con datos.", color: "teal" }
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
