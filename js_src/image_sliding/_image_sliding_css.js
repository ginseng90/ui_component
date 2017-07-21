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