// =====================================
// GSAP SCROLL ANIMATIONS
// =====================================

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    // HERO

    gsap.from(".hero-content", {

        opacity: 0,

        y: 80,

        duration: 1.3,

        ease: "power4.out"

    });

    // PROJECTS

    gsap.utils.toArray(".project").forEach(project => {

        gsap.from(project, {

            opacity: 0,

            y: 60,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: project,

                start: "top 85%"

            }

        });

    });

    // SERVICES

    gsap.utils.toArray(".service-grid div").forEach(service => {

        gsap.from(service, {

            opacity: 0,

            y: 40,

            duration: .8,

            scrollTrigger: {

                trigger: service,

                start: "top 90%"

            }

        });

    });

    // TITLES

    gsap.utils.toArray("h2").forEach(title => {

        gsap.from(title, {

            opacity: 0,

            x: -50,

            duration: 1,

            scrollTrigger: {

                trigger: title,

                start: "top 90%"

            }

        });

    });

    // IMAGES

    gsap.utils.toArray(".project-image").forEach(img => {

        gsap.from(img, {

            scale: .85,

            opacity: 0,

            duration: 1,

            ease: "power2.out",

            scrollTrigger: {

                trigger: img,

                start: "top 85%"

            }

        });

    });

}
