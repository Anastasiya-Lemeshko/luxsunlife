/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_open_mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_open-mobile-menu.js */ "./src/js/components/_open-mobile-menu.js");
/* harmony import */ var _components_move_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_move-header.js */ "./src/js/components/_move-header.js");


document.addEventListener('DOMContentLoaded', () => {
  (0,_components_open_mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__.toggleBurgerMenu)();
  (0,_components_move_header_js__WEBPACK_IMPORTED_MODULE_1__.moveHeader)();
});

/***/ }),

/***/ "./src/js/_utils.js":
/*!**************************!*\
  !*** ./src/js/_utils.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSwiperClass: () => (/* binding */ addSwiperClass),
/* harmony export */   checkVisibleSlides: () => (/* binding */ checkVisibleSlides),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   getBlockClass: () => (/* binding */ getBlockClass),
/* harmony export */   getScrollWidth: () => (/* binding */ getScrollWidth),
/* harmony export */   getSlidesCount: () => (/* binding */ getSlidesCount),
/* harmony export */   getSwiperClass: () => (/* binding */ getSwiperClass),
/* harmony export */   isArrowDownKey: () => (/* binding */ isArrowDownKey),
/* harmony export */   isArrowUpKey: () => (/* binding */ isArrowUpKey),
/* harmony export */   isEnterKey: () => (/* binding */ isEnterKey),
/* harmony export */   isEscapeKey: () => (/* binding */ isEscapeKey),
/* harmony export */   isTabKey: () => (/* binding */ isTabKey),
/* harmony export */   removeSwiperClass: () => (/* binding */ removeSwiperClass),
/* harmony export */   removeTabIndex: () => (/* binding */ removeTabIndex),
/* harmony export */   setSlidesTabIndex: () => (/* binding */ setSlidesTabIndex),
/* harmony export */   setTabIndex: () => (/* binding */ setTabIndex)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars.js */ "./src/js/_vars.js");

const isEscapeKey = evt => evt.key === 'Escape';
const isArrowDownKey = evt => evt.key === 'ArrowDown';
const isArrowUpKey = evt => evt.key === 'ArrowUp';
const isEnterKey = evt => evt.key === 'Enter';
const isTabKey = evt => evt.key === 'Tab';
const getScrollWidth = () => {
  const div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};
const setTabIndex = array => {
  array.forEach(link => {
    link.setAttribute('tabindex', '0');
  });
};
const removeTabIndex = array => {
  array.forEach(link => {
    link.setAttribute('tabindex', '-1');
  });
};
const getSlidesCount = swiper => {
  const swiperList = swiper.querySelector('[class*="swiper-wrapper"]');
  return swiperList.children.length;
};
const addSwiperClass = (swiper, el) => {
  const swiperWrapper = swiper.querySelector(`.${el}swiper-wrapper`);
  const swiperSlides = swiper.querySelectorAll(`.${el}slide`);
  swiper.classList.add('swiper');
  swiperWrapper.classList.add('swiper-wrapper');
  swiperWrapper.classList.remove('no-swiper');
  swiperSlides.forEach(slide => {
    slide.classList.add('swiper-slide');
  });
};
const removeSwiperClass = (swiper, el) => {
  const swiperWrapper = swiper.querySelector(`.${el}swiper-wrapper`);
  const swiperSlides = swiper.querySelectorAll(`.${el}slide`);
  swiper.classList.remove('swiper');
  swiperWrapper.classList.remove('swiper-wrapper');
  swiperWrapper.classList.add('no-swiper');
  swiperSlides.forEach(slide => {
    slide.classList.remove('swiper-slide');
  });
};
const getSwiperClass = swiper => {
  const className = swiper.className.split(' ').find(cls => cls.includes('swiper') && cls !== 'swiper');
  return className ? className.replace('swiper', '') : null;
};
const getBlockClass = element => {
  const className = element.className.split(' ').find(cls => cls.includes('__') && !cls.endsWith('__'));
  if (className) {
    const prefix = className.split('__')[0];
    return prefix;
  }
  return null;
};
const findActiveSlides = (index, activeIndex, numberOfActiveSlides) => {
  for (let i = 0; i < numberOfActiveSlides; i++) {
    if (index === activeIndex + i) {
      return true;
    }
  }
  return false;
};
const setSlidesTabIndex = (swiper, countVisibleSlides) => {
  swiper.slides.forEach((slide, index) => {
    const isActive = findActiveSlides(index, swiper.activeIndex, countVisibleSlides);
    slide.querySelectorAll('a, button, input, textarea, select, [tabindex]').forEach(el => {
      el.tabIndex = isActive ? 0 : -1;
    });
  });
};
const checkVisibleSlides = block => {
  if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDES_COUNT[block]) {
    if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.DESKTOP_WIDTH.matches) {
      return _vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDES_COUNT[block].desktop;
    } else if (_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches) {
      return _vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDES_COUNT[block].tablet;
    }
    return _vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDES_COUNT[block].mobile;
  } else {
    return _vars_js__WEBPACK_IMPORTED_MODULE_0__.SLIDES_COUNT.default;
  }
};
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(undefined, rest), timeoutDelay);
  };
};


