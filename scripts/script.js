const mobileDesktopQuery = window.matchMedia('(min-width: 768px)');

function mobileDesktopSwap(mediaQuery) {
  const navSlide = document.getElementById('navbarSlide');
  if (mediaQuery.matches) {
    navSlide.classList.toggle('offcanvas', false);
    navSlide.classList.toggle('offcanvas-start', false);
    navSlide.classList.toggle('visible', true);
    const closeMenu = document.getElementById('closeMenu');
    closeMenu.click();
  } else {
    navSlide.classList.toggle('offcanvas', true);
    navSlide.classList.toggle('offcanvas-start', true);
    navSlide.classList.toggle('visible', false);
  }
}

mobileDesktopQuery.addEventListener('change', mobileDesktopSwap);
mobileDesktopSwap(mobileDesktopQuery);