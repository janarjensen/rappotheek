// Store volumes in array
// var volumeArr = [];
// var i = 0;
// $("b").each( function() {
//     volumeArr[i++] = $(this).text();
// });
// console.log(volumeArr);
//
// // create new array with new volume
// var newVolumeArr = volumeArr;
// $.each(newVolumeArr, function(index, value) {
//     newVolumeArr[index] = value * 2;
// });
// onsole.log(newVolumeArr);

// set nr of persons for recipe
var nrOfPStart = 2

// change number of people in h2
$("input[type='range']").on("input change", function(event){
  $(".personen").text($("input[type='range']").val());
// change volumes in ul
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
