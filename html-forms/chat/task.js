function formatTime(hours, minutes) {
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0"+ minutes;
	}
	return hours + ':' + minutes;
}

function getCurrentFormattedTime() {
	let date = new Date();
	return formatTime(date.getHours(), date.getMinutes())
}

let chat = document.querySelector('.chat-widget');
chat.onclick = () => chat.classList.add('chat-widget_active');

const messages = document.querySelector( '.chat-widget__messages');
function enterMessage(e) {
	if (e.key === 'Enter' && e.currentTarget.checkValidity()) {
		messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">${getCurrentFormattedTime()}</div>
			<div class="message__text">${e.currentTarget.value}</div>
		</div>
		`
		document.getElementById('chat-widget__input').value = '';
		postAnswer();
	}
}
function selectNewAnswer() {
	const answers = [
		'Дорый день! До свидания!',
		'Где ваша совесть?',
		'Мы ничего не будем Вам продавать!',
		'Кто тут?',
		'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
		'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
	],
	index = Math.floor(Math.random() * answers.length);
	return answers[index];
}
function postAnswer() {
		messages.innerHTML += `
		<div class="message">
			<div class="message__time">${getCurrentFormattedTime()}</div>
			<div class="message__text">${selectNewAnswer()}</div>
		</div>
		`
}
document.getElementById('chat-widget__input').addEventListener('keyup', e => {
	enterMessage(e);
});



