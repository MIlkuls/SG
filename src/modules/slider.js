let sliderImages = document.querySelector('.slider-images');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');

let imageIndex = 0;
let images = Array.from(sliderImages.children);



function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }
  
  sliderImages.style.transform = `translateX(-${index * 100}%)`;
  imageIndex = index;
}

prevButton.addEventListener('click', function() {
  showImage(imageIndex - 1);
});

nextButton.addEventListener('click', function() {
  showImage(imageIndex + 1);
});

showImage(imageIndex);