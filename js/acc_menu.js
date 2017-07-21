/**
 * Accordion Menu CSS
 */

$(function(){

  // 선언부 //
  function init(){
    // 처음 로딩되었을 때 상태
    $('.css-lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.css-lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){

    $depth1Link.next().css({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.css-lnb-depth2').css({
      height : 0
    });
    $depth1Link.parent().siblings().children('.css-lnb-depth1-link').data('open', 'false').removeClass('up');
  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().css({
      height : 0
    });
    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }




// 실행부 //
  init();

  $('.css-lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {

      menuSelfClose( $(this) );

    }

  });

});


/**
 * Accordion Menu Jquery
 */

/*
  ※ show/hide 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, hide

  1. 마우스 클릭했을 때, sub 메뉴가 show/hide
  2. 클릭한 1 depth sub 메뉴가 보일 때, 다른 1 depth 의 sub 메뉴는 안보여야 함
  3. sub 메뉴가 보일 때, 화살표는 윗방향 화살표로 변경
  4. sub 메뉴가 안보이게될 때, 화살표는 아랫방향 화살표로 변경
 */

/*
  ※ sub 메뉴의 영역이 늘어났다/줄어들었다 형태의 아코디언 메뉴
  ※ CSS 코딩 : styling, 줄어듬(높이 : 0)

  1. 마우스를 클릭했을 때, sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
  2. 클릭한 1 depth 의 sub 메뉴가 늘어날 때 다른 1 depth 의 sub 메뉴는 줄어들어야 함
  3. sub 메뉴가 보일 때, 화살표는 윗방향 화살표로 변경
  4. sub 메뉴가 안보이게될 때, 화살표는 아랫방향 화살표로 변경
 */

///////////////////////////////////////////////////////////////////////////////////////////////////


