$(document).ready(function() {

$('#random').on('click', function(){
  randomButton();
});

$('#reset').on('click', function(){
  resetButton();
});

function resetButton() {
  var backgroundColor = $('.background');
  backgroundColor.css( 'backgroundColor', 'white');
}

});
