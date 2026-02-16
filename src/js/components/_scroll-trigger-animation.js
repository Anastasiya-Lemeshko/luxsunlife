const animatedElements = document.querySelectorAll('[data-animation]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.8 });

const setScrollAnimation = () => {
  animatedElements.forEach((el) => observer.observe(el));
};

export { setScrollAnimation };
