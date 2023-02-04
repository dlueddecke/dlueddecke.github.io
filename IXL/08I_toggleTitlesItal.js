if (document.getElementsByTagName('p')[0].style['font-style'] === 'normal' || document.getElementsByTagName('p')[0].style['font-style'] !== 'italic') {
	Array.from(document.getElementsByTagName('p')).forEach(e=>e.style.cssText+='font-style:italic');
} else {
	Array.from(document.getElementsByTagName('p')).forEach(e=>e.style.cssText+='font-style:normal');
}
