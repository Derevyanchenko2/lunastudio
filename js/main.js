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
      depth: 200,
      modifier: 1,
      slideShadows: false,
  },
  // breakpoints: {
  //   // Когда ширина экрана меньше или равна 768px
  //   1920: {
  //     slidesPerView: 3,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   // Когда ширина экрана меньше или равна 576px
  //   576: {
  //     slidesPerView: 1,
  //   }
  // }
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
      stretch: 102,
      depth: 150,
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
  spaceBetween: 15,
  speed: 800,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 90,
    stretch: 10,
    modifier: 1,
    slideShadows: false, 
  },
  pagination: {
    el: ".swiper-pagination",
  },
});




// //accordion section faq
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

// calculator style
let language = '';
let shift = '';
let shiftsPerWeek = 0;
const exchangeRate = 2.32;

function selectLanguage(selectedLanguage) {
    language = selectedLanguage;
    document.getElementById('basicLanguage').classList.remove('active');
    document.getElementById('intermediateLanguage').classList.remove('active');
    document.getElementById('fluentLanguage').classList.remove('active');
    document.getElementById(selectedLanguage + 'Language').classList.add('active');
    calculateEarnings();
}

function selectShift(selectedShift) {
    shift = selectedShift;
    document.getElementById('morningShift').classList.remove('active');
    document.getElementById('dayShift').classList.remove('active');
    document.getElementById('nightShift').classList.remove('active');
    document.getElementById(selectedShift + 'Shift').classList.add('active');
    calculateEarnings();
}

function selectShiftsPerWeek(selectedShifts) {
    shiftsPerWeek = selectedShifts;
    document.getElementById('4shifts').classList.remove('active');
    document.getElementById('5shifts').classList.remove('active');
    document.getElementById('6shifts').classList.remove('active');
    document.getElementById(selectedShifts + 'shifts').classList.add('active');
    calculateEarnings();
}

function calculateEarnings() {
    let earningsPerShift = 0;
    switch (language) {
        case 'basic':
            earningsPerShift = 4800;
            break;
        case 'intermediate':
            earningsPerShift = 7200;
            break;
        case 'fluent':
            earningsPerShift = 9600;
            break;
        default:
            earningsPerShift = 0;
    }

    if (shift === 'night') {
        earningsPerShift *= 1.2;
    }

    let totalEarningsPerWeek = earningsPerShift * shiftsPerWeek;
    let totalEarningsPerMonth = totalEarningsPerWeek * 4;
    let totalEarningsPerYear = totalEarningsPerWeek * 52;

    let totalEarningsPerWeekHryvnia = totalEarningsPerWeek / exchangeRate;
    let totalEarningsPerMonthHryvnia = totalEarningsPerMonth / exchangeRate;
    let totalEarningsPerYearHryvnia = totalEarningsPerYear / exchangeRate;

    document.getElementById('weeklyEarnings').textContent = "0.00";
    document.getElementById('monthlyEarnings').textContent = "0.00";
    document.getElementById('yearlyEarnings').textContent = "0.00";

    let currentWeeklyEarnings = 0;
    const finalWeeklyEarnings = totalEarningsPerWeekHryvnia;
    const weeklyStep = finalWeeklyEarnings / 100;
    const weeklyInterval = setInterval(() => {
        currentWeeklyEarnings += weeklyStep;
        if (currentWeeklyEarnings >= finalWeeklyEarnings) {
            clearInterval(weeklyInterval);
        }
        document.getElementById('weeklyEarnings').textContent = currentWeeklyEarnings.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }, 10);

    let currentMonthlyEarnings = 0;
    const finalMonthlyEarnings = totalEarningsPerMonthHryvnia;
    const monthlyStep = finalMonthlyEarnings / 100;
    const monthlyInterval = setInterval(() => {
        currentMonthlyEarnings += monthlyStep;
        if (currentMonthlyEarnings >= finalMonthlyEarnings) {
            clearInterval(monthlyInterval);
        }
        document.getElementById('monthlyEarnings').textContent = currentMonthlyEarnings.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }, 10);

    let currentYearlyEarnings = 0;
    const finalYearlyEarnings = totalEarningsPerYearHryvnia;
    const yearlyStep = finalYearlyEarnings / 100;
    const yearlyInterval = setInterval(() => {
        currentYearlyEarnings += yearlyStep;
        if (currentYearlyEarnings >= finalYearlyEarnings) {
            clearInterval(yearlyInterval);
        }
        document.getElementById('yearlyEarnings').textContent = currentYearlyEarnings.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }, 10);
}

window.onload = function() {
    selectLanguage('basic');
    selectShift('day');
    selectShiftsPerWeek(6);
};

const modals = document.querySelectorAll('.JobModal');
const modalBtns = document.querySelectorAll('.line-link.job-details');
const modalCloseBtns = document.querySelectorAll('.close-icon');
let openModal = null;

function toggleModal(modal) {
  if (openModal && openModal !== modal) {
    openModal.style.display = 'none';
  }
  modal.style.display = (modal.style.display === 'block' && openModal === modal) ? 'none' : 'block';
  openModal = (modal.style.display === 'block') ? modal : null;
}

modalBtns.forEach((btn, index) => btn.addEventListener('click', () => toggleModal(modals[index])));

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('JobModal')) {
    toggleModal(event.target);
  }
});

modalCloseBtns.forEach((btn) => btn.addEventListener('click', (event) => {
  event.stopPropagation();
  const modal = event.target.closest('.JobModal');
  toggleModal(modal);
}));


