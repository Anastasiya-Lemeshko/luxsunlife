import { toggleBurgerMenu } from './components/_open-mobile-menu.js';
import { moveHeader } from './components/_move-header.js';
import { setScrollAnimation } from './components/_scroll-trigger-animation.js';
import { setModals } from './components/_modal.js';

document.addEventListener('DOMContentLoaded', () => {
  toggleBurgerMenu();
  moveHeader();
  setScrollAnimation();
  setModals();
});
