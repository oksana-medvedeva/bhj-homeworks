let parents = Array.from(document.querySelectorAll('.rotator'));
parents.forEach(parent => setInterval(() => {
	let e = parent.querySelector('.rotator__case_active');
	e.classList.remove('rotator__case_active');
	let nextE = e.nextElementSibling;
	if (nextE === null) {
		nextE = e.parentElement.firstElementChild;
	}
	nextE.classList.add('rotator__case_active'); 
}, 1000))


