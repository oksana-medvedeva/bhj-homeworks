let loader = document.getElementById('loader');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.onload = () => {
	let currencies = JSON.parse(xhr.response).response.Valute;
	let items = document.getElementById('items');
	items.innerHTML = "";
	for (var curName in currencies) {
		let currency = currencies[curName];
		items.insertAdjacentHTML("beforeEnd", `<div class="item">
            <div class="item__code">
                    ${currency.CharCode}
                </div>
                <div class="item__value">
                    ${currency.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>`)
	}
	loader.classList.remove('loader_active');
}
xhr.send();
