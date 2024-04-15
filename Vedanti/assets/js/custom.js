document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu-container').classList.toggle('hidden');
  });

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

