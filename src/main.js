import './scss/reset.scss';
import './scss/screen.scss';
import './scss/media.scss';

document.addEventListener('DOMContentLoaded', function() {

  // button scrollTop
  const scrollTopElem = document.querySelector('.scroll-top p');
  const htmlElem = document.querySelector('html');

  document.addEventListener('scroll', () => {
    let top = htmlElem.scrollTop;
    scrollTopElem.style.transform = `rotate(${top > 200 ? 180 : 0}deg)`;
  });

  document.querySelector('.scroll-top').addEventListener('click', function () {
    let scroll = htmlElem.scrollTop;
    const scrollTo = scroll >= 200 ? 0 : document.body.scrollHeight;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  });


  // menu scroll
  document.querySelectorAll('.menu__link').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const link = event.target.getAttribute('href');
      document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
    })
  });

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


  // day/night mode
  // const dn = JSON.parse(localStorage.getItem('dayNight'));
  // const dnCheckbox = document.querySelector('#toggle_checkbox');
  // const aboutMeImg = document.querySelector('.about-me__photo img');


  // if(dn) {
  //   dnCheckbox.checked = true;
  //   dayNight(dn)
  // }

  // dnCheckbox.addEventListener('change', function() {
  //   localStorage.setItem('dayNight', JSON.stringify(this.checked));
  //   dayNight(this.checked)
  // });


  // function dayNight (time = false) {
  //   let now = Number(new Date().toLocaleTimeString().substring(0, 2))
  //   if(time) {
  //     document.querySelector('.day-text').classList.add('night-text');
  //     document.querySelector('.day-text').classList.remove('day-text');
  //     document.querySelector('.day-bg').classList.add('night-bg');
  //     document.querySelector('.day-bg').classList.remove('day-bg');
  //     document.querySelector('.day-button').classList.add('night-button');
  //     document.querySelector('.day-button').classList.remove('day_button');
  //     if(now >= 23 || now <= 6) aboutMeImg.setAttribute('src', 'img/about_me_night.jpg');
  //   } else {
  //     document.querySelector('.night-text').classList.add('day-text');
  //     document.querySelector('.night-text').classList.remove('night-text')
  //     document.querySelector('.night-bg').classList.add('day-bg');
  //     document.querySelector('.night-bg').classList.remove('night-bg');
  //     document.querySelector('.night-button').classList.add('day_button');
  //     document.querySelector('.night-button').classList.remove('night-button');
  //     if(now >= 23 || now <= 6) aboutMeImg.setAttribute('src', 'img/about_me.jpg');
  //   }
  // }
});
