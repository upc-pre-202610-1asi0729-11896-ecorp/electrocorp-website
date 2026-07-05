/* Buscador: palabra clave -> desplazamiento a seccion */
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("btn-buscar");

    if (!searchInput || !searchButton) return;

    const localSections = {
        inicio: "hero",
        home: "hero",
        descripcion: "description",
        startup: "description",
        objetivos: "goals",
        servicios: "service",
        planes: "service",
        precios: "service",
        pricing: "service",
        testimonios: "reviews",
        reviews: "reviews",
        nosotros: "about",
        equipo: "about",
        team: "about",
        enchufes: "device",
        dispositivos: "device",
        soporte: "contact",
        contacto: "contact",
        boletin: "contact"
    };

    const localSearch = (term) => {
        for (const [keyword, sectionId] of Object.entries(localSections)) {
            if (term.includes(keyword)) {
                return sectionId;
            }
        }
        return null;
    };

    const scrollToSection = (sectionId) => {
        const section = sectionId ? document.getElementById(sectionId) : null;
        if (!section) return false;

        section.scrollIntoView({ behavior: "smooth" });
        searchInput.value = "";
        return true;
    };

    const runSearch = async () => {
        const term = searchInput.value.toLowerCase().trim();
        if (!term) return;

        let sectionId = null;

        try {
            const result = await window.ElectroCorpApi?.get(`/marketing/search?term=${encodeURIComponent(term)}`);
            sectionId = result?.found ? result.sectionId : null;
        } catch (error) {
            console.warn("Marketing search API unavailable, using local dictionary.", error);
        }

        sectionId = sectionId || localSearch(term);

        if (!scrollToSection(sectionId)) {
            alert(`No encontramos resultados para "${term}". Intenta buscar "planes", "hardware" o "soporte".`);
        }
    };

    searchButton.addEventListener("click", runSearch);
    searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            void runSearch();
        }
    });
});
