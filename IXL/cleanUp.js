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
