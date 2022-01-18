let editor = document.getElementById('editor');
editor.value = localStorage.editor;
editor.oninput = (event) => {
	localStorage.editor = editor.value;
}
