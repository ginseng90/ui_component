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