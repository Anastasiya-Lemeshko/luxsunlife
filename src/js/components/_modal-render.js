const renderPhotoToModal = (modal, button) => {
  const modalImgContainer = modal.querySelector('.modal__image');
  const fullImgContainer = button.parentElement.querySelector('[data-full-photo]');

  if (!modalImgContainer || !fullImgContainer) return;

  const fullImg = fullImgContainer.querySelector('picture') || fullImgContainer.querySelector('img');
  if (!fullImg) return;

  const copyFullImg = fullImg.cloneNode(true);

  modalImgContainer.innerHTML = '';
  modalImgContainer.appendChild(copyFullImg);
};

export { renderPhotoToModal };
