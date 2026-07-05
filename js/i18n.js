/* Traducciones ES/EN/PT y selección de idioma */
const translations = {
    es: {
        nav_home: "Inicio",
        nav_desc: "Descripción",
        nav_goals: "Objetivos",
        nav_plans: "Planes",
        nav_reviews: "Testimonios",
        nav_about: "Nosotros",
        nav_smart: "Enchufes Smart",
        nav_support: "Soporte",
        nav_que_frequents: "Preguntas",
        nav_direction: "Dirección",
        "meta.testimonialsSlider": "Carrusel de opiniones de clientes",
        "meta.sliderPrev": "Comentarios anteriores",
        "meta.sliderNext": "Comentarios siguientes",
        testimonials_sectionTitle: "Lo que dicen nuestros clientes",
        testimonials_rolePremium: "Cliente Premium",
        testimonials_roleFree: "Usuario gratuito",
        testimonials_q1: '"ElectroCorp.Web me muestra qué electrodoméstico gasta de verdad en nuestro hogar. Bajé el recibo sin volver a cablear la casa ni contratar técnicos de más; por fin se siente energía inteligente, no un lujo inalcanzable."',
        testimonials_q2: '"Montamos el sistema en nuestros interruptores y enchufes en una tarde: sin muros rotos y sin tocar el tablero. Ese enfoque plug-and-play es lo que nos convenció; otras apps genéricas nunca calzaban con nuestro consumo real en el Perú."',
        testimonials_q3: '"Programo enchufes y veo el consumo al instante. Me avisó cuando un equipo quedó toda la noche encendido; la luz de casa ya era un dolor, y ahora tengo un control concreto."',
        testimonials_q4: '"La plataforma web se entiende; no es otro panel inentendible. Veo el consumo local tal como ocurre y planifico con datos, no a ciegas con el recibo."',
        testimonials_q5: '"Lo manejamos todo con ElectroCorp.Web: encendido remoto, horarios y monitoreo en la app. En nuestra familia, democratizar la domótica y bajar el costo eléctrico es el sentido, y acá la primera solución que se siente alcanzable."',
        about_title: "Nosotros",
        about_lead: "Estudiantes de Ingeniería de Software de la UPC impulsando ElectroCorp.Web",
        about_name_diego: "Diego Alexander Cabrejos Chocce",
        about_role_diego: "Lógica y enfoque backend",
        about_bio_diego: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS, JavaScript, C#, Python y Java. Aporta estructura backend y APIs en ElectroCorp.Web.",
        about_role_seb: "Datos y monitoreo",
        about_bio_seb: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS, JavaScript. Flujos de datos, métricas y vistas de consumo en la plataforma.",
        about_role_gho: "Lógica e integración",
        about_bio_gho: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS y JavaScript. Conecta servicios y piezas de punta a punta.",
        about_role_alex: "UI / UX y frontend",
        about_bio_alex: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS, JavaScript, C#, Python, Java y Flutter. Diseño e interfaz de la plataforma ElectroCorp.Web y la app.",
        about_role_ronal: "Lógica y calidad",
        about_bio_ronal: "Estudiante de Ingeniería de Software en UPC. C++, HTML, CSS y JavaScript. Calidad de código, pruebas y entregas estables entre funcionalidades.",
        nav_login: "Iniciar sesión",
        nav_register: "Registrarse",
        hero_title: "Domina el consumo electrico de tu hogar",
        hero_title2: "Ahorra hasta un 20% de energia en tu hogar",
        hero_dashboard: "Ir al dashboard",
        hero_subtitle: "15% de descuento por 3 meses para los primeros 50 nuevos usuarios",
        desc_title: "Descripción de la Start-Up",
        desc_text1: "Es una startup de tecnología enfocada en democratizar la domótica y la eficiencia energética para los hogares peruanos.",
        desc_text2: "Actualmente, convertir una casa en \"inteligente\" es caro, requiere un trabajo complejo (cables, técnicos) y las aplicaciones suelen ser genéricas o difíciles de entender, además del alto coste de la electricidad.",
        desc_text3: "Un ecosistema IoT plug-and-play que se instala en minutos en interruptores y enchufes existentes. Permite el control remoto y la monitorización del consumo en tiempo real sin necesidad de realizar obras en el hogar.",
        goals_title: "Nuestros Objetivos",
        goals_text: "Desarrollar un ecosistema de Internet de las Cosas (IoT) de arquitectura plug-and-play de fácil entendimiento que permita a las familias y nuevos negocios en el Perú gestionar su consumo eléctrico de manera eficiente, optimizando su gasto económico y fomentando la sostenibilidad a través de una plataforma de software: una app y/o sitio web.",
        faq_title: "Preguntas Frecuentes sobre Consumo y Ahorro",
        faq_subtitle: "Aprende cómo gestionar tu energía de forma inteligente",
        faq_q1: "¿Qué electrodomésticos consumen más electricidad?",
        faq_a1: "Los dispositivos que generan calor o frío son los que más consumen. Esto incluye termas eléctricas, refrigeradoras, planchas y microondas.",
        faq_q2: "¿Cómo ayuda un enchufe inteligente a ahorrar energía?",
        faq_a2: "Permite apagar los dispositivos de forma remota, evitar el consumo de energía en modo de espera y programar horarios de uso automáticos.",
        faq_q3: "¿Qué es el consumo fantasma y cómo evitarlo?",
        faq_a3: "Es la energía que usan los aparatos en standby. Representa hasta un 10% del recibo. Se evita desenchufando o usando Smart Plugs.",
        plans_title: "Nuestros Planes",
        plans_subtitle: "Elige el plan que mejor se adapte a tu consumo y tamaño de infraestructura.",
        normal_plan_price: "S/ 18.90 <span> <s> S/25.90 </s> </span>",
        normal_plan_desc: "Gestión básica de energía para hogares pequeños.",
        normal_plan_li1: "Hasta 5 dispositivos inteligentes",
        normal_plan_li2: "Panel de energía básico",
        normal_plan_li3: "Alertas por correo electrónico",
        btn_start: "Comprar Servicio",
        pro_plan_price: "S/ 48.90 <span> <s> S/52.90 </s> </span>",
        pro_plan_desc: "Control avanzado para hogares y pequeños negocios.",
        pro_plan_li1: "Hasta 20 dispositivos inteligentes",
        pro_plan_li2: "Análisis avanzado de energía",
        pro_plan_li3: "Rutinas de automatización",
        pro_plan_li4: "Reportes mensuales",
        btn_pro: "Comprar Servicio",
        plan_ent_price: "S/ 128.90 <span> <s> S/135.90 </s> </span>",
        plan_ent_desc: "Plataforma completa para múltiples ubicaciones o empresas.",
        plan_ent_li1: "Múltiples ubicaciones comerciales",
        plan_ent_li2: "Perfiles de acceso para el equipo",
        plan_ent_li3: "Alertas avanzadas",
        plan_ent_li4: "Soporte prioritario",
        btn_contact: "Comprar Servicio",
        device_title: "Sistemas I.O.T. de ElectroCorp",
        device_subtitle: "Enchufes Inteligentes a tu alcance",
        direction_title: "Nuestra Dirección",
        direction_subtitle: "¿Quieres visitarnos o saber desde dónde operamos?",
        direction_hq: "Sede Central ElectroCorp",
        direction_address: "Av. Prolongación Primavera 2390, Monterrico, Surco, Lima - Perú (Sede UPC)",
        direction_hours: "Horario: Lunes a Viernes de 9:00 AM a 6:00 PM",
        contact_title: "Únete a la Revolución Eléctrica",
        contact_subtitle: "El futuro es eficiente. Suscríbete para recibir consejos de ahorro, actualizaciones de la app y ofertas exclusivas en nuestro próximo pack de enchufes inteligentes.",
        btn_send: "Enviar",
        footer_rights: "Todos los derechos reservados.",
        plans_kicker: "Facturación",
starter_plan_name: "Plan Starter",
starter_plan_desc: "Gestión básica de energía para hogares pequeños.",
starter_plan_price: "S/ 19.00 <span>/ mes</span>",
starter_plan_li1: "Hasta 5 dispositivos inteligentes",
starter_plan_li2: "Panel energético básico",
starter_plan_li3: "Alertas por correo",

professional_plan_name: "Plan Professional",
professional_plan_desc: "Control avanzado para hogares y pequeños negocios.",
professional_plan_price: "S/ 49.00 <span>/ mes</span>",
professional_plan_li1: "Hasta 20 dispositivos inteligentes",
professional_plan_li2: "Analítica energética avanzada",
professional_plan_li3: "Rutinas de automatización",
professional_plan_li4: "Reportes mensuales",

enterprise_plan_name: "Plan Enterprise",
enterprise_plan_desc: "Plataforma completa para múltiples locales o empresas.",
enterprise_plan_price: "S/ 99.00 <span>/ mes</span>",
enterprise_plan_li1: "Múltiples locales comerciales",
enterprise_plan_li2: "Perfiles de acceso para el equipo",
enterprise_plan_li3: "Alertas avanzadas",
enterprise_plan_li4: "Soporte prioritario",

plan_recommended: "Recomendado",
btn_choose_plan: "Elegir plan"
    },
    en: {
        nav_home: "Home",
        nav_desc: "Description",
        nav_goals: "Goals",
        nav_plans: "Pricing",
        nav_reviews: "Reviews",
        nav_about: "About us",
        nav_smart: "Smart Plugs",
        nav_support: "Support",
        nav_que_frequents: "FAQ",
        nav_direction: "Direction",
        "meta.testimonialsSlider": "Client reviews slider",
        "meta.sliderPrev": "Previous reviews",
        "meta.sliderNext": "Next reviews",
        testimonials_sectionTitle: "What our clients say",
        testimonials_rolePremium: "Premium customer",
        testimonials_roleFree: "Free user",
        testimonials_q1: '"ElectroCorp.Web shows which appliance is really driving watts in our home. I lowered the bill without rewiring the house or hiring special technicians—it finally feels like smart energy, not a luxury we can\'t afford."',
        testimonials_q2: '"We had the setup running over our existing switches and outlets in an afternoon—no broken walls, no new grid. That plug-and-play piece is what sold us; generic apps never matched how we actually use power in Peru."',
        testimonials_q3: '"I schedule my appliances and watch consumption in real time. When something stayed on all night, the alert saved me an unnecessary cost—our electricity spend was already a pain point, and this gives us real control."',
        testimonials_q4: '"The web platform is easy to read—not another complicated dashboard. I finally see local consumption the way it really happens, and I plan the week with real data instead of guessing on the bill."',
        testimonials_q5: '"We run everything through ElectroCorp.Web: remote on/off, schedules, and monitoring from the app. For our household, democratizing home automation and cutting energy costs is the point—and this is the first stack that made it feel realistic."',
        about_title: "About us",
        about_lead: "UPC Software Engineering students building ElectroCorp.Web",
        about_name_diego: "Diego Alexander Cabrejos Chocce",
        about_role_diego: "Logic & backend-oriented",
        about_bio_diego: "Software Engineering student at UPC. C++, HTML, CSS, JavaScript, C#, Python, and Java. Backend structure and APIs for ElectroCorp.Web.",
        about_role_seb: "Data & monitoring-oriented",
        about_bio_seb: "Software Engineering student at UPC. C++, HTML, CSS, JavaScript. Data flow, metrics, and power-usage views for the platform.",
        about_role_gho: "Logic & integration-oriented",
        about_bio_gho: "Software Engineering student at UPC. C++, HTML, CSS, and JavaScript. End-to-end integration across services and features.",
        about_role_alex: "UI / UX & frontend-oriented",
        about_bio_alex: "Software Engineering student at UPC. C++, HTML, CSS, JavaScript, C#, Python, Java, and Flutter. Design and interface for the ElectroCorp.Web platform and the app.",
        about_role_ronal: "Logic & quality-oriented",
        about_bio_ronal: "Software Engineering student at UPC. C++, HTML, CSS, and JavaScript. Code quality, testing, and reliable handoffs between features.",
        nav_login: "Log in",
        nav_register: "Sign up",
        hero_title: "Take control of your home's electricity consumption",
        hero_title2: "Save up to 20% on energy in your home",
        hero_dashboard: "Go to dashboard",
        hero_subtitle: "15% discount for 3 months for the first 50 new users",
        desc_title: "Start-Up Description",
        desc_text1: "We are a tech startup focused on democratizing home automation and energy efficiency for Peruvian households.",
        desc_text2: "Currently, making a house \"smart\" is expensive, requires complex work (cables, technicians) and the applications are usually generic or difficult to understand, in addition to the high cost of electricity.",
        desc_text3: "A plug-and-play IoT ecosystem that installs in minutes on existing switches and sockets. It allows for remote control and real-time consumption monitoring without the need for any construction work in the home.",
        goals_title: "Our Goals",
        goals_text: "To develop an easy-to-understand plug-and-play Internet of Things (IoT) ecosystem that allows families and new businesses in Peru to efficiently manage their electrical consumption, optimizing their economic expenses and promoting sustainability through a software platform: an app and/or website.",
        faq_title: "Frequently Asked Questions about Consumption and Saving",
        faq_subtitle: "Learn how to manage your energy smartly",
        faq_q1: "Which appliances consume the most electricity?",
        faq_a1: "Devices that generate heat or cold consume the most. This includes electric water heaters, refrigerators, irons, and microwaves.",
        faq_q2: "How does a smart plug help save energy?",
        faq_a2: "It allows you to turn off devices remotely, avoid 'vampire' power consumption, and schedule automatic usage times.",
        faq_q3: "What is stand by power and how to avoid it?",
        faq_a3: "It is the energy used by devices in standby mode. It represents up to 10% of the bill. Avoid it by unplugging or using Smart Plugs.",
        plans_title: "Our Plans",
        plans_subtitle: "Choose the plan that best fits your consumption and infrastructure size.",
        normal_plan_price: "S/ 18.90 <span> <s> S/25.90 </s> </span>",
        normal_plan_desc: "Basic energy management for small homes.",
        normal_plan_li1: "Up to 5 smart devices",
        normal_plan_li2: "Basic energy panel",
        normal_plan_li3: "Email alerts",
        btn_start: "Buy Service",
        pro_plan_price: "S/ 48.90 <span> <s> S/52.90 </s> </span>",
        pro_plan_desc: "Advanced control for homes and small businesses.",
        pro_plan_li1: "Up to 20 smart devices",
        pro_plan_li2: "Advanced energy analytics",
        pro_plan_li3: "Automation routines",
        pro_plan_li4: "Monthly reports",
        btn_pro: "Buy Service",
        plan_ent_price: "S/ 128.90 <span> <s> S/135.90 </s> </span>",
        plan_ent_desc: "Complete platform for multiple locations or businesses.",
        plan_ent_li1: "Multiple retail locations",
        plan_ent_li2: "Access profiles for the team",
        plan_ent_li3: "Advanced alerts",
        plan_ent_li4: "Priority support",
        btn_contact: "Buy Service",
        device_title: "ElectroCorp I.O.T. Systems",
        device_subtitle: "Smart Plugs at your fingertips",
        direction_title: "Our Direction",
        direction_subtitle: "Want to visit us or know where we operate from?",
        direction_hq: "ElectroCorp Headquarters",
        direction_address: "Av. Prolongación Primavera 2390, Monterrico, Surco, Lima - Peru (UPC Headquarters)",
        direction_hours: "Hours: Monday to Friday from 9:00 AM to 6:00 PM",
        contact_title: "Join the Electrical Revolution",
        contact_subtitle: "The future is efficient. Subscribe to receive saving tips, app updates, and exclusive offers on our upcoming smart plug pack.",
        btn_send: "Submit",
        footer_rights: "All rights reserved.",
        plans_kicker: "Billing",
starter_plan_name: "Starter Plan",
starter_plan_desc: "Basic energy management for small homes.",
starter_plan_price: "S/ 19.00 <span>/ month</span>",
starter_plan_li1: "Up to 5 smart devices",
starter_plan_li2: "Basic energy dashboard",
starter_plan_li3: "Email alerts",

professional_plan_name: "Professional Plan",
professional_plan_desc: "Advanced control for homes and small businesses.",
professional_plan_price: "S/ 49.00 <span>/ month</span>",
professional_plan_li1: "Up to 20 smart devices",
professional_plan_li2: "Advanced energy analytics",
professional_plan_li3: "Automation routines",
professional_plan_li4: "Monthly reports",

enterprise_plan_name: "Enterprise Plan",
enterprise_plan_desc: "Complete platform for multiple business locations.",
enterprise_plan_price: "S/ 99.00 <span>/ month</span>",
enterprise_plan_li1: "Multiple business locations",
enterprise_plan_li2: "Access profiles for staff",
enterprise_plan_li3: "Advanced alerts",
enterprise_plan_li4: "Priority support",

plan_recommended: "Recommended",
btn_choose_plan: "Choose plan"
    },
    pt: {
        nav_home: "Início",
        nav_desc: "Descrição",
        nav_goals: "Objetivos",
        nav_plans: "Planos",
        nav_reviews: "Avaliações",
        nav_about: "Sobre nós",
        nav_smart: "Tomadas Smart",
        nav_support: "Suporte",
        nav_que_frequents: "FAQ",
        nav_direction: "Endereço",
        "meta.testimonialsSlider": "Carrossel de avaliações de clientes",
        "meta.sliderPrev": "Avaliações anteriores",
        "meta.sliderNext": "Próximas avaliações",
        testimonials_sectionTitle: "O que dizem nossos clientes",
        testimonials_rolePremium: "Cliente Premium",
        testimonials_roleFree: "Usuário gratuito",
        testimonials_q1: '"ElectroCorp.Web mostra qual eletrodoméstico realmente consome na nossa casa. Reduzi a conta sem refazer a fiação ou contratar técnicos extras; finalmente a energia inteligente parece real, não um luxo inatingível."',
        testimonials_q2: '"Montamos o sistema nos nossos interruptores e tomadas em uma tarde: sem quebrar paredes e sem mexer no quadro. Essa abordagem plug-and-play foi o que nos convenceu; outros aplicativos genéricos nunca se adequavam ao nosso consumo real no Peru."',
        testimonials_q3: '"Eu programo tomadas e vejo o consumo instantaneamente. Fui avisado quando um equipamento ficou ligado a noite toda; a conta de luz já era uma dor, e agora tenho um controle concreto."',
        testimonials_q4: '"A plataforma web é compreensível; não é outro painel confuso. Vejo o consumo local como ele ocorre e planejo com dados, não às cegas com a conta."',
        testimonials_q5: '"Controlamos tudo com ElectroCorp.Web: ligar/desligar remoto, horários e monitoramento no app. Para a nossa família, democratizar a automação residencial e reduzir custos de energia é o objetivo, e esta é a primeira solução que parece acessível."',
        about_title: "Sobre nós",
        about_lead: "Estudantes de Engenharia de Software da UPC construindo ElectroCorp.Web",
        about_name_diego: "Diego Alexander Cabrejos Chocce",
        about_role_diego: "Lógica e backend",
        about_bio_diego: "Estudante de Engenharia de Software na UPC. C++, HTML, CSS, JavaScript, C#, Python e Java. Estrutura backend e APIs para ElectroCorp.Web.",
        about_role_seb: "Dados e monitoramento",
        about_bio_seb: "Estudante de Engenharia de Software na UPC. C++, HTML, CSS, JavaScript. Fluxo de dados, métricas e visualizações de consumo para a plataforma.",
        about_role_gho: "Lógica e integração",
        about_bio_gho: "Estudante de Engenharia de Software na UPC. C++, HTML, CSS e JavaScript. Conecta serviços e recursos de ponta a ponta.",
        about_role_alex: "UI / UX e frontend",
        about_bio_alex: "Estudante de Engenharia de Software na UPC. C++, HTML, CSS, JavaScript, C#, Python, Java e Flutter. Design e interface da plataforma ElectroCorp.Web e do app.",
        about_role_ronal: "Lógica e qualidade",
        about_bio_ronal: "Estudante de Engenharia de Software na UPC. C++, HTML, CSS e JavaScript. Qualidade de código, testes e entregas estáveis entre funcionalidades.",
        nav_login: "Entrar",
        nav_register: "Cadastrar",
        hero_title: "Assuma o controle do consumo elétrico da sua casa",
        hero_title2: "Economize até 20% de energia na sua casa",
        hero_dashboard: "Ir para o painel",
        hero_subtitle: "15% de desconto por 3 meses para os primeiros 50 novos usuários",
        desc_title: "Descrição da Start-Up",
        desc_text1: "Somos uma startup de tecnologia focada em democratizar a automação residencial e a eficiência energética para os lares peruanos.",
        desc_text2: "Atualmente, transformar uma casa em 'inteligente' é caro, requer obras complexas (cabos, técnicos) e os aplicativos geralmente são genéricos ou difíceis de entender, além do alto custo da eletricidade.",
        desc_text3: "Um ecossistema IoT plug-and-play que é instalado em minutos em interruptores e tomadas existentes. Permite controle remoto e monitoramento de consumo em tempo real, sem necessidade de reformas na casa.",
        goals_title: "Nossos Objetivos",
        goals_text: "Desenvolver um ecossistema de Internet das Coisas (IoT) com arquitetura plug-and-play de fácil entendimento que permita às famílias e novos negócios no Peru gerenciar seu consumo elétrico de forma eficiente, otimizando despesas financeiras e promovendo a sustentabilidade por meio de uma plataforma de software: um app e/ou site.",
        faq_title: "Perguntas Frequentes sobre Consumo e Economia",
        faq_subtitle: "Aprenda como gerenciar sua energia de forma inteligente",
        faq_q1: "Quais eletrodomésticos consomem mais eletricidade?",
        faq_a1: "Dispositivos que geram calor ou frio são os que mais consomem. Isso inclui aquecedores elétricos, geladeiras, ferros de passar e micro-ondas.",
        faq_q2: "Como uma tomada inteligente ajuda a economizar energia?",
        faq_a2: "Permite desligar dispositivos remotamente, evitar o consumo 'fantasma' (standby) e programar horários de uso automáticos.",
        faq_q3: "O que é consumo em standby e como evitá-lo?",
        faq_a3: "É a energia usada por aparelhos em modo de espera. Representa até 10% da conta. Evite-o desconectando os aparelhos ou usando Tomadas Inteligentes.",
        plans_title: "Nossos Planos",
        plans_subtitle: "Escolha o plano que melhor se adapta ao seu consumo e tamanho de infraestrutura.",
        normal_plan_price: "S/ 18.90 <span> <s> S/25.90 </s> </span>",
        normal_plan_desc: "Gestão básica de energia para lares pequenos.",
        normal_plan_li1: "Até 5 dispositivos inteligentes",
        normal_plan_li2: "Painel de energia básico",
        normal_plan_li3: "Alertas por e-mail",
        btn_start: "Comprar Serviço",
        pro_plan_price: "S/ 48.90 <span> <s> S/52.90 </s> </span>",
        pro_plan_desc: "Controle avançado para lares e pequenos negócios.",
        pro_plan_li1: "Até 20 dispositivos inteligentes",
        pro_plan_li2: "Análise avançada de energia",
        pro_plan_li3: "Rotinas de automação",
        pro_plan_li4: "Relatórios mensais",
        btn_pro: "Comprar Serviço",
        plan_ent_price: "S/ 128.90 <span> <s> S/135.90 </s> </span>",
        plan_ent_desc: "Plataforma completa para várias filiais ou empresas.",
        plan_ent_li1: "Várias filiais comerciais",
        plan_ent_li2: "Perfis de acesso para a equipe",
        plan_ent_li3: "Alertas avançadas",
        plan_ent_li4: "Suporte prioritário",
        btn_contact: "Comprar Serviço",
        device_title: "Sistemas I.O.T. da ElectroCorp",
        device_subtitle: "Tomadas Inteligentes ao seu alcance",
        direction_title: "Nosso Endereço",
        direction_subtitle: "Quer nos visitar ou saber de onde operamos?",
        direction_hq: "Sede Central ElectroCorp",
        direction_address: "Av. Prolongación Primavera 2390, Monterrico, Surco, Lima - Peru",
        direction_hours: "Horário: Segunda a Sexta das 9:00 às 18:00",
        contact_title: "Junte-se à Revolução Elétrica",
        contact_subtitle: "O futuro é eficiente. Inscreva-se para receber dicas de economia, atualizações do app e ofertas exclusivas no nosso próximo pacote de tomadas inteligentes.",
        btn_send: "Enviar",
        footer_rights: "Todos os direitos reservados.",
        plans_kicker: "Faturamento",
starter_plan_name: "Plano Starter",
starter_plan_desc: "Gestão básica de energia para casas pequenas.",
starter_plan_price: "S/ 19.00 <span>/ mês</span>",
starter_plan_li1: "Até 5 dispositivos inteligentes",
starter_plan_li2: "Painel básico de energia",
starter_plan_li3: "Alertas por e-mail",

professional_plan_name: "Plano Professional",
professional_plan_desc: "Controle avançado para residências e pequenos negócios.",
professional_plan_price: "S/ 49.00 <span>/ mês</span>",
professional_plan_li1: "Até 20 dispositivos inteligentes",
professional_plan_li2: "Análise energética avançada",
professional_plan_li3: "Rotinas de automação",
professional_plan_li4: "Relatórios mensais",

enterprise_plan_name: "Plano Enterprise",
enterprise_plan_desc: "Plataforma completa para várias sedes ou empresas.",
enterprise_plan_price: "S/ 99.00 <span>/ mês</span>",
enterprise_plan_li1: "Várias localizações comerciais",
enterprise_plan_li2: "Perfis de acesso para a equipe",
enterprise_plan_li3: "Alertas avançados",
enterprise_plan_li4: "Suporte prioritário",

plan_recommended: "Recomendado",
btn_choose_plan: "Escolher plano"
    }
};

