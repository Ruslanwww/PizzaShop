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
}