let buttons = Array.from(document.getElementsByClassName('tab'));
let content = Array.from(document.getElementsByClassName('tab__content'));
buttons.forEach((button, index) => button.onclick = function() {
	if (button.classList.contains('tab_active')) {
		return false;
	}
	let currentIndex = buttons.findIndex(btn => btn.classList.contains('tab_active'));
	buttons[currentIndex].classList.remove('tab_active');
	content[currentIndex].classList.remove('tab__content_active');
	button.classList.add('tab_active'); 
	content[index].classList.add('tab__content_active');
})