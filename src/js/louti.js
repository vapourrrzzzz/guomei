$(function () {
  $(window).scroll(function () {
    //滚动730px，左侧导航固定定位
    if ($(window).scrollTop() > 580) {
      $('.fl_l').css({
        'display': 'block',
        'position': 'fixed',
        'top': 100,
        'left': 40
      })
    } else {
      $('.fl_l').css({ 'display': 'none' })
    };
    $('.fl_l>li').eq(0).addClass('active');
    //滚动到标杆位置,左侧导航加active
    $('.fl_r>li').each(function () {
      var _target = parseInt($(this).offset().top - $(window).scrollTop());
      var _i = $(this).index();
      if (_target <= 0) {
        $('.fl_l>li').removeClass('active');
        $('.fl_l>li').eq(_i).addClass('active');
      }
      //如果到达页面底部，给左侧导航最后一个加active
      else if ($(document).height() == $(window).scrollTop() + $(window).height()) {
        $('.fl_l>li').removeClass('active');
        $('.fl_l>li').eq($('.fl_r>li').length - 1).addClass('active');
      }
    });
  });

  $('.fl_l>li>a').on('click', function () {
    $(this.parentNode).addClass('active');
    $(this.parentNode).siblings().removeClass('active');
    var _i = $('.fl_l>li>a').index(this);
    console.log($('.fl_l>li>a'))
    var top = $('.fl_r>li').eq(_i).offset().top;
    $('html,body').animate({
      'scrollTop': top
    }, 500)
  })
});
