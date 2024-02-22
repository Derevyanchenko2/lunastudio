// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});

//slider section reviews
var swiper = new Swiper(".reviews-swiper", {
  observer: true,
  observeParents: true,
  speed: 800,
  initialSlide: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
      rotate: 0,
      stretch: 62,
      depth: 260,
      modifier: 1,
      slideShadows: false,
  },
});
// slider section reviews
var mySwiper = new Swiper('.team-swiper', {
  observer: true,
  observeParents: true,
  spaceBetween: 0,
  speed: 1000,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 92,
      depth: 300,
      modifier: 1,
      slideShadows: false,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

});

//slider section more-reviews
var ReviewsSwiper = new Swiper(".moreReviews-swiper", {
  observer: true,
  observeParents: true,
  spaceBetween: 0,
  speed: 800,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide: 1,
  coverflowEffect: {
    rotate: 90,
    stretch: 0,
    modifier: 1,
    slideShadows: false, 
  },
  pagination: {
    el: ".swiper-pagination",
  },
});




//accordion section faq
document.querySelectorAll(".accordion-trigger").forEach((accordionTrigger) => {
  const accordionContent = accordionTrigger.nextElementSibling;
  const accordionContentHeight = accordionContent.offsetHeight;
  accordionContent.style.height = 0;

  accordionTrigger.addEventListener("click", () => {
    accordionContent.style.height = accordionContent.offsetHeight ? 0 : `${accordionContentHeight}px`;
    accordionTrigger.parentElement.classList.toggle("open");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.mobileMenu-link.scroll-link');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      var targetId = link.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
        
        var burgerMenu = document.querySelector('.burger-menu');
        burgerMenu.classList.remove('open');
      }
    });
  });
});






