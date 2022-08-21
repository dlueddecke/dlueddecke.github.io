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
for (var i = 0; i < practice.length; i++) {
  practice[i].parentNode.removeChild(practice[i]);
//   practice[i].remove();
}

// Remove Footer
document.getElementsByClassName('site-nav-footer')[0].remove();

alert(practice.length);
