let overlay_menu = document.querySelector('.overlay-menu');
hamburgeOn();
hamburgeOff();
function hamburgeOn() {
  if (overlay_menu.style.display == 'none') 
    overlay_menu.style.display = 'block';}
function hamburgeOff() {
  overlay_menu.style.display = 'none';}
