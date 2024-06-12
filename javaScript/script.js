
// nav-bar animation...

let openIcon = document.querySelector("#right img");
let closeIcon = document.querySelector("#nav-page-cross i")
let showDiv = document.querySelector("#show")
let navInfoPage = document.querySelector("#nav-info-page")
 
let navTimelien=gsap.timeline();

// crate a time lien..

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
navTimelien.pause(); //pause the time line...

// handiling time line...

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

document.addEventListener("mousemove",(dets)=>{
  showDiv.style.top=`${dets.clientY}px`
  showDiv.style.left=`${dets.clientX}px`
})

let spns=document.querySelectorAll("#nav-info-page span")
 for(let i =0 ; i<spns.length;i++){
     console.log(spns[i])
       spns[i].addEventListener("mouseenter",()=>{
         showDiv.style.height="55px"
         showDiv.style.width="55px"
         showDiv.style.backgroundColor=`#7bd1ee`
       })

       spns[i].addEventListener("mouseleave",()=>{
        showDiv.style.height="50px"
         showDiv.style.width="50px"
        showDiv.style.backgroundColor=`black`
      })
 }


