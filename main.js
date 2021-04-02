const nav = document.querySelector('.showcase__nav');

function fuckingScroll() {
  if (window.scrollY > 50) {
    nav.classList.add('nav__scroll');
  } else {
    nav.classList.remove('nav__scroll');
  }
}

window.addEventListener('scroll', fuckingScroll);
