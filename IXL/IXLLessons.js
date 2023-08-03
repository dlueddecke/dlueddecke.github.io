//Shortened Version #2 with @media IN USE AS OF 8.22.2022
document.querySelectorAll('.site-nav-header,#lesson-print-button-container,.lesson-header-content,.sticky-section,#footer-spacer,.site-nav-footer').forEach(e=>e.remove());
document.getElementsByClassName('lesson-header-text')[0].style['width']='100%';
document.querySelectorAll('h1').forEach(e=>e.style.cssText+='break-before:auto;page-break-after:avoid-page;');
Array.from(document.querySelectorAll('.inline-skill-wrapper')).slice().reverse().forEach(e=>e.parentNode.remove());
document.querySelectorAll('.diagramLabelContainer,.qTable,.qreactbridge,.table').forEach(e=>e.style['break-inside']='avoid');
document.querySelectorAll('.secContentPiece').forEach(e=>e.style.cssText+='break-before:auto;page-break-after:auto;');
document.styleSheets[0].insertRule('@media print{h1{break-before:auto;page-break-after:avoid-page;}}');
window.print();
