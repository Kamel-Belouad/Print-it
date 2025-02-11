const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let index = 1;

let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", function () {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  setslide();
});
let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", function () {
  if (index === slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  setslide();
});
function setslide() {
  let image = document.getElementById("image");
  let text = document.getElementById("caroussel-text");
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, idx) => {
    if (idx === index) dot.className = "dot dot_selected";
    else dot.className = "dot";
  });

  image.src = slides[index].image;
  text.innerHTML = slides[index].tagLine;
}
