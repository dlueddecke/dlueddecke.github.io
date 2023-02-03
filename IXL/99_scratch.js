switch(true) {
	case document.URL.endsWith('/pre-k'):
		var newName = 'PK';
		var color = '#000000';
    break;
	case document.URL.endsWith('/kindergarten'):
		var newName = 'K';
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-1'):
		var newName = '1';
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-2'):
		var newName = '2';
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-3'):
		var newName = '3';
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-4'):
		var newName = '4';
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-5'):
		var newName = '5';
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-6'):
		var newName = '6';
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-7'):
		var newName = '7';
		var color = '#000000';
    break;
	case document.URL.endsWith('/grade-8'):
		var newName = '8';
		var color = '#FFCF00';
    break;
	case document.URL.endsWith('/algebra-1'):
		var newName = 'A1';
		var color = '#FC74FD';
    break;
	case document.URL.endsWith('/geometry'):
		var newName = 'G';
		var color = '#80C0FF';
    break;
	case document.URL.endsWith('/algebra-2'):
		var newName = 'A2';	
		var color = '#21FC0D';
    break;
	case document.URL.endsWith('/precalculus'):
		var newName = 'PC';    	
		var color = '#C78FFF';
    break;
	case document.URL.endsWith('/calculus'):
		var newName = 'C';    	
		var color = '#000000';
    break;		
  	default:
		var newName = 'M';
		var color = '#000000';
}

document.getElementsByClassName('crisp-splash-header')[0].remove();
Array.from(document.getElementsByTagName('td')).forEach(e => e.insertBefore(document.createTextNode(newName), e.children[0]));
