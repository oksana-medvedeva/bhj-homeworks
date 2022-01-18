function LoginUser(user) {
	let userId = document.getElementById('user_id');
	userId.textContent = user;
	let welcome = document.getElementById('welcome');
	welcome.classList.add('welcome_active');
	let signIn = document.getElementById('signin');
	signIn.classList.remove('signin_active');
}
let signinForm = document.getElementById('signin__form');

if(localStorage.user !== undefined) {
	LoginUser(localStorage.user);
}

signinForm.onsubmit = submitEvent => {
	let formData = new FormData(signinForm);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
	xhr.onload = () => {
		let response = JSON.parse(xhr.response);
		if(response.success) {
			localStorage.user = response.user_id;
			LoginUser(response.user_id);
		} else {
			alert('Неверный логин/пароль');
		}
	}
	xhr.send(formData);

	submitEvent.preventDefault();
	return false;
}