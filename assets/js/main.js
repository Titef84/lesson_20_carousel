const slides = document.querySelectorAll('.slide');
const pauseButton = document.querySelector('#pause');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentSlide = 0;
let isPlaying = true;
let timerID = null;

function nextSlide() {
  slides[currentSlide].classList.toggle('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.toggle('active');
}

function pauseSlideShow() {
  clearInterval(timerID);
  pauseButton.innerHTML = 'Play';
  isPlaying = false;
}

function playSlideShow() {
  timerID = setInterval(nextSlide, 2000);
  pauseButton.innerHTML = 'Pause';
  isPlaying = true;
}


function pausePlayHandler() {
  if (isPlaying) {
    pauseSlideShow()
  } else {
    playSlideShow()
  }
}

pauseButton.addEventListener('click', pausePlayHandler);

timerID = setInterval(nextSlide, 2000);