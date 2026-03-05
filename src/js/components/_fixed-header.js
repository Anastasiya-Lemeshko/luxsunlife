import { debounce } from './../_utils.js';
import { HEADER_FIXED_OFFSET } from "./../_vars.js";

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

const observer = header && hero ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    header.classList.toggle('header--fixed', !entry.isIntersecting);
  });
}, { threshold: 0 }) : null;

const headerScrollHandler = () => {
  const scrollTop = window.pageYOffset;
  header.classList.toggle('header--fixed', scrollTop >= HEADER_FIXED_OFFSET);
};

const debouncedHeaderScrollHandler = debounce(headerScrollHandler, 50);

const addFixedHeader = () => {
  if (!header) return;

  if (hero) {
    observer.observe(hero);
  } else {
    window.addEventListener('scroll', debouncedHeaderScrollHandler);
    headerScrollHandler();
  }
};

export { addFixedHeader };
