// Import GSAP library (ensure it's loaded on the page)

// Logo Animation
gsap.from("#logo", {
    duration: 0.7,
    opacity: 0,
    scale: 0.05,
    ease: "power2.out"
});

// Menu Button Animation
gsap.from("#menuButton", {
    duration: 1,
    opacity: 0,
    x: -20,
    ease: "power2.out",
    delay: 0.3
});

// Menu Icon Animation
gsap.from("#menuIcon", {
    duration: 1,
    opacity: 0,
    rotation: -90,
    ease: "power2.out",
    delay: 0.3
});

// Menu Lines Animation
gsap.from("#menuLines", {
    duration: 0.3,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 1
});

// Close Lines Animation
gsap.from("#closeLines", {
    duration: 0.3,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 1
});


// About Link Animation
gsap.from("#aboutLink", {
    duration: 0.3,
    opacity: 0,
    x: -20,
    ease: "power2.out",
    delay: 0.3
});

// Contact Link Animation
gsap.from("#contactLink", {
    duration: 0.3,
    opacity: 0,
    x: -20,
    ease: "power2.out",
    delay: 0.7
});


// Content Animation
gsap.from("#content", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power2.out"
});

// Title Animation
gsap.from("#title", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power2.out",
    delay: 0.3
});

// Description Animation
gsap.from("#description", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: 0.6
});

// CTA Animation
gsap.from("#cta", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power2.out"
});

// Products Link Animation
gsap.from("#productsLink", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power2.out",
    delay: 0.4
});

gsap.from("#contactLinkcta", {
    duration: 0.3,
    opacity: 0,
    x: -50,
    ease: "power2.out",
    delay: 1.2
});

// Arrow Animation
gsap.from("#contactLink span", {
    duration: 1,
    opacity: 0,
    x: -10,
    ease: "power2.out",
    delay: 0.8
});


// GSAP animation for lazy loading images
gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll('.image-container');

images.forEach((image, index) => {
    gsap.set(image, {
        opacity: 0,
        y: 100
    }); // Set initial opacity and position

    ScrollTrigger.create({
        trigger: image,
        start: 'top 90%', // Adjust the trigger point as needed
        onEnter: () => {
            // Load the image by setting the "src" attribute from the "data-src" attribute
            image.src = image.getAttribute('data-src');

            gsap.to(image, {
                opacity: 1,
                y: 10,
                duration: 0.5,
                ease: 'power3.out',
                delay: index * 0.2 // Delay each image animation by 0.2 seconds
            }); // Animate opacity and position
        },
        onLeave: () => {
            gsap.to(image, {
                opacity: 0,
                y: -10,
                duration: 0.5,
                ease: 'power3.in'
            }); // Animate opacity and position when leaving viewport
        },
        onEnterBack: () => {
            // Load the image by setting the "src" attribute from the "data-src" attribute
            image.src = image.getAttribute('src');

            gsap.to(image, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power3.out',
                delay: index * 0.2 // Delay each image animation by 0.2 seconds
            }); // Animate opacity and position when scrolling back into view
        },
        onLeaveBack: () => {
            gsap.to(image, {
                opacity: 0,
                y: -10,
                duration: 0.5,
                ease: 'power3.in'
            }); // Animate opacity and position when scrolling back out of view
        }
    });
});

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

gsap.from("#contact label", {
    opacity: 0,
    y: 100,
    duration: 0.7,
    stagger: 0.2, // Add stagger to animate labels one by one
    ease: 'power3.out',
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%", // Adjust the start position based on your needs
    }
});

gsap.from("#contact input, #contact textarea, #contact button", {
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.2, // Add stagger to animate inputs and button one by one
    ease: 'power3.out',
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%", // Adjust the start position based on your needs
        delay: 0.5 // Add a delay of 0.1 seconds after label animation
    }
});

// GSAP Animation for Footer Section Typewriter Effect
const footerText = document.querySelector("footer span").innerText;
const footerSpan = document.querySelector("footer span");

gsap.from("footer div", {
  opacity: 0,
  y: 25,
  duration: 1,
  delay: 0.5
});