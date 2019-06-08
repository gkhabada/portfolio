import './reset.scss';
import './fonts.scss';
import './screen.scss';
import './media.scss';


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


  // menu scroll

  $('.menu__link').click(function(event) {
    event.preventDefault();
    var link = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 800);
  });


  // animation lable on contacts block

  let elemHeight, elemTop, elem;

  $('.contacts_animation').focusin(function() {
    elemHeight = $(this).css('height');
    elemTop = parseInt(elemHeight) + 30;
    elem = $(this).next().css({
      'top': -elemTop + 'px',
      'color': '#23c869'
    });
    $(this).css({
      'border-color': '#23c869'
    });
  });

  $('.contacts_animation').focusout(function() {
    elemHeight = $(this).css('height');
    elemTop = parseInt(elemHeight) - 5;
    let v = $(this).val();
    if (v) {
      $(this).next().css({
        'color': '#404040'
      });
      $(this).css({
        'color': '#27b262',
        'font-family': 'mullerbold'
      });
    } else {
      $(this).next().css({
        'top': -elemTop + 'px',
        'color': '#404040'
      });
    }
    $(this).css({
      'border-color': '#404040'
    });
  });




  // let showWork = 0;
  //
  // function showWorkFunc() {
  //   for (var i = 0; i < 8; i++) {
  //     $(work[showWork]).fadeIn(1000);
  //     showWork++;
  //   }
  //   if ($(work).length <= showWork) {
  //     $('.portfolio__show-more').hide(200);
  //   }
  // };
  //
  // let work = $(".works").children();
  // work.hide();
  // $('.portfolio__show-more').on("click", showWorkFunc);
  // showWorkFunc();





  // work block aspect ratio

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

  // want to do light and dark theme on site

  // setTimeout (function(){
  // 	$('body, .header, .portfolio, .about-me, .rubbb, .front, .contacts__soc span, .contacts, h1, h2, h3, p, .menu__home, li, .work').not('.scroll-top p').css({
  // 		'color': '#fff',
  // 		'background-color': '#141414',
  // 		'border-color': '#141414',
  // 	});
  // 	$('.header__link, .portfolio__show-more, .contacts_animation, textarea ').css({
  // 		'color': '#141414',
  // 		'background-color': '#fff',
  // 		'border-color': '#fff',
  // 	});
  //
  // 	$(".header__link, .portfolio__show-more").hover(function() {
  // 	  $(this).css({
  // 			'color': '#fff',
  // 			'background-color': '#141414',
  // 			'border-color': '#fff',
  // 		})
  // 	});
  // 	$(".header__link, .portfolio__show-more").mouseleave(function() {
  // 	  $(this).css({
  // 			'color': '#141414',
  // 			'background-color': '#fff',
  // 			'border-color': '#fff',
  // 		})
  // 	})
  // }, 1000);


  // send form to mail

  $(function() {
    $("#contacts__submit").click(function() {
      let formData = new FormData();
      formData.append("name", $("#contacts__name").val());
      formData.append("email", $("#contacts__email").val());
      formData.append("telegram", $("#contacts__telegram").val());
      formData.append("message", $("#contacts__message").val());

      $.ajax({
        type: "POST",
        url: "../formdata.php",
        data: formData,
        success: function() {
          $("#contacts__name, #contacts__email, #contacts__telegram, #contacts__message").val('');
          console.log('success');
        }
      });
      return false;
    });
  });

  // Yandex.Metrika counter

  (function(m, e, t, r, i, k, a) {
    m[i] = m[i] || function() {
      (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  })
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(52417000, "init", {
    id: 52417000,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });

  /* footer date */

  let now = new Date();
  $(".footer_date").text(now.getFullYear());

  // about me old
  let wasBorn = new Date(1995, 4, 7);
  $(".about-me__old").text(Math.floor((now - wasBorn) / 31536000000));

});





















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

    showedWorkdIndex += 8

    works.length <= showedWorkdIndex ? $('.portfolio__show-more').hide(100) : null
  }
}
document.querySelector('.portfolio__show-more').addEventListener('click', () => {
  addWorks(allWorks)
})


















  // button scrollTop

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
