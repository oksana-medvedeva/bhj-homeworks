let menuCollection = document.getElementsByClassName('menu__link');
let arr = Array.from(menuCollection);
arr.forEach(el => el.onclick = function() {
	document.querySelectorAll('.menu').
		forEach(el => el.classList.remove('menu_active'));
	let sibling = el.nextElementSibling
	if (sibling != null && sibling.classList.contains('menu')) {
		sibling.classList.add('menu_active')
		return false;
	}
})


