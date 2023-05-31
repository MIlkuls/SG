let slides = document.querySelectorAll(".slide");
let currentSlide = 1;


function showSlide(slideIndex) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
  console.log(currentSlide)
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 1;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
  console.log(currentSlide)
}

let prevButton = document.getElementById("prevBtn");
let nextButton = document.getElementById("nextBtn");

window.addEventListener("load",showSlide(currentSlide))
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);


showSlide(currentSlide);