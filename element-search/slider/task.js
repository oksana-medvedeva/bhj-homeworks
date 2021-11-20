let sliderArray = Array.from(document.getElementsByClassName('slider__item'));
let sliderPrev = Array.from(document.getElementsByClassName('slider__arrow_prev'));
let sliderNext = Array.from(document.getElementsByClassName('slider__arrow_next'));

let index = 0;

function changeSliderPosition(step) {
	let nextIndex = index + step;
	if (nextIndex < 0) {
		nextIndex = sliderArray.length - 1;
	} else if (nextIndex >= sliderArray.length) {
		nextIndex = 0;
	}
	sliderArray[index].classList.remove('slider__item_active');
	sliderArray[nextIndex].classList.add('slider__item_active');
	index = nextIndex;
}

sliderPrev.forEach(el => el.onclick = function() {
	changeSliderPosition(-1);
})

sliderNext.forEach(el => el.onclick = function() {
	changeSliderPosition(1);
})