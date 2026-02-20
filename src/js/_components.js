import { toggleBurgerMenu } from './components/_open-mobile-menu.js';
import { moveHeader } from './components/_move-header.js';
import { setScrollAnimation } from './components/_scroll-trigger-animation.js';
import { setModals } from './components/_modal.js';
import { setNavigationSwiper } from './components/_navigation-swiper.js';
import { openVisibleFontCardContent, setAccordeonToggles } from './components/_accordion.js';
import { setParallax } from './components/_parallax.js';
import { setSliderCompare } from './components/_slider-compare.js';
import { setFileInputs } from './components/_file-input.js'

document.addEventListener('DOMContentLoaded', () => {
  toggleBurgerMenu();
  moveHeader();
  setScrollAnimation();
  setModals();
  setNavigationSwiper();
  openVisibleFontCardContent();
  setAccordeonToggles();
  setParallax();
  setSliderCompare();
  setFileInputs();
});
