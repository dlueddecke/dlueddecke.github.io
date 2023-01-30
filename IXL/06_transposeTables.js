var oldOrder = document.querySelectorAll('table');
var n = oldOrder.length;
var c = 3;
var r = Math.ceil(n / 3)

var firstCol = oldOrder.slice(0, r);
var y = n - r;
var b = Math.ceil(y / 2);
var secondCol = oldOrder.slice(r, r + b);
var thirdCol = oldOrder.slice(r + b, n);

var newOrder = [];
for (var i = 0; i < r; i++) {
	try {
	  newOrder.push(firstCol[i]);
	  newOrder.push(secondCol[i]);
	  newOrder.push(thirdCol[i]);
	}
	catch (err) {
  		Logger.log(err);
	}
}

newOrder.forEach(e=>document.body.orderOrder[0].parentNode(appendChild(e));
