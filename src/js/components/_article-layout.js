import { SMALL_DESKTOP_WIDTH } from "./../_vars.js";

const article = document.querySelector('.article');
const gridBlocks = article ? article.querySelectorAll('.article__layout') : null;

const moveArticleElements = () => {
  if (!gridBlocks || !gridBlocks.length) return;

  gridBlocks.forEach((block) => {
    const grid = block.querySelector('.article__layout-list');
    const movedElement = block.querySelector('.article__layout-shift');
    const container = block.querySelector('.container');

    let isArticleMoved = false;

    if (!grid || !movedElement || !container) return;

    const moveElements = () => {
      setTimeout(() => {
        if (SMALL_DESKTOP_WIDTH.matches && !isArticleMoved) {
          grid.appendChild(movedElement);

          isArticleMoved = true;
        }

        if (!SMALL_DESKTOP_WIDTH.matches && isArticleMoved) {
          container.appendChild(movedElement);

          isArticleMoved = false;
        }
      }, 10);
    };

    moveElements();
    SMALL_DESKTOP_WIDTH.addEventListener('change', moveElements);
  });
};

export { moveArticleElements };
