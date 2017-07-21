/**
 * Tab Menu CSS
 */






/**
 * Tab Menu Jquery
 */

$(function(){

  $('.tab-heading').on('click', function(e){

    e.preventDefault();
    var tabIndex = $(this).index('.tab-heading');

    $('.tab-heading>a').removeClass('on');
    $('.tab-heading>a').eq(tabIndex).children('a').addClass('on');

    $('.tab-content').fadeOut(500);
    $('.tab-content').eq(tab-index).fadeIn(500);

  });


});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ0YWJfbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUYWIgTWVudSBDU1NcclxuICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRhYiBNZW51IEpxdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLnRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHRhYkluZGV4ID0gJCh0aGlzKS5pbmRleCgnLnRhYi1oZWFkaW5nJyk7XHJcblxyXG4gICAgJCgnLnRhYi1oZWFkaW5nPmEnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy50YWItaGVhZGluZz5hJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJCgnLnRhYi1jb250ZW50JykuZmFkZU91dCg1MDApO1xyXG4gICAgJCgnLnRhYi1jb250ZW50JykuZXEodGFiLWluZGV4KS5mYWRlSW4oNTAwKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxufSk7Il19
