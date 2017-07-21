/*
* Gnb_Menu_CSS
* */

$(function(){

  var timeID; // setInterval

  $('.css-menu-depth1-link').on('mouseenter', function(){
    // removeClass 하기위해 실행되고 있는 setInterval 취소
    clearInterval(timeID);

    // promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      // setTimeout() :  ~초 이후에 한번만 실행


      /*
      타이머 함수 실행 횟수/취소
      실행문의 횟수/시간을 실행/취소
      를 고려해서 알고리즘 만들기

      1. 일반 코딩

      setInterval(function(){
          실행문
      }, 단위시간);

        - 단위시간마다 setInterval과 실행문가 매번 실행

        Ex) 단위시간 1000(1초), 회수 10 => 10초동안 setInterval 10번 실행, 실행문 10번 실행
            3.5초 시점에서 cearInterval 실행 => setInterval 3번, 실행문 3번 실행

      2. 시간이 취소되는 기능 구현 코딩

      var i = 0l
      setInterval(function(){
        if(i == 10){
          실행문
          }
          i++;
      }, 단위시간);

        - 단위시간마다 setInterval은 매번 실행, 실행문은 i가 10일때 한번 실행

        Ex) 3.5초 시점에서 cearInterval 실행 => setInterval 3번, 실행문 0번(실행 취소)
       */

      var count = 0;

      timeID = setInterval(function(){
        if( count == 300 ){
          $depth2Wrap.remove('on');
        }
        count++;
      }, 1);

 setTimeout(function(){
        $depth2Wrap.removeClass('on');
      }, 300);

    });
  });

  $('.css-menu-depth1').on('mouseleave', function(){
    $('.css-menu-depth2-wrap').removeClass('on');

  });
});
/**
 * Gnb Menu jQuery
 */

