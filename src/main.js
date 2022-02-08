import './sass/reset.scss';
import './sass/screen.scss';
import './sass/media.scss';

document.addEventListener('DOMContentLoaded', function() {
  // button scrollTop
  document.addEventListener('scroll', function() {
    let top = document.querySelector('html').scrollTop;
    if (top > 200) {
      document.querySelector('.scroll-top p').style.transform = 'rotate(180deg)';
    } else {
      document.querySelector('.scroll-top p').style.transform = 'rotate(0deg)';
    }
  });

  document.querySelector('.scroll-top').addEventListener('click', function () {
    let scroll = document.querySelector("html").scrollTop;
    if(scroll >= 200) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  });


  // menu scroll
  document.querySelector('.menu__link').addEventListener('click', function(event) {
    event.preventDefault();
    const link = event.target.attr('href');
    document.querySelector(link).scrollIntoView();
  });

  // footer date
  const now = new Date();
  document.querySelector(".footer_date").innerText = now.getFullYear();

  // about me old
  let wasBorn = new Date(1995, 4, 7);
  document.querySelector(".about-me__old").innerText = Math.floor((now - wasBorn) / 31536000000);

  //loader
  setTimeout(() => document.querySelector('.loader').style.display = 'none', 100);


  // parallax photo
  const imgBlock = document.querySelector('.about-me')
  const imgMy = document.querySelector('.about-me__photo')
  document.addEventListener('scroll', () => {
    const scrollToBottom = imgBlock.offsetTop + imgBlock.getBoundingClientRect().bottom;
    imgMy.style.position = scrollToBottom <= 300 ? 'absolute' : 'fixed';
  });


  // day/night mode
    const dn = JSON.parse(localStorage.getItem('dayNight'));
    const dnCheckbox = document.querySelector('#toggle_checkbox');
    const aboutMeImg = document.querySelector('.about-me__photo img');

  
    if(dn) {
      dnCheckbox.checked = true;
      dayNight(dn)
    }

    dnCheckbox.addEventListener('change', function() {
      localStorage.setItem('dayNight', JSON.stringify(this.checked));
      dayNight(this.checked)
    });


    function dayNight (time = false) {
      let now = Number(new Date().toLocaleTimeString().substring(0, 2))
      if(time) {
        document.querySelector('.day-text').classList.add('night-text');
        document.querySelector('.day-text').classList.remove('day-text');
        document.querySelector('.day-bg').classList.add('night-bg');
        document.querySelector('.day-bg').classList.remove('day-bg');
        document.querySelector('.day-button').classList.add('night-button');
        document.querySelector('.day-button').classList.remove('day_button');
        if(now >= 23 || now <= 6) aboutMeImg.setAttribute('src', 'img/about_me_night.jpg');
      } else {
        document.querySelector('.night-text').classList.add('day-text');
        document.querySelector('.night-text').classList.remove('night-text')
        document.querySelector('.night-bg').classList.add('day-bg');
        document.querySelector('.night-bg').classList.remove('night-bg');
        document.querySelector('.night-button').classList.add('day_button');
        document.querySelector('.night-button').classList.remove('night-button');
        if(now >= 23 || now <= 6) aboutMeImg.setAttribute('src', 'img/about_me.jpg');
      }
    }


// show works from JSON
let allWorks = null

let promise = fetch('./assets/works.json')
  .then(function(response) {
  if(response.status === 200) {
    return response.json();
  } else {
    return null
  }
  })
  .then(function(json) {
    if(json !== null) {
      allWorks = json
      addWorks(allWorks)
    }
  });

let showedWorkdIndex = 0
let worksDiv = document.querySelector('.works')
function addWorks(works) {
  if(works !== null && works.length >= showedWorkdIndex) {
    for(let i = showedWorkdIndex; i < showedWorkdIndex + 8; i++) {
      if(works[i] !== undefined) {
        let work = `
        <div class="work">
          <div class="work_hover">
            <h3 class="work__title">${works[i].title}</h3>
            <p class="work__text">${works[i].text}</p>
            <a href="${works[i].link}" class="work__link" target="_blank" rel="noopener">Открыть</a>
          </div>
          <img src="./assets/${works[i].img}" alt="${works[i].title}" title="${works[i].title}">
        </div>
        `
        worksDiv.insertAdjacentHTML('beforeend', work);
      }
    }
    setWorkCardHeight();
    document.addEventListener('resize', setWorkCardHeight);


    showedWorkdIndex += 8

    works.length <= showedWorkdIndex ? $('.portfolio__show-more').hide(100) : null
  }
}

function setWorkCardHeight() {
  const w = document.querySelector('.work').clientWidth;
  const h = parseInt(w) / 100 * 56.25;
  const workCards = document.querySelectorAll('.work');
  for (let card of workCards) {
    card.style.height = `${h}px`;
  }
}

document.querySelector('.portfolio__show-more').addEventListener('click', () => {
  addWorks(allWorks)
});


});
