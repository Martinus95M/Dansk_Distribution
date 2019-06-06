$( document ).ready(function() {
  console.log("Ready");
    /*Modal*/
    var modal = $('.modal-1');
    $('.open-modal-1').click(function() {
    modal.fadeIn();
    });

    $('.close-modal').click(function() {
    modal.fadeOut();
    });

    var modal2 = $('.modal-2');
    $('.open-modal-2').click(function() {
    modal2.fadeIn();
    });

    $('.close-modal').click(function() {
    modal2.fadeOut();
    });

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

    /*Double slider - Sign in/up form*/
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('booking-container');
    
    signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    });
    
    signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    });


  });
