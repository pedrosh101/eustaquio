gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".pic", {opacity: 0}, {opacity: 1, duration: 2, scrollTrigger: ".pic"});

