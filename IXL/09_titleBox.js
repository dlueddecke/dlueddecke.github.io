wrap = (el, wrapper) => {el.parentNode.insertBefore(wrapper, el); wrapper.appendChild(el);}
Array.from(document.querySelectorAll('p')).slice().reverse().forEach(e=>wrap(e, document.createElement('th')));
document.querySelectorAll('th').forEach(e=>e.style.cssText+='border:1px solid #C0C0C0');
