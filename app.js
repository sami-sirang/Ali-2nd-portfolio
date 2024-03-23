let animatedText=document.querySelector(".ani");

let changeText=()=>{
setTimeout(() => {
    animatedText.innerHTML="Freelancer";
}, 0);


setTimeout(() => {
    animatedText.innerHTML="Shopify Expert";
}, 4000);
setTimeout(() => {
    animatedText.innerHTML="Ads Specialist";
}, 8000);

setTimeout(() => {
    animatedText.innerHTML="Marketing Expert";
}, 12000);

}
changeText();
setInterval(changeText,16000);

let allBtns=document.querySelectorAll("button");
allBtns.forEach((el)=>{
    el.addEventListener("click",(e)=>{
e.preventDefault();
    })
})
let menu=document.querySelector(".menu");
let links=document.querySelector(".links");
menu.addEventListener("click",()=>{
    links.classList.toggle("links-active")
})
// gsap animation

gsap.from("nav .logo,li",{
    y:-100,
    stagger:0.4,
  
})

gsap.from(".home-links .icon",{
    x:-300,
    scale:0,
    stagger:0.4,
    delay:1.9,
})

gsap.from(".shopify",{
    opacity:0,
    stagger:0.4,
    delay:3,
})


gsap.from(".name,.intro,animated-text",{
    opacity:0,
    stagger:0.4,
    delay:3.4,
    duration:2,
})

gsap.from(".animated-text",{
    scale:0,
    stagger:0.4,
    delay:3.8,
    
})
gsap.from(".cv-btn",{
   x:-1000,
    stagger:0.4,
    delay:4.3,
    duration:2,
})
gsap.from(".img-cont",{
   scale:0,
   opacity:0,
   delay:.4,
   scrollTrigger:{
       scroller:"body",
       trigger:".img-cont",

   }
 })
 gsap.from(".menu",{
    scale:0,
  delay:.6,

 
    }
 )
// about animation

gsap.from(".about .about-img",{
    x:-300,
    scale:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".about .about-img",
    }
})
gsap.from(".about .about-intro h3,p",{
    x:900,
    stagger:0.5,
    opacity:0,
    scale:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".about .about-intro h3,p",
    }
})