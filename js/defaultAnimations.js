// set equal heights to all recepes
$(function() {
    $('.newsCard').matchHeight();
});

// toggle class of searchIcon
$("#searchIcon").click(function(){
  $(".contentNav").toggleClass("height0 heightAuto");
});
