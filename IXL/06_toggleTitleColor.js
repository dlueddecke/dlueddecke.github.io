switch(true) {
	case document.URL.endsWith('/pre-k'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/kindergarten'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-1'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-2'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-3'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-4'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-5'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-6'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-7'):
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-8'):
		var color = '#FFCF00';
    break;
	case document.URL.endsWith('/algebra-1'):
		var color = '#FC74FD';
    break;
	case document.URL.endsWith('/geometry'):
		var color = '#80C0FF';
    break;
	case document.URL.endsWith('/algebra-2'):
		var color = '#21FC0D';
    break;
	case document.URL.endsWith('/precalculus'):
		var color = '#C78FFF';
    break;
	case document.URL.endsWith('/calculus'):
		var color = '#000000';
    break;		
  	default:
		var color = '#000000';
}

if (document.getElementsByTagName('p').style['color'] === '#000000' || document.getElementsByTagName('p').style['color'] === 'rgb(0, 0, 0)') {
	Array.from(document.getElementsByTagName('p')).forEach(e=>e.style.cssText+=`color:${color}`);
} else {
	document.querySelectorAll('p, .category-code, .category-name, .skill-tree-skill-name').forEach(e=>e.style.color = '#000000');
}
