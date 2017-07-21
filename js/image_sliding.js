/**
 * Image sliding css
 */
$(function(){

// 선언부
  function init(){
    $('.css-sliding-view-image').eq(0).addClass('center');
    $('.css-sliding-view-image').eq(1).addClass('right');
    $('.css-sliding-view-image').eq(2).addClass('left');

    marginCtrlWrap();  //가운데배치
    paging();  //페이지 동적
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){
    // 3이상일때 0으로
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭시킴.
    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;

  }

  function moveRight(){

    // -1일때 2로
    if(nextIndex <= -1){
      nextIndex = $('.css-sliding-view-image').length-1;

    }

    // 3이상일때 0으로
    if( prevIndex >= $('.css-sliding-view-image').length){
      prevIndex = 0;
    }

    $('.css-sliding-view-image').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex + 1;
    nextIndex--;

  }

  function autoRolling(){

    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){
    var wrapWidth = $('.css-sliding-control-wrap').width();

    $('.css-sliding-control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }

  function paging(){
    var imgNumber = $('.css-sliding-view-image').length; //size() 개수 구하는 함수
    for(var i= 0; i<imgNumber; i++){
      $('.paging').append(' <li class="css-sliding-paging-item"><a href="#" class="css-sliding-paging-link">' + (i + 1) + '</a></li> ');
    }
  }

  function pauseandReAuto(){
    // autoRolling

  }


// 실행부
  init();

  autoRolling();

  var activeClick = function(direction) {

    var dir = direction;

    if (dir == 'left') {
      nextIndex = currentIndex + 1;
      moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      prevIndex = currentIndex + 1;

      moveRight();
    }

    // 익명함수에 매개변수를 사용하지 않고, 변수선언하여 사용
    setTimeout(function () {

      // 재귀함수 : 자신을 다시 호출하여 작업을 수행하는 방식
      $selector.one('click', function () {
        activeClick(dir);
      });


/*
      if (dir == 'left') {
        $('.css-sliding-arrow.right').one('click', function () {
          activeClick('right');
        });
      } else {
        $('.css-sliding-arrow.left').one('click', function () {
          activeClick('left');
        });
      }
 */
    }, 1000); //시간- transition 시간과 동일하게 해야함.

  };





  $('.css-sliding-arrow.right').one('click', function(){
    pauseAndReAuto();
    activeClick('right');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    pauseAndReAuto();
    activeClick('left');
  });

  $(document).on('click', '.css-sliding-btn-control.pause', function(e){
    clearInterval(timeID);
    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');
  });

  $(document).on('click', '.css-sliding-btn-control.play', function(e){
    autoRolling();
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });

  $(document).on('click', '.css-sliding-paging-item', function(e){

    pauseAndReAuto();

    e.preventDefault();

    var indexNumber = $(this).index('.css-sliding-paging-item');

    if( currentIndex != indexNumber ){

      if( currentIndex == 0 ){

        if( indexNumber == $('.css-sliding-view-image').length-1 ){
          activeClick('left');
        } else {
          activeClick('right');
        }

      } else if( currentIndex == $('.css-sliding-view-image').length-1 ){

        if( indexNumber == 0 ){
          activeClick('right');
        } else {
          activeClick('left');
        }

      } else {

        if( currentIndex < indexNumber ){
          activeClick('right');
        } else {
          activeClick('left');
        }

      }

    }

  });

});
/**
 * Image sliding jquery
 */

$(function(){

  // 선언부
  function init(){
    $('.js-sliding .view-image').eq(0).css({left : 0});
    $('.js-sliding .view-image').eq(1).css({left : 400});
    $('.js-sliding .view-image').eq(2).css({left : -400});

    marginCtrlWrap();
    paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){

    if(nextIndex >= $('.js-sliding .view-image').length){
      nextIndex = 0;
    }

    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:-400}, 2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:400}).stop().animate({left:0}, 2000, 'easeOutBounce');


    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){

    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }

    $('.js-sliding .view-image').eq(currentIndex).stop().animate({left:400}, 2000, 'easeOutBounce');
    $('.js-sliding .view-image').eq(nextIndex).css({left:-400}).stop().animate({left:0}, 2000, 'easeOutBounce');

    currentIndex = nextIndex;
    nextIndex--;
  }

  function autoRolling(){

    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){
    var wrapWidth = $('.js-sliding .control-wrap').width();

    $('.control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }

  function paging(){
    var imgNumber = $('.view-image').length; //size() 개수 구하는 함수
    for(var i= 0; i<imgNumber; i++){
      $('.paging').append(' <li class="paging-item"><a href="#" class="paging-link">' + (i + 1) + '</a></li> ');
    }
  }

  function clickpaging(){

  }


  // 실행부
  init();

  autoRolling();



  $('.arrow.right').on('click', function(){
    clearInterval(timeID);
    clearInterval(checkID);

    var count = 0;
    checkID = setInterval(function(){
      if(count == 5) {
        autoRolling();
        clearInterval(checkID);
      }

      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex + 1;


    if( !$('.view-image').is(':animated')){
      moveLeft();
    }
  });

  $('.arrow.left').on('click', function(){

    clearInterval(checkID);

    var count = 0;
    checkID = setInterval(function(){
      if(count == 5) {
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex - 1;

    if( !$('.view-image').is(':animated')){
      moveRight();
    }
  });

  $('.arrow.left').on('click', function(){
    clearInterval(timeID);
    nextIndex = currentIndex - 1;
    if( !$('.view-image').is(':animated')){
      moveRight();
    }
  });

  $(document).on('click', '.btn-control.pause', function(e){
    clearInterval(timeID);
    //e.target : 클릭한 실제 대상
    $( e.target).removeClass('pause').addClass('play');
    $(e.target).text('play')
  });

  $(document).on('click', '.btn-control.play', function(e){
    autoRolling();
    //e.target : 클릭한 실제 대상
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });

  $(document).on('click', '.paging-item', function(e){
    // 페이지 번호 클릭시 화면 맨위로 스크롤되지 않도록 기본 동작을 막아줌.
    e.preventDefault();
    // 클릭한 요소의 인덱스 번호 : index() 함수 사용
    // 이벤트 대상이 on() 함수의 인자로 명시해주는 경우에 해당 대상이 $(this) 가 됨 ( 현재 : '.paging-item' )
    var indexNumber = $(this).index('.paging-item');
    if( currentIndex != indexNumber ){
      if( currentIndex == 0 ){
        if( indexNumber == $('.view-image').length-1 ){
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        } else {
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        }
      } else if( currentIndex == $('.view-image').length-1 ){
        if( indexNumber == 0 ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        }
      } else {
        if( currentIndex < indexNumber ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        }
      }
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbWFnZV9zbGlkaW5nX2Nzcy5qcyIsIl9pbWFnZV9zbGlkaW5nX2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImltYWdlX3NsaWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW1hZ2Ugc2xpZGluZyBjc3NcclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbi8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcSgxKS5hZGRDbGFzcygncmlnaHQnKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuXHJcbiAgICBtYXJnaW5DdHJsV3JhcCgpOyAgLy/qsIDsmrTrjbDrsLDsuZhcclxuICAgIHBhZ2luZygpOyAgLy/tjpjsnbTsp4Ag64+Z7KCBXHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgcHJldkluZGV4ID0gMDtcclxuICB2YXIgdGltZUlEO1xyXG4gIHZhciBjaGVja0lEO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgLy8gM+ydtOyDgeydvOuVjCAw7Jy866GcXHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVxKCnsl5Ag7J2M7IiYIOqwkuydhCDrhKPslrTso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt7Iuc7YK0LlxyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2xlZnQgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbiAgICAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcclxuICAgICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCsrO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIC8vIC0x7J2865WMIDLroZxcclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykubGVuZ3RoLTE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIDPsnbTsg4HsnbzrlYwgMOycvOuhnFxyXG4gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIHByZXZJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShwcmV2SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCBhbmknKS5hZGRDbGFzcygnbGVmdCcpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0IGFuaScpO1xyXG4gICAgJCgnLmNzcy1zbGlkaW5nLXZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0JykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgbmV4dEluZGV4LS07XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1JvbGxpbmcoKXtcclxuXHJcbiAgICB0aW1lSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYXJnaW5DdHJsV3JhcCgpe1xyXG4gICAgdmFyIHdyYXBXaWR0aCA9ICQoJy5jc3Mtc2xpZGluZy1jb250cm9sLXdyYXAnKS53aWR0aCgpO1xyXG5cclxuICAgICQoJy5jc3Mtc2xpZGluZy1jb250cm9sLXdyYXAnKS5jc3Moe1xyXG4gICAgICAnbWFyZ2luLWxlZnQnIDogLSggd3JhcFdpZHRoIC8gMiApXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhZ2luZygpe1xyXG4gICAgdmFyIGltZ051bWJlciA9ICQoJy5jc3Mtc2xpZGluZy12aWV3LWltYWdlJykubGVuZ3RoOyAvL3NpemUoKSDqsJzsiJgg6rWs7ZWY64qUIO2VqOyImFxyXG4gICAgZm9yKHZhciBpPSAwOyBpPGltZ051bWJlcjsgaSsrKXtcclxuICAgICAgJCgnLnBhZ2luZycpLmFwcGVuZCgnIDxsaSBjbGFzcz1cImNzcy1zbGlkaW5nLXBhZ2luZy1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImNzcy1zbGlkaW5nLXBhZ2luZy1saW5rXCI+JyArIChpICsgMSkgKyAnPC9hPjwvbGk+ICcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGF1c2VhbmRSZUF1dG8oKXtcclxuICAgIC8vIGF1dG9Sb2xsaW5nXHJcblxyXG4gIH1cclxuXHJcblxyXG4vLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gIGF1dG9Sb2xsaW5nKCk7XHJcblxyXG4gIHZhciBhY3RpdmVDbGljayA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xyXG5cclxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgaWYgKGRpciA9PSAnbGVmdCcpIHtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgbW92ZUxlZnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcblxyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDsnbXrqoXtlajsiJjsl5Ag66ek6rCc67OA7IiY66W8IOyCrOyaqe2VmOyngCDslYrqs6AsIOuzgOyImOyEoOyWuO2VmOyXrCDsgqzsmqlcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgLy8g7J6s6reA7ZWo7IiYIDog7J6Q7Iug7J2EIOuLpOyLnCDtmLjstpztlZjsl6wg7J6R7JeF7J2EIOyImO2Wie2VmOuKlCDrsKnsi51cclxuICAgICAgJHNlbGVjdG9yLm9uZSgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgfSk7XHJcblxyXG5cclxuLypcclxuICAgICAgaWYgKGRpciA9PSAnbGVmdCcpIHtcclxuICAgICAgICAkKCcuY3NzLXNsaWRpbmctYXJyb3cucmlnaHQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmNzcy1zbGlkaW5nLWFycm93LmxlZnQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gKi9cclxuICAgIH0sIDEwMDApOyAvL+yLnOqwhC0gdHJhbnNpdGlvbiDsi5zqsITqs7wg64+Z7J287ZWY6rKMIO2VtOyVvO2VqC5cclxuXHJcbiAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICQoJy5jc3Mtc2xpZGluZy1hcnJvdy5yaWdodCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcGF1c2VBbmRSZUF1dG8oKTtcclxuICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuY3NzLXNsaWRpbmctYXJyb3cubGVmdCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcGF1c2VBbmRSZUF1dG8oKTtcclxuICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wucGF1c2UnLCBmdW5jdGlvbihlKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwYXVzZScpLmFkZENsYXNzKCdwbGF5Jyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdQbGF5Jyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY3NzLXNsaWRpbmctYnRuLWNvbnRyb2wucGxheScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwbGF5JykuYWRkQ2xhc3MoJ3BhdXNlJyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdQYXVzZScpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNzcy1zbGlkaW5nLXBhZ2luZy1pdGVtJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgcGF1c2VBbmRSZUF1dG8oKTtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLmNzcy1zbGlkaW5nLXBhZ2luZy1pdGVtJyk7XHJcblxyXG4gICAgaWYoIGN1cnJlbnRJbmRleCAhPSBpbmRleE51bWJlciApe1xyXG5cclxuICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcblxyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aC0xICl7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2UgaWYoIGN1cnJlbnRJbmRleCA9PSAkKCcuY3NzLXNsaWRpbmctdmlldy1pbWFnZScpLmxlbmd0aC0xICl7XHJcblxyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAwICl7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBpZiggY3VycmVudEluZGV4IDwgaW5kZXhOdW1iZXIgKXtcclxuICAgICAgICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIEltYWdlIHNsaWRpbmcganF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKDApLmNzcyh7bGVmdCA6IDB9KTtcclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoMSkuY3NzKHtsZWZ0IDogNDAwfSk7XHJcbiAgICAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmVxKDIpLmNzcyh7bGVmdCA6IC00MDB9KTtcclxuXHJcbiAgICBtYXJnaW5DdHJsV3JhcCgpO1xyXG4gICAgcGFnaW5nKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgdGltZUlEO1xyXG4gIHZhciBjaGVja0lEO1xyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuanMtc2xpZGluZyAudmlldy1pbWFnZScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0Oi00MDB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDo0MDB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRCb3VuY2UnKTtcclxuXHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcudmlldy1pbWFnZScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5qcy1zbGlkaW5nIC52aWV3LWltYWdlJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDo0MDB9LCAyMDAwLCAnZWFzZU91dEJvdW5jZScpO1xyXG4gICAgJCgnLmpzLXNsaWRpbmcgLnZpZXctaW1hZ2UnKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDotNDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0Qm91bmNlJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4LS07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvUm9sbGluZygpe1xyXG5cclxuICAgIHRpbWVJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcbiAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmpzLXNsaWRpbmcgLmNvbnRyb2wtd3JhcCcpLndpZHRoKCk7XHJcblxyXG4gICAgJCgnLmNvbnRyb2wtd3JhcCcpLmNzcyh7XHJcbiAgICAgICdtYXJnaW4tbGVmdCcgOiAtKCB3cmFwV2lkdGggLyAyIClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFnaW5nKCl7XHJcbiAgICB2YXIgaW1nTnVtYmVyID0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGg7IC8vc2l6ZSgpIOqwnOyImCDqtaztlZjripQg7ZWo7IiYXHJcbiAgICBmb3IodmFyIGk9IDA7IGk8aW1nTnVtYmVyOyBpKyspe1xyXG4gICAgICAkKCcucGFnaW5nJykuYXBwZW5kKCcgPGxpIGNsYXNzPVwicGFnaW5nLWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwicGFnaW5nLWxpbmtcIj4nICsgKGkgKyAxKSArICc8L2E+PC9saT4gJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja3BhZ2luZygpe1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gIGF1dG9Sb2xsaW5nKCk7XHJcblxyXG5cclxuXHJcbiAgJCgnLmFycm93LnJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZUlEKTtcclxuICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJRCk7XHJcblxyXG4gICAgdmFyIGNvdW50ID0gMDtcclxuICAgIGNoZWNrSUQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICBpZihjb3VudCA9PSA1KSB7XHJcbiAgICAgICAgYXV0b1JvbGxpbmcoKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrSUQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcblxyXG5cclxuICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuYXJyb3cubGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbChjaGVja0lEKTtcclxuXHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgY2hlY2tJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKGNvdW50ID09IDUpIHtcclxuICAgICAgICBhdXRvUm9sbGluZygpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tJRCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICBjb3VudCsrO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG5cclxuICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLmFycm93LmxlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSUQpO1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIGlmKCAhJCgnLnZpZXctaW1hZ2UnKS5pcygnOmFuaW1hdGVkJykpe1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG4tY29udHJvbC5wYXVzZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lSUQpO1xyXG4gICAgLy9lLnRhcmdldCA6IO2BtOumre2VnCDsi6TsoJwg64yA7IOBXHJcbiAgICAkKCBlLnRhcmdldCkucmVtb3ZlQ2xhc3MoJ3BhdXNlJykuYWRkQ2xhc3MoJ3BsYXknKTtcclxuICAgICQoZS50YXJnZXQpLnRleHQoJ3BsYXknKVxyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJ0bi1jb250cm9sLnBsYXknLCBmdW5jdGlvbihlKXtcclxuICAgIGF1dG9Sb2xsaW5nKCk7XHJcbiAgICAvL2UudGFyZ2V0IDog7YG066at7ZWcIOyLpOygnCDrjIDsg4FcclxuICAgICQoZS50YXJnZXQpLnJlbW92ZUNsYXNzKCdwbGF5JykuYWRkQ2xhc3MoJ3BhdXNlJyk7XHJcbiAgICAkKGUudGFyZ2V0KS50ZXh0KCdQYXVzZScpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnBhZ2luZy1pdGVtJywgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyDtjpjsnbTsp4Ag67KI7Zi4IO2BtOumreyLnCDtmZTrqbQg66eo7JyE66GcIOyKpO2BrOuhpOuQmOyngCDslYrrj4TroZ0g6riw67O4IOuPmeyekeydhCDrp4nslYTspIwuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyDtgbTrpq3tlZwg7JqU7IaM7J2YIOyduOuNseyKpCDrsojtmLggOiBpbmRleCgpIO2VqOyImCDsgqzsmqlcclxuICAgIC8vIOydtOuypO2KuCDrjIDsg4HsnbQgb24oKSDtlajsiJjsnZgg7J247J6Q66GcIOuqheyLnO2VtOyjvOuKlCDqsr3smrDsl5Ag7ZW064u5IOuMgOyDgeydtCAkKHRoaXMpIOqwgCDrkKggKCDtmITsnqwgOiAnLnBhZ2luZy1pdGVtJyApXHJcbiAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcucGFnaW5nLWl0ZW0nKTtcclxuICAgIGlmKCBjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIgKXtcclxuICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcbiAgICAgICAgaWYoIGluZGV4TnVtYmVyID09ICQoJy52aWV3LWltYWdlJykubGVuZ3RoLTEgKXtcclxuICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICBpZiggISQoJy52aWV3LWltYWdlJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLnZpZXctaW1hZ2UnKS5sZW5ndGgtMSApe1xyXG4gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAwICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyICl7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgaWYoICEkKCcudmlldy1pbWFnZScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7Il19
