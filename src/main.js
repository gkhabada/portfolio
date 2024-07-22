import './scss/main.scss';

document.addEventListener('DOMContentLoaded', function () {
  // zero image animations
  const imagesCount = 7;
  let currentImageNumber = 1;
  let animated = false;
  const zeroImageElem = document.querySelector('.zero__image');

  function getNextImageNumber(current) {
    return current + 1 > imagesCount ? 1 : current + 1;
  }

  function preloadNextImage() {
    new Image().src = `./images/myself/${getNextImageNumber(currentImageNumber)}.webp`;
  }

  function zeroImageAnimationFunc(event) {
    event.preventDefault();

    if (animated) return;
    animated = true;
    setTimeout(() => { animated = false; }, 1000);

    const nextImageNumber = getNextImageNumber(currentImageNumber);
    zeroImageElem.src = `./images/myself/${nextImageNumber}.webp`;
    currentImageNumber = nextImageNumber;

    preloadNextImage();

    if (zeroImageElem.classList.contains('zero__image--circle')) {
      zeroImageElem.classList.remove('zero__image--circle');
      zeroImageElem.classList.add('zero__image--square');
    } else {
      zeroImageElem.classList.remove('zero__image--square');
      zeroImageElem.classList.add('zero__image--circle');
    }
  };

  preloadNextImage();
  zeroImageElem.addEventListener('mouseover', zeroImageAnimationFunc);
  zeroImageElem.addEventListener('touchend', zeroImageAnimationFunc);

  // footer year
  const now = new Date();
  document.querySelector(".footer__text_year").innerText = now.getFullYear();

  let wasBorn = new Date(1995, 4, 7);
  document.querySelector(".about-me__old").innerText = Math.floor((now - wasBorn) / 31536000000);

  // active experience company
  const blocks = Array.from(document.querySelectorAll('.experience__item'));
  blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
      if (!block.classList.contains('active')) {
        blocks.forEach((b) => { b.classList.remove('active') });
        block.classList.add('active');
      }
    });
  });
  blocks[blocks.length - 1].classList.add('active');

});
