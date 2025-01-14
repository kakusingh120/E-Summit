function loco(){
  gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco()
  
document.addEventListener("DOMContentLoaded", function () {

  const content = document.querySelector("#main");
 
const video = document.querySelector("video");  // Get the video element
video.addEventListener("ended", function() {
    gsap.to(loader, {
        opacity: 0,
        duration: 0,
        ease: "power4.inOut",
        onComplete: function() {
            loader.style.display = "none";  // Hide the loader after the fade out
            content.style.visibility = "visible"; 
        }
    });
});

const loader = document.querySelector(".preloader");
const toggleButton = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const subNav = document.querySelector(".sub-nav");
const menuItems = document.querySelectorAll(".menu-item p");
const activeItem = document.querySelector(".menu-item p#active");
const toggleButton1 = document.querySelector(".burger1");


gsap.set(menuItems, { y: 225 });
gsap.set(subNav, { opacity: 0 });
const timeline = gsap.timeline({ paused: true });
timeline
.to(overlay, {
        duration: 1.5,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
})
.to(menuItems, {
        duration: 1.5,
        y: 0,
        ease: "power4.inOut",
        stagger: 0.2,
}, "-=1")
.to(activeItem, {
        "--after-width": "100%", // Animate the custom property
        ease: "power4.inOut",
        duration: 1,
}, "<")
.to(subNav, {
        duration: 1,
        opacity: 1,
        bottom: "10%",
        y: 0,
        ease: "power4.inOut",
}, "<");

toggleButton.addEventListener("click", function () {
        timeline.play(); // Play the overlay animation
        toggleButton.classList.add("active"); // Switch to close icon
        toggleButton1.classList.remove("active"); // Switch to close icon
});

toggleButton1.addEventListener("click", function () {
        timeline.reverse(); // Play the overlay animation
        toggleButton1.classList.add("active"); // Switch to close icon
        toggleButton.classList.remove("active"); // Switch to close icon
});
});

function slides(){
  const isSmallScreen = window.innerWidth <= 426; 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  initialSlide: isSmallScreen ? 1 : 0,
  freeMode: true,
  loop:true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
}
slides();

if(window.innerWidth>=768){
function textSlide(){
  const imgContainers = document.querySelectorAll(".img-cont");

imgContainers.forEach((imgCont) => {
const imgHead = imgCont.parentElement.nextElementSibling;
  
if (imgHead && imgHead.classList.contains("img-head")) {
imgCont.addEventListener("mouseenter", function () {
imgHead.style.transform = "translateY(0)";
imgHead.style.opacity = "1";
imgContainers.forEach((otherImgCont) => {
if (otherImgCont !== imgCont) {
otherImgCont.classList.add("dull");
}
});
});

imgCont.addEventListener("mouseleave", function () {
imgHead.style.transform = "translateY(-200px)";
imgHead.style.opacity = "0";
imgContainers.forEach((otherImgCont) => {
otherImgCont.classList.remove("dull");
});
});
}
});
}
textSlide();

function sheryJS(){
  Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.2,
   
  });
}
sheryJS();

