const slider = document.querySelector('.slider-compare');
const afterScreen = slider ? slider.querySelector('.slider-compare__screen--after') : null;
const toggle = slider ? slider.querySelector('.slider-compare__toggle') : null;

let isDragging = false;

const setSliderCompare = () => {
  if (!afterScreen || !toggle) return;

  toggle.addEventListener('mousedown', (evt) => {
    evt.preventDefault();
    isDragging = true;
  });

  toggle.addEventListener('mouseup', () => {
    isDragging = false;
  });

  slider.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
    }
  });

  slider.addEventListener('mousemove', (evt) => {
    if (!isDragging) return;

    const rect = slider.getBoundingClientRect();
    let x = evt.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const percent = (x / rect.width) * 100;

    afterScreen.style.clipPath = `inset(0 0 0 ${percent}%)`;
    toggle.style.left = `${percent}%`;
  });

  // для мобильных устройств

  toggle.addEventListener('touchstart', (evt) => {
    evt.preventDefault();
    isDragging = true;
  });

  toggle.addEventListener('touchend', () => {
    isDragging = false;
  });

  toggle.addEventListener('touchcancel', () => {
    isDragging = false;
  });

  slider.addEventListener('touchmove', (evt) => {
    if (!isDragging) return;

    evt.preventDefault();
    const touch = evt.touches[0];
    const rect = slider.getBoundingClientRect();
    let x = touch.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const percent = (x / rect.width) * 100;

    afterScreen.style.clipPath = `inset(0 0 0 ${percent}%)`;
    toggle.style.left = `${percent}%`;
  });
};

export { setSliderCompare };
