function jackor() {
  $(document).ready(function(){
    $(".main-page__button-scroll, .navbar").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
    });
  });
}

function activenav() {
  $('.header__dropdown').click(function (event) {
    $('.navbar').toggleClass('active');
  });
}

$($(this).data('sub')).show();
({"background-color":"#EBEBEB","border-radius":"50px","color":"black"})

function fillnumber() {
  $(".infocourses__item").hover(function(){
    $(this).find(".infocourses__number svg path").css({"fill":"url(#paint0_linear)", "opacity":"0.5"});
  },
  function(){
    $(this).find(".infocourses__number svg path").css({"fill":"black", "opacity":"0.05"});
  });
}

function slider() {
  $('.watch-video').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
};

function maskformphone() {
  $("#maskformphone").mask("+7 (999) 99-99-999");
}

function modalform() {
  $('.modal-application').click(function() {
    $('.modal').css("visibility", "visible");
    return false;
  });

  $('.modal__close').click(function() {
    $(this).parents('.modal').css("visibility", "hidden");
    return false;
  });

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal').css("visibility", "hidden");
    }
  });

  $('.modal').click(function(e) {
    if ($(e.target).closest('.modal__body').length == 0) {
      $(this).css("visibility", "hidden");
    }
  });
}

$(document).ready(function() {
  jackor();
  activenav();
  slider();
  fillnumber();
  maskformphone();
  modalform();
});
