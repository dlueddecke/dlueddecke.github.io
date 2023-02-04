if (document.getElementsByTagName('th').length === 0) {
	wrap = (el, wrapper) => {el.parentNode.insertBefore(wrapper, el); wrapper.appendChild(el);}
	Array.from(document.querySelectorAll('p')).slice().reverse().forEach(e=>wrap(e, document.createElement('th')));
	document.querySelectorAll('th').forEach(e=>e.style.cssText+='border:1px solid #C0C0C0');
} else if (document.getElementsByTagName('th')[0].style['border'] === '0px') {
	document.querySelectorAll('th').forEach(e=>e.style.cssText+='border:1px solid #C0C0C0');
} else {
	document.querySelectorAll('th').forEach(e=>e.style.cssText+='border:0px');
}
