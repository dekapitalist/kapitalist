document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");

    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const emailInput = document.getElementById("email");
            const email = emailInput.value;
            if (!email) return;

            try {
                const response = await fetch(
                    "https://decap-auth.barres-70-nouveau-546.workers.dev/subscribe",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email })
                    }
                );

                if (response.ok) {
                    emailInput.value = "";
                    emailInput.placeholder = "U bent nu ingeschreven. Bedankt!";
                    emailInput.disabled = true;
                    form.querySelector("button").disabled = true;
                    form.querySelector("button").style.opacity = "0.4";
                } else {
                    emailInput.value = "";
                    emailInput.placeholder = "Er liep iets mis. Probeer opnieuw.";
                }
            } catch (err) {
                emailInput.value = "";
                emailInput.placeholder = "Er liep iets mis. Probeer opnieuw.";
            }
        });
    }
});
