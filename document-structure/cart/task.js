let cart = document.querySelector('.cart .cart__products')
let products = document.querySelectorAll('.product').forEach(product => {
	let productNumber = product.querySelector('.product__quantity-value');
	product.querySelectorAll('.product__quantity-control').forEach(quantityControl => {
		quantityControl.addEventListener("click", clickEvent => {
			let delta = quantityControl.classList.contains('product__quantity-control_inc') ? 1 : -1;
			let value = parseInt(productNumber.textContent) + delta;
			if (value < 1)
				value = 1;
			productNumber.textContent = value;
		});
	});
	let id = product.dataset.id
	product.querySelector('.product__add').addEventListener('click', event => {
		let itemInCart = cart.querySelector(`.cart__product[data-id='${id}']`)
		if (itemInCart === null) {
			let image = product.querySelector(".product__image").getAttribute("src");
			cart.insertAdjacentHTML("beforeEnd",
				`<div class="cart__product" data-id="${id}">
					<img class="cart__product-image" src="${image}">
					<div class="cart__product-count">${productNumber.textContent}</div>
				</div>`);		
		} else {
			let productCount = itemInCart.querySelector('.cart__product-count');
			productCount.textContent = parseInt(productCount.textContent) + parseInt(productNumber.textContent);
		}

	})

})