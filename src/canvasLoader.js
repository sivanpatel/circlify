$(function() {

  var canvas=document.getElementById("circleCanvas"),
      context = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('click', drawCircles, true);
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  }
  resizeCanvas();

  function drawCircles(e){
    var pos = getMousePosition(event)
    posx = pos.x
    posy = pos.y
    context.beginPath()
    context.arc(posx, posy, 30, 0 , 2*Math.PI);
    context.fillStyle = "#000000";
    context.fill();
    context.stroke();
  }

  function getMousePosition(event) {
    return {
      x: event.clientX,
      y: event.clientY 
    };
  }
});