/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COUNT_GRID_COLUMNS: () => (/* binding */ COUNT_GRID_COLUMNS),
/* harmony export */   DESKTOP_WIDTH: () => (/* binding */ DESKTOP_WIDTH),
/* harmony export */   RANGE_VALUES: () => (/* binding */ RANGE_VALUES),
/* harmony export */   SLIDES_COUNT: () => (/* binding */ SLIDES_COUNT),
/* harmony export */   SMALL_DESKTOP_WIDTH: () => (/* binding */ SMALL_DESKTOP_WIDTH),
/* harmony export */   TABLET_WIDTH: () => (/* binding */ TABLET_WIDTH),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});
const TABLET_WIDTH = window.matchMedia('(min-width: 768px)');
const SMALL_DESKTOP_WIDTH = window.matchMedia('(min-width: 1024px)');
const DESKTOP_WIDTH = window.matchMedia('(min-width: 1366px)');
const SLIDES_COUNT = {
  'default': {
    'mobile': 1,
    'tablet': 2,
    'desktop': 3
  },
  'team': {
    'mobile': 1,
    'tablet': 2,
    'desktop': 3
  },
  'featured': {
    'mobile': 1,
    'tablet': 3,
    'desktop': 6
  },
  'blog-preview': {
    'mobile': 1,
    'tablet': 2,
    'desktop': 3
  },
  'similar': {
    'mobile': 1,
    'tablet': 2,
    'desktop': 3,
    'desktop_width': SMALL_DESKTOP_WIDTH
  }
};
const RANGE_VALUES = {
  'default': {
    'min': 0,
    'max': 100,
    'step': 1,
    'start': 0,
    'end': 100
  },
  'min-price': {
    'min': 350000,
    'max': 500000,
    'step': 10000,
    'start': 300000
  },
  'max-price': {
    'min': 500000,
    'max': 700000,
    'step': 10000,
    'start': 450000
  },
  'price': {
    'min': 350000,
    'max': 700000,
    'step': 10000,
    'start': 300000,
    'end': 700000
  },
  'years': {
    'min': 1,
    'max': 24,
    'step': 1,
    'start': 1,
    'end': 24
  },
  'people': {
    'min': 1,
    'max': 24,
    'step': 1,
    'start': 1,
    'end': 24
  }
};
const COUNT_GRID_COLUMNS = {
  default: 2,
  multiform: {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }
};

/***/ }),

/***/ "./src/js/components/_move-header.js":
/*!*******************************************!*\
  !*** ./src/js/components/_move-header.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveHeader: () => (/* binding */ moveHeader)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_vars.js */ "./src/js/_vars.js");

const header = document.querySelector('.header');
const nav = header ? header.querySelector('.header__wrapper') : null;
const contacts = header ? header.querySelector('.header__contacts') : null;
const callback = header ? header.querySelector('.header__callback') : null;
let isUserHeaderMoved = false;
const moveHeader = () => {
  if (header && _vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches && !isUserHeaderMoved) {
    contacts.prepend(callback);
    isUserHeaderMoved = true;
  }
  if (header && !_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.matches && isUserHeaderMoved) {
    nav.appendChild(callback);
    isUserHeaderMoved = false;
  }
};
_vars_js__WEBPACK_IMPORTED_MODULE_0__.TABLET_WIDTH.addEventListener('change', moveHeader);


/***/ }),

/***/ "./src/js/components/_open-mobile-menu.js":
/*!************************************************!*\
  !*** ./src/js/components/_open-mobile-menu.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleBurgerMenu: () => (/* binding */ toggleBurgerMenu)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_utils.js */ "./src/js/_utils.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_vars.js */ "./src/js/_vars.js");


const header = document.querySelector('.header');
const menu = header ? header.querySelector('.header__nav') : null;
const burgerMenu = header ? header.querySelector('.header__burger') : null;
const headerLinks = menu ? menu.querySelectorAll('a, button') : null;
let scrollSize = 0;
const openMobileMenu = () => {
  menu.classList.add('is-open');
  burgerMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
  header.addEventListener('focusout', onMenuFocusOut);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTabIndex)(headerLinks);
  scrollSize = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getScrollWidth)();
  document.body.style.paddingRight = `${scrollSize}px`;
};
const closeMobileMenu = () => {
  menu.classList.remove('is-open');
  burgerMenu.classList.remove('active');
  document.body.style.overflow = 'visible';
  document.body.style.paddingRight = 0;
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
  header.removeEventListener('focusout', onMenuFocusOut);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeTabIndex)(headerLinks);
};
function onDocumentKeydown(evt) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isEscapeKey)(evt)) {
    evt.preventDefault();
    closeMobileMenu();
  }
}
function onMenuFocusOut(evt) {
  if (evt.relatedTarget === null || !header.contains(evt.relatedTarget)) {
    closeMobileMenu();
  }
}
function onDocumentClick(evt) {
  if (!header.contains(evt.target)) {
    closeMobileMenu();
  }
}
const toggleBurgerMenu = () => {
  if (!burgerMenu) return;
  burgerMenu.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
};
if (!_vars_js__WEBPACK_IMPORTED_MODULE_1__.DESKTOP_WIDTH.matches && headerLinks && headerLinks.length) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeTabIndex)(headerLinks);
}
_vars_js__WEBPACK_IMPORTED_MODULE_1__.DESKTOP_WIDTH.addEventListener('change', () => {
  if (!headerLinks || !headerLinks.length) return;
  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.DESKTOP_WIDTH.matches) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.setTabIndex)(headerLinks);
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.removeTabIndex)(headerLinks);
  }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map