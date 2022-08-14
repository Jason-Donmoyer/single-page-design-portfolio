// VARIABLES

// Slideshow Buttons
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


// Event Listeners to Change Slides

// Back Button
backBtn.addEventListener('click', () => {
  // slidesContainer.style.transform = 'translate3d(20%, 0, 0)';
  let lastEle = slidesArr.pop();
  slidesArr.unshift(lastEle);
  slidesArr.forEach(e => slidesContainer.appendChild(e));
});

// Forward Button
fwdBtn.addEventListener('click', () => {
  // slidesContainer.style.transform = 'translate3d(-20%, 0, 0)';
  let lastEle = slidesArr.shift();
  slidesArr.push(lastEle);
  slidesArr.forEach(e => slidesContainer.appendChild(e));
});