// Remove Header
document.getElementsByClassName('site-nav-header')[0].remove();

// Remove Print Button
document.getElementById('lesson-print-button-container').remove();

// Remove Social Media Buttons
document.getElementsByClassName('lesson-header-content')[0].remove();

// Remove Sticky Section
document.getElementsByClassName('sticky-section')[0].remove();

// Remove All "Try some practice problems!"
var practice = document.getElementsByClassName('inline-skill-wrapper');
for (var i = practice.length - 1; i >=0; i--) {
  practice[i].parentNode.remove();
}

// Remove Footer
document.getElementsByClassName('site-nav-footer')[0].remove();

var pix = document.getElementsByClassName('diagramLabelContainer');
for (var j = 0; j < pix.length; j++) {
  pix[i].style.break-inside = avoid;
}

// Engage Print Window
window.print();

// Redo This
document.getElementsByClassName('site-nav-header')[0].remove();
document.getElementById('lesson-print-button-container').remove();
document.getElementsByClassName('lesson-header-content')[0].remove();
document.getElementsByClassName('sticky-section')[0].remove();
var practice = document.getElementsByClassName('inline-skill-wrapper');
for (var i = practice.length - 1; i >=0; i--) {practice[i].parentNode.remove();}
document.getElementsByClassName('site-nav-footer')[0].remove();
var pix = document.querySelectorAll('.diagramLabelContainer, .qTable, .qreactbridge, .table');
for (var j = 0; j < pix.length; j++) {pix[j].style['break-inside'] = 'avoid';}
var titles = document.querySelectorAll('h1');
for (var k = 0; k < titles.length; k++) {titles[k].style['break-after'] = 'avoid-page'; titles[k].style['orphans'] = 3;}
window.print();

// Shortened Version
document.querySelectorAll('.site-nav-header,#lesson-print-button-container,.lesson-header-content,.sticky-section,.site-nav-footer').forEach(e=>e.remove());
document.getElementsByClassName('lesson-header-text')[0].style['width']='100%';
Array.from(document.querySelectorAll('.inline-skill-wrapper')).slice().reverse().forEach(e=>e.parentNode.remove());
document.querySelectorAll('.diagramLabelContainer,.qTable,.qreactbridge,.table').forEach(e=>e.style['break-inside']='avoid');
document.querySelectorAll('h1').forEach(e=>e.style.cssText+='break-after:avoid-page;orphans:3');
window.print();

//Shortened Version #2 with @media IN USE AS OF 8.22.2022
document.querySelectorAll('.site-nav-header,#lesson-print-button-container,.lesson-header-content,.sticky-section,#footer-spacer,.site-nav-footer').forEach(e=>e.remove());
document.getElementsByClassName('lesson-header-text')[0].style['width']='100%';
document.querySelectorAll('h1').forEach(e=>e.style.cssText+='break-before:auto;break-after:avoid-page');
Array.from(document.querySelectorAll('.inline-skill-wrapper')).slice().reverse().forEach(e=>e.parentNode.remove());
document.querySelectorAll('.diagramLabelContainer,.qTable,.qreactbridge,.table').forEach(e=>e.style['break-inside']='avoid');
document.querySelectorAll('.secContentPiece').forEach(e=>e.style.cssText+='break-before:auto;break-after:auto');
document.styleSheets[0].insertRule('@media print{h1{break-before:auto;break-after:avoid-page;}}');
window.print();
