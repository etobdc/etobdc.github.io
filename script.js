const navLinks = document.querySelectorAll('.section-nav a');
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));

document.getElementById('printBtn')?.addEventListener('click', () => window.print());
