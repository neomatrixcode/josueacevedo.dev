const translations = {
    en: {
        // Nav
        nav_terminal: "./terminal",
        nav_career: "./career",
        nav_skills: "./skills",
        nav_deployments: "./deployments",
        nav_academia: "./academia",
        nav_logs: "./logs",
        nav_channel: "./channel",
        nav_contact: "EXECUTE_CONTACT",

        // Hero
        hero_role: "root@neomatrix:~/biography",
        hero_command: "./identify_user.sh",
        hero_mission: "\"Writing the code that runs the world. From Mainframes to Rust Hypervisors.\"",

        // About
        about_title: "<WHOAMI>",
        about_role: "Kernel Hacker & System Architect",
        about_desc_1: "15+ years designing operating systems, hypervisors and modernizing legacy infrastructure. Author of <a href='https://nabucodonosor.app/book/ENSAMBLADOR_X86' class='highlight-link' target='_blank'>'Ensamblador X86'</a>.",
        about_desc_2: "Specialized in <span class='highlight'>Low-Level Programming</span>, <span class='highlight'>Cybersecurity</span> and <span class='highlight'>Hardware Prototyping</span>. Bridging the gap between silicon and cloud.",

        // Career
        career_title: "<CAREER_LOG>",
        career_current: "CURRENT",
        career_previous: "PREVIOUS",
        career_hackctf_desc: "Critical infrastructure design and bare-metal Hypervisor in Rust (x86/ARM/RISC-V). HackOS implementation (hardened AlmaLinux). Observability dashboard in Flutter.",
        career_techreo_desc: "Financial systems and KYC Pipeline (Metamap). Fintech infrastructure modernization.",
        career_ids_desc: "IBM z/OS Mainframe Architecture. Automation with JCL/REXX. COBOL/DB2 modernization to Hybrid Cloud. Computer Vision platform (Python/Java).",
        career_inaoe_desc: "Computational Astrophysics: Light curve processing. Deep Learning with CNNs and Transformers for stellar classification.",
        career_zebrands_desc: "Distributed architecture with NestJS, MongoDB and Kubernetes. Java Microservices on GCP.",

        // Skills
        skills_title: "<SYSTEM_CAPABILITIES>",
        skills_low_level: "Low Level & Systems",
        skills_legacy: "Legacy & Mainframe",
        skills_scientific: "Scientific & AI",
        skills_hardware: "Hardware & Quantum",

        // Projects
        projects_title: "<DEPLOYMENTS>",
        project_devscrub_desc: "Maintenance tool for developers and gamers. Deep cleaning for Docker, WSL2 (VHDX compact), NPM and Gradle. Fluent UI Design. Global commercialization.",
        project_hackos_desc: "Linux-based Operating System designed from scratch for mission-critical environments. Focused on stability, total environment control and hardened security.",
        project_rust_hypervisor_desc: "Bare-metal hypervisor focused on hardware-level isolation and security. Multi-architecture support (x86_64, aarch64, riscv64). VM manager with dynamic disk overlay.",
        project_neoos_desc: "Development of a custom kernel demonstrating absolute mastery of memory management, interrupts and hardware control.",
        project_julia_desc: "Significant contributions to the Julia ecosystem. Author of <strong>Diana.jl</strong> (GraphQL), <strong>Merly.jl</strong> (Microframework) and <strong>Faker.jl</strong> (Data Generator).",
        project_neuronex_desc: "ASIC module prototype for AI inference. PCIe interface design and custom SDK for integration.",

        // Open Source
        opensource_title: "<OPEN_SOURCE_CONTRIBS>",

        // Impact
        impact_title: "<IMPACT_METRICS>",
        metric_stars: "GitHub Stars",
        metric_repos: "Total Repositories",
        metric_years: "Years Active",
        metric_orgs: "Major Orgs",
        metric_subs: "YouTube Subs",

        // Research
        research_title: "<RESEARCH_&_PUBLICATIONS>",
        research_paper_type: "ACADEMIC PAPER",
        research_book_type: "BOOK",
        research_article_type: "ARTICLE",
        research_paper_desc: "A micro web framework written in Julia to create web applications and microservices. Focuses on high performance and ease of use.",
        research_book_desc: "Comprehensive guide to low-level optimization and system architecture using X86 Assembly.",
        research_article_desc: "Deep dive into Julia's type system and performance characteristics compared to C/Fortran.",
        research_btn_paper: "READ PAPER",
        research_btn_book: "FIND ONLINE",
        research_btn_article: "READ ARTICLE",

        // Education
        education_title: "<ACADEMIA_&_CERTS>",

        // Logs/Transmissions
        transmissions_title: "<TRANSMISSIONS>",
        read_article: "READ_ARTICLE //",

        // Broadcasts
        broadcasts_title: "<BROADCASTS>",

        // Contact
        contact_title: "<ESTABLISH_UPLINK>",
        contact_desc: "Encrypted channel open. Ready for new missions.",
        contact_email: "SEND_EMAIL",
        contact_linkedin: "LINKEDIN_PROFILE"
    },
    es: {
        // Nav
        nav_terminal: "./terminal",
        nav_career: "./carrera",
        nav_skills: "./habilidades",
        nav_deployments: "./proyectos",
        nav_academia: "./academia",
        nav_logs: "./bitacora",
        nav_channel: "./canal",
        nav_contact: "CONTACTAR",

        // Hero
        hero_role: "root@neomatrix:~/biografia",
        hero_command: "./identificar_usuario.sh",
        hero_mission: "\"Escribiendo el código que corre el mundo. Desde Mainframes hasta Hypervisores en Rust.\"",

        // About
        about_title: "<QUIEN_SOY>",
        about_role: "Kernel Hacker & Arquitecto de Sistemas",
        about_desc_1: "15+ años diseñando sistemas operativos, hypervisores y modernizando infraestructura legacy. Autor de <a href='https://nabucodonosor.app/book/ENSAMBLADOR_X86' class='highlight-link' target='_blank'>'Ensamblador X86'</a>.",
        about_desc_2: "Especializado en <span class='highlight'>Programación de Bajo Nivel</span>, <span class='highlight'>Ciberseguridad</span> y <span class='highlight'>Prototipado de Hardware</span>. Uniendo el silicio con la nube.",

        // Career
        career_title: "<EXPERIENCIA_LABORAL>",
        career_current: "ACTUAL",
        career_previous: "ANTERIOR",
        career_hackctf_desc: "Diseño de infraestructura crítica y Hypervisor bare-metal en Rust (x86/ARM/RISC-V). Implementación de HackOS (AlmaLinux hardened). Dashboard de observabilidad en Flutter.",
        career_techreo_desc: "Sistemas financieros y Pipeline KYC (Metamap). Modernización de infraestructura Fintech.",
        career_ids_desc: "Arquitectura Mainframe IBM z/OS. Automatización con JCL/REXX. Modernización de COBOL/DB2 hacia Cloud híbrida. Plataforma de visión computacional (Python/Java).",
        career_inaoe_desc: "Astrofísica Computacional: Procesamiento de curvas de luz. Deep Learning con CNNs y Transformers para clasificación estelar.",
        career_zebrands_desc: "Arquitectura distribuida con NestJS, MongoDB y Kubernetes. Microservicios Java en GCP.",

        // Skills
        skills_title: "<CAPACIDADES_DEL_SISTEMA>",
        skills_low_level: "Bajo Nivel & Sistemas",
        skills_legacy: "Legacy & Mainframe",
        skills_scientific: "Científico & IA",
        skills_hardware: "Hardware & Cuántica",

        // Projects
        projects_title: "<DESPLIEGUES>",
        project_devscrub_desc: "Herramienta de mantenimiento para desarrolladores y gamers. Limpieza profunda de Docker, WSL2 (VHDX compact), NPM y Gradle. Diseño Fluent UI. Comercializado globalmente.",
        project_hackos_desc: "Sistema Operativo basado en Linux diseñado desde cero para entornos de misión crítica. Enfocado en estabilidad, control total del entorno y seguridad endurecida.",
        project_rust_hypervisor_desc: "Hypervisor bare-metal centrado en aislamiento a nivel de hardware y seguridad. Soporte multi-arquitectura (x86_64, aarch64, riscv64). Gestor de VMs con superposición de disco dinámica.",
        project_neoos_desc: "Desarrollo de un kernel propio demostrando dominio absoluto de la gestión de memoria, interrupciones y control de hardware.",
        project_julia_desc: "Contribuciones significativas al ecosistema Julia. Autor de <strong>Diana.jl</strong> (GraphQL), <strong>Merly.jl</strong> (Microframework) y <strong>Faker.jl</strong> (Data Generator).",
        project_neuronex_desc: "Prototipo de módulo ASIC para inferencia de IA. Diseño de interfaz PCIe y SDK propio para integración.",

        // Open Source
        opensource_title: "<CONTRIBUCIONES_OPEN_SOURCE>",

        // Impact
        impact_title: "<METRICAS_DE_IMPACTO>",
        metric_stars: "Estrellas GitHub",
        metric_repos: "Repositorios Totales",
        metric_years: "Años Activo",
        metric_orgs: "Orgs Principales",
        metric_subs: "Subs YouTube",

        // Research
        research_title: "<INVESTIGACION_&_PUBLICACIONES>",
        research_paper_type: "PAPER ACADÉMICO",
        research_book_type: "LIBRO",
        research_article_type: "ARTÍCULO",
        research_paper_desc: "Micro framework web escrito en Julia para crear aplicaciones y microservicios. Enfocado en alto rendimiento y facilidad de uso.",
        research_book_desc: "Guía integral de optimización de bajo nivel y arquitectura de sistemas usando Ensamblador X86.",
        research_article_desc: "Análisis profundo del sistema de tipos de Julia y características de rendimiento comparado con C/Fortran.",
        research_btn_paper: "LEER PAPER",
        research_btn_book: "BUSCAR ONLINE",
        research_btn_article: "LEER ARTÍCULO",

        // Education
        education_title: "<ACADEMIA_&_CERTS>",

        // Logs/Transmissions
        transmissions_title: "<TRANSMISIONES>",
        read_article: "LEER_ARTICULO //",

        // Broadcasts
        broadcasts_title: "<EMISIONES>",

        // Contact
        contact_title: "<ESTABLECER_ENLACE>",
        contact_desc: "Canal encriptado abierto. Listo para nuevas misiones.",
        contact_email: "ENVIAR_CORREO",
        contact_linkedin: "PERFIL_LINKEDIN"
    }
};

function updateContent(lang) {
    document.documentElement.lang = lang;

    // Update simple text and html elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = translations[lang][key];
            } else {
                // Determine if we should preserve existing HTML structure like spans inside?
                // For this implementation, we assume keys with HTML content use data-i18n-html="true"
                // Keys without it are treated as plain text
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'en' ? '[ES]' : '[EN]';
    }

    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Determine language: LocalStorage > User Preference > English (default)
    const savedLang = localStorage.getItem('preferredLanguage');
    const defaultLang = 'en'; // O-1 Visa priority
    const currentLang = savedLang || defaultLang;

    // Add toggle button functionality
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const newLang = document.documentElement.lang === 'en' ? 'es' : 'en';
            updateContent(newLang);
        });
    }

    // Initial update
    updateContent(currentLang);
});
