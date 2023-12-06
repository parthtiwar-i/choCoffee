var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 75 + "px";
  blur.style.top = dets.y - 75 + "px";
});
// var h4all = document.querySelectorAll(".nav h4");
// h4all.forEach((elem) =>{
//     elem.addEventListener("mouseenter" , ()=>{
//         crsr.style.scale = 3;
//         crsr.style.border = "1px solid #fff";
//         crsr.style.backgroundColor = "transparent"
//     })
// })

// h4all.forEach((elem) =>{
//     elem.addEventListener("mouseleave" , ()=>{
//         crsr.style.scale = 1;
//         crsr.style.border = "solid transparent";
//         crsr.style.backgroundColor = "burlywood"
//     })
// })

gsap.to(".navbar", {
  backgroundColor: "rgb(110 68 52)",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body",
    // markers : true,
    start: "top -10%",
    end: "top -30%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "hsl(33deg 100% 7.84%)",
  scrollTrigger: {
    trigger: " .main",
    scroller: "body",
    start: "top -30%",
    end: "top -100%",
    scrub: 1
  },
});

gsap.from("#about ", {
  x: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 45%",
    scrub: 2,
    once : "true"
    
  },
});
gsap.from("#about-us img ", {
  x: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    // markers:true,
    start: "top 60%",
    end: "top 45%",
    scrub: 2,
    once : "true"
  },
});

gsap.from(".card", {
  y: 40,
  duration: 1,
  opacity: 0,
//   stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 50%",
    scrub: 1,
    once : "true"
  },
});

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25, // Max tilt rotation (degrees)
  speed: 400, // Tilt speed
  glare: true, // Enable glare effect
  "max-glare": 0.5, // Max glare opacity
});

const toggleMenu = document.getElementById("menuToggle");
toggleMenu.addEventListener("click" , ()=>{
  const toggle = document.getElementById("menuToggle");
  const menu = document.querySelector(".menu");
  const bars = document.querySelectorAll(".line");
  bars.forEach((bar) =>{
    bar.classList.toggle("open");
  })
  toggle.classList.toggle("open");
  menu.classList.toggle("show");
})