$(function(){


  $('.menu-depth1-link').on('mouseenter', function(){
    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:64
    }, 300);

    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }

    $(this).next('.menu-depth2-wrap').css({'z-index' : 10}).stop().animate({
      height:motionHeight,
      opacity : 1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index' : 0}).stop().animate({
        height : 0,
        opacity : 0
      }, 200);
    });

  });

  $('.menu-depth1-link').on('mouseleave', function(){
    // depth1 border 줄어드는 모션효과
    $(this).children('.menu-depth1-border').stop().animate({
      width : 0
    }, 300);
  });

  $('.menu-depth1').on('mouseleave', function(){
    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height : 0,
      opacity : 0
    }, 300);
  });




});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYl9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBHbmJfTWVudV9DU1NcclxuKiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgdGltZUlEOyAvLyBzZXRJbnRlcnZhbFxyXG5cclxuICAkKCcuY3NzLW1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyByZW1vdmVDbGFzcyDtlZjquLDsnITtlbQg7Iuk7ZaJ65CY6rOgIOyeiOuKlCBzZXRJbnRlcnZhbCDst6jshoxcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuXHJcbiAgICAvLyBwcm9taXNlKCkgOiDslZ7shKAg64+Z7J6R7J20IOuqqOuRkCDrgZ3rgpwg7ZuEIO2KueyglSDquLDriqXsnYQg7Iuk7ZaJIOyLnO2CrCDrlYwg7IKs7JqpXHJcbiAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnb24nKS5wcm9taXNlKCkuZG9uZShmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdmFyICRkZXB0aDJXcmFwID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLW1lbnUtZGVwdGgyLXdyYXAnKTtcclxuXHJcbiAgICAgIC8vIHNldFRpbWVvdXQoKSA6ICB+7LSIIOydtO2bhOyXkCDtlZzrsojrp4wg7Iuk7ZaJXHJcblxyXG5cclxuICAgICAgLypcclxuICAgICAg7YOA7J2066i4IO2VqOyImCDsi6Ttlokg7Zqf7IiYL+y3qOyGjFxyXG4gICAgICDsi6TtlonrrLjsnZgg7Zqf7IiYL+yLnOqwhOydhCDsi6Ttlokv7Leo7IaMXHJcbiAgICAgIOulvCDqs6DroKTtlbTshJwg7JWM6rOg66as7KaYIOunjOuTpOq4sFxyXG5cclxuICAgICAgMS4g7J2867CYIOy9lOuUqVxyXG5cclxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgIOyLpO2WieusuFxyXG4gICAgICB9LCDri6jsnITsi5zqsIQpO1xyXG5cclxuICAgICAgICAtIOuLqOychOyLnOqwhOuniOuLpCBzZXRJbnRlcnZhbOqzvCDsi6TtlonrrLjqsIAg66ek67KIIOyLpO2WiVxyXG5cclxuICAgICAgICBFeCkg64uo7JyE7Iuc6rCEIDEwMDAoMey0iCksIO2ajOyImCAxMCA9PiAxMOy0iOuPmeyViCBzZXRJbnRlcnZhbCAxMOuyiCDsi6TtloksIOyLpO2WieusuCAxMOuyiCDsi6TtlolcclxuICAgICAgICAgICAgMy417LSIIOyLnOygkOyXkOyEnCBjZWFySW50ZXJ2YWwg7Iuk7ZaJID0+IHNldEludGVydmFsIDPrsogsIOyLpO2WieusuCAz67KIIOyLpO2WiVxyXG5cclxuICAgICAgMi4g7Iuc6rCE7J20IOy3qOyGjOuQmOuKlCDquLDriqUg6rWs7ZiEIOy9lOuUqVxyXG5cclxuICAgICAgdmFyIGkgPSAwbFxyXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKGkgPT0gMTApe1xyXG4gICAgICAgICAg7Iuk7ZaJ66y4XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpKys7XHJcbiAgICAgIH0sIOuLqOychOyLnOqwhCk7XHJcblxyXG4gICAgICAgIC0g64uo7JyE7Iuc6rCE66eI64ukIHNldEludGVydmFs7J2AIOunpOuyiCDsi6TtloksIOyLpO2WieusuOydgCBp6rCAIDEw7J2865WMIO2VnOuyiCDsi6TtlolcclxuXHJcbiAgICAgICAgRXgpIDMuNey0iCDsi5zsoJDsl5DshJwgY2VhckludGVydmFsIOyLpO2WiSA9PiBzZXRJbnRlcnZhbCAz67KILCDsi6TtlonrrLggMOuyiCjsi6Ttlokg7Leo7IaMKVxyXG4gICAgICAgKi9cclxuXHJcbiAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCBjb3VudCA9PSAzMDAgKXtcclxuICAgICAgICAgICRkZXB0aDJXcmFwLnJlbW92ZSgnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfSwgMSk7XHJcblxyXG4gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICRkZXB0aDJXcmFwLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICB9LCAzMDApO1xyXG5cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuY3NzLW1lbnUtZGVwdGgxJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmNzcy1tZW51LWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG59KTsiLCIvKipcclxuICogR25iIE1lbnUgalF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDEgYm9yZGVyIOuKmOyWtOuCmOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWVudS1kZXB0aDEtYm9yZGVyJykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aDo2NFxyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICAvLyBkZXB0aDIg66mU64m0IOuKmOyWtOuCmOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICB2YXIgZGVwdGgxSW5kZXggPSAkKHRoaXMpLmluZGV4KCcubWVudS1kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyIG1vdGlvbkhlaWdodCA9IDU0O1xyXG5cclxuICAgIGlmKCBkZXB0aDFJbmRleCA9PSAxICl7XHJcbiAgICAgIG1vdGlvbkhlaWdodCA9IDgwO1xyXG4gICAgfVxyXG5cclxuICAgICQodGhpcykubmV4dCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JyA6IDEwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQ6bW90aW9uSGVpZ2h0LFxyXG4gICAgICBvcGFjaXR5IDogMVxyXG4gICAgfSwgMzAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAvLyAkKHRoaXMpID0+IC5tZW51LWRlcHRoMi13cmFwXHJcbiAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JyA6IDB9KS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgaGVpZ2h0IDogMCxcclxuICAgICAgICBvcGFjaXR5IDogMFxyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMSBib3JkZXIg7KSE7Ja065Oc64qUIOuqqOyFmO2aqOqzvFxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtZGVwdGgxLWJvcmRlcicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgd2lkdGggOiAwXHJcbiAgICB9LCAzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDIg66mU64m0IOykhOyWtOuTnOuKlCDrqqjshZgg7Zqo6rO8XHJcbiAgICAkKCcubWVudS1kZXB0aDItd3JhcCcpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0IDogMCxcclxuICAgICAgb3BhY2l0eSA6IDBcclxuICAgIH0sIDMwMCk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG59KTsiXX0=
