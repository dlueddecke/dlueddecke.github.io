// https://stackoverflow.com/questions/34685316/reorder-html-elements-in-dom

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}

var oldTableArray = document.getElementsByTagName('table');
var c = 2;
var n = oldTableArray.length;
var r = Math.ceil(n / c);
var oldOrder = range(0, n - 1);
var firstCol = oldOrder.slice(0, r);
var secondCol = oldOrder.slice(r, n);

var newOrder = [];
for (var i = 0; i < r; i++) {
	if (typeof(firstCol[i]) === 'number') {
		newOrder.push(firstCol[i]);
	}
	if (typeof(secondCol[i]) === 'number') {
		newOrder.push(secondCol[i]);
	}
}

var wrapper = oldTableArray[0].parentElement;
var items = oldTableArray;
var elements = document.createDocumentFragment();

newOrder.forEach(function(idx) {
	elements.appendChild(items[idx].cloneNode(true));
});

wrapper.innerHTML = null;
wrapper.appendChild(elements);
