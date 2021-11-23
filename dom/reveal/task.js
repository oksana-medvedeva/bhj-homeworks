let heightToShow = window.innerHeight / 2
window.addEventListener('scroll', function(e) {
	let objects = Array.from(document.querySelectorAll('.reveal'));
	objects.forEach(block => {
		let top = block.getBoundingClientRect().top
		if (top > 0 && top < heightToShow) {
			block.classList.add('reveal_active')
		} else {
			block.classList.remove('reveal_active')
		}
	});
})