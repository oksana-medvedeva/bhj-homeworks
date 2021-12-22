let input = document.getElementById("task__input");
let form = document.getElementById("tasks__form");
let taskList = document.getElementById("tasks__list");
form.addEventListener("submit", event => {
	let value = input.value;
	if(value === null) {
		return false
	}
	taskList.insertAdjacentHTML("beforeEnd",
		"<div class='task'> <div class='task__title'>"+value+"</div> <a href='#' class='task__remove'>&times;</a></div>");
	console.log(taskList.lastChild);
	let addedItem = taskList.lastChild
	addedItem.querySelector(".task__remove").addEventListener("click", event => {
		addedItem.remove();
	})
	input.value = "";
	event.preventDefault();
	return false;
})
