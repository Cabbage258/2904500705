$(document).ready(function(){
  $('.wrap').mousemove(function(e) {
    var offset = $('.wrap').offset();

    var x = e.pageX - offset.left;
    var y = e.pageY - offset.top;

    var centerX = $('.wrap').outerWidth() / 2
    var centerY = $('.wrap').outerHeight() / 2

    var deltaX = x - centerX
    var deltaY = y - centerY

    var percentX = deltaX / centerX
    var percentY = deltaY / centerY

    var deg = 2

    $('.banner').css({
      transform: 'rotateX('+deg * -percentY + 'deg)' + ' rotateY('+ deg * percentX+'deg)'
    })
  })
  $('.wrap').mouseleave(function() {
    $('.banner').css({
      transform: ''
    })
  })

  var timer = null
  $('.wrap').hover(function() {
    clearInterval(timer)
    $('.circle li').click(function() {
      $(this).addClass('selected').siblings().removeClass('selected')
      $('.banner-pic a').eq($(this).index()).addClass('show').siblings().removeClass('show')
    })
  }, function() {
    timer = setInterval(tabs, 2500);
  });

  timer = setInterval(tabs, 2500);

  var num = 0;

  function tabs() {
    if (num > 2) {
      num = 0;
    } else {
      $('.circle li').eq(num).addClass('selected').siblings().removeClass('selected');
			$('.banner-pic a').eq(num).addClass('show').siblings().removeClass('show');
			num++;
    }
  }
});