$(function(){

  // 선언부 //
  function init(){
    // 처음 로딩되었을 때 상태
    $('.lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){
    /*
     $(this).next().stop().animate({key : value},시간,콜백함수)
     ** jQuery DOM을 단계별로 찾아갈 때,
     : 첫번 째 인수의 value 부분에 $(this) 를 사용하면 처음 찾은 $(this)를 의미
     : 콜백함수 부분에 $(this)를 사용하면 최종으로 찾은 DOM요소가 $(this)가 됨.
     */
    $depth1Link.next().stop().animate({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.lnb-depth2').stop().animate({
      height : 0
    });
    $depth1Link.parent().siblings().children('.lnb-depth1-link').data('open', 'false').removeClass('up');
  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().stop().animate({
      height : 0
    });
    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }

  // 실행부 //
  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {

      menuSelfClose( $(this) );

    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hY2NfbWVudV9jc3MuanMiLCJfYWNjX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhY2NfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBY2NvcmRpb24gTWVudSBDU1NcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gCAvL1xyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIC8vIOyymOydjCDroZzrlKnrkJjsl4jsnYQg65WMIOyDge2DnFxyXG4gICAgJCgnLmNzcy1sbmItZGVwdGgxLWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcblxyXG4gICAgLy8gZWFjaCgpIDog7JqU7IaMIOqwnOyImOunjO2BvCDrsJjrs7XtlZjripQg7ZWo7IiYXHJcbiAgICAkKCcuY3NzLWxuYi1kZXB0aDInKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgJCh0aGlzKS5kYXRhKHsnaGVpZ2h0JyA6ICQodGhpcykuaGVpZ2h0KCl9KS5jc3Moe2hlaWdodCA6IDB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVPcGVuKCAkZGVwdGgxTGluayApe1xyXG5cclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkZGVwdGgxTGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkZGVwdGgxTGluayApe1xyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1sbmItZGVwdGgyJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuLy8g7Iuk7ZaJ67aAIC8vXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyApe1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG4iLCIvKipcclxuICogQWNjb3JkaW9uIE1lbnUgSnF1ZXJ5XHJcbiAqL1xyXG5cclxuLypcclxuICDigLsgc2hvdy9oaWRlIO2Yle2DnOydmCDslYTsvZTrlJTslrgg66mU64m0XHJcbiAg4oC7IENTUyDsvZTrlKkgOiBzdHlsaW5nLCBoaWRlXHJcblxyXG4gIDEuIOuniOyasOyKpCDtgbTrpq3tlojsnYQg65WMLCBzdWIg66mU64m06rCAIHNob3cvaGlkZVxyXG4gIDIuIO2BtOumre2VnCAxIGRlcHRoIHN1YiDrqZTribTqsIAg67O07J28IOuVjCwg64uk66W4IDEgZGVwdGgg7J2YIHN1YiDrqZTribTripQg7JWI67O07Jes7JW8IO2VqFxyXG4gIDMuIHN1YiDrqZTribTqsIAg67O07J28IOuVjCwg7ZmU7IK07ZGc64qUIOycl+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiAgNC4gc3ViIOuplOuJtOqwgCDslYjrs7TsnbTqsozrkKAg65WMLCDtmZTsgrTtkZzripQg7JWE656r67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuICovXHJcblxyXG4vKlxyXG4gIOKAuyBzdWIg66mU64m07J2YIOyYgeyXreydtCDripjslrTrgqzri6Qv7KSE7Ja065Ok7JeI64ukIO2Yle2DnOydmCDslYTsvZTrlJTslrgg66mU64m0XHJcbiAg4oC7IENTUyDsvZTrlKkgOiBzdHlsaW5nLCDspITslrTrk6wo64aS7J20IDogMClcclxuXHJcbiAgMS4g66eI7Jqw7Iqk66W8IO2BtOumre2WiOydhCDrlYwsIHN1YiDrqZTribTsnZgg7IOB7YOc7JeQIOuUsOudvCBzdWIg66mU64m06rCAIOuKmOyWtOuCqC/spITslrTrk6xcclxuICAyLiDtgbTrpq3tlZwgMSBkZXB0aCDsnZggc3ViIOuplOuJtOqwgCDripjslrTrgqAg65WMIOuLpOuluCAxIGRlcHRoIOydmCBzdWIg66mU64m064qUIOykhOyWtOuTpOyWtOyVvCDtlahcclxuICAzLiBzdWIg66mU64m06rCAIOuztOydvCDrlYwsIO2ZlOyCtO2RnOuKlCDsnJfrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gIDQuIHN1YiDrqZTribTqsIAg7JWI67O07J206rKM65CgIOuVjCwg7ZmU7IK07ZGc64qUIOyVhOueq+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiAqL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoAgLy9cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAvLyDsspjsnYwg66Gc65Sp65CY7JeI7J2EIOuVjCDsg4Htg5xcclxuICAgICQoJy5sbmItZGVwdGgxLWxpbmsnKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XHJcblxyXG4gICAgLy8gZWFjaCgpIDog7JqU7IaMIOqwnOyImOunjO2BvCDrsJjrs7XtlZjripQg7ZWo7IiYXHJcbiAgICAkKCcubG5iLWRlcHRoMicpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydoZWlnaHQnIDogJCh0aGlzKS5oZWlnaHQoKX0pLmNzcyh7aGVpZ2h0IDogMH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudU9wZW4oICRkZXB0aDFMaW5rICl7XHJcbiAgICAvKlxyXG4gICAgICQodGhpcykubmV4dCgpLnN0b3AoKS5hbmltYXRlKHtrZXkgOiB2YWx1ZX0s7Iuc6rCELOy9nOuwse2VqOyImClcclxuICAgICAqKiBqUXVlcnkgRE9N7J2EIOuLqOqzhOuzhOuhnCDssL7slYTqsIgg65WMLFxyXG4gICAgIDog7LKr67KIIOynuCDsnbjsiJjsnZggdmFsdWUg67aA67aE7JeQICQodGhpcykg66W8IOyCrOyaqe2VmOuptCDsspjsnYwg7LC+7J2AICQodGhpcynrpbwg7J2Y66+4XHJcbiAgICAgOiDsvZzrsLHtlajsiJgg67aA67aE7JeQICQodGhpcynrpbwg7IKs7Jqp7ZWY66m0IOy1nOyiheycvOuhnCDssL7snYAgRE9N7JqU7IaM6rCAICQodGhpcynqsIAg65CoLlxyXG4gICAgICovXHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAkZGVwdGgxTGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkZGVwdGgxTGluayApe1xyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBoZWlnaHQgOiAwXHJcbiAgICB9KTtcclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gCAvL1xyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLmxuYi1kZXB0aDEtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyApe1xyXG5cclxuICAgICAgbWVudU9wZW4oICQodGhpcykgKTtcclxuICAgICAgbWVudUNsb3NlKCAkKHRoaXMpICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIG1lbnVTZWxmQ2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
