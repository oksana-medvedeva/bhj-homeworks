function findByClassAndInitClick(className, processor) {
	let elementsCollection = document.getElementsByClassName(className);
	let arr = Array.from(elementsCollection);
	arr.forEach(el => el.onclick = function () {
		processor(el);
	})
}

findByClassAndInitClick('modal__close', modalClose => {
	let modalWindow = document.getElementsByClassName('modal');
	let arr = Array.from(modalWindow);
	arr.forEach(el => el.classList.remove('modal_active'));
})

findByClassAndInitClick('show-success', modalSuccess => {
	let modalWindow = document.getElementById('modal_success');
	modalWindow.classList.add('modal_active');
})

let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');
