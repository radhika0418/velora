// ===================================
// PAGE LOADER + PAGE TRANSITION
// ===================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }

});


// Fade effect while changing pages

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (!href) return;

    if (
        href.startsWith("#") ||
        href.startsWith("mailto") ||
        href.startsWith("http")
    ) return;

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const loader = document.querySelector(".loader");

        if (loader) {

            loader.style.display = "flex";

            loader.style.opacity = "1";

        }

        setTimeout(() => {

            window.location = href;

        }, 500);

    });

});
