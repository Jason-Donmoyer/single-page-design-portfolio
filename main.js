// VARIABLES

// Slideshow Buttons
const slidesShowButtons = document.getElementById('slideshow-buttons-container');
const backBtn = document.getElementById('back-btn');
const fwdBtn = document.getElementById('fwd-btn');

// Slides Container
const slidesContainer = document.getElementById('slides-container');

// Slides
const slide1 = document.getElementById('slide-1');
const slide2 = document.getElementById('slide-2');
const slide3 = document.getElementById('slide-3');
const slide4 = document.getElementById('slide-4');
const slide5 = document.getElementById('slide-5');

let slidesArr = [slide1, slide2, slide3, slide4, slide5];


// FUNCTIONS

// Check To See If Element Is In Window
function checkVis(ele) {
  let rect = ele.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Change Slide Forward
function slideForward() {
  let lastEle = slidesArr.shift();
  slidesArr.push(lastEle);
  slidesArr.forEach(e => slidesContainer.appendChild(e));
}

// Change Slide Backward
function slideBack() {
  let lastEle = slidesArr.pop();
  slidesArr.unshift(lastEle);
  slidesArr.forEach(e => slidesContainer.appendChild(e));
}


// Event Listeners to Change Slides

// Back Button
backBtn.addEventListener('click', slideBack);

// Forward Button
fwdBtn.addEventListener('click', slideForward);

// Change slides on arrow keys keydown
document.addEventListener('keydown', (e) => {
  if (checkVis(slidesShowButtons)) {
    if (e.key === 'ArrowLeft') {
      slideBack();
      backBtn.style.backgroundColor = 'var(--gd-bg-color)';
    } 
    if (e.key === 'ArrowRight') {
      slideForward();
      fwdBtn.style.backgroundColor = 'var(--gd-bg-color)';
    }
  }
});

// Change background color of buttons back to original on keyup
document.addEventListener('keyup', (e) => {
  if (checkVis(slidesShowButtons)) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      fwdBtn.style.backgroundColor = 'var(--main-dark-color)';
      backBtn.style.backgroundColor = 'var(--main-dark-color)';
    }
  }
});