const popupCookies = document.querySelector('.popup-cookies');

const setPopupCookies = () => {
  if (!popupCookies && localStorage.getItem('cookiesAccepted')) return;

  popupCookies.classList.add('show');

  const popupCookiesBtn = popupCookies.querySelector('.popup-cookies__button');
  const popupCookiesClose = popupCookies.querySelector('.popup-cookies__close');

  if (popupCookiesClose) {
    popupCookiesClose.addEventListener('click', () => {
      popupCookies.classList.remove('show');
    });
  }

  if (popupCookiesBtn) {
    popupCookiesBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      popupCookies.classList.remove('show');
    });
  }
};

export { setPopupCookies };
