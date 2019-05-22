$( document ).ready(function() {
  console.log("Ready");
    /*Swipe navigation*/

    /*Double slider - Sign in/up form*/

    /*Count animation from number A to B*/
  let counter = $('.Count'),
  counterFrom = counter.data('counter-from'),
  counterTo = counter.data('counter-to');
  
  $('.count').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'linear',
      step: function(now) {
        $(this).text(Math.round(now * 100) / 100 + "%");
      }
    });
  });
  });
