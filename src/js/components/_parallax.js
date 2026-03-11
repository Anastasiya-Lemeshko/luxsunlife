import {
  TABLET_WIDTH,
  DESKTOP_WIDTH
} from "../_vars.js";

const parallaxContainer = document.querySelector('.parallax');
const parallaxElement = parallaxContainer ? parallaxContainer.querySelector('.parallax-element') : null;

const speed = -0.2;
let entryScrollY = null;
let ticking = false;
let isVisible = false;

const setParallax = () => {
  if (!parallaxElement || !parallaxContainer) return;

  const scrollY = window.scrollY;
  const rect = parallaxContainer.getBoundingClientRect();

  if (isVisible) {
    if (entryScrollY === null) {
      entryScrollY = scrollY - (window.innerHeight - rect.top);
    }

    const scrolledSinceEntry = (scrollY - entryScrollY);
    const moveY = scrolledSinceEntry * speed;

    parallaxElement.style.transform = `translateX(-50%) translateY(${moveY}px)`;
  } else {
    entryScrollY = null;
  }

  ticking = false;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    isVisible = entry.isIntersecting;
    if (!isVisible) {
      entryScrollY = null;
    }
  });
}, { threshold: 0 });

if (parallaxContainer) {
  observer.observe(parallaxContainer);
}

const onScroll = () => {
  if (!ticking && isVisible) {
    window.requestAnimationFrame(setParallax);
    ticking = true;
  }
};

window.addEventListener('scroll', onScroll, { passive: true });

TABLET_WIDTH.addEventListener('change', setParallax);
DESKTOP_WIDTH.addEventListener('change', setParallax);

export { setParallax };
