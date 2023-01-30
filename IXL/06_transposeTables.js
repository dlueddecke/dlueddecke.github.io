function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}

var oldTableArray = document.getElementsByTagName('table');

var n = oldTableArray.length;
var c = 3;
var r = Math.ceil(n / 3);

var oldOrder = range(0, n - 1);
var firstCol = oldOrder.slice(0, r);
var y = n - r;
var b = Math.ceil(y / 2);
var secondCol = oldOrder.slice(r, r + b);
var thirdCol = oldOrder.slice(r + b, n);

var newOrder = [];
for (var i = 0; i < r; i++) {
	if (typeof(firstCol[i]) === 'number') {
		newOrder.push(firstCol[i]);
	}
	if (typeof(secondCol[i]) === 'number') {
		newOrder.push(secondCol[i]);
	}
	if (typeof(thirdCol[i]) === 'number') {
		newOrder.push(thirdCol[i]);
	}
}

var wrapper = oldTableArray[0].parentElement;
var items = oldTableArray;
var elements = document.createDocumentFragment();

newOrder.forEach(function(idx) {
	elements.appendChild(items[idx].cloneNode(true));
});

wrapper[0].innerHTML = null;
wrapper[0].appendChild(elements);

// https://stackoverflow.com/questions/34685316/reorder-html-elements-in-dom
