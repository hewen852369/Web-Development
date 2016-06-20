//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $('.selected').css('background-color');
var context = $('canvas')[0].getContext('2d');
var $canvas = $('canvas');
var lastEvent;
var mouseDOwn = false;

// When click on a color
$(".controls").on('click','li',function(){
  // remove siblings (make siblings unselected)
  $(this).siblings().removeClass("selected");
  // make selected class selected
  $(this).addClass("selected");
  // getting selected color
  color = $(this).css("background-color");
});

function changeColor(){
  var r = $('#red').val();
  var g = $('#green').val();
  var b = $('#blue').val()
  $("#newColor").css('background-color',  "rgb(" + r + "," + g +", " + b + ")");
}

$('#revealColorSelect').click(function(){
  // chage the color that user made
  changeColor();
  $('#colorSelect').toggle();
});


$('input[type=range]').change(changeColor);

$('#addNewColor').click(function(){
  var $newColor = $('<li></li>');
  $newColor.css("background-color",$('#newColor').css('background-color'));
  $(".controls ul").append($newColor);
  $newColor.click();
});

// Jquery and Javascript code that waork with canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if(mouseDown)
  {
    context.beginPath();
    context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
    context.lineTo(e.offsetX,e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  mouseDown = false;
});





  







