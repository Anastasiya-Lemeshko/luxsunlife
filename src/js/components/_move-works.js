import { TABLET_WIDTH } from "./../_vars.js";

const works = document.querySelector('.works-preview');
const linkAll =  works ? works.querySelector('.works-preview__all') : null;
const firstItem = works ? works.querySelector('.works-preview__item') : null;
const form = works ? works.querySelector('.works-preview__form') : null;

let isWorksMoved = false;

const moveWorks = () => {
  if (works && TABLET_WIDTH.matches && !isWorksMoved) {
    firstItem.after(linkAll);

    isWorksMoved = true;
  }

  if (works && !TABLET_WIDTH.matches && isWorksMoved) {
    form.before(linkAll);

    isWorksMoved = false;
  }
};

TABLET_WIDTH.addEventListener('change', moveWorks);

export { moveWorks };
