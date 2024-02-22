import './scss/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  // footer date
  const now = new Date();
  document.querySelector(".footer_date").innerText = now.getFullYear();

  // about me old
  let wasBorn = new Date(1995, 4, 7);
  document.querySelector(".about-me__old").innerText = Math.floor((now - wasBorn) / 31536000000);

  // parallax photo
  const imgBlock = document.querySelector('.about-me')
  const imgMy = document.querySelector('.about-me__photo')
  document.addEventListener('scroll', () => {
    const scrollToBottom = imgBlock.offsetTop + imgBlock.getBoundingClientRect().bottom;
    imgMy.style.position = scrollToBottom <= 300 ? 'absolute' : 'fixed';
  });
});
