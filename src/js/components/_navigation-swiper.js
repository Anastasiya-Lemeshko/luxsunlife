import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import {
  getSlidesCount,
  getAutoSlidesCount,
  addSwiperClass,
  removeSwiperClass,
  setSlidesTabIndex,
  checkVisibleSlides,
  getSwiperClass,
  getBlockClass,
  setSwiperProgress
} from '../_utils.js';
import {
  TABLET_WIDTH,
  DESKTOP_WIDTH,
  SLIDER_CONFIG
} from "../_vars.js";

const sections = document.querySelectorAll('[data-swiper="navigation"]');

const setNavigationSwiper = () => {
  if (!sections || !sections.length) return;

  sections.forEach((section, index) => {
    const sectionClass = getSwiperClass(section);
    const sectionName = getBlockClass(section);
    const swiperButtons = section.querySelector(`.${sectionClass}swiper-button-container`) ?? section.parentElement.querySelector(`.${sectionClass}swiper-button-container`);
    const sliderConfig = SLIDER_CONFIG[sectionName] || SLIDER_CONFIG.default;
    const desktopBreakpoint = sliderConfig.desktop_width ?? DESKTOP_WIDTH;

    const sectionBlock = document.querySelector(`.${sectionName}`);
    const tabs = sectionBlock ? sectionBlock.querySelector('.tabs') : null;

    let swiperContainer = null;
    let autoplayDelay = 7000 + index * 1000;

    const destroyNavigationSwiper = (swiper, el) => {
      if (swiperContainer) {
        swiperContainer.destroy();
        swiperContainer = null;
        removeSwiperClass(swiper, el);
        swiperButtons.classList.add('hidden');
      }
    };

    const initNavigationSwiper = (isLoopNeeded) => {
      addSwiperClass(section, sectionClass);
      swiperButtons.classList.remove('hidden');

      swiperContainer = new Swiper(section, {
        modules: [Navigation, Autoplay, EffectFade],
        direction: 'horizontal',
        speed: 500,
        allowTouchMove: true,
        slidesPerView: sliderConfig.mobile_count,
        spaceBetween: 10,
        loop: isLoopNeeded,
        autoHeight: sliderConfig.mobile_count === 1,

        // autoplay: {
        //   delay: autoplayDelay,
        //   stopOnLastSlide: false,
        //   reverseDirection: false,
        //   waitForTransition: true,
        // },

        ...(sliderConfig.fade && {
          effect: 'fade',
          fadeEffect: { crossFade: true }
        }),

        breakpoints: {
          768: {
            slidesPerView: sliderConfig.tablet_count,
            autoHeight: sliderConfig.tablet_count === 1,
          },

          1024: {
            slidesPerView: sliderConfig.desktop_count,
            autoHeight: sliderConfig.desktop_count === 1,
            speed: 1000,
            spaceBetween: 32,
          }
        },

        navigation: {
          nextEl: `.${sectionClass}swiper-button-container .button-swiper--next`,
          prevEl: `.${sectionClass}swiper-button-container .button-swiper--prev`,
        },

        on: {
          init: function () {
            const numberOfVisibleSlides = checkVisibleSlides(sectionName);
            setSlidesTabIndex(this, numberOfVisibleSlides);
            setSwiperProgress(this);
          },
          slideChange: function () {
            const numberOfVisibleSlides = checkVisibleSlides(sectionName);
            setSlidesTabIndex(this, numberOfVisibleSlides);
            setSwiperProgress(this);
          }
        },
      });
    };

    const checkNavigationSwiper = () => {
      // делает скрытый табами слайдер нерабочим
      if (tabs) {
        const tabContent = section.closest('.tabs__tabcontent');
        const isTabActive = tabContent?.classList.contains('tabs__tabcontent--active');

        if (!isTabActive) {
          if (swiperContainer) {
            destroyNavigationSwiper(section, sectionClass);
          }
          return;
        }
      }

      // проверка использования параметра 'auto' у количества слайдов на странице
      let autoSliderConfig = null;

      if (!TABLET_WIDTH.matches && sliderConfig.mobile_count === 'auto') {
        autoSliderConfig = getAutoSlidesCount(section);
      }

      if (TABLET_WIDTH.matches && !desktopBreakpoint.matches && sliderConfig.tablet_count === 'auto') {
        autoSliderConfig = getAutoSlidesCount(section);
      }

      if (desktopBreakpoint.matches && sliderConfig.desktop_count === 'auto') {
        autoSliderConfig = getAutoSlidesCount(section);
      }

      // проверка необходимости слайдера
      const isNeedMobile = !TABLET_WIDTH.matches && (getSlidesCount(section) > (autoSliderConfig ?? sliderConfig.mobile_count));
      const isNeedTablet = TABLET_WIDTH.matches && !desktopBreakpoint.matches && (getSlidesCount(section) > (autoSliderConfig ?? sliderConfig.tablet_count));
      const isNeedDesktop = desktopBreakpoint.matches && (getSlidesCount(section) > (autoSliderConfig ?? sliderConfig.desktop_count));

      const isLoopNeeded = (sliderConfig.loop ?? false) && (isNeedMobile || isNeedTablet || isNeedDesktop);

      if (!swiperContainer && (isNeedMobile || isNeedTablet || isNeedDesktop)) {
        initNavigationSwiper(isLoopNeeded);
      } else if (swiperContainer && (!isNeedMobile && !isNeedTablet && !isNeedDesktop)) {
        destroyNavigationSwiper(section, sectionClass);
      } else if (swiperContainer && (isNeedMobile || isNeedTablet || isNeedDesktop)) {
        destroyNavigationSwiper(section, sectionClass);
        initNavigationSwiper(isLoopNeeded);
      }
    };

    checkNavigationSwiper();
    TABLET_WIDTH.addEventListener('change', checkNavigationSwiper);
    desktopBreakpoint.addEventListener('change', checkNavigationSwiper);

    // проверка активности таба для скрытых слайдеров
    const tabContent = tabs ? section.closest('.tabs__tabcontent') : null;
    if (tabContent) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const isActive = tabContent.classList.contains('tabs__tabcontent--active');
            if (isActive) {
              checkNavigationSwiper();
            }
          }
        });
      });
      observer.observe(tabContent, { attributes: true });
    }
    // конец проверки активности таба
  });
};

export { setNavigationSwiper };
