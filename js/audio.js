/* Musica de fondo: boton flotante */
document.addEventListener("DOMContentLoaded", async () => {
    const music = document.getElementById("musica-fondo");
    const audioButton = document.getElementById("btn-audio");
    const audioIcon = document.getElementById("icono-audio");

    if (!music || !audioButton || !audioIcon) return;

    music.volume = 0.3;
    let isPlaying = false;

    try {
        const config = await window.ElectroCorpApi?.get("/marketing/multimedia-config");
        if (typeof config?.defaultVolume === "number") {
            music.volume = Math.max(0, Math.min(1, config.defaultVolume));
        }
        if (typeof config?.loopEnabled === "boolean") {
            music.loop = config.loopEnabled;
        }
    } catch (error) {
        console.warn("Multimedia API unavailable, using local audio defaults.", error);
    }

    const syncState = async () => {
        try {
            await window.ElectroCorpApi?.post("/marketing/multimedia-state", {
                audioEnabled: isPlaying,
                menuOpen: false
            });
        } catch (error) {
            console.warn("Could not sync multimedia state.", error);
        }
    };

    audioButton.addEventListener("click", async () => {
        if (isPlaying) {
            music.pause();
            audioIcon.classList.remove("fa-volume-up");
            audioIcon.classList.add("fa-volume-off");
        } else {
            await music.play();
            audioIcon.classList.remove("fa-volume-off");
            audioIcon.classList.add("fa-volume-up");
        }

        isPlaying = !isPlaying;
        await syncState();
    });
});
