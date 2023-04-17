if (document.getElementsByTagName('table')[0].style['border'] === '0px') {
	document.querySelectorAll('table').forEach(e=>e.style.border='1px solid #C0C0C0');
} else {
	document.querySelectorAll('table').forEach(e=>e.style.border='0px');
}
