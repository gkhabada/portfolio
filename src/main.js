import './scss/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  // zero image animations

  // [1, 2, 3, 4, 5, 6, 7].forEach((i) => (new Image().src = `./images/myself/${i}.webp`));

  const imagesCount = 7;
  let currentImageNumber = 1;
  const zeroImageElem = document.querySelector('.zero__image');
  let animated = false;
  const zeroImageAnimationFunc = (event) => {
    event.preventDefault();
    if (animated) return;

    animated = true;
    setTimeout(() => { animated = false; }, 1000);

    const nextImageNumber = currentImageNumber + 1 > imagesCount ? 1 : currentImageNumber + 1;
    zeroImageElem.src = `./images/myself/${nextImageNumber}.webp`;
    currentImageNumber = nextImageNumber;

    if (zeroImageElem.classList.contains('zero__image--circle')) {
      zeroImageElem.classList.add('zero__image--square');
      zeroImageElem.classList.remove('zero__image--circle');
    } else {
      zeroImageElem.classList.remove('zero__image--square');
      zeroImageElem.classList.add('zero__image--circle');
    }
  };
  zeroImageElem.addEventListener('mouseover', zeroImageAnimationFunc);
  zeroImageElem.addEventListener('touchend', zeroImageAnimationFunc);

  // footer year
  const now = new Date();
  document.querySelector(".footer__text_year").innerText = now.getFullYear();

  let wasBorn = new Date(1995, 4, 7);
  document.querySelector(".about-me__old").innerText =  Math.floor((now - wasBorn) / 31536000000);

  // active experience company
  const blocks = Array.from(document.querySelectorAll('.experience__item'));
  blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
      if (!block.classList.contains('active')) {
        blocks.forEach((b) => b.classList.remove('active'));
        block.classList.add('active');
      }
    });
  });
  blocks[blocks.length - 1].classList.add('active');

});
