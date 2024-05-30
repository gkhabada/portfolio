import './scss/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  // footer year
  const now = new Date();
  document.querySelector(".footer__text_year").innerText = now.getFullYear();

  let wasBorn = new Date(1995, 4, 7);
  document.querySelector(".about-me__old").innerText =  Math.floor((now - wasBorn) / 31536000000);

  // active experience company
  const blocks = Array.from(document.querySelectorAll('.experience__item'));
  blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
      block.classList.add('active');
    });

    block.addEventListener('mouseout', () => {
      blocks.forEach((b) => b.classList.remove('active'));
    });
  });

  blocks[blocks.length - 1].classList.add('active');
});
