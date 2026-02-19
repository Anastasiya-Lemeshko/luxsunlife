import { SMALL_DESKTOP_WIDTH } from "../_vars.js";
import { openVisibleFontCardContent, openCardDetails } from './_accordion.js';

const features = document.querySelector('.features');
const featuresButton = features ? features.querySelectorAll('.features__button') : null;

let isFeaturesChanged = false;

const changeFeatures = () => {
  if (features && SMALL_DESKTOP_WIDTH.matches && !isFeaturesChanged) {
    featuresButton.forEach((button) => {
      button.classList.remove('accordion-button', 'accordion-button--active');
      button.removeEventListener('click', openCardDetails);
    });

    isFeaturesChanged = true;
  }

  if (features && !SMALL_DESKTOP_WIDTH.matches && isFeaturesChanged) {
    featuresButton.forEach((button) => {
      button.classList.add('accordion-button');
      button.addEventListener('click', openCardDetails);
    });
    featuresButton[0].classList.add('accordion-button--active');
    openVisibleFontCardContent();

    isFeaturesChanged = false;
  }
};

SMALL_DESKTOP_WIDTH.addEventListener('change', changeFeatures);

export { changeFeatures };