function eventBanners(){
  
  gsap.to(".img-cont2 .img-cont", {
    x: 0, // Moves image to its normal position
    // opacity: 1,
    scrollTrigger: {
      trigger: ".img-cont", // Triggers when `.relative` enters the viewport
      start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
      end: "top 60%", // End animation at 50%
      scrub: true, // Smooth animation based on scroll
      scroller: "#main", // Reference the main scroll container for smooth scrolling
      // markers: true, 
    },
    duration: 1, // Duration of animation
    ease: "power4.out", // Easing function
  });
  gsap.to(".img-cont3 .img-cont2", {
  x: 0, // Moves image to its normal position
  opacity: 1,
  scrollTrigger: {
  trigger: ".img-cont3", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont4 .img-cont", {
  x: 0, // Moves image to its normal position
  // opacity: 1,
  scrollTrigger: {
  trigger: ".box2", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont4", {
  x: 0, // Moves image to its normal position
  opacity: 1,
  scrollTrigger: {
  trigger: ".box2", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont5 .img-cont", {
  x: 0, // Moves image to its normal position
  // opacity: 1,
  scrollTrigger: {
  trigger: ".box3", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont5", {
  x: 0, // Moves image to its normal position
  opacity: 1,
  scrollTrigger: {
  trigger: ".box3", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont6 .img-cont", {
  x: 0, // Moves image to its normal position
  // opacity: 1,
  scrollTrigger: {
  trigger: ".box4", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont6", {
  x: 0, // Moves image to its normal position
  opacity: 1,
  scrollTrigger: {
  trigger: ".box4", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont7 .img-cont", {
  x: 0, // Moves image to its normal position
  // opacity: 1,
  scrollTrigger: {
  trigger: ".box5", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont7", {
  x: 0, // Moves image to its normal position
  opacity: 1,
  scrollTrigger: {
  trigger: ".box5", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont8 .img-cont", {
  x: 0, // Moves image to its normal position
  // opacity: 1,
  scrollTrigger: {
  trigger: ".box6", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont8", {
  x: 0, // Moves image to its normal position
  opacity: 1,
  scrollTrigger: {
  trigger: ".box6", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont9 .img-cont", {
  x: 0, // Moves image to its normal position
  // opacity: 1,
  scrollTrigger: {
  trigger: ".box7", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont9", {
  x: 0, // Moves image to its normal position
  opacity: 1,
  scrollTrigger: {
  trigger: ".box7", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont10 .img-cont", {
  x: 0, // Moves image to its normal position
  // opacity: 1,
  scrollTrigger: {
  trigger: ".box8", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
  gsap.to(".img-cont10", {
  x: 0, // Moves image to its normal position
  opacity: 1,
  scrollTrigger: {
  trigger: ".box8", // Triggers when `.relative` enters the viewport
  start: "top 90%", // Start animation when top of `.relative` hits 80% of the viewport
  end: "top 60%", // End animation at 50%
  scrub: true, // Smooth animation based on scroll
  scroller: "#main", // Reference the main scroll container for smooth scrolling
  // markers: true, 
  },
  duration: 1, // Duration of animation
  ease: "power4.out", // Easing function
  });
  
}
eventBanners();

function sponsorHead(){
    var str = "";
  document.querySelector(".sponsors").textContent.split("").forEach(function(dets) {
    str += `<span>${dets}</span>`;
  });
  document.querySelector(".sponsors").innerHTML = str;
  const spans = document.querySelectorAll(".sponsors span");
  spans.forEach(function(span) {
    span.addEventListener("mouseenter", function() {
      gsap.to(span, {
          y: -10, // Move the text 10px up vertically
          scale: 1.1, // Slightly scale up the text
          skewX: 10, // Skew the text on the X-axis (in degrees)
          skewY: 5,  // Skew the text on the Y-axis (in degrees)
          rotation: 10, // Rotate the text 10 degrees
          duration: 0.5, // Duration of the animation
          ease: "power2.out", // Smooth easing
      });
  });
  
  // Animation when mouse leaves the element
  span.addEventListener("mouseleave", function() {
      gsap.to(span, {
          y: 0, // Reset the vertical position to its original state
          scale: 1, // Reset scale to normal size
          skewX: 0, // Reset skew on the X-axis
          skewY: 0, // Reset skew on the Y-axis
          rotation: 0, // Reset rotation to 0 degrees
          duration: 0.5,
          ease: "power2.out",
      });
  });
  
      });
}
sponsorHead();

function sponsorHead2(){
  var str = "";
document.querySelector(".sponsors2").textContent.split("").forEach(function(dets) {
  str += `<span>${dets}</span>`;
});
document.querySelector(".sponsors2").innerHTML = str;
const spans = document.querySelectorAll(".sponsors2 span");
spans.forEach(function(span) {
  span.addEventListener("mouseenter", function() {
    gsap.to(span, {
        y: -10, // Move the text 10px up vertically
        scale: 1.1, // Slightly scale up the text
        skewX: 10, // Skew the text on the X-axis (in degrees)
        skewY: 5,  // Skew the text on the Y-axis (in degrees)
        rotation: 10, // Rotate the text 10 degrees
        duration: 0.5, // Duration of the animation
        ease: "power2.out", // Smooth easing
    });
});

// Animation when mouse leaves the element
span.addEventListener("mouseleave", function() {
    gsap.to(span, {
        y: 0, // Reset the vertical position to its original state
        scale: 1, // Reset scale to normal size
        skewX: 0, // Reset skew on the X-axis
        skewY: 0, // Reset skew on the Y-axis
        rotation: 0, // Reset rotation to 0 degrees
        duration: 0.5,
        ease: "power2.out",
    });
});

    });
}
sponsorHead2();
function welcomeHead(){
    var str = "";
  document.querySelector(".welcome").textContent.split("").forEach(function(dets) {
    str += `<span>${dets}</span>`;
  });
  document.querySelector(".welcome").innerHTML = str;
  const spans = document.querySelectorAll(".welcome span");
  spans.forEach(function(span) {
    span.addEventListener("mouseenter", function() {
      gsap.to(span, {
          y: -5, // Move the text 10px up vertically
          scale: 1.1, // Slightly scale up the text
          skewX: 10, // Skew the text on the X-axis (in degrees)
          skewY: 5,  // Skew the text on the Y-axis (in degrees)
          rotation: 10, // Rotate the text 10 degrees
          duration: 0.5, // Duration of the animation
          ease: "power2.out", // Smooth easing
      });
  });
  
  // Animation when mouse leaves the element
  span.addEventListener("mouseleave", function() {
      gsap.to(span, {
          y: 0, // Reset the vertical position to its original state
          scale: 1, // Reset scale to normal size
          skewX: 0, // Reset skew on the X-axis
          skewY: 0, // Reset skew on the Y-axis
          rotation: 0, // Reset rotation to 0 degrees
          duration: 0.5,
          ease: "power2.out",
      });
  });
  
      });
}
welcomeHead();
  

function clutter(){
var clutter = "";
document.querySelector(".clut").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`
    document.querySelector(".clut").innerHTML = clutter;
    
})
gsap.to(".clut>span",{
    scrollTrigger:{
        trigger: ".clut>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom 50%",
        scrub:0.5,
        // markers:true
    },
    stagger:0.2,
    color:"#1C1C1A"
})

var clutter2 = "";
document.querySelector(".clut2").textContent.split("").forEach(function(dets){
    clutter2 += `<span>${dets}</span>`
    document.querySelector(".clut2").innerHTML = clutter2;
})
gsap.to(".clut2>span",{
    scrollTrigger:{
        trigger: ".clut2>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom 50%",
        scrub:0.5,
        // markers:true
    },
    stagger:0.2,
    color:"#1C1C1A"
})

var clutter3 = "";
document.querySelector(".clut3").textContent.split("").forEach(function(dets){
    clutter3 += `<span>${dets}</span>`
    document.querySelector(".clut3").innerHTML = clutter3;
})
gsap.to(".clut3>span",{
    scrollTrigger:{
        trigger: ".clut3>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom 50%",
        scrub:0.5,
        // markers:true
    },
    stagger:0.2,
    color:"#1C1C1A"
})

var clutter4 = "";
document.querySelector(".clut4").textContent.split("").forEach(function(dets){
    clutter4 += `<span>${dets}</span>`
    document.querySelector(".clut4").innerHTML = clutter4;
})
gsap.to(".clut4>span",{
    scrollTrigger:{
        trigger: ".clut4>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom 50%",
        scrub:0.5,
        // markers:true
    },
    stagger:0.2,
    color:"#1C1C1A"
})

var clutter5 = "";
document.querySelector(".clut5").textContent.split("").forEach(function(dets){
    clutter5 += `<span>${dets}</span>`
    document.querySelector(".clut5").innerHTML = clutter5;
})
gsap.to(".clut5>span",{
    scrollTrigger:{
        trigger: ".clut5>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom 50%",
        scrub:0.5,
        // markers:true
    },
    stagger:0.2,
    color:"#1C1C1A"
})

var clutter6 = "";
document.querySelector(".clut6").textContent.split("").forEach(function(dets){
    clutter6 += `<span>${dets}</span>`
    document.querySelector(".clut6").innerHTML = clutter6;
})
gsap.to(".clut6>span",{
    scrollTrigger:{
        trigger: ".clut6>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom 50%",
        scrub:0.5,
        // markers:true
    },
    stagger:0.2,
    color:"#1C1C1A"
})

// var clutter7 = "";
// document.querySelector(".clut7").textContent.split("").forEach(function(dets){
//     clutter7 += `<span>${dets}</span>`
//     document.querySelector(".clut7").innerHTML = clutter7;
// })
// gsap.to(".clut7>span",{
//     scrollTrigger:{
//         trigger: ".clut7>span",
//         scroller:"#main",
//         start: "top bottom",
//         end: "bottom 50%",
//         scrub:0.5,
//         // markers:true
//     },
//     stagger:0.2,
//     color:"#1C1C1A"
// })
}
clutter();

function lineThrough1(){
  gsap.to(" .line-anim2 .line-anim", {
    "--line-scale": 1, 
    scrollTrigger: {
      trigger: ".line-anim2",
      start: "top 80%", // Animation starts when `h1` enters the viewport
      end: "top 30%",  // Animation completes at 50% viewport
      scrub: true,  
      scroller:"#main",
      // markers:true  // Smoothly animates based on scroll
    },
    duration: 1,
    ease: "power2.out",
  });
  gsap.to(".line-anim3 .line-anim", {
    "--line-scale": 1, 
    scrollTrigger: {
      trigger: ".line-anim3",
      start: "top 80%", // Animation starts when `h1` enters the viewport
      end: "top 30%",  // Animation completes at 50% viewport
      scrub: true,  
      scroller:"#main",
      // markers:true  // Smoothly animates based on scroll
    },
    duration: 1,
    ease: "power2.out",
  });
}
lineThrough1();

function eventHeading(){
  gsap.to("#events .text-div", {
    y: 0,
    x:0,scale:1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#events",
      scroller: "#main", // If you're using a scroll container
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
    stagger: 0.5, // Stagger each .text-div element
  });
  
  gsap.to("#events .text-div h1", {
    y: 0,  x:0,
    ease: "power4.out",
    scale:1,
    scrollTrigger: {
      trigger: "#events",
      scroller: "#main", // If you're using a scroll container
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
    stagger: 0.5, // Stagger each <h1> tag inside .text-div
  });
  
  gsap.to("#events", {
    scaleX:1,
    ease: "power4.out",
    scale:1,
    scrollTrigger: {
      trigger: "#events",
      scroller: "#main", // If you're using a scroll container
      start: "top bottom",
      end: "bottom 80%",
      scrub: 1,
      // markers: true,
    },
    // stagger: 0.5, // Stagger each <h1> tag inside .text-div
  });
}
eventHeading();


function sponsors(){
    
  const boxes = document.querySelectorAll('.bbox');
  const boxes2 = document.querySelectorAll('.bbox2');
  const boxes3 = document.querySelectorAll('.bbox3');
  
  function resetCycle(index) {
  
      boxes[index].style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
      boxes2[index].style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
      boxes3[index].style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
  }
  
  // Add event listeners to each .box element
  boxes.forEach((box, index) => {
      box.addEventListener('mouseenter', (event) => {
  
          const boxRect = box.getBoundingClientRect();
          const mouseX = event.clientX;
          const enterFromRight = mouseX > boxRect.left + boxRect.width / 2;
  
          if(enterFromRight){
              box.style.clipPath = 'polygon(0 0, 0 100%, 100% 100%, 0 100%)';
  
              setTimeout(() => {
                  boxes2[index].style.clipPath = 'polygon(0 0, 0 100%, 100% 100%, 0 100%)';
                  
                  setTimeout(() => {
                      boxes2[index].style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'; 
                      resetCycle(index); 
                  }, 500); 
              }, 500); }
          else{
              box.style.clipPath ="polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
  
  
          setTimeout(() => {
              boxes2[index].style.clipPath = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
              
              setTimeout(() => {
                  boxes2[index].style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'; 
                  resetCycle(index); 
              }, 500); 
          }, 500); 
          }
          
      });
  });
  
}
sponsors();
}
  
