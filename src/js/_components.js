import { setHeroHeight } from './components/_set-hero-height.js';
import { addFixedHeader } from './components/_fixed-header.js';
import { toggleBurgerMenu } from './components/_open-mobile-menu.js';
import { moveHeader } from './components/_move-header.js';
import { setScrollAnimation } from './components/_scroll-trigger-animation.js';
import { setModals } from './components/_modal.js';
import { setNavigationSwiper } from './components/_navigation-swiper.js';
import { openVisibleFontCardContent, setAccordeonToggles } from './components/_accordion.js';
import { setParallax } from './components/_parallax.js';
import { setSliderCompare } from './components/_slider-compare.js';
import { setFileInputs } from './components/_file-input.js';
import { setTabs } from './components/_tabs.js';
import { moveWorks } from './components/_move-works.js';
import { moveBlogPreview } from './components/_move-blog-preview.js';
import { playVideo } from './components/_video.js';
import { moveArticleElements } from './components/_article-layout.js';
import { addScrollButton } from './components/_button-scroll-top.js';
import { setPopupCookies } from './components/_popup-cookies.js';

document.addEventListener('DOMContentLoaded', () => {
  setHeroHeight();
  addFixedHeader();
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
  setTabs();
  moveWorks();
  moveBlogPreview();
  playVideo();
  moveArticleElements();
  addScrollButton();
  setPopupCookies();
});


