let menuCollection = document.getElementsByClassName('menu__link');
let arr = Array.from(menuCollection);
arr.forEach(el => el.onclick = function() {
	let sibling = el.nextElementSibling;
	document.querySelectorAll('.menu').
		forEach(el => {if (el !== sibling) el.classList.remove('menu_active')});
	if (sibling != null && sibling.classList.contains('menu')) {
		if (sibling.classList.contains('menu_active')) {
			sibling.classList.remove('menu_active');
		} else {
			sibling.classList.add('menu_active');
		}
		return false;
	}
})


