function something(){

	var x = window.localStorage.getItem('bbb');

	x++;

	window.localStorage.setItem('bbb', x);

	alert(x);
}

function add_to_cart(id){

	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x++;
	window.localStorage.setItem(key, x);
	alert('Items in your cart: ' + cart_get_number_of_items());
}

function cart_get_number_of_items(){

	var cnt = 0;
	for (var i = 0; i < window.localStorage.length; i++) {

		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key) * 1;

		if (key.indexOf('product_') == 0) {

			cnt += value;
		}
	}
	return cnt;
}