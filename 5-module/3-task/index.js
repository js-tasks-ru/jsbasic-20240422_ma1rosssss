function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const carouselInner = document.querySelector(".carousel .carousel__inner");
  const slides = Array.from(carouselInner.querySelectorAll(".carousel__slide"));
  const slideCount = slides.length;
  let slidesIndex = 0;

  arrowLeft.addEventListener("click", () => {
    slidesIndex = (slidesIndex - 1 + slideCount) % slideCount;
    slide();
  });

  arrowRight.addEventListener("click", () => {
    slidesIndex = (slidesIndex + 1) % slideCount;
    slide();
  });

  const slide = () => {
    const imageWidth = carouselInner.clientWidth;
    const slideOffset = -slidesIndex * imageWidth;
    carouselInner.style.transform = `translateX(${slideOffset}px)`;
    buttonOff();
  };

  const buttonOff = () => {
    arrowLeft.style.display = slidesIndex === 0 ? "none" : "block";
    arrowRight.style.display =
      slidesIndex === slideCount - 1 ? "none" : "block";
  };

  buttonOff();

  carouselInner.addEventListener("scroll", () => {
    buttonOff();
  });

  console.log(slideCount - 1);
}
