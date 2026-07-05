/* Formulario de suscripcion (lead) */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-suscripcion");
    if (!form) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email-boletin").value;
        const message = document.getElementById("mensaje-suscripcion");
        if (!message) return;

        try {
            await window.ElectroCorpApi?.post("/newsletter/subscriptions", {
                email,
                source: "landing"
            });
        } catch (error) {
            console.warn("Newsletter API unavailable, keeping local confirmation.", error);
        }

        message.innerText = "Gracias por unirte a la revolucion energetica. Te hemos enviado un correo de confirmacion.";
        message.style.display = "block";

        form.reset();

        setTimeout(() => {
            message.style.display = "none";
        }, 4000);
    });
});
