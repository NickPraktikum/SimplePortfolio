let currentSlide2 = 0;

function slideCarousel2(direction) {
  const track = document.getElementById("carousel-track-2");
  const slideWidth = 921;
  const maxSlide = 1;

  currentSlide2 = Math.min(Math.max(currentSlide2 + direction, 0), maxSlide);
  track.style.transform = `translateX(-${slideWidth * currentSlide2}px)`;
}
