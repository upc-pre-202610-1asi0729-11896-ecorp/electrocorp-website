window.ElectroCorpApi = (() => {
    const baseUrl = (window.ELECTROCORP_API_BASE_URL || "https://electrocorp-platform.onrender.com/api/v1").replace(/\/$/, "");

    async function request(path, options = {}) {
        const response = await fetch(`${baseUrl}${path}`, {
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {})
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`ElectroCorp API returned ${response.status}`);
        }

        return response.json();
    }

    return {
        baseUrl,
        get: (path) => request(path),
        post: (path, body) => request(path, {
            method: "POST",
            body: JSON.stringify(body)
        })
    };
})();
