// ===============================
// MAGNETIC BUTTON EFFECT
// ===============================

const magneticElements = document.querySelectorAll(".magnetic");

magneticElements.forEach((element) => {

    element.addEventListener("mousemove", (e) => {

        const rect = element.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        element.style.transform =
            `translate(${x * 0.25}px, ${y * 0.25}px)`;

    });

    element.addEventListener("mouseleave", () => {

        element.style.transform = "translate(0px,0px)";

    });

});
