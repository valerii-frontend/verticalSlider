const slider = document.querySelector(".slider");
const slideRight = document.querySelector(".slider__right");
const slideLeft = document.querySelector(".slider__left");
const btnDown = document.querySelector(".slider__down");
const btnUp = document.querySelector(".slider__up");
const slidesImg = slideRight.querySelectorAll("div");
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesImg.length - 1) * 100}vh`;
btnUp.addEventListener("click", () => changeSlide("up"));
btnDown.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
	const sliderHeight = slider.clientHeight;
	if (direction == "up") {
		++activeSlideIndex;
		activeSlideIndex == slidesImg.length ? (activeSlideIndex = 0) : activeSlideIndex;
	} else if (direction == "down") {
		--activeSlideIndex;
		activeSlideIndex == slidesImg.length - slidesImg.length - 1
			? (activeSlideIndex = slidesImg.length - 1)
			: activeSlideIndex;
	}
	slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
	slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
