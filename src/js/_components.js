import { toggleBurgerMenu } from './components/_open-mobile-menu.js';
import { moveHeader } from './components/_move-header.js';
import { setScrollAnimation } from './components/_scroll-trigger-animation.js';
import { setModals } from './components/_modal.js';
import { setNavigationSwiper } from './components/_navigation-swiper.js';
import { openVisibleFontCardContent, setAccordeonToggles } from './components/_accordion.js';
import { setParallax } from './components/_parallax.js';
import { changeFeatures } from './components/_features-change.js';

document.addEventListener('DOMContentLoaded', () => {
  toggleBurgerMenu();
  moveHeader();
  setScrollAnimation();
  setModals();
  setNavigationSwiper();
  openVisibleFontCardContent();
  setAccordeonToggles();
  setParallax();
  //changeFeatures();
});
