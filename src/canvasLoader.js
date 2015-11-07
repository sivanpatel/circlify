$(function() {

  var canvas=document.getElementById("circleCanvas"),
      context = canvas.getContext('2d');
  var placedCircles = [];
  var rest = null;
  var textValue = "";
  var letter = null;
  var counter = 0;
  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('click', drawCircles, true);
  window.addEventListener('click', firstLetter, true);
  window.addEventListener('click', restOfString, true);
  window.addEventListener('click', textInCircle, true);
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    reDrawCircles();
  }
  resizeCanvas();

  function drawCircles(e){
    var pos = getMousePosition(event)
    posx = pos.x
    posy = pos.y
    context.beginPath()
    context.arc(posx, posy, 30, 0 , 2*Math.PI);
    context.stroke();
    placedCircles.push({x: posx,y: posy, letter: ""});
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
    console.log(textValue);
  });

  function firstLetter() {
    letter = textValue.charAt(0);
    console.log(letter);
  };

  function restOfString() {
    rest = textValue.slice(1)
    $('input[type=textarea]').val(rest)
    textValue=rest
    console.log(rest)
  }

  function textInCircle() {
    placedCircles[counter].letter = letter
    posx = placedCircles[counter].x
    posy = placedCircles[counter].y
    context.font = "16px Arial";
    context.fillText(letter, posx, posy)
      console.log(counter);
    counter = counter + 1
  }
});
