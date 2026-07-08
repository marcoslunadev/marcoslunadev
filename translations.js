/* ==========================================================================
   TRANSLATIONS.JS - DICCIONARIO DE TRADUCCIONES (ESPAÑOL / INGLÉS)
   ========================================================================== */

const translations = {
  es: {
    meta: {
      title: "CodeDevPro - Desarrollo Web Profesional Angular React Vue Node Bun",
      description: "CodeDevPro ofrece servicios profesionales de desarrollo web con Angular, React, Vue, Node.js y Bun. Transformamos ideas en experiencias digitales excepcionales con código de calidad y soluciones escalables para tu negocio.",
      keywords: "desarrollo web, Angular, React, Vue, Node.js, Bun, desarrollo frontend, desarrollo backend, aplicaciones web, CodeDevPro, Marcos Luna",
      ogTitle: "CodeDevPro - Desarrollo Web Profesional",
      ogDesc: "Servicios profesionales de desarrollo web con Angular, React, Vue, Node.js y Bun por Marcos Luna.",
    },
    nav: {
      inicio: "Inicio",
      servicios: "Servicios",
      tecnologias: "Tecnologías",
      portafolio: "Portafolio",
      equipo: "Equipo",
      contacto: "Contacto"
    },
    hero: {
      tag: "&lt;Desarrollo Web Profesional /&gt;",
      title: '<span class="text-gradient">Código que Impulsa</span><br /><span class="text-white">el Futuro</span>',
      subtitle: "Transformamos ideas en experiencias digitales excepcionales utilizando las tecnologías más avanzadas del mercado. Especialistas en Angular, React, Vue, Node y Bun.",
      btnStart: "Iniciar Proyecto",
      btnPortfolio: "Ver Portfolio",
      stat1Num: "20+",
      stat1Label: "Proyectos Corporativos",
      stat2Num: "98%",
      stat2Label: "Satisfacción del Cliente",
      stat3Num: "15+",
      stat3Label: "Años de Experiencia"
    },
    servicios: {
      tag: "&lt;Nuestros Servicios /&gt;",
      title: 'Soluciones <span class="text-gradient">Profesionales</span>',
      subtitle: "Ofrecemos servicios integrales de desarrollo web que cubren todas las necesidades de tu proyecto digital.",
      card1: {
        title: "Desarrollo Frontend",
        desc: "Interfaces modernas y responsivas con las últimas tecnologías.",
        li1: "Single Page Applications",
        li2: "Progressive Web Apps",
        li3: "Diseño Responsivo",
        li4: "Optimización de Rendimiento"
      },
      card2: {
        title: "Desarrollo Backend",
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
        title: "Consultoría Tech",
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
      tag: "&lt;Stack Tecnológico /&gt;",
      title: 'Nuestras <span class="text-gradient">Especialidades</span>',
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
      secondary: "También trabajamos con"
    },
    portfolio: {
      tag: "&lt;Nuestro Trabajo /&gt;",
      title: 'Proyectos <span class="text-gradient">Corporativos</span>',
      subtitle: "Soluciones empresariales desarrolladas para diferentes sectores industriales y corporativos.",
      filterAll: "Todos",
      filterReact: "React",
      filterAngular: "Angular",
      project1: {
        title: "Gestión de Renovación de Tuberías",
        desc: "Aplicación para la planificación y gestión de proyectos de renovación de tuberías en el sector energético. Sistema completo de seguimiento y control de obras.",
        details: "Ver detalles",
        tag: "Energía"
      },
      project2: {
        title: "Planificación de Anaqueles",
        desc: "Sistema de planificación y optimización de anaqueles para supermercados. Gestión de espacios y distribución de productos para maximizar ventas.",
        details: "Ver detalles",
        tag: "Retail"
      },
      project3: {
        title: "Predicción de Fallos en Tuberías",
        desc: "Aplicación de predicción de fallos y fugas en redes de tuberías utilizando algoritmos de machine learning para mantenimiento preventivo.",
        details: "Ver detalles",
        tag: "Energía"
      },
      project4: {
        title: "Gestión Académica con IA",
        desc: "Sistema de catalogación y gobierno del ciclo de vida de consultas lingüísticas con inteligencia artificial para una institución académica de referencia.",
        details: "Ver detalles",
        tag: "Académico"
      },
      project5: {
        title: "Control de Siniestros de Flota",
        desc: "Aplicación para el control y gestión de siniestros de una flota de autobuses. Seguimiento de incidentes, reportes detallados y análisis estadístico.",
        details: "Ver detalles",
        tag: "Transporte"
      },
      project6: {
        title: "Suite Bancaria BPM",
        desc: "Conjunto de aplicaciones bancarias: gestión BPM, monitorización de casos, gestión de crimen financiero y control de riesgo reputacional.",
        details: "Ver detalles",
        tag: "Banca"
      }
    },
    equipo: {
      tag: "&lt;Quién soy /&gt;",
      title: 'El <span class="text-gradient">Desarrollador</span> detrás de CodeDevPro',
      subtitle: "Un profesional comprometido con la excelencia técnica y la innovación digital.",
      role: "&lt;Architect &amp; Lead Developer /&gt;",
      bio: "Arquitecto, Líder Técnico y Senior Frontend Engineer con más de <b>15 años de experiencia</b> entregando aplicaciones web escalables, diseñando soluciones técnicas complejas y liderando equipos de desarrollo multidisciplinares.",
      bioExtra: "Con una formación única que combina Ingeniería Naval en Electrónica y Telecomunicaciones con Administración de Sistemas Informáticos, me especializo en conectar infraestructuras robustas, seguridad de sistemas y el stack de desarrollo web moderno."
    },
    contacto: {
      tag: "&lt;Hablemos /&gt;",
      title: 'Comienza tu <span class="text-gradient">Proyecto</span>',
      subtitle: "Estamos listos para convertir tu idea en realidad. Cuéntanos sobre tu proyecto.",
      infoTitle: "Información de Contacto",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      hoursLabel: "Horario",
      hoursWeek: "Lunes - Viernes: 9:00 - 18:00",
      hoursSaturday: "Sábado: 10:00 - 14:00",
      followUs: "Síguenos",
      formName: "Nombre completo *",
      placeholderName: "Tu nombre",
      formEmail: "Email *",
      placeholderEmail: "tu@email.com",
      formPhone: "Teléfono",
      placeholderPhone: "+34 600 000 000",
      formCompany: "Empresa",
      placeholderCompany: "Tu empresa",
      formService: "Servicio de interés *",
      formServiceSelect: "Selecciona un servicio",
      formServiceFrontend: "Desarrollo Frontend",
      formServiceBackend: "Desarrollo Backend (Node.js / NestJS)",
      formServiceCloud: "Cloud & DevOps",
      formServiceDesign: "UI/UX Design",
      formServiceApis: "Arquitectura & APIs",
      formServiceConsulting: "Consultoría Tech",
      formMessage: "Mensaje *",
      placeholderMessage: "Cuéntanos sobre tu proyecto...",
      charLabel: "caracteres",
      formSubmit: "Enviar Mensaje",
      formSubmitting: "Enviando...",
      feedbackSuccess: "¡Gracias! Tu mensaje ha sido enviado correctamente por correo. Nos pondremos en contacto contigo pronto.",
      feedbackError: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o envíanos un correo directo.",
      privacyAcceptLabel: "He leído y acepto la <a href=\"politica-privacidad.html\" target=\"_blank\">Política de privacidad</a> *"
    },
    footer: {
      brandDesc: "Código que Impulsa el Futuro. Transformamos ideas en experiencias digitales excepcionales.",
      quickLinks: "Enlaces Rápidos",
      services: "Servicios",
      newsletter: "Boletín Informativo",
      newsletterStatus: "Próximamente...",
      copyright: "&copy; 2026 CodeDevPro. Todos los derechos reservados.",
      privacy: "Políticas de privacidad",
      terms: "Aviso Legal"
    },
    privacy: {
      metaTitle: "Políticas de Privacidad - CodeDevPro",
      title: "Políticas de Privacidad",
      subtitle: "Última actualización: 8 de julio de 2026",
      sec1Title: "1. Responsable del tratamiento",
      sec1Text: "<strong>Titular:</strong> Marcos Daniel Luna Rodríguez<br><strong>Domicilio:</strong> Madrid, España<br><strong>Correo de contacto en materia de protección de datos:</strong> info@codedevpro.com",
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
      sec6Text2: "El ejercicio de estos derechos puede realizarse enviando un correo electrónico a info@codedevpro.com, indicando el derecho que se desea ejercer y adjuntando una copia de un documento identificativo válido (DNI, NIE, pasaporte).",
      sec6Text3: "Asimismo, si el usuario considera que el tratamiento de sus datos no se ajusta a la normativa vigente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su web <a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">www.aepd.es</a>.",
      sec7Title: "7. Cookies y otros datos",
      sec7Text1: "Actualmente esta web no utiliza cookies propias para finalidades de seguimiento, analítica o publicidad.",
      sec7Text2: "En caso de que en el futuro se incorporen cookies o tecnologías similares, se informará debidamente al usuario y se solicitará su consentimiento en los términos exigidos por la normativa.",
      sec8Title: "8. Seguridad de los datos",
      sec8Text1: "El titular aplicará las medidas técnicas y organizativas razonables para proteger los datos personales y evitar su pérdida, mal uso, alteración, acceso no autorizado o robo.",
      sec8Text2: "Entre otras medidas, se utilizarán conexiones cifradas (HTTPS) cuando el servicio de alojamiento lo permita y se mantendrán actualizados los sistemas utilizados para la gestión de la web."
    },
    legal: {
      metaTitle: "Aviso Legal - CodeDevPro",
      title: "Aviso Legal y Condiciones de Uso",
      subtitle: "Última actualización: 8 de julio de 2026",
      sec1Title: "1. Información general",
      sec1Text: "En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI‑CE), se indica a continuación la información general del sitio web:<br><br><strong>Titular:</strong> Marcos Daniel Luna Rodríguez<br><strong>Domicilio:</strong> Madrid, España<br><strong>Correo electrónico de contacto:</strong> info@codedevpro.com<br><br>Este sitio web tiene carácter personal y divulgativo, y su finalidad principal es mostrar información sobre la actividad profesional y proyectos de su titular, así como facilitar un medio de contacto.",
      sec2Title: "2. Condiciones de acceso y uso del sitio web",
      sec2Text1: "El acceso y/o uso de este sitio web atribuye la condición de usuario, que acepta desde dicho acceso y/o uso las presentes condiciones generales.",
      sec2Text2: "El usuario se compromete a utilizar el sitio web de forma diligente, correcta y lícita, y a no realizar actividades que puedan dañar la imagen, los intereses o los derechos del titular o de terceros.",
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
      title: "CodeDevPro - Professional Web Development Angular React Vue Node Bun",
      description: "CodeDevPro offers professional web development services with Angular, React, Vue, Node.js, and Bun. We transform ideas into exceptional digital experiences with quality code and scalable solutions for your business.",
      keywords: "web development, Angular, React, Vue, Node.js, Bun, frontend development, backend development, web applications, CodeDevPro, Marcos Luna",
      ogTitle: "CodeDevPro - Professional Web Development",
      ogDesc: "Professional web development services with Angular, React, Vue, Node.js, and Bun by Marcos Luna.",
    },
    nav: {
      inicio: "Home",
      servicios: "Services",
      tecnologias: "Technologies",
      portafolio: "Portfolio",
      equipo: "About Me",
      contacto: "Contact"
    },
    hero: {
      tag: "&lt;Professional Web Development /&gt;",
      title: '<span class="text-gradient">Code that Drives</span><br /><span class="text-white">the Future</span>',
      subtitle: "We transform ideas into exceptional digital experiences using the most advanced technologies in the market. Specialists in Angular, React, Vue, Node, and Bun.",
      btnStart: "Start Project",
      btnPortfolio: "View Portfolio",
      stat1Num: "20+",
      stat1Label: "Corporate Projects",
      stat2Num: "98%",
      stat2Label: "Client Satisfaction",
      stat3Num: "15+",
      stat3Label: "Years of Experience"
    },
    servicios: {
      tag: "&lt;Our Services /&gt;",
      title: 'Professional <span class="text-gradient">Solutions</span>',
      subtitle: "We offer comprehensive web development services that cover all the needs of your digital project.",
      card1: {
        title: "Frontend Development",
        desc: "Modern and responsive interfaces using the latest technologies.",
        li1: "Single Page Applications",
        li2: "Progressive Web Apps",
        li3: "Responsive Design",
        li4: "Performance Optimization"
      },
      card2: {
        title: "Backend Development",
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
        title: "Tech Consulting",
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
      tag: "&lt;Tech Stack /&gt;",
      title: 'Our <span class="text-gradient">Specialties</span>',
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
      secondary: "We also work with"
    },
    portfolio: {
      tag: "&lt;Our Work /&gt;",
      title: 'Corporate <span class="text-gradient">Projects</span>',
      subtitle: "Enterprise solutions developed for different industrial and corporate sectors.",
      filterAll: "All",
      filterReact: "React",
      filterAngular: "Angular",
      project1: {
        title: "Pipeline Renewal Management",
        desc: "Application for planning and managing pipeline renewal projects in the energy sector. Complete system for tracking and controlling works.",
        details: "View details",
        tag: "Energy"
      },
      project2: {
        title: "Shelf Space Planning",
        desc: "Supermarket shelf planning and optimization system. Management of space and product distribution to maximize sales.",
        details: "View details",
        tag: "Retail"
      },
      project3: {
        title: "Pipeline Failure Prediction",
        desc: "Pipeline network failure and leak prediction application using machine learning algorithms for preventive maintenance.",
        details: "View details",
        tag: "Energy"
      },
      project4: {
        title: "Academic Management with AI",
        desc: "System for cataloging and governing the lifecycle of linguistic queries using artificial intelligence for a leading academic institution.",
        details: "View details",
        tag: "Academic"
      },
      project5: {
        title: "Fleet Claims Control",
        desc: "Application for control and management of claims for a bus fleet. Tracking of incidents, detailed reports, and statistical analysis.",
        details: "View details",
        tag: "Transport"
      },
      project6: {
        title: "BPM Banking Suite",
        desc: "Set of banking applications: BPM management, case monitoring, financial crime management, and reputational risk control.",
        details: "View details",
        tag: "Banking"
      }
    },
    equipo: {
      tag: "&lt;About Me /&gt;",
      title: 'The <span class="text-gradient">Developer</span> behind CodeDevPro',
      subtitle: "A professional committed to technical excellence and digital innovation.",
      role: "&lt;Architect &amp; Lead Developer /&gt;",
      bio: "Architect, Technical Leader, and Senior Frontend Engineer with more than <b>15 years of experience</b> delivering scalable web applications, designing complex technical solutions, and leading multidisciplinary development teams.",
      bioExtra: "With a unique background combining Naval Engineering in Electronics and Telecommunications with Computer Systems Administration, I specialize in connecting robust infrastructures, systems security, and the modern web development stack."
    },
    contacto: {
      tag: "&lt;Let's Talk /&gt;",
      title: 'Start Your <span class="text-gradient">Project</span>',
      subtitle: "We are ready to turn your idea into reality. Tell us about your project.",
      infoTitle: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hoursLabel: "Hours",
      hoursWeek: "Monday - Friday: 9:00 - 18:00",
      hoursSaturday: "Saturday: 10:00 - 14:00",
      followUs: "Follow Us",
      formName: "Full name *",
      placeholderName: "Your name",
      formEmail: "Email *",
      placeholderEmail: "you@email.com",
      formPhone: "Phone",
      placeholderPhone: "+34 600 000 000",
      formCompany: "Company",
      placeholderCompany: "Your company",
      formService: "Service of interest *",
      formServiceSelect: "Select a service",
      formServiceFrontend: "Frontend Development",
      formServiceBackend: "Backend Development (Node.js / NestJS)",
      formServiceCloud: "Cloud & DevOps",
      formServiceDesign: "UI/UX Design",
      formServiceApis: "Architecture & APIs",
      formServiceConsulting: "Tech Consulting",
      formMessage: "Message *",
      placeholderMessage: "Tell us about your project...",
      charLabel: "characters",
      formSubmit: "Send Message",
      formSubmitting: "Sending...",
      feedbackSuccess: "Thank you! Your message has been successfully sent by email. We will contact you soon.",
      feedbackError: "There was an error sending your message. Please try again or send us an email directly.",
      privacyAcceptLabel: "I have read and accept the <a href=\"politica-privacidad.html\" target=\"_blank\">Privacy Policy</a> *"
    },
    footer: {
      brandDesc: "Code that Drives the Future. We transform ideas into exceptional digital experiences.",
      quickLinks: "Quick Links",
      services: "Services",
      newsletter: "Newsletter",
      newsletterStatus: "Coming soon...",
      copyright: "&copy; 2026 CodeDevPro. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Legal Notice"
    },
    privacy: {
      metaTitle: "Privacy Policy - CodeDevPro",
      title: "Privacy Policy",
      subtitle: "Last updated: July 8, 2026",
      sec1Title: "1. Data Controller",
      sec1Text: "<strong>Owner:</strong> Marcos Daniel Luna Rodríguez<br><strong>Address:</strong> Madrid, Spain<br><strong>Data protection contact email:</strong> info@codedevpro.com",
      sec2Title: "2. Data processed, origin, and purpose",
      sec2Text1: "On this website, personal data is only collected through the contact form.",
      sec2Text2: "The data that may be requested are: name, email address, and the content of the message the user decides to send.",
      sec2Text3: "The purpose of the processing is to attend to queries, requests, or comments that the user sends and to be able to reply by email.",
      sec2Text4: "No profiling is done, no advertising or newsletters are sent, and the data is not used for commercial purposes other than responding to the user's request.",
      sec3Title: "3. Legal basis for processing",
      sec3Text: "The legal basis for processing the data is the user's consent, expressed by voluntarily submitting the contact form and accepting this privacy policy.",
      sec4Title: "4. Data retention",
      sec4Text1: "Personal data will only be kept for the time necessary to manage the query or communication sent and, where appropriate, during the periods required by applicable regulations.",
      sec4Text2: "Once the management of the query has finished, the data may be deleted or archived in a blocked manner as appropriate.",
      sec5Title: "5. Recipients and processors",
      sec5Text1: "The data will not be transferred to third parties, unless there is a legal obligation.",
      sec5Text2: "Submitting the form generates an email addressed to the owner's personal account, managed by the corresponding email and hosting service provider (for example, GitHub Pages for the web and your email provider), which may act as processors by providing hosting and email services.",
      sec5Text3: "No international data transfers are planned other than those derived from the use of the indicated hosting and email services, which are carried out under the data protection conditions established by said providers.",
      sec6Title: "6. User rights",
      sec6Text1: "Anyone has the right to obtain confirmation as to whether personal data concerning them is being processed, as well as to exercise the following rights:",
      sec6Li1: "Right of access to their personal data.",
      sec6Li2: "Right to rectification of inaccurate data.",
      sec6Li3: "Right to erasure when, among other reasons, the data is no longer necessary for the purposes for which they were collected.",
      sec6Li4: "Right to object to processing.",
      sec6Li5: "Right to request the limitation of the processing of their data.",
      sec6Li6: "Right to data portability in the cases provided for in the regulations.",
      sec6Text2: "The exercise of these rights can be carried out by sending an email to info@codedevpro.com, indicating the right they wish to exercise and attaching a copy of a valid identification document (DNI, NIE, passport).",
      sec6Text3: "Likewise, if the user considers that the processing of their data does not comply with current regulations, they can file a complaint with the Spanish Data Protection Agency (AEPD) through its website <a href=\"https://www.aepd.es\" target=\"_blank\" rel=\"noopener\">www.aepd.es</a>.",
      sec7Title: "7. Cookies and other data",
      sec7Text1: "Currently this website does not use its own cookies for tracking, analytics, or advertising purposes.",
      sec7Text2: "In the event that cookies or similar technologies are incorporated in the future, the user will be properly informed and their consent will be requested in the terms required by the regulations.",
      sec8Title: "8. Data security",
      sec8Text1: "The owner will apply reasonable technical and organizational measures to protect personal data and prevent its loss, misuse, alteration, unauthorized access, or theft.",
      sec8Text2: "Among other measures, encrypted connections (HTTPS) will be used when the hosting service allows it, and the systems used for managing the website will be kept updated."
    },
    legal: {
      metaTitle: "Legal Notice - CodeDevPro",
      title: "Legal Notice and Terms of Use",
      subtitle: "Last updated: July 8, 2026",
      sec1Title: "1. General Information",
      sec1Text: "In compliance with the information duty established in Article 10 of Law 34/2002, of Services of the Information Society and Electronic Commerce (LSSI‑CE), the general information of the website is indicated below:<br><br><strong>Owner:</strong> Marcos Daniel Luna Rodríguez<br><strong>Address:</strong> Madrid, Spain<br><strong>Contact email:</strong> info@codedevpro.com<br><br>This website has a personal and informative character, and its main purpose is to show information about the professional activity and projects of its owner, as well as to facilitate a means of contact.",
      sec2Title: "2. Terms of Access and Use of the Website",
      sec2Text1: "Access and/or use of this website attributes the condition of user, who accepts these general conditions from said access and/or use.",
      sec2Text2: "The user agrees to use the website in a diligent, correct, and lawful manner, and not to perform activities that could damage the image, interests, or rights of the owner or third parties.",
      sec2Text3: "The owner reserves the right to modify at any time and without prior notice the presentation, configuration, and content of the website, as well as these conditions of use.",
      sec3Title: "3. Intellectual and Industrial Property",
      sec3Text1: "All contents of the website (texts, images, designs, logos, source code, and any other elements that appear), unless expressly indicated otherwise, are owned by Marcos Luna Dev or are used with the corresponding licenses.",
      sec3Text2: "The reproduction, distribution, public communication, transformation, or any other form of exploitation of said contents without the prior and express authorization of the owner is prohibited, except in cases where legally permitted.",
      sec3Text3: "The user agrees to respect all intellectual and industrial property rights over the contents of the website.",
      sec4Title: "4. External Links",
      sec4Text1: "This website may contain links to third-party websites.",
      sec4Text2: "The owner is not responsible for the contents, services, or any other element offered on said linked sites, nor for any damages or losses that may arise from accessing them, as they have no control over those resources.",
      sec4Text3: "The inclusion of external links does not imply the existence of a relationship, collaboration, or dependence between the owner and those responsible for those sites.",
      sec5Title: "5. Liability",
      sec5Text1: "The owner does not guarantee the absence of errors in accessing the website, in its content, nor that it is updated, although they commit to making reasonable efforts to avoid, correct, or update them.",
      sec5Text2: "The user accesses the website under their sole responsibility. The owner is not responsible for any damages or losses that may derive from the use of the website, including, but not limited to, malfunctions, service interruptions, presence of viruses, or computer attacks, provided that reasonable security measures have been adopted.",
      sec5Text3: "The website does not offer, in its current version, electronic commerce or online contracting services, so there are no specific sales or contracting conditions.",
      sec6Title: "6. Privacy Policy and Data Protection",
      sec6Text1: "The treatment of personal data that may be carried out as a consequence of the use of the contact form will be governed by the provisions of the Privacy Policy, accessible at all times from the website.",
      sec6Text2: "The user is recommended to consult said document to know in detail how their personal data is collected, used, and protected, as well as the rights they have.",
      sec7Title: "7. Cookies Policy",
      sec7Text1: "Currently this website does not use its own cookies for analytical, advertising, or user profile purposes.",
      sec7Text2: "In case of incorporating cookies in the future, the user will be properly informed and the corresponding cookie policy and acceptance mechanism will be implemented.",
      sec8Title: "8. Applicable Law and Jurisdiction",
      sec8Text1: "These conditions are governed by Spanish law.",
      sec8Text2: "For any controversy that may derive from accessing or using the website, the parties submit to the courts and tribunals of Madrid, unless the applicable regulation establishes otherwise."
    }
  }
};
