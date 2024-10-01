$(function(){
  $(".cta").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500
    );
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });
  $(".gotop").click(function () {
    $("html ,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
  $(".more").click(function (e) {
    e.preventDefault();
    // $(this).addClass("active");
    $("body").toggleClass("active");
  });
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});
