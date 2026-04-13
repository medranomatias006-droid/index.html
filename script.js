document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('inscribeteBtn');
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = 'eventos.html';
    });
  }

  const links = document.querySelectorAll('.site-nav .nav-link');
  const currentPath = window.location.pathname.split('/').pop().toLowerCase();
  links.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (href === 'index.html' && currentPath === '')) {
      link.classList.add('active');
    }
  });
});
