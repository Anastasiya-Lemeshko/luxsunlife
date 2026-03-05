const video = document.querySelector('.video-fixed');
const closeButton = video ? video.querySelector('.video-fixed__close') : null;

const setVideoFixed = () => {
  if (!video || !closeButton) return;

  closeButton.addEventListener('click', () => {
    video.classList.add('hidden');
  });
};

export { setVideoFixed };
