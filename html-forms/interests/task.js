const checkboxes = document.querySelectorAll('.interest__check');
checkboxes.forEach(checkbox => checkbox.onclick = function() {
	let checks = Array.from(checkbox.closest('.interest').querySelectorAll('.interest__check'));
	checks.forEach(check => {
		if (checkbox.checked) {
			check.setAttribute('checked', '')
		} else {
			check.removeAttribute('checked', '')
		};
	})
})