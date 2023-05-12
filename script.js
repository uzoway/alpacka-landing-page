// Initializing split-type and splitting the video wrappper paragraph
const contentParagraph = new SplitType(".content .content__wrapper--paragraph");

// Loader counter animation
const counterTl = gsap.timeline({ delay: 1.4 });

counterTl.to(".counter__container", {
    y: "-25%",
    duration: 1.2,
    ease: "expo.out",  
})

counterTl.to(".counter__container", {
    y: "-50%",
    duration: 1.2,
    ease: "expo.out"
})

counterTl.to(".counter__container", {
    y: "-75%",
    duration: 1.2,
    ease: "expo.out"
})

counterTl.to(".preloader", {
    top: "-100%",
    duration: 1.3,
    ease: "expo.out"
})

counterTl.to(".counter", {
    opacity: 0
}, "-=1.5")


// Alpacka logo and preloader section animation
const heroSectionTl = gsap.timeline({ delay: 1 })

heroSectionTl.to(".navigation .navigation__logo--link", {
    y: "-250%",
    duration: 1.2,
    ease: "expo.inOut"
})

heroSectionTl.to(".navigation .navigation__logo--link", {
    y: "-500%",
    duration: 1.2,
    ease: "expo.inOut"
})

heroSectionTl.to(".navigation .navigation__logo--link", {
    y: "-750%",
    duration: 1.2,
    ease: "expo.inOut"
})

heroSectionTl.from(".js__navigation", {
    y: "-100%",
    duration: 1,
    opacity: 0,
    ease: "expo.out"
}, "+=1")

heroSectionTl.from(".js__scroll", {
    duration: 1.3,
    opacity: 0,
    ease: "expo.out"
}, "-=.5")

heroSectionTl.from(".js__superscript", {
    duration: 1.1,
    y: 10,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    ease: "expo.out"
}, "-=1.05")

heroSectionTl.from(".js__media", {
    duration: 1.6,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    ease: "expo.inOut"
}, "-=2.4")

heroSectionTl.from(".line", {
    y: 50,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    duration: 1,
    stagger: { 
        amount: 0.3 
    },
}, "-=1.7")