import { toggleBurgerMenu } from './components/_open-mobile-menu.js';
import { moveHeader } from './components/_move-header.js';

document.addEventListener('DOMContentLoaded', () => {
  toggleBurgerMenu();
  moveHeader();
});
