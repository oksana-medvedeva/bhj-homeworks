let buttons = Array.from(document.getElementsByClassName('dropdown'));
buttons.forEach(button => button.onclick = function() {
	let list = button.querySelector('.dropdown__list');
	list.classList.toggle('dropdown__list_active');
})

let links = Array.from(document.getElementsByClassName('dropdown__link'));
links.forEach(link => link.onclick = function() {
	let value = link.closest('.dropdown').querySelector('.dropdown__value');
	value.textContent = link.textContent;
	return false;
})
