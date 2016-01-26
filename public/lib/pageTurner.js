var counter = 0;
$( document ).ready(function() {
  $("#chevLink").on("click", function(){
    var arr = ["#/hearthstone", "#/prodDash" ,"#/nameAPI", "#/miniGames"];
    if(counter < 4) {
        $("#chevLink").attr('href', arr[counter++]);
    } else {
        counter = 0;
    }
  });
  if ($('.back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
  }
});