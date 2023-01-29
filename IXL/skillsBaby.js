document.querySelectorAll('.site-nav-header, .site-nav-footer, .skill-tree-subnav-content, .skill-tree-aside, .description').forEach(e=>e.remove());

switch(document.getElementsByClassName('crisp-splash-header')[0].textContent.trim()) {
  case 'Eighth grade math':
var color = '#FFCF00';
    break;
  case 'Algebra 1':
var color = '#FC74FD';
    break;
  case 'Geometry':
var color = '#80C0FF';
    break;
  case 'Algebra 2':
	var color = '#21FC0D';
    break;
  case 'Precalculus':
    var color = '#C78FFF';
    break;
  default:
var color = '#000000';
}

document.getElementsByClassName('crisp-splash-header')[0].style['color']=color;
document.getElementsByClassName('crisp-splash-header')[0].style['font-weight']='bold';
document.querySelectorAll('.crisp-u-1-3').forEach(e=>e.outerHTML = e.innerHTML);
document.querySelectorAll('.crisp-g').forEach(e=>e.outerHTML = e.innerHTML);
wrap = (el, wrapper) => {el.parentNode.insertBefore(wrapper, el); wrapper.appendChild(el);}
Array.from(document.querySelectorAll('.skill-tree-category')).slice().reverse().forEach(e=>wrap(e, document.createElement('td')));
Array.from(document.querySelectorAll('td')).slice().reverse().forEach(e=>wrap(e, document.createElement('tr')));
Array.from(document.querySelectorAll('tr')).slice().reverse().forEach(e=>wrap(e, document.createElement('table')));
document.querySelectorAll('td').forEach(e=>e.style['padding']='5px');
document.querySelectorAll('table').forEach(e=>e.style['display']='inline-table');
document.querySelectorAll('table').forEach(e=>e.style['vertical-align']='top');
Array.from(document.querySelectorAll('table')).slice().reverse().forEach(e=>e.style.border='1px solid #C0C0C0');
Array.from(document.querySelectorAll('table')).slice().reverse().forEach(e=>e.style.width='47.75%');
document.querySelectorAll('article').forEach(e=>e.style['padding-left']='0');
document.querySelectorAll('.skill-tree-content').forEach(e=>e.style['padding-left']='0');
