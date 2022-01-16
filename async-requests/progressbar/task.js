let form = document.getElementById('form');
form.onsubmit = submitEvent => {
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
	let fileInput = document.getElementById('file');
	xhr.onprogress = (progressEvent) => {
		let fileSize = fileInput.files[0].size;
		const progress = document.getElementById('progress');
		progress.value = progressEvent.loaded / fileSize;
	}

	xhr.send(formData);

	submitEvent.preventDefault();
	return false;
}