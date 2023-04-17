// https://stackoverflow.com/questions/34685316/reorder-html-elements-in-dom

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}

var oldTableArray = document.getElementsByTagName('table');

var n = oldTableArray.length;
var c = 2;
var r = Math.ceil(n / c);

var oldOrder = range(0, n - 1);

var everyFirst = (arr, nth) => arr.filter((e, i) => (i + 1) % nth === nth - 1);
var everySecond = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
var firstCol = everyFirst(oldOrder, 2);
var secondCol = everySecond(oldOrder, 2);

var newOrder = [...firstCol, ...secondCol];

var wrapper = oldTableArray[0].parentElement;
var items = oldTableArray;
var elements = document.createDocumentFragment();

newOrder.forEach(function(idx) {
	elements.appendChild(items[idx].cloneNode(true));
});

wrapper.innerHTML = null;
wrapper.appendChild(elements);
