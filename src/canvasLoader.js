$(function() {

  var canvas=document.getElementById("circleCanvas"),
      context = canvas.getContext('2d');
  var placedCircles = [];
  
  window.addEventListener('resize', resizeCanvas, false);
  window.addEventListener('click', drawCircles, true);
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
    context.fillStyle = "#000000";
    context.fill();
    context.stroke();
    placedCircles.push({x: posx,y: posy});
    console.log(placedCircles);
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
      context.beginPath()
      context.arc(posx, posy, 30, 0, 2*Math.PI);
      context.fillStyle="#000000";
      context.fill();
      context.stroke();
    })
  }
});
