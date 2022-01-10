const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const indicatorsContainer = document.querySelectorAll('.indicators');
const pauseBtn = document.querySelector('#pause-btn');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let currentSlide = 0;
let isPlaying = true;
let timerID = null;
let inteval = 2000;

function gotoNth(n) {
  slides[currentSlide].classList.toggle('active');
  indicators[currentSlide].classList.toggle('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.toggle('active');
  indicators[currentSlide].classList.toggle('active');
}

function gotoNext() {
  gotoNth(currentSlide + 1);
}


function gotoPrev() {
  gotoNth(currentSlide - 1);

}


function pause() {
  if (isPlaying) {
    clearInterval(timerID);
    pauseBtn.innerHTML = 'Play';
    isPlaying = false;
  }
}

function play() {
  timerID = setInterval(gotoNext, inteval);
  pauseBtn.innerHTML = 'Pause';
  isPlaying = true;
}


function pausePlay() {
  if (isPlaying) {
    pause()
  } else {
    play()
  }
}

function next() {
  pause();
  gotoNext();
}

function prev() {
  pause();
  gotoPrev();
}

function indicate(e) {
  const target = e.target;
  if (target.classList.contains('indicator')) {
    pause();
    gotoNth(+target.getAttribute('data-slide-to'));
  }
}

pauseBtn.addEventListener('click', pausePlay);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

timerID = setInterval(gotoNext, inteval);

indicatorsContainer.addEventListener('click', indicate);