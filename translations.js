/* ==========================================================================
   TRANSLATIONS.JS - DICCIONARIO DE TRADUCCIONES (ESPAÑOL / INGLÉS)
   ========================================================================== */

const translations = {
  es: {
    meta: {
      title: "MarcosLunaDev | Arquitectura Frontend, Consultoría Angular y Node/NestJS",
      description: "En MarcosLunaDev ayudamos a empresas a construir frontends Angular/React escalables, APIs Node/NestJS y arquitecturas robustas, potenciados por desarrollo asistido por IA y Spec-Driven Development. ¡Hablemos!",
      keywords: "desarrollo web, Angular, React, Vue, Node.js, NestJS, desarrollo frontend, desarrollo backend, aplicaciones web, MarcosLunaDev, Marcos Luna, arquitectura web, Spec-Driven Development, Inteligencia Artificial",
      ogTitle: "MarcosLunaDev | Arquitectura Frontend & Backend",
      ogDesc: "En MarcosLunaDev ayudamos a empresas a construir frontends Angular/React escalables, APIs Node/NestJS y arquitecturas robustas listas para producción.",
    },
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      tecnologias: "Tecnologías",
      portafolio: "Portafolio",
      equipo: "Perfil profesional",
      contacto: "Contacto"
    },
    hero: {
      tag: "Frontend Architecture & Backend Consulting",
      title: '<span class="text-gradient">Código que Impulsa</span><br /><span class="text-white">el Futuro</span>',
      subtitle: "En MarcosLunaDev ayudamos a empresas a construir frontends Angular/React escalables y APIs Node/NestJS, potenciando el desarrollo con herramientas de IA y Spec‑Driven Development para asegurar calidad y velocidad.",
      btnStart: "Iniciar Proyecto",
      btnPortfolio: "Ver Portafolio",
      promise: "⚡ Respuesta en 48-72h",
      stat1Num: "20+",
      stat1Label: "Proyectos Corporativos",
      stat2Num: "98%",
      stat2Label: "Satisfacción del Cliente",
      stat3Num: "15+",
      stat3Label: "Años de Experiencia"
    },
    servicios: {
      tag: "&lt; Servicios de MarcosLunaDev /&gt;",
      title: 'Soluciones <span class="text-gradient">Profesionales</span>',
      subtitle: "Ofrecemos servicios integrales de desarrollo web que cubren todas las necesidades de tu proyecto digital.",
      card1: {
        title: "Desarrollo Frontend Angular & React",
        desc: "Interfaces modernas y responsivas con las últimas tecnologías.",
        li1: "Single Page Applications",
        li2: "Progressive Web Apps",
        li3: "Diseño Responsivo",
        li4: "Optimización de Rendimiento"
      },
      card2: {
        title: "Desarrollo Node/NestJS para Productos Corporativos",
        desc: "APIs robustas y escalables con Node.js y NestJS para tu negocio.",
        li1: "Node.js & NestJS",
        li2: "RESTful APIs / GraphQL",
        li3: "Microservicios",
        li4: "Bases de Datos Relacionales y NoSQL"
      },
      card3: {
        title: "Cloud & DevOps",
        desc: "Infraestructura en la nube y automatización de procesos.",
        li1: "CI/CD Integrado",
        li2: "Contenedores Docker",
        li3: "Orquestación Kubernetes",
        li4: "AWS / Azure / GCP"
      },
      card4: {
        title: "UI/UX Design",
        desc: "Diseños centrados en el usuario y la experiencia de navegación.",
        li1: "Prototipado Interactivo",
        li2: "Sistemas de Diseño",
        li3: "Investigación de Usuarios",
        li4: "Fidelidad de Wireframes"
      },
      card5: {
        title: "Consultoría Angular & Arquitectura Frontend",
        desc: "Asesoramiento estratégico para optimizar tu proyecto tecnológico.",
        li1: "Arquitectura de Software",
        li2: "Revisiones de Código",
        li3: "Auditorías Técnicas",
        li4: "Mentoring a Equipos"
      },
      card6: {
        title: "Arquitectura & APIs",
        desc: "Diseño de sistemas escalables y APIs de alto rendimiento.",
        li1: "Diseño Limpio de APIs",
        li2: "Arquitectura Hexagonal",
        li3: "Event-Driven Architectures",
        li4: "Optimización de Consultas SQL"
      }
    },
    tecnologias: {
      tag: "&lt; Stack Tecnológico /&gt;",
      title: 'Especialidades <span class="text-gradient">Técnicas</span>',
      subtitle: "Dominamos las tecnologías más demandadas del mercado para crear soluciones de vanguardia.",
      angular: {
        title: "Angular",
        desc: "Framework robusto para aplicaciones empresariales escalables.",
        tag1: "TypeScript",
        tag2: "RxJS",
        tag3: "Inyección de Dependencias",
        tag4: "CLI Potente"
      },
      react: {
        title: "React",
        desc: "Biblioteca flexible para interfaces de usuario altamente dinámicas.",
        tag1: "Hooks",
        tag2: "Virtual DOM",
        tag3: "Basado en Componentes",
        tag4: "Ecosistema Amplio"
      },
      next: {
        title: "Next.js",
        desc: "Framework React con renderizado en el servidor y estático optimizado.",
        tag1: "SSR / SSG",
        tag2: "Rutas de API",
        tag3: "Optimización de Imágenes",
        tag4: "División de Código"
      },
      node: {
        title: "Node.js / NestJS",
        desc: "Entorno de ejecución y framework estructurado para desarrollo backend de alto rendimiento.",
        tag1: "Event-Driven",
        tag2: "I/O No Bloqueante",
        tag3: "Ecosistema NPM",
        tag4: "Altamente Escalable"
      },
      bun: {
        title: "Bun",
        desc: "Runtime ultrarrápido y toolkit todo-en-uno para Javascript moderno.",
        tag1: "Velocidad Extrema",
        tag2: "Empaquetador Integrado",
        tag3: "TypeScript Nativo",
        tag4: "Compatibilidad de Drop-in"
      },
      secondary: "También trabajamos con",
      aiTag: "&lt; IA Aplicada /&gt;",
      aiTitle: "Ingeniería Aumentada & <span class=\"text-gradient\">Stack IA</span>",
      aiSubtitle: "Criterio técnico y workflow de desarrollo optimizado mediante copilotos cognitivos, inferencia local privada y agentes autónomos.",
      aiFilterAll: "Todos",
      aiFilterDev: "Entorno & Terminal",
      aiFilterLocal: "Inferencia Local",
      aiFilterCloud: "Modelos Cloud",
      aiFilterAgent: "Agentes & APIs",
      aiList: {
        cursor: "Entorno de desarrollo principal optimizado para edición de código contextual multi-archivo en tiempo real y refactorización guiada.",
        opencode: "Automatización de tareas repetitivas en terminal y flujos de empaquetado optimizados con scripts locales.",
        ollama: "Orquestación de modelos de lenguaje abiertos (Llama, Phi) en local para desarrollo offline y protección de propiedad intelectual.",
        lmstudio: "Servidor de inferencia local con compatibilidad de API OpenAI para experimentación y validación rápida de modelos abiertos.",
        anthropic: "Razonamiento lógico complejo para refactorizaciones estructurales y auditorías de código seguras.",
        gemini: "Análisis de repositorios completos gracias a su ventana de contexto de millones de tokens.",
        openai: "Procesamiento de lenguaje natural y APIs ágiles para su integración directa en flujos backend.",
        antigravity: "Desarrollo de flujos agenticos autónomos y toma de decisiones multinivel orquestados por código JS/TS.",
        windsurf: "Editor e IDE avanzado con flujos de agente integrados y depuración en tiempo real.",
        devin: "Agente de ingeniería de software autónomo capaz de ejecutar tareas complejas en sandboxes aislados.",
        v0: "Generador de interfaces de usuario asistido por IA para prototipado rápido de componentes React y Tailwind CSS.",
        langchain: "Orquestador y framework para el desarrollo de flujos complejos de IA, encadenamiento de prompts y recuperación RAG."
      }
    },
    comoTrabajo: {
      tag: "&lt; Metodología /&gt;",
      title: 'Cómo <span class="text-gradient">Trabajo</span>',
      subtitle: "Un proceso estructurado para garantizar el éxito y la calidad de principio a fin.",
      step1: {
        title: "1. Discovery",
        desc: "Reuniones iniciales para entender a fondo tus necesidades, objetivos de negocio y limitaciones técnicas."
      },
      step2: {
        title: "2. Propuesta Técnica",
        desc: "Definición detallada de la arquitectura, stack tecnológico, roadmap de entrega y estimación de costes."
      },
      step3: {
        title: "3. Desarrollo asistido por IA",
        desc: "Desarrollo acelerado por IA y validado bajo Spec-Driven Development. Garantiza código robusto, alineado con las especificaciones y libre de regresiones."
      },
      step4: {
        title: "4. Entrega",
        desc: "Puesta en producción de manera segura en la nube (AWS/GCP/Azure) con validación y optimización SEO/Web Vitals."
      },
      step5: {
        title: "5. Soporte",
        desc: "Acompañamiento post-lanzamiento, monitorización de errores en producción y evolución del sistema."
      }
    },
    portfolio: {
      tag: "&lt; Casos de Éxito /&gt;",
      title: 'Proyectos <span class="text-gradient">Corporativos</span>',
      subtitle: "Soluciones empresariales desarrolladas para diferentes sectores industriales y corporativos.",
      filterAll: "Todos",
      filterReact: "React",
      filterAngular: "Angular",
      project1: {
        title: "Gestión de Renovación de Tuberías",
        desc: "<b>Complejidad:</b> Planificación ineficiente y manual de obras críticas en red de gas. <br /><b>Rol:</b> Frontend Lead & Architect. <br /><b>Solución:</b> Reconstrucción del core frontend y sincronización offline. <br /><b>Impacto:</b> Reducción del 25% en tiempos de ejecución de obras y digitalización de 500+ km de red.",
        details: "Ver detalles",
        tag: "Energía"
      },
      project2: {
        title: "Planificación de Anaqueles",
        desc: "<b>Complejidad:</b> Optimización tridimensional de góndolas para grandes superficies. <br /><b>Rol:</b> Frontend Architect. <br /><b>Solución:</b> Motor de render interactivo con algoritmos de ordenación 3D. <br /><b>Impacto:</b> Aumento del 14% en ventas cruzadas y reducción de errores de stock en tienda.",
        details: "Ver detalles",
        tag: "Retail"
      },
      project3: {
        title: "Mantenimiento Predictivo de Redes",
        desc: "<b>Complejidad:</b> Fugas imprevistas en redes de distribución con pérdidas millonarias. <br /><b>Rol:</b> Full-stack Developer. <br /><b>Solución:</b> API de ML para predecir puntos de fatiga por presión. <br /><b>Impacto:</b> Reducción del 30% en averías mayores y optimización del mantenimiento preventivo.",
        details: "Ver detalles",
        tag: "Energía"
      },
      project4: {
        title: "Gobierno de Consultas Lingüísticas IA",
        desc: "<b>Complejidad:</b> Catalogación de miles de consultas lingüísticas sin categorizar. <br /><b>Rol:</b> Lead Developer. <br /><b>Solución:</b> Integración de LLMs para análisis semántico y categorización. <br /><b>Impacto:</b> Procesamiento automático del 95% de consultas y buscador inteligente.",
        details: "Ver detalles",
        tag: "Académico"
      },
      project5: {
        title: "Gestión de Siniestros y Flotas",
        desc: "<b>Complejidad:</b> Tracking en papel y retrasos en partes de siniestros de 200+ autobuses. <br /><b>Rol:</b> Full-stack Developer. <br /><b>Solución:</b> App móvil web responsiva offline-first. <br /><b>Impacto:</b> Reducción del 50% en tiempo de tramitación con seguros y alertas en tiempo real.",
        details: "Ver detalles",
        tag: "Transporte"
      },
      project6: {
        title: "Suite Bancaria & Prevención de Riesgo",
        desc: "<b>Complejidad:</b> Auditorías de crimen financiero e integraciones heredadas lentas. <br /><b>Rol:</b> Tech Lead / Frontend Architect. <br /><b>Solución:</b> Arquitectura micro-frontend con caching agresivo, acelerada mediante copilotos cognitivos (Windsurf) y agentes autónomos (Devin Cloud) para refactorización masiva. <br /><b>Impacto:</b> Reducción de latencia en un 40% y cumplimiento normativo estricto auditado.",
        details: "Ver detalles",
        tag: "Banca"
      }
    },
    equipo: {
      tag: "&lt; Fundador /&gt;",
      title: 'El Especialista detrás de <span class="text-gradient">MarcosLunaDev</span>',
      subtitle: "Un profesional comprometido con la excelencia técnica y la innovación digital.",
      role: "&lt; Founder &amp; Lead Consultant /&gt;",
      bio: "Arquitecto, Líder Técnico y Senior Frontend Engineer con más de <b>15 años de experiencia</b> entregando aplicaciones web escalables, diseñando soluciones técnicas complejas y liderando equipos de desarrollo multidisciplinares.",
      bioExtra: "Con una formación única que combina Ingeniería Naval en Electrónica y Telecomunicaciones con Administración de Sistemas Informáticos, me especializo en conectar infraestructuras robustas, seguridad de sistemas y el stack de desarrollo web moderno, optimizado mediante desarrollo asistido por IA y metodologías de Spec‑Driven Development."
    },
    contacto: {
      tag: "&lt; Hablemos /&gt;",
      title: 'Comienza tu <span class="text-gradient">Proyecto</span>',
      subtitle: "Estamos listos para convertir tu reto técnico en realidad. Responderemos en un plazo de 48-72h.",
      infoTitle: "Información de Contacto",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      hoursLabel: "Horario",
      hoursWeek: "Lunes - Viernes: 9:00 - 18:00",
      hoursSaturday: "Sábado: 10:00 - 14:00",
      followUs: "Conecta conmigo",
      formName: "Nombre completo *",
      placeholderName: "Tu nombre",
      formEmail: "Email *",
      placeholderEmail: "tu@email.com",
      formMessage: "Mensaje *",
      placeholderMessage: "Ej: Necesitamos construir un frontend en Angular escalable y robusto...",
      charLabel: "caracteres",
      formSubmit: "Enviar Mensaje",
      formSubmitting: "Enviando...",
      feedbackSuccess: "¡Gracias! Tu mensaje ha sido enviado correctamente por correo. Nos pondremos en contacto contigo pronto.",
      feedbackError: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o envíanos un correo directo.",
      privacyAcceptLabel: "He leído y acepto la <a href=\"politica-privacidad.html\" target=\"_blank\">Política de privacidad</a> *"
    },
    footer: {
      brandDesc: "Desarrollo de software y arquitectura web de alto rendimiento. Apalancados en desarrollo asistido por IA y Spec-Driven Development.",
      quickLinks: "Enlaces Rápidos",
      services: "Servicios",
      copyright: "&copy; 2026 MarcosLunaDev. Todos los derechos reservados.",
      privacy: "Políticas de privacidad",
      terms: "Aviso Legal"
    },
    privacy: {
      metaTitle: "Políticas de Privacidad - MarcosLunaDev",
      title: "Políticas de Privacidad",
      subtitle: "Última actualización: 8 de julio de 2026",
      sec1Title: "1. Responsable del tratamiento",
      sec1Text: "<strong>Titular:</strong> Marcos Daniel Luna Rodríguez<br><strong>Domicilio:</strong> Madrid, España<br><strong>Correo de contacto en materia de protección de datos:</strong> info@marcoslunadev.com",
      sec2Title: "2. Datos tratados, origen y finalidad",
      sec2Text1: "En esta web únicamente se recaban datos personales a través del formulario de contacto.",
      sec2Text2: "Los datos que se pueden solicitar son: nombre, dirección de correo electrónico y el contenido del mensaje que el usuario decida enviar.",
      sec2Text3: "La finalidad del tratamiento es atender las consultas, solicitudes o comentarios que el usuario remita y poder responderle por correo electrónico.",
      sec2Text4: "No se realizan perfiles, no se envía publicidad ni newsletters, ni se utilizan los datos con fines comerciales distintos a responder a la solicitud del usuario.",
      sec3Title: "3. Base jurídica del tratamiento",
      sec3Text: "La base legal para el tratamiento de los datos es el consentimiento del usuario, manifestado al remitir voluntariamente el formulario de contacto y aceptar la presente política de privacidad.",
      sec4Title: "4. Conservación de los datos",
      sec4Text1: "Los datos personales se conservarán únicamente durante el tiempo necesario para gestionar la consulta o comunicación enviada y, en su caso, durante los plazos exigidos por la normativa aplicable.",
      sec4Text2: "Una vez finalizada la gestión de la consulta, los datos podrán ser eliminados o archivados de forma bloqueada según corresponda.",
      sec5Title: "5. Destinatarios y encargados de tratamiento",
      sec5Text1: "Los datos no se ceden a terceros, salvo obligación legal.",
      sec5Text2: "El envío del formulario genera un correo electrónico dirigido a la cuenta personal del titular, gestionada por el proveedor de servicios de correo y de alojamiento que corresponda (por ejemplo GitHub Pages para la web y tu proveedor de email), los cuales pueden actuar como encargados de tratamiento al prestarte servicios de alojamiento y correo.",
      sec5Text3: "No están previstas transferencias internacionales de datos distintas de las derivadas del uso de los servicios de alojamiento y correo electrónico indicados, que se realizan bajo las condiciones de protección de datos establecidas por dichos proveedores.",
      sec6Title: "6. Derechos de los usuarios",
      sec6Text1: "Cualquier persona tiene derecho a obtener confirmación sobre si se están tratando datos personales que le conciernen, así como a ejercer los siguientes derechos:",
      sec6Li1: "Derecho de acceso a sus datos personales.",
      sec6Li2: "Derecho de rectificación de los datos inexactos.",
      sec6Li3: "Derecho de supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.",
      sec6Li4: "Derecho de oposición al tratamiento.",
      sec6Li5: "Derecho a solicitar la limitación del tratamiento de sus datos.",
      sec6Li6: "Derecho a la portabilidad de los datos en los casos previstos en la normativa.",
      sec6Text2: "El ejercicio de estos derechos puede realizarse enviando un correo electrónico a info@marcoslunadev.com, indicando el derecho que se desea ejercer y adjuntando una copia de un documento identificativo válido (DNI, NIE, pasaporte).",
      sec6Text3: "Asimismo, si el usuario considera que el tratamiento de sus datos no se ajusta a la normativa vigente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su web <a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">www.aepd.es</a>.",
      sec7Title: "7. Cookies y otros datos",
      sec7Text1: "Actualmente esta web no utiliza cookies propias para finalidades de seguimiento, analítica o publicidad.",
      sec7Text2: "En caso de que en el futuro se incorporen cookies o tecnologías similares, se informará debidamente al usuario y se solicitará su consentimiento en los términos exigidos por la normativa.",
      sec8Title: "8. Seguridad de los datos",
      sec8Text1: "El titular aplicará las medidas técnicas y organizativas razonables para proteger los datos personales y evitar su pérdida, mal uso, alteración, acceso no autorizado o robo.",
      sec8Text2: "Entre otras medidas, se utilizarán conexiones cifradas (HTTPS) cuando el servicio de alojamiento lo permita y se mantendrán actualizados los sistemas utilizados para la gestión de la web."
    },
    legal: {
      metaTitle: "Aviso Legal - MarcosLunaDev",
      title: "Aviso Legal y Condiciones de Uso",
      subtitle: "Última actualización: 8 de julio de 2026",
      sec1Title: "1. Información general",
      sec1Text: "En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI‑CE), se indica a continuación la información general del sitio web:<br><br><strong>Titular:</strong> Marcos Daniel Luna Rodríguez<br><strong>Domicilio:</strong> Madrid, España<br><strong>Correo electrónico de contacto:</strong> info@marcoslunadev.com<br><br>Este sitio web tiene carácter personal y divulgativo, y su finalidad principal es mostrar información sobre la actividad profesional y proyectos de su titular, así como facilitar un medio de contacto.",
      sec2Title: "2. Condiciones de acceso y uso del sitio web",
      sec2Text1: "El acceso y/o uso de este sitio web atribuye la condición de usuario, que acepta desde dicho acceso y/o uso las presentes condiciones generales.",
      sec2Text2: "El usuario se compromete a utilizar el sitio web de forma diliente, correcta y lícita, y a no realizar actividades que puedan dañar la imagen, los intereses o los derechos del titular o de terceros.",
      sec2Text3: "El titular se reserva el derecho a modificar en cualquier momento y sin previo aviso la presentación, configuración y contenido del sitio web, así como las presentes condiciones de uso.",
      sec3Title: "3. Propiedad intelectual e industrial",
      sec3Text1: "Todos los contenidos del sitio web (textos, imágenes, diseños, logotipos, código fuente y cualesquiera otros elementos que aparezcan), salvo indicación expresa en contrario, son titularidad de Marcos Luna Dev o se utilizan con las licencias correspondientes.",
      sec3Text2: "Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de dichos contenidos sin la autorización previa y expresa del titular, salvo en los casos en que esté legalmente permitido.",
      sec3Text3: "El usuario se compromete a respetar todos los derechos de propiedad intelectual e industrial sobre los contenidos del sitio.",
      sec4Title: "4. Enlaces externos",
      sec4Text1: "Este sitio web puede contener enlaces a sitios web de terceros.",
      sec4Text2: "El titular no se responsabiliza de los contenidos, servicios o cualquier otro elemento que se ofrezca en dichos sitios enlazados, ni de los daños o perjuicios que puedan derivarse del acceso a ellos, ya que no tiene control sobre esos recursos.",
      sec4Text3: "La inclusión de enlaces externos no implica la existencia de relación, colaboración o dependencia entre el titular y los responsables de esos sitios.",
      sec5Title: "5. Responsabilidad",
      sec5Text1: "El titular no garantiza la inexistencia de errores en el acceso al sitio web, en su contenido, ni que este se encuentre actualizado, aunque se compromete a realizar los esfuerzos razonables para evitarlos, subsanarlos o actualizarlos.",
      sec5Text2: "El usuario accede al sitio web bajo su exclusiva responsabilidad. El titular no se hace responsable de los daños y perjuicios que pudieran derivarse del uso del sitio web, incluyendo, a título enunciativo, fallos de funcionamiento, interrupciones del servicio, presencia de virus o ataques informáticos, siempre que se hayan adoptado las medidas de seguridad razonables.",
      sec5Text3: "El sitio web no ofrece, en su versión actual, servicios de comercio electrónico ni contratación online, por lo que no existen condiciones de venta ni contratación específicas.",
      sec6Title: "6. Política de privacidad y protección de datos",
      sec6Text1: "El tratamiento de los datos personales que se pudiera realizar como consecuencia del uso del formulario de contacto se regirá por lo establecido en la Política de privacidad, accesible en todo momento desde el sitio web.",
      sec6Text2: "Se recomienda al usuario consultar dicho documento para conocer en detalle cómo se recogen, utilizan y protegen sus datos personales, así como los derechos que le asisten.",
      sec7Title: "7. Política de cookies",
      sec7Text1: "En la actualidad este sitio web no utiliza cookies propias con fines de analítica, publicidad o perfiles de usuario.",
      sec7Text2: "En caso de incorporar cookies en el futuro, se informará debidamente al usuario y se implementará la correspondiente política de cookies y mecanismo de aceptación.",
      sec8Title: "8. Legislación aplicable y jurisdicción",
      sec8Text1: "Las presentes condiciones se rigen por la legislación española.",
      sec8Text2: "Para cualquier controversia que pudiera derivarse del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales de Madrid, salvo que la normativa aplicable establezca otra cosa."
    }
  },
  en: {
    meta: {
      title: "MarcosLunaDev | Frontend Architecture, Angular Consulting & Node/NestJS",
      description: "At MarcosLunaDev, we help companies build scalable Angular/React frontends, Node/NestJS APIs, and robust architectures, boosted by AI-assisted coding and Spec-Driven Development. Let's talk!",
      keywords: "web development, Angular, React, Vue, Node.js, NestJS, frontend development, backend development, web applications, MarcosLunaDev, Marcos Luna, web architecture, Spec-Driven Development, Artificial Intelligence",
      ogTitle: "MarcosLunaDev | Frontend Architecture & Backend Consulting",
      ogDesc: "At MarcosLunaDev, we help companies build scalable Angular/React frontends, Node/NestJS APIs, and robust production-ready architectures.",
    },
    nav: {
      inicio: "Home",
      servicios: "Services",
      tecnologias: "Technologies",
      portafolio: "Portfolio",
      equipo: "Professional Profile",
      contacto: "Contact"
    },
    hero: {
      tag: "Frontend Architecture & Backend Consulting",
      title: '<span class="text-gradient">Code that Drives</span><br /><span class="text-white">the Future</span>',
      subtitle: "At MarcosLunaDev, we help companies build scalable Angular/React frontends and Node/NestJS APIs, leveraging AI tools and Spec‑Driven Development to ensure quality and speed.",
      btnStart: "Start Project",
      btnPortfolio: "View Portfolio",
      promise: "⚡ Response in 48-72h",
      stat1Num: "20+",
      stat1Label: "Corporate Projects",
      stat2Num: "98%",
      stat2Label: "Client Satisfaction",
      stat3Num: "15+",
      stat3Label: "Years of Experience"
    },
    servicios: {
      tag: "&lt; MarcosLunaDev Services /&gt;",
      title: 'Professional <span class="text-gradient">Solutions</span>',
      subtitle: "We offer comprehensive web development services that cover all the needs of your digital project.",
      card1: {
        title: "Angular & React Frontend Development",
        desc: "Modern and responsive interfaces using the latest technologies.",
        li1: "Single Page Applications",
        li2: "Progressive Web Apps",
        li3: "Responsive Design",
        li4: "Performance Optimization"
      },
      card2: {
        title: "Node/NestJS Development for Corporate Products",
        desc: "Robust and scalable APIs with Node.js and NestJS for your business.",
        li1: "Node.js & NestJS",
        li2: "RESTful APIs / GraphQL",
        li3: "Microservices",
        li4: "Relational and NoSQL Databases"
      },
      card3: {
        title: "Cloud & DevOps",
        desc: "Cloud infrastructure and process automation.",
        li1: "Integrated CI/CD",
        li2: "Docker Containers",
        li3: "Kubernetes Orchestration",
        li4: "AWS / Azure / GCP"
      },
      card4: {
        title: "UI/UX Design",
        desc: "Designs focused on the user and the navigation experience.",
        li1: "Interactive Prototyping",
        li2: "Design Systems",
        li3: "User Research",
        li4: "High-fidelity Wireframes"
      },
      card5: {
        title: "Angular Consulting & Frontend Architecture",
        desc: "Strategic advice to optimize your technological project.",
        li1: "Software Architecture",
        li2: "Code Reviews",
        li3: "Technical Audits",
        li4: "Team Mentoring"
      },
      card6: {
        title: "Architecture & APIs",
        desc: "Design of scalable systems and high-performance APIs.",
        li1: "Clean API Design",
        li2: "Hexagonal Architecture",
        li3: "Event-Driven Architectures",
        li4: "SQL Query Optimization"
      }
    },
    tecnologias: {
      tag: "&lt; Tech Stack /&gt;",
      title: 'Technical <span class="text-gradient">Specialties</span>',
      subtitle: "We master the most in-demand technologies in the market to create cutting-edge solutions.",
      angular: {
        title: "Angular",
        desc: "Robust framework for scalable enterprise applications.",
        tag1: "TypeScript",
        tag2: "RxJS",
        tag3: "Dependency Injection",
        tag4: "Powerful CLI"
      },
      react: {
        title: "React",
        desc: "Flexible library for highly dynamic user interfaces.",
        tag1: "Hooks",
        tag2: "Virtual DOM",
        tag3: "Component-Based",
        tag4: "Broad Ecosystem"
      },
      next: {
        title: "Next.js",
        desc: "React framework with optimized server-side and static rendering.",
        tag1: "SSR / SSG",
        tag2: "API Routes",
        tag3: "Image Optimization",
        tag4: "Code Splitting"
      },
      node: {
        title: "Node.js / NestJS",
        desc: "Runtime environment and structured framework for high-performance backend development.",
        tag1: "Event-Driven",
        tag2: "Non-Blocking I/O",
        tag3: "NPM Ecosystem",
        tag4: "Highly Scalable"
      },
      bun: {
        title: "Bun",
        desc: "Ultrafast runtime and all-in-one toolkit for modern JavaScript.",
        tag1: "Extreme Speed",
        tag2: "Built-in Bundler",
        tag3: "Native TypeScript",
        tag4: "Drop-in Compatibility"
      },
      secondary: "We also work with",
      aiTag: "&lt; Applied AI /&gt;",
      aiTitle: "AI-Augmented Engineering & <span class=\"text-gradient\">AI Stack</span>",
      aiSubtitle: "Technical criteria and optimized development workflow leveraging cognitive copilots, private local inference, and autonomous agents.",
      aiFilterAll: "All",
      aiFilterDev: "Environment & CLI",
      aiFilterLocal: "Local Inference",
      aiFilterCloud: "Cloud LLMs",
      aiFilterAgent: "Agents & APIs",
      aiList: {
        cursor: "Main development environment optimized for real-time contextual multi-file code editing and guided refactoring.",
        opencode: "Automation of repetitive terminal tasks and build workflows optimized with local scripts.",
        ollama: "Orchestration of open-source language models (Llama, Phi) locally for offline development and intellectual property protection.",
        lmstudio: "Local inference server with OpenAI API compatibility for rapid experimentation and validation of open models.",
        anthropic: "Complex logical reasoning for structural refactoring and secure code audits.",
        gemini: "Analysis of complete repositories thanks to its extended context window of millions of tokens.",
        openai: "Natural language processing and agile APIs for direct integration into backend workflows.",
        antigravity: "Development of autonomous agentic flows and multilevel decision-making orchestrated by JS/TS code.",
        windsurf: "Advanced editor and IDE with built-in agent flows and real-time debugging.",
        devin: "Autonomous software engineering agent capable of executing complex tasks in isolated sandboxes.",
        v0: "AI-powered UI generator for rapid prototyping of React and Tailwind CSS components.",
        langchain: "Orchestrator and framework for building complex AI workflows, prompt chaining, and RAG architectures."
      }
    },
    comoTrabajo: {
      tag: "&lt; Methodology /&gt;",
      title: 'How I <span class="text-gradient">Work</span>',
      subtitle: "A structured process to ensure success and quality from start to finish.",
      step1: {
        title: "1. Discovery",
        desc: "Initial meetings to thoroughly understand your needs, business goals, and technical constraints."
      },
      step2: {
        title: "2. Technical Proposal",
        desc: "Detailed definition of the architecture, tech stack, delivery roadmap, and cost estimation."
      },
      step3: {
        title: "3. AI-Assisted Development",
        desc: "AI-accelerated development validated under Spec-Driven Development. Guarantees robust code, aligned with specifications and regression-free."
      },
      step4: {
        title: "4. Delivery",
        desc: "Secure deployment to the cloud (AWS/GCP/Azure) with validation and SEO/Web Vitals optimization."
      },
      step5: {
        title: "5. Support",
        desc: "Post-launch support, production error monitoring, and system evolution."
      }
    },
    portfolio: {
      tag: "&lt; Success Stories /&gt;",
      title: 'Corporate <span class="text-gradient">Projects</span>',
      subtitle: "Enterprise solutions developed for different industrial and corporate sectors.",
      filterAll: "All",
      filterReact: "React",
      filterAngular: "Angular",
      project1: {
        title: "Pipeline Renewal Management",
        desc: "<b>Complexity:</b> Inefficient and manual planning of critical gas network works. <br /><b>Role:</b> Frontend Lead & Architect. <br /><b>Solution:</b> Frontend core rebuild and offline sync. <br /><b>Impact:</b> 25% reduction in execution times and digitalization of 500+ km of pipeline.",
        details: "View details",
        tag: "Energy"
      },
      project2: {
        title: "Shelf Space Planning",
        desc: "<b>Complexity:</b> Three-dimensional shelf optimization for large retail stores. <br /><b>Role:</b> Frontend Architect. <br /><b>Solution:</b> Interactive rendering engine with 3D sorting algorithms. <br /><b>Impact:</b> 14% increase in cross-sales and reduction in store stock errors.",
        details: "View details",
        tag: "Retail"
      },
      project3: {
        title: "Predictive Network Maintenance",
        desc: "<b>Complexity:</b> Unexpected leaks in distribution networks causing million-dollar losses. <br /><b>Role:</b> Full-stack Developer. <br /><b>Solution:</b> ML API predicting fatigue points from pressure data. <br /><b>Impact:</b> 30% reduction in major failures and optimized preventive maintenance.",
        details: "View details",
        tag: "Energy"
      },
      project4: {
        title: "AI Academic Query Governance",
        desc: "<b>Complexity:</b> Categorization of thousands of unstructured linguistic queries. <br /><b>Role:</b> Lead Developer. <br /><b>Solution:</b> LLM integration for semantic analysis and classification. <br /><b>Impact:</b> Automatic processing of 95% of queries and smart search engine.",
        details: "View details",
        tag: "Academic"
      },
      project5: {
        title: "Fleet & Incident Claims Management",
        desc: "<b>Complexity:</b> Paper tracking and claim delays for a fleet of 200+ buses. <br /><b>Role:</b> Full-stack Developer. <br /><b>Solution:</b> Offline-first responsive web/mobile app. <br /><b>Impact:</b> 50% reduction in insurance processing time and real-time alerts.",
        details: "View details",
        tag: "Transport"
      },
      project6: {
        title: "BPM Banking & Risk Prevention Suite",
        desc: "<b>Complexity:</b> Financial crime audits and slow legacy integrations. <br /><b>Role:</b> Tech Lead / Frontend Architect. <br /><b>Solution:</b> Micro-frontend architecture with aggressive caching, accelerated by cognitive copilots (Windsurf) and autonomous agents (Devin Cloud) for bulk refactoring. <br /><b>Impact:</b> 40% latency reduction and strict audited regulatory compliance.",
        details: "View details",
        tag: "Banking"
      }
    },
    equipo: {
      tag: "&lt; Founder /&gt;",
      title: 'The Specialist behind MarcosLunaDev',
      subtitle: "A professional committed to technical excellence and digital innovation.",
      role: "&lt; Founder &amp; Principal Consultant /&gt;",
      bio: "Architect, Technical Leader, and Senior Frontend Engineer with more than <b>15 years of experience</b> delivering scalable web applications, designing complex technical solutions, and leading multidisciplinary development teams.",
      bioExtra: "With a unique background combining Naval Engineering in Electronics and Telecommunications with Computer Systems Administration, I specialize in connecting robust infrastructures, systems security, and the modern web development stack, optimized through AI-assisted coding and Spec-Driven Development methodologies."
    },
    contacto: {
      tag: "&lt; Let's Talk /&gt;",
      title: 'Start Your <span class="text-gradient">Project</span>',
      subtitle: "We are ready to turn your technical challenge into reality. We will respond within 48-72 hours.",
      infoTitle: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hoursWeek: "Monday - Friday: 9:00 - 18:00",
      hoursSaturday: "Saturday: 10:00 - 14:00",
      followUs: "Connect with me",
      formName: "Full name *",
      placeholderName: "Your name",
      formEmail: "Email *",
      placeholderEmail: "you@email.com",
      formMessage: "Message *",
      placeholderMessage: "E.g., We need to build a scalable Angular frontend dashboard...",
      charLabel: "characters",
      formSubmit: "Send Message",
      formSubmitting: "Sending...",
      feedbackSuccess: "Thank you! Your message has been successfully sent by email. We will contact you soon.",
      feedbackError: "There was an error sending your message. Please try again or send us an email directly.",
      privacyAcceptLabel: "I have read and accept the <a href=\"privacy-policy.html\" target=\"_blank\">Privacy Policy</a> *"
    },
    footer: {
      brandDesc: "High-performance software development and web architecture. Boosted by AI-assisted coding and Spec-Driven Development.",
      quickLinks: "Quick Links",
      services: "Services",
      copyright: "&copy; 2026 MarcosLunaDev. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Legal Notice"
    },
    privacy: {
      metaTitle: "Privacy Policy - MarcosLunaDev",
      title: "Privacy Policy",
      subtitle: "Last updated: July 8, 2026",
      sec1Title: "1. Data Controller",
      sec1Text: "<strong>Owner:</strong> Marcos Daniel Luna Rodríguez<br><strong>Address:</strong> Madrid, Spain<br><strong>Contact email for data protection matters:</strong> info@marcoslunadev.com",
      sec2Title: "2. Processed Data, Origin and Purpose",
      sec2Text1: "Personal data is only collected on this website through the contact form.",
      sec2Text2: "The data that may be requested includes: name, email address, and the content of the message the user decides to send.",
      sec2Text3: "The purpose of processing is to handle inquiries, requests, or comments sent by the user and respond via email.",
      sec2Text4: "No user profiling is conducted, no advertising or newsletters are sent, nor is data used for commercial purposes other than responding to the user's request.",
      sec3Title: "3. Legal Basis for Processing",
      sec3Text: "The legal basis for processing data is the user's consent, expressed by voluntarily submitting the contact form and accepting this privacy policy.",
      sec4Title: "4. Data Retention",
      sec4Text1: "Personal data will only be retained for the time necessary to manage the inquiry or communication sent and, where applicable, for the periods required by applicable regulations.",
      sec4Text2: "Once management of the inquiry is completed, data may be deleted or securely archived as appropriate.",
      sec5Title: "5. Recipients and Data Processors",
      sec5Text1: "Data is not shared with third parties, except under legal obligation.",
      sec5Text2: "Submitting the form generates an email sent to the owner's personal account, managed by the relevant hosting and email service provider (e.g., GitHub Pages for the web and your email provider), which may act as data processors when providing hosting and mail services.",
      sec5Text3: "No international data transfers are planned other than those resulting from the use of the indicated hosting and email services, which are carried out under the data protection terms established by those providers.",
      sec6Title: "6. Rights of Users",
      sec6Text1: "Anyone has the right to obtain confirmation as to whether personal data concerning them is being processed, as well as to exercise the following rights:",
      sec6Li1: "Right of access to personal data.",
      sec6Li2: "Right to rectification of inaccurate data.",
      sec6Li3: "Right to erasure when, among other reasons, the data is no longer necessary for the purposes for which it was collected.",
      sec6Li4: "Right to object to processing.",
      sec6Li5: "Right to request restriction of data processing.",
      sec6Li6: "Right to data portability in cases provided for by regulations.",
      sec6Text2: "Exercising these rights can be done by sending an email to info@marcoslunadev.com, specifying the right to be exercised and attaching a copy of a valid identity document (ID card, passport, etc.).",
      sec6Text3: "Furthermore, if the user considers that the processing of their data does not comply with current regulations, they may file a complaint with the Spanish Data Protection Agency (AEPD) via their website <a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">www.aepd.es</a>.",
      sec7Title: "7. Cookies and Other Data",
      sec7Text1: "Currently, this website does not use first-party cookies for tracking, analytics, or advertising purposes.",
      sec7Text2: "In the event that cookies or similar technologies are incorporated in the future, users will be duly informed and their consent will be requested under the terms required by regulations.",
      sec8Title: "8. Data Security",
      sec8Text1: "The owner will apply reasonable technical and organizational measures to protect personal data and prevent its loss, misuse, alteration, unauthorized access, or theft.",
      sec8Text2: "Among other measures, encrypted connections (HTTPS) will be used when permitted by the hosting service, and systems used for managing the web will be kept up to date."
    },
    legal: {
      metaTitle: "Legal Notice - MarcosLunaDev",
      title: "Legal Notice and Terms of Use",
      subtitle: "Last updated: July 8, 2026",
      sec1Title: "1. General Information",
      sec1Text: "In compliance with the information duty established in Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), the general information of the website is provided below:<br><br><strong>Owner:</strong> Marcos Daniel Luna Rodríguez<br><strong>Address:</strong> Madrid, Spain<br><strong>Contact email:</strong> info@marcoslunadev.com<br><br>This website is of a personal and informative nature, and its main purpose is to show information about the professional activity and projects of its owner, as well as to provide a means of contact.",
      sec2Title: "2. Conditions of Access and Use of the Website",
      sec2Text1: "Accessing and/or using this website confers the status of user, who accepts these general terms and conditions from such access and/or use.",
      sec2Text2: "The user agrees to use the website diligently, correctly, and lawfully, and not to perform activities that could damage the image, interests, or rights of the owner or third parties.",
      sec2Text3: "The owner reserves the right to modify at any time and without prior notice the presentation, configuration, and content of the website, as well as these terms of use.",
      sec3Title: "3. Intellectual and Industrial Property",
      sec3Text1: "All website content (texts, images, designs, logos, source code, and any other elements appearing), unless expressly stated otherwise, is owned by MarcosLunaDev or used with corresponding licenses.",
      sec3Text2: "Reproduction, distribution, public communication, transformation, or any other form of exploitation of such content without prior express authorization from the owner is prohibited, except where legally permitted.",
      sec3Text3: "The user agrees to respect all intellectual and industrial property rights over the contents of the site.",
      sec4Title: "4. External Links",
      sec4Text1: "This website may contain links to third-party websites.",
      sec4Text2: "The owner is not responsible for the content, services, or any other element offered on such linked sites, nor for any damage or harm that may arise from accessing them, as they have no control over those resources.",
      sec4Text3: "The inclusion of external links does not imply the existence of a relationship, collaboration, or dependency between the owner and those responsible for those sites.",
      sec5Title: "5. Liability",
      sec5Text1: "The owner does not guarantee the absence of errors in access to the website, in its content, or that it is updated, although reasonable efforts will be made to avoid, correct, or update them.",
      sec5Text2: "The user accesses the website under their sole responsibility. The owner is not liable for damages or losses that may arise from using the website, including, without limitation, operation failures, service interruptions, viruses, or cyber attacks, provided reasonable security measures have been adopted.",
      sec5Text3: "In its current version, the website does not offer e-commerce services or online contracting, so no specific sales or contracting conditions exist.",
      sec6Title: "6. Privacy Policy and Data Protection",
      sec6Text1: "The processing of personal data that may occur as a result of using the contact form will be governed by the Privacy Policy, accessible at all times on the website.",
      sec6Text2: "Users are recommended to consult this document to learn in detail how their personal data is collected, used, and protected, as well as their rights.",
      sec7Title: "7. Cookie Policy",
      sec7Text1: "Currently, this website does not use first-party cookies for analytics, advertising, or user profiling purposes.",
      sec7Text2: "Should cookies be incorporated in the future, users will be duly informed and a corresponding cookie policy and acceptance mechanism will be implemented.",
      sec8Title: "8. Applicable Legislation and Jurisdiction",
      sec8Text1: "These conditions are governed by Spanish legislation.",
      sec8Text2: "For any dispute that may arise from accessing or using the website, the parties submit to the courts and tribunals of Madrid, unless applicable regulations establish otherwise."
    }
  }
};
