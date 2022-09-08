const OverlayMenu = document.querySelector('.overlay-menu');
function hamburgeOn() {
if (OverlayMenu.style.display === 'none') {
OverlayMenu.style.display = 'block';
}
}
function hamburgeOff() {
OverlayMenu.style.display = 'none';
}

hamburgeOn();
hamburgeOff();