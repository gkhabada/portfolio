import './sass/reset.scss';
import './sass/fonts.scss';
import './sass/screen.scss';


var $ = require("jquery");

$(document).ready(function() {


  // button scrollTop
  $(document).scroll(function() {
    let top = $("html, body").scrollTop();
    if (top > 200) {
      $('.scroll-top p').css('transform', 'rotate(180deg)');
    } else {
      $('.scroll-top p').css('transform', 'rotate(0deg)');
    }
  });

  $('.scroll-top').click(scrollTo);

  function scrollTo() {
    let scroll = $("html, body").scrollTop()
    if(scroll >= 200) {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
    } else {
      $('html, body').animate({
        scrollTop: document.body.scrollHeight
      }, 800);
    }
  }


  // menu scroll
  $('.menu__link').click(function(event) {
    event.preventDefault();
    var link = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 800);
  });


  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(55392121, "init", {
       clickmap:true,
       trackLinks:true,
       accurateTrackBounce:true,
       webvisor:true
  });

  /* footer date */
  let now = new Date();
  $(".footer_date").text(now.getFullYear());

  // about me old
  let wasBorn = new Date(1995, 4, 7);
  $(".about-me__old").text(Math.floor((now - wasBorn) / 31536000000));

  //loader
  setTimeout(() => $('.loader').hide(100), 200)

});


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
            <a href="${works[i].link}" class="work__link" target="_blank">Открыть</a>
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

    /*yes, yes, i know how do it by css style with wrapping div
    .work-wrapper {
      width: 100%;
      height: 0px;
      padding-bottom: 56.25%;
    }
    .work {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
    }*/


    showedWorkdIndex += 8

    works.length <= showedWorkdIndex ? $('.portfolio__show-more').hide(100) : null
  }
}
document.querySelector('.portfolio__show-more').addEventListener('click', () => {
  addWorks(allWorks)
})
