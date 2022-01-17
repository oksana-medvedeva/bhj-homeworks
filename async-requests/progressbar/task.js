let form = document.getElementById('form');
form.onsubmit = submitEvent => {
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
	
	xhr.upload.onprogress = (progressEvent) => {
		const progress = document.getElementById('progress');
		progress.value = progressEvent.loaded / progressEvent.total;
	}

	xhr.send(formData);

	submitEvent.preventDefault();
	return false;
}