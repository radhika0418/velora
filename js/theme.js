// ===============================
// VELORA THEME SWITCHER
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const themeButton = document.getElementById("theme");

    const savedTheme = localStorage.getItem("velora-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {

                localStorage.setItem("velora-theme", "light");

            } else {

                localStorage.setItem("velora-theme", "dark");

            }

        });

    }

});
