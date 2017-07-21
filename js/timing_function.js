/**
 * Ease 값 비교
 */

$(function(){

  function repeat(){
    $('.box1').css({top:0}).stop().animate({top:450}, 2000, 'linear');
    $('.box2').css({top:0}).stop().animate({top:450}, 2000, 'easeInExpo');
    $('.box3').css({top:0}).stop().animate({top:450}, 2000, 'easeOutExpo');
    $('.box4').css({top:0}).stop().animate({top:450}, 2000, 'easeInOutExpo');
    $('.box5').css({top:0}).stop().animate({top:450}, 2000, $.bez([0.685, 0.595, 0.020, 0.720]));
  }

  setInterval(function(){
    repeat();
  }, 2500);

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWluZ19mdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbWluZ19mdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBFYXNlIOqwkiDruYTqtZBcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGZ1bmN0aW9uIHJlcGVhdCgpe1xyXG4gICAgJCgnLmJveDEnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAnbGluZWFyJyk7XHJcbiAgICAkKCcuYm94MicpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOjQ1MH0sIDIwMDAsICdlYXNlSW5FeHBvJyk7XHJcbiAgICAkKCcuYm94MycpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOjQ1MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG4gICAgJCgnLmJveDQnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG4gICAgJCgnLmJveDUnKS5jc3Moe3RvcDowfSkuc3RvcCgpLmFuaW1hdGUoe3RvcDo0NTB9LCAyMDAwLCAkLmJleihbMC42ODUsIDAuNTk1LCAwLjAyMCwgMC43MjBdKSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgcmVwZWF0KCk7XHJcbiAgfSwgMjUwMCk7XHJcblxyXG59KTtcclxuIl19
