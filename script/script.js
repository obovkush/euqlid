window.addEventListener('DOMContentLoaded', function () {
  // Burger
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#overlay').classList.toggle('is-active')
  })
  document.querySelector('#overlay').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#overlay').classList.toggle('is-active')
  })
  document.querySelector('#menu').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#overlay').classList.toggle('is-active')
  })
  var buttons = document.querySelectorAll('.header-burger__link'),
  index, button;

    for (index = 0; index < buttons.length; index++) {
      button = buttons[index];
      button.addEventListener('click', clickHandler);
      // button.addEventListener('dblclick', doubleClickHandler);
    }

    function clickHandler(event) {
      document.querySelector('#menu').classList.toggle('is-active')
        document.querySelector('#overlay').classList.toggle('is-active')
    }

  // Swiper  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
      delay: 5000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
  });

  // Slider
  document.querySelectorAll('.section-work__nav-btn').forEach(function(workBtn) {
    workBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-work__info').forEach(function(workInfo) {
        workInfo.classList.remove('section-work__info-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-work__info-active')
    })
  })

  // Accordeon
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
    });
  } );

})

