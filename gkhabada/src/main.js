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
    var link = event.target.attr('href');
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
});

/*

// parallax photo
$(document).ready(function() {
  let imgBlock = document.querySelector('.about-me')
  let imgMy = document.querySelector('.about-me__photo')
  function photoParallax() {
    imgBlock.offsetTop + imgBlock.getBoundingClientRect().bottom <= 0 ? imgMy.style.position = 'absolute' : imgMy.style.position = 'fixed'
  }

  window.onscroll = () => {
    photoParallax()
  }
})


// day/night mode
$(document).ready(function() {
  let dn = localStorage.getItem('dayNight');
  dn = JSON.parse(dn)
  if(dn) {
    $('#toggle_checkbox').prop('checked', true);
    dayNight(dn)
  }
})


$('#toggle_checkbox').on('change', function() {
  localStorage.setItem('dayNight', JSON.stringify(this.checked));
  dayNight(this.checked)
})

let aboutMeImg = document.querySelector('.about-me__photo img')

function dayNight (t = false) {
  let now = Number(new Date().toLocaleTimeString().substring(0, 2))
  if(t) {
    $('.day-text').removeClass('day-text').addClass('night-text')
    $('.day-bg').removeClass('day-bg').addClass('night-bg')
    $('.day-button').removeClass('day_button').addClass('night-button')
    console.log(now >= 23, now, 23)
    if(now >= 23 || now <= 6) aboutMeImg.setAttribute('src', 'img/about_me_night.jpg')
  } else {
    $('.night-text').removeClass('night-text').addClass('day-text')
    $('.night-bg').removeClass('night-bg').addClass('day-bg')
    $('.night-button').removeClass('night-button').addClass('day_button')
    if(now >= 23 || now <= 6) aboutMeImg.setAttribute('src', 'img/about_me.jpg')
  }
}


// show works from JSON
let allWorks = null

   let promise = fetch('works.json')
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
          <img src="${works[i].img}" alt="${works[i].title}" title="${works[i].title}">
        </div>
        `
        worksDiv.insertAdjacentHTML('beforeend', work);
      }
    }
    var w = $('.work').css('width');
    var h = parseInt(w) / 100 * 56.25;
    $('.work').css('height', h + 'px');
    $(window).resize(function() {
      var w = $('.work').css('width');
      var h = parseInt(w) / 100 * 56.25;
      $('.work').css('height', h + 'px');
    });


    showedWorkdIndex += 8

    works.length <= showedWorkdIndex ? $('.portfolio__show-more').hide(100) : null
  }
}
document.querySelector('.portfolio__show-more').addEventListener('click', () => {
  addWorks(allWorks)
})

*/