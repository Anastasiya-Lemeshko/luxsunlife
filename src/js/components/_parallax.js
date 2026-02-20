import {
  TABLET_WIDTH,
  DESKTOP_WIDTH
} from "../_vars.js";

const parallaxContainer = document.querySelector('.parallax');
const parallaxElement = parallaxContainer ? parallaxContainer.querySelector('.parallax-element') : null;

const speed = -0.2;
let entryScrollY = null;

const setParallax = () => {
  if (!parallaxElement || !parallaxContainer) return;

  const scrollY = window.scrollY;
  const rect = parallaxContainer.getBoundingClientRect();

  // Момент входа контейнера в зону видимости
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {

    // Если entryScrollY еще не задан ИЛИ контейнер только что вошел в зону видимости
    if (entryScrollY === null) {
      entryScrollY = scrollY - (window.innerHeight - rect.top);
    }

    const scrolledSinceEntry = (scrollY - entryScrollY);
    const moveY = scrolledSinceEntry * speed;

    parallaxElement.style.transform = `translateX(-50%) translateY(${moveY}px)`;

  } else {
    entryScrollY = null;
  }
}

window.addEventListener('scroll', setParallax);

TABLET_WIDTH.addEventListener('change', setParallax);
DESKTOP_WIDTH.addEventListener('change', setParallax);

export { setParallax };
