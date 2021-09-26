// plavniy scroll
// plavniy scroll
// plavniy scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// about slider
// about slider
// about slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("about-us-slider");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndex - 1].style.display = "block"
}

// open/close forms
// open/close forms
// open/close forms
var arrowOne = document.querySelector(".arrow-one");
var openOne = document.querySelector(".form-one");
var closeOne = document.querySelector(".form-close-one");
arrowOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  openOne.classList.add("forma");
});
closeOne.addEventListener("click", function (evt) {
  evt.preventDefault();
  openOne.classList.remove("forma");
});


var arrowTwo = document.querySelector(".arrow-two");
var openTwo = document.querySelector(".form-two");
var closeTwo = document.querySelector(".form-close-two");
arrowTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  openTwo.classList.add("forma");
});
closeTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  openTwo.classList.remove("forma");
});


var arrowThree = document.querySelector(".arrow-three");
var openThree = document.querySelector(".form-three");
var closeThree = document.querySelector(".form-close-three");
arrowThree.addEventListener("click", function (evt) {
  evt.preventDefault();
  openThree.classList.add("forma");
});
closeThree.addEventListener("click", function (evt) {
  evt.preventDefault();
  openThree.classList.remove("forma");
});


var arrowFour = document.querySelector(".arrow-four");
var openFour = document.querySelector(".form-four");
var closeFour = document.querySelector(".form-close-four");
arrowFour.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFour.classList.add("forma");
});
closeFour.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFour.classList.remove("forma");
});


var arrowFive = document.querySelector(".arrow-five");
var openFive = document.querySelector(".form-five");
var closeFive = document.querySelector(".form-close-five");
arrowFive.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFive.classList.add("forma");
});
closeFive.addEventListener("click", function (evt) {
  evt.preventDefault();
  openFive.classList.remove("forma");
});


var arrowSix = document.querySelector(".arrow-six");
var openSix = document.querySelector(".form-six");
var closeSix = document.querySelector(".form-close-six");
arrowSix.addEventListener("click", function (evt) {
  evt.preventDefault();
  openSix.classList.add("forma");
});
closeSix.addEventListener("click", function (evt) {
  evt.preventDefault();
  openSix.classList.remove("forma");
});

function design() {
  document.getElementById('design').style.display = "block";
  document.getElementById('archidesign').style.display = "none";
  document.getElementById('fitodesign').style.display = "none";
  document.getElementById('portfolio-popup-fitodesign').style.display = "none";
}

function archidesign() {
  document.getElementById('design').style.display = "none";
  document.getElementById('archidesign').style.display = "block";
  document.getElementById('fitodesign').style.display = "none";
  document.getElementById('portfolio-popup-fitodesign').style.display = "none";
  document.getElementById('portfolio-popup-design').style.display = "none";
}

function fitodesign() {
  document.getElementById('design').style.display = "none";
  document.getElementById('archidesign').style.display = "none";
  document.getElementById('fitodesign').style.display = "block";
  document.getElementById('portfolio-popup-design').style.display = "none";
}

//feedback
//feedback
//feedback
// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//   }
// });

//card
//card
//card
function showCard() {
  document.getElementById('card').style.display = "block";
}

function hideCard() {
  document.getElementById('card').style.display = "none";
}

//portfolio
//portfolio
//portfolio
function showDesignPortfolio() {
  document.getElementById('design').style.display = "none";
  document.getElementById('portfolio-popup-design').style.display = "block";
}

function closeDesignPortfolio() {
  document.getElementById('design').style.display = "block";
  document.getElementById('portfolio-popup-design').style.display = "none";
}

function showFitodesignPortfolio() {
  document.getElementById('fitodesign').style.display = "none";
  document.getElementById('portfolio-popup-fitodesign').style.display = "block";
}

function closeFitodesignPortfolio() {
  document.getElementById('fitodesign').style.display = "block";
  document.getElementById('portfolio-popup-fitodesign').style.display = "none";
}

function showPortfolioCard() {
  document.getElementById('card-portfolio').style.display = "block";
}

function hidePortfolioCard() {
  document.getElementById('card-portfolio').style.display = "none";
}