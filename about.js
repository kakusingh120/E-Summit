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
      const toggleButton = document.querySelector(".burger");
      const overlay = document.querySelector(".overlay");
      const subNav = document.querySelector(".sub-nav");
      const menuItems = document.querySelectorAll(".menu-item p");
      const activeItem = document.querySelector(".menu-item p#active");
      let isOpen = false;
      const toggleButton1 = document.querySelector(".burger1");
  
      // GSAP Initial Setup
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
  

  if(window.innerWidth>=768){
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
sheryJS()

function iicHead(){
  var str = "";
document.querySelector(".iic").textContent.split("").forEach(function(dets) {
  str += `<span>${dets}</span>`;
});
document.querySelector(".iic").innerHTML = str;
const spans = document.querySelectorAll(".iic span");
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
iicHead();

function ecellHead(){
  var str = "";
document.querySelector(".ecell").textContent.split("").forEach(function(dets) {
  str += `<span>${dets}</span>`;
});
document.querySelector(".ecell").innerHTML = str;
const spans = document.querySelectorAll(".ecell span");
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
ecellHead();

function esummitHead(){
  var str = "";
document.querySelector(".esummit").textContent.split("").forEach(function(dets) {
  str += `<span>${dets}</span>`;
});
document.querySelector(".esummit").innerHTML = str;
const spans = document.querySelectorAll(".esummit span");
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
esummitHead();
  }
