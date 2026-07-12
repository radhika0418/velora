// VELORA MAIN JAVASCRIPT


// Register GSAP ScrollTrigger if available
if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);


    // Hero animation
    gsap.from(".hero-content", {

        opacity: 0,
        y: 80,
        duration: 1.5,
        ease: "power4.out"

    });


    // Project reveal animation
    gsap.utils.toArray(".project").forEach((project)=>{

        gsap.from(project, {

            opacity:0,
            y:60,
            duration:1,

            scrollTrigger:{

                trigger:project,
                start:"top 85%",
                toggleActions:"play none none reverse"

            }

        });

    });


    // Service animation
    gsap.utils.toArray(".service-grid div").forEach((service)=>{


        gsap.from(service,{

            opacity:0,
            y:50,
            duration:1,

            scrollTrigger:{

                trigger:service,
                start:"top 85%"

            }

        });


    });


}



// Mobile navigation

const menuButton = document.querySelector(".menu");

const navigation = document.querySelector(".nav-links");


if(menuButton && navigation){


menuButton.addEventListener("click",()=>{


    navigation.classList.toggle("show");


});


}




// Navbar background change while scrolling

window.addEventListener("scroll",()=>{


const header = document.querySelector("header");


if(window.scrollY > 50){

    header.style.background="rgba(11,11,11,0.8)";
    header.style.backdropFilter="blur(10px)";

}

else{

    header.style.background="transparent";

}


});





// Image lazy loading animation

const images = document.querySelectorAll("img");


images.forEach(image=>{


image.addEventListener("load",()=>{


image.style.opacity="1";


});


});
