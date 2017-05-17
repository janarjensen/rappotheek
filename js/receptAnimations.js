// set equal heights to all recepes
$(function() {
    $('.receptCard').matchHeight();
});

// toggle class of searchIcon
$("#searchIcon").click(function(){
  $(".contentNav").toggleClass("height0 heightAuto");
});

// // toggle class of searchIcon
// $(".suffice").click(function(){
//   $(this).toggleClass("fat");
//   $(".contentNav").addClass("heightAuto");
//
// });

// set nr of persons for recipe
var nrOfPStart = 2
// change number of people in h2
$("input[type='range']").on("input change", function(event){
  $(".personen").text($("input[type='range']").val());
  });
// change volumes in ul
$("input[type='range']").on("change", function(event){
  // grab value from range input
  var nrOfP = $(this).val();
  // multiply input with volumes
  $("b").each(function(){
    var newVolume = ($(this).text() / nrOfPStart * nrOfP);
    $(this).text(Math.round(newVolume*10)/10);
  });
  // update totle nr of persones
  $("#personen").text(nrOfP);
  // update nrOfPStart
  nrOfPStart = nrOfP;
});

// check off specific ingredient by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Slide out right scissor
$(".fa-scissors").on("click", function(){
  $(this).addClass("slideOutRight");
  $(".egg").addClass("eggTada");
});

// $(".searchBtn").click(function(){
//   alert("Druk niet op mij,  druk op ENTER");
// });
