// navbar fixed
window.onscroll = function () {
  const header = document.querySelector(".navbar");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }

  // Back to top button visibility
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
};

// Loading screen handler
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(function() {
      loadingScreen.classList.add('hidden');
      setTimeout(function() {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 1000); // Show loading for 1 second
  }
});

// Back to top button click handler
document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

