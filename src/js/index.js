const slideContainer = document.getElementsByClassName("slide-container")[0];

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const slideLen = images.length;

slideContainer.style.gridTemplateColumns = `repeat(${slideLen}, 100%)`
images.map(e => {
  slideContainer.innerHTML += `
    <div class="image-container">
      <img src="./img/library-images/${e}.jpeg">
    </div>
  `
});

let marginLeft = 0;
setInterval(() => {
  if (marginLeft != (100 * slideLen) - 100) {
    marginLeft += 100;
  } else {
    marginLeft = 0;
  }
  slideContainer.style.marginLeft = `-${marginLeft}%`;

}, 2500);