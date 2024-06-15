
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
    //alert("hii")
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
    // console.log(spns[i])
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


 // bg1 img animation
   
    let img = document.querySelector("#main-img");
    let imgConatiner = document.querySelector("#bg-box");

   imgConatiner.addEventListener("mousemove",(e)=>{
    let xaxis= (e.pageX-window.innerWidth/10)/100;
    let yaxis =(e.pageY-window.innerHeight/10)/100;
    //console.log(xaxis)
        img.style.transform=`rotateX(${yaxis}deg) rotateY(${xaxis}deg)`;
   });

   

   imgConatiner.addEventListener("mouseenter",()=>{
      img.style.transform=`translateZ(${10}}px) rotate(${40}deg)`;
      img.style.scale=`${1.1}`
   })


   imgConatiner.addEventListener("mouseleave",()=>{
    img.style.transform=`translateZ(${0}px) rotate(${0}deg)`;
    img.style.scale=`${1}`
    img.style.transition=`all ${0.5}s ease` ;
 })
