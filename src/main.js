import './scss/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  // zero image animations
  const zeroImage = document.querySelector('.zero__image');
  zeroImage.addEventListener('mouseover', () => {
    if (zeroImage.classList.contains('zero__image--circle')) {
      zeroImage.classList.add('zero__image--square');
      zeroImage.classList.remove('zero__image--circle');
    } else {
      zeroImage.classList.remove('zero__image--square');
      zeroImage.classList.add('zero__image--circle');
    }
  });

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
