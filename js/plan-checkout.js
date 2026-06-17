const WEBAPP_REGISTER_URL = "https://electrocorp-webapp.onrender.com/iam/register";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".plan-select-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const selectedPlan = {
                code: button.dataset.planCode || "PROFESSIONAL",
                name: button.dataset.planName || "Professional Plan",
                price: button.dataset.planPrice || "49.00",
            };

            const queryParams = new URLSearchParams({
                planCode: selectedPlan.code,
                planName: selectedPlan.name,
                planPrice: selectedPlan.price,
                source: "landing",
            });

            window.location.href = `${WEBAPP_REGISTER_URL}?${queryParams.toString()}`;
        });
    });
});
