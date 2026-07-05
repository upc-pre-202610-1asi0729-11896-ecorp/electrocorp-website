/* Contenido publico de landing desde REST API */
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const lang = window.currentLanguage || "en";
        const content = await window.ElectroCorpApi?.get(`/marketing/landing-content?lang=${encodeURIComponent(lang)}`);
        window.electroCorpLandingContent = content;
        document.dispatchEvent(new CustomEvent("electrocorp:landing-content-loaded", { detail: content }));
    } catch (error) {
        console.warn("Landing content API unavailable, using static markup.", error);
    }
});
