$(document).ready(function() {

$('#random').on('click', function(){
  randomButton();
});

function randomButton() {
  var backgroundColor = $('.background');
  backgroundColor.css( 'backgroundColor', randomHex());
}

function randomHex() {
  var hex = "#";
  var colorArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  for (var i = 0; i < 6; i++) {
    hex += colorArray[Math.floor(Math.random()*16)];
  }
  return hex;
}

$('#reset').on('click', function(){
  resetButton();
});

function resetButton() {
  var backgroundColor = $('.background');
  backgroundColor.css( 'backgroundColor', 'white');
}
});
