if (document.getElementsByTagName('p')[0].style['font-weight'] === '400') {
	Array.from(document.getElementsByTagName('p')).forEach(e=>e.style.cssText+='font-weight:700');
} else {
	Array.from(document.getElementsByTagName('p')).forEach(e=>e.style.cssText+='font-weight:400');
}
