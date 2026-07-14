// ==============================
// VELORA SMOOTH SCROLL (Lenis)
// ==============================


document.addEventListener("DOMContentLoaded", () => {

    if (typeof Lenis === "undefined") {
        console.warn("Lenis library not loaded.");
        return;
    }

    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

});
