$(function() {

  var canvas=document.getElementById("circleCanvas");
  var context = canvas.getContext("2d");
  var placedCircles = [];
  var rest = null;
  var textValue = "";
  var letter = null;
  var counter = 0;

  window.addEventListener("resize", resizeCanvas, false);
  canvas.addEventListener("click", drawCircles, true);

  function getMousePosition(event) {
    return {
      x: event.clientX,
      y: event.clientY 
    };
  };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    reDrawCircles();
  };

  resizeCanvas();
  
  function circle() {
    context.beginPath();
    context.arc(posx, posy, 30, 0 , 2*Math.PI, false);
    context.fillStyle = "#A44A3F";
    context.fill();
    context.stroke();
  };

  function letterFill() {
    context.font = "18px Helvetica";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText(letter, posx, posy);
  };

  function drawCircles(e){
    firstLetter();
    restOfString();
    var pos = getMousePosition(event);
    posx = pos.x;
    posy = pos.y - 100;
    placedCircles.push({x: posx,y: posy, letter: letter});
    circle();
    letterFill();
  };

  function reDrawCircles() {
    placedCircles.forEach(function(coords) {
      posx = coords.x;
      posy = coords.y;
      letter = coords.letter;
      circle();
      letterFill();
    })
  };

  $("input[type=textarea]").bind("input propertychange", function() {
    textValue = this.value;
  });

  function firstLetter() {
    letter = textValue.charAt(0);
  };

  function restOfString() {
    rest = textValue.slice(1);
    $("input[type=textarea]").val(rest);
    textValue=rest;
  };

});
