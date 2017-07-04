// business logic
function Ticket(movieName, viewerAge, movieTime) {
  this.movie = movieName;
  this.age = viewerAge;
  this.time = movieTime;
}

Ticket.prototype.finalPrice = function() {
  return this.movie + " " + this.age + " " + this.time;
}



// user interface logic
$(document).ready(function() {
  // $("#addTicket").click(function() {
  //     $("#show-ticket").append('<div class="new-ticket">' +
  //                               '<select class="form-control" id="movieName">' +
  //                               '<option>Wonder Woman</option>' +
  //                               '<option>Despicable Me 3</option>' +
  //                               '<option>Guardians of the Galaxy 2</option>' +
  //                               '<option>Justice League</option>' +
  //                               '</select>' +
  //                               '<select class="form-control" id="movieTime">' +
  //                               '<option>2:45</option>' +
  //                               '<option>6:15</option>' +
  //                               '<option>9:00</option>' +
  //                               '</select>' +
  //                               '<select class="form-control" id="viewerAge">' +
  //                               '<option>Student</option>' +
  //                               '<option>Adult</option>' +
  //                               '<option>Senior</option>' +
  //                               '</select>' +
  //                              '</div>');
  //   });
  $('#buyTickets').click(function (event) {
    event.preventDefault();
    var popUp = $('#displaybox');
    if(popUp.is(':hidden')){
        popUp.fadeIn('slow');
    }else{
        popUp.fadeOut('slow');
    }
  });

$("form#purchase").submit(function(event) {
  event.preventDefault();
  var inputtedMovieName = $("select#movieName").val();
  var inputtedViewerAge = $("select#viewerAge").val();
  var inputtedMovieTime = $("select#movieTime").val();
  var newTicket = new Ticket(inputtedMovieName, inputtedViewerAge, inputtedMovieTime);
  console.log(newTicket);

$("ul#tickets").append("<li><span class='viewTicket'>" + newTicket.finalPrice() + "</span></li>");
  // $("#addTicket").each(function() {
  //     var inputtedMovieName = $(this).find("#movieName").val();
  //     var inputtedViewerAge = $(this).find("#viewerAge").val();
  //     var inputtedMovieTime = $(this).find("#movieTime").val();
  //     var newTicket = new Ticket(inputtedMovieName, inputtedViewerAge, inputtedMovieTime);
  //     newTicket.Ticket.push(newTicket);
  //   });
});



});
