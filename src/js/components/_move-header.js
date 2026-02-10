import { TABLET_WIDTH } from "./../_vars.js";

const header = document.querySelector('.header');
const nav = header ? header.querySelector('.header__wrapper') : null;
const contacts = header ? header.querySelector('.header__contacts') : null;
const callback = header ? header.querySelector('.header__callback') : null;

let isUserHeaderMoved = false;

const moveHeader = () => {
  if (header && TABLET_WIDTH.matches && !isUserHeaderMoved) {
    contacts.prepend(callback);

    isUserHeaderMoved = true;
  }

  if (header && !TABLET_WIDTH.matches && isUserHeaderMoved) {
    nav.appendChild(callback);

    isUserHeaderMoved = false;
  }
};

TABLET_WIDTH.addEventListener('change', moveHeader);

export { moveHeader };
