const carousel = document.getElementById("carousel");
const indicators = document.querySelectorAll("#indicators span");
let activeIndex = 0;

function scrollCarousel(direction) {
  const width = carousel.offsetWidth;
  carousel.scrollBy({ left: direction * width, behavior: "smooth" });
}

function updateSlideIndex() {
  const scrollLeft = carousel.scrollLeft;
  const slideWidth = carousel.offsetWidth;
  const index = Math.round(scrollLeft / slideWidth);
  if (index !== activeIndex) {
    activeIndex = index;
    indicators.forEach((dot, i) => {
      dot.classList.toggle("bg-gray-400", i !== index);
      dot.classList.toggle("bg-white", i === index);
    });
  }
}

window.onload = () => updateSlideIndex();
