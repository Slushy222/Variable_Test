// Source - https://stackoverflow.com/a/70442120
// Posted by A Haworth
// Retrieved 2026-05-13, License - CC BY-SA 4.0

const hdivs = document.querySelectorAll('.word span');

function touchStart(ev) {
  ev.preventDefault();
  ev.target.classList.add('hover');
}

function touchEnd(ev) {
  ev.preventDefault();
  ev.target.classList.remove('hover');
}
hdivs.forEach(hdiv => {
  hdiv.addEventListener('touchstart', touchStart, false);
  hdiv.addEventListener('touchend', touchEnd, false);
});