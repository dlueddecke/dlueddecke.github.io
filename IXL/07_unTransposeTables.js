// https://stackoverflow.com/questions/34685316/reorder-html-elements-in-dom

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}

var oldTableArray = document.getElementsByTagName('table');

var n = oldTableArray.length;
var c = 3;
var r = Math.ceil(n / 3);

var oldOrder = range(0, n - 1);

var everyFirst = (arr, nth) => arr.filter((e, i) => (i + 2) % nth === nth - 1);
var everySecond = (arr, nth) => arr.filter((e, i) => (i + 1) % nth === nth - 1);
var everyThird = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
var firstCol = everyFirst(oldOrder, 3);
var secondCol = everySecond(oldOrder, 3);
var thirdCol = everyThird(oldOrder, 3);

var newOrder = [...firstCol, ...secondCol, ...thirdCol];

var wrapper = oldTableArray[0].parentElement;
var items = oldTableArray;
var elements = document.createDocumentFragment();

newOrder.forEach(function(idx) {
	elements.appendChild(items[idx].cloneNode(true));
});

wrapper.innerHTML = null;
wrapper.appendChild(elements);
