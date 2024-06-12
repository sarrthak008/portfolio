
// nav-bar animation...

let openIcon = document.querySelector("#right img");
let closeIcon = document.querySelector("#nav-page-cross i")
 
let navTimelien=gsap.timeline();


navTimelien.to("#nav-info-page",{
    right:0,
    duration:0.5,
})

navTimelien.from("#nav-info-page span",{
    x:100,
    opacity:0,
    stagger:0.3,
    color:`#7bd1ee`
})
navTimelien.pause();

openIcon.addEventListener('click',()=>{
    navTimelien.play();
})

closeIcon.addEventListener("click",()=>{
    navTimelien.reverse();
})
 
document.querySelector(".nav-home").addEventListener("click",()=>{
    navTimelien.reverse();
})


document.querySelector(".nav-github").addEventListener("click",()=>{
    window.open("https://github.com/sarrthak008")
})