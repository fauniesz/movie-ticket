// business logic





// user interface logic
$(document).ready(function() {

  $('#buyTickets').click(function (event) {
    event.preventDefault();
    var popUp = $('#displaybox');
    if(popUp.is(':hidden')){
        popUp.fadeIn('slow');
    }else{
        popUp.fadeOut('slow');
    }
  });



});
