$(function() {

  var canvas=document.getElementById("circleCanvas"),
      context = canvas.getContext('2d');

  window.addEventListener('resize', resizeCanvas, false);
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawCircles();
  }
  resizeCanvas();

  function drawCircles() {
  }

});
