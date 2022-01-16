let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.onload = () => {
	let response = JSON.parse(xhr.response);
	let pollTitle = document.getElementById('poll__title');
	pollTitle.textContent = response.data.title;
	let answers = document.getElementById('poll__answers');

	response.data.answers.forEach(answer => {
		answers.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${answer}</button>`)
	})

	answers.querySelectorAll('.poll__answer').forEach(button => button.onclick = () => {
		alert("Спасибо, ваш голос засчитан!");
	});
}

xhr.send();
