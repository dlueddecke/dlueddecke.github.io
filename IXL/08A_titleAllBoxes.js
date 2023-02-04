switch(true) {
	case document.URL.endsWith('/pre-k'):
		var newName = 'PK';
    break;
	case document.URL.endsWith('/kindergarten'):
		var newName = 'K';
    break;
	case document.URL.endsWith('/grade-1'):
		var newName = '1';
    break;
	case document.URL.endsWith('/grade-2'):
		var newName = '2';
    break;
	case document.URL.endsWith('/grade-3'):
		var newName = '3';
    break;
	case document.URL.endsWith('/grade-4'):
		var newName = '4';
    break;
	case document.URL.endsWith('/grade-5'):
		var newName = '5';
    break;
	case document.URL.endsWith('/grade-6'):
		var newName = '6';
    break;
	case document.URL.endsWith('/grade-7'):
		var newName = '7';
    break;
	case document.URL.endsWith('/grade-8'):
		var newName = '8';
    break;
	case document.URL.endsWith('/algebra-1'):
		var newName = 'A1';
    break;
	case document.URL.endsWith('/geometry'):
		var newName = 'G';
    break;
	case document.URL.endsWith('/algebra-2'):
		var newName = 'A2';	
    break;
	case document.URL.endsWith('/precalculus'):
		var newName = 'PC';    	
    break;
	case document.URL.endsWith('/calculus'):
		var newName = 'C';    	
    break;		
  	default:
		var newName = 'M';
}

document.querySelectorAll('.crisp-splash-header, .skill-tree-header').forEach(e=>e.remove());
Array.from(document.getElementsByTagName('td')).forEach(e => e.insertBefore(document.createElement('p'), e.children[0]));
Array.from(document.getElementsByTagName('p')).forEach(e=>e.innerHTML = `${newName}`);
document.querySelectorAll('.skill-tree-category, .skill-tree-body, p').forEach(e=>e.style.cssText+='margin:0;padding:0');
