let currentIndex = 0;
const track = document.getElementById("carousel-track");
const title = document.getElementById("language-title");

const titles = [
  "Я володію трьома мовами:",
  "Також мови, які я хотів би вивчити:",
];

function slideCarousel(direction) {
  const totalSlides = 2;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;

  title.style.opacity = 0;
  setTimeout(() => {
    title.textContent = titles[currentIndex];
    title.style.opacity = 1;
  }, 300);
}
