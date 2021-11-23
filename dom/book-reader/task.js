let fontSizes = Array.from(document.querySelectorAll('.font-size'));
fontSizes.forEach(button => button.onclick = function () {
	if (button.classList.contains('font-size_active')) {
			return false;
		}
	let currentSize = fontSizes.findIndex(btn => btn.classList.contains('font-size_active'));
	fontSizes[currentSize].classList.remove('font-size_active');
	button.classList.add('font-size_active'); 
	let book = document.querySelector('.book');
	book.classList.remove('book_fs-small', 'book_fs-big')
	if (button.classList.contains('font-size_small')) {
		book.classList.add('book_fs-small');
	} else if (button.classList.contains('font-size_big')) {
		book.classList.add('book_fs-big');
	}
	return false
})