$(function() {

  var canvas=document.getElementById("circleCanvas"),
      context = canvas.getContext('2d');
  var placedCircles = [];
  var rest = null;
  var textValue = "";
  var letter = null;
  var counter = 0;

  window.addEventListener('resize', resizeCanvas, false);
  canvas.addEventListener('click', drawCircles, true);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    reDrawCircles();
  }
  resizeCanvas();
  
  function drawCircles(e){
    firstLetter();
    restOfString();
    var pos = getMousePosition(event)
    posx = pos.x
    posy = pos.y - 100
    context.beginPath()
    context.arc(posx, posy, 30, 0 , 2*Math.PI);
    context.stroke();
    context.font = "18px Arial";
    context.fillText(letter, posx, posy)
    placedCircles.push({x: posx,y: posy, letter: letter});
  }

  function getMousePosition(event) {
    return {
      x: event.clientX,
      y: event.clientY 
    };
  }

  function reDrawCircles() {
    placedCircles.forEach(function(coords) {
      posx = coords.x
      posy = coords.y
      letter = coords.letter
      context.beginPath()
      context.arc(posx, posy, 30, 0, 2*Math.PI);
      context.stroke();
      context.font = "16px Arial";
      context.fillText(letter, posx, posy);
    })
  }

  $('input[type=textarea]').bind('input propertychange', function() {
    textValue = this.value;
  });

  function firstLetter() {
    letter = textValue.charAt(0);
  };

  function restOfString() {
    rest = textValue.slice(1)
    $('input[type=textarea]').val(rest)
    textValue=rest
  }

  function textInCircle() {
    firstLetter();
    restOfString();
    placedCircles[counter].letter = letter
    posx = placedCircles[counter].x
    posy = placedCircles[counter].y
    context.font = "16px Arial";
    context.fillText(letter, posx, posy)
    if (textValue != "") {
    counter = counter + 1
    } else {
      counter
    }
  }
});
