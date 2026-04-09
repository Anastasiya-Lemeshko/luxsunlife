const video = document.querySelector('.video-fixed');
const closeButton = video ? video.querySelector('.video-fixed__close') : null;
const openButton = video ? video.querySelector('.video-fixed__link') : null;
const videoElement = video ? video.querySelector('video') : null;
const iframeElement = video ? video.querySelector('iframe') : null;

const setVideoFixed = () => {
  if (!video) return;

  const openVideo = () => {
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) { // Safari
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
      }

      video.play();
    }

    if (iframeElement) {
      if (iframeElement.requestFullscreen) {
        iframeElement.requestFullscreen();
      } else if (iframeElement.webkitRequestFullscreen) {
        iframeElement.webkitRequestFullscreen();
      }
    }
  };

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      video.classList.add('hidden');
    });
  }

  if (openButton) {
    openButton.addEventListener('click', openVideo);
  }


};

export { setVideoFixed };
