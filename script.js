// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple contact form feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thank you! Your message has been sent.";
  this.reset();
});

// Bootstrap carousel auto-slide interval
const carousel = document.querySelector('#heroCarousel');
const carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 3000, // 3 seconds
  ride: 'carousel'
});