let currentLanguage = "en";

function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");

        if (translations[lang] && translations[lang][key]) {
            const value = translations[lang][key];

            if (value.includes("<")) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    });

    const ariaElements = document.querySelectorAll("[data-i18n-aria]");

    ariaElements.forEach((element) => {
        const key = element.getAttribute("data-i18n-aria");

        if (translations[lang] && translations[lang][key]) {
            element.setAttribute("aria-label", translations[lang][key]);
        }
    });
}

async function loadRemoteTranslations(lang) {
    try {
        const bundle = await window.ElectroCorpApi?.get(`/translations?lang=${encodeURIComponent(lang)}`);
        if (bundle?.messages) {
            translations[lang] = {
                ...(translations[lang] || {}),
                ...bundle.messages
            };
        }
    } catch (error) {
        console.warn("Translations API unavailable, using local bundle.", error);
    }
}

async function setLanguage(lang) {
    currentLanguage = lang;
    await loadRemoteTranslations(currentLanguage);
    applyTranslations(currentLanguage);

    // Quitamos la clase 'active' de todos los botones
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Le agregamos la clase 'active' solo al botón seleccionado
    const activeBtn = document.getElementById(`btn-lang-${lang}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Cargar inglés (o el currentLanguage) por defecto al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLanguage);
});
