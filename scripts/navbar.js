const mobileDesktopQuery = window.matchMedia('(min-width: 768px)');
const secondNavDesk = document.getElementById('second-nav');
const secondNavMob = document.getElementById('second-nav-mobile');
const secondNav = `
  <a href="#" class="nav-item nav-link a"><i class="fab fa-facebook-f"></i></a>
  <a href="#" class="nav-item nav-link a"><i class="fab fa-twitter"></i></a>
  <a href="#" class="nav-item nav-link a">English</a>
  <a href="#" class="nav-item nav-link a">My page</a>
  <a href="#" class="nav-item nav-link a">Logout</a>
`;

function mobileDesktopSwap(mediaQuery) {
  const navSlide = document.getElementById('navbarSlide');
  if (mediaQuery.matches) {
    navSlide.classList.toggle('offcanvas', false);
    navSlide.classList.toggle('offcanvas-start', false);
    navSlide.classList.toggle('visible', true);
    const closeMenu = document.getElementById('closeMenu');
    secondNavMob.innerHTML = '';
    secondNavDesk.innerHTML = secondNav;
    closeMenu.click();
  } else {
    navSlide.classList.toggle('offcanvas', true);
    navSlide.classList.toggle('offcanvas-start', true);
    navSlide.classList.toggle('visible', false);
    secondNavDesk.innerHTML = '';
    secondNavMob.innerHTML = secondNav;
  }
}

mobileDesktopQuery.addEventListener('change', mobileDesktopSwap);
mobileDesktopSwap(mobileDesktopQuery);
