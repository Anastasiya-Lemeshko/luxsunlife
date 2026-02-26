import { TABLET_WIDTH } from "./../_vars.js";

const blogPreview = document.querySelector('.blog-preview');
const wrapper = blogPreview ? blogPreview.querySelector('.blog-preview__wrapper') : null;
const linkAll = blogPreview ? blogPreview.querySelector('.blog-preview__all') : null;
const blogItems = blogPreview ? blogPreview.querySelectorAll('.blog-preview__item') : null;

let isBlogPreviewMoved = false;

const moveBlogPreview = () => {
  if (blogPreview && TABLET_WIDTH.matches && !isBlogPreviewMoved) {
    blogItems[1].after(linkAll);

    isBlogPreviewMoved = true;
  }

  if (blogPreview && !TABLET_WIDTH.matches && isBlogPreviewMoved) {
    wrapper.appendChild(linkAll);

    isBlogPreviewMoved = false;
  }
};

TABLET_WIDTH.addEventListener('change', moveBlogPreview);

export { moveBlogPreview };
