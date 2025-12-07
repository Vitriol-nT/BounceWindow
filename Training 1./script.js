var canvas = document.querySelector('canvas');
const field = document.querySelector('.field');

canvas.width = field.clientWidth;
canvas.height = field.clientHeight;
var clientWidth = canvas.width;
var clientHeight = canvas.height;
var c = canvas.getContext('2d');

var x = Math.random()*clientWidth;
var y = Math.random()*clientHeight;
var dx = (Math.random() - 0.5) * 3;
var dy = (Math.random() - 0.5) * 3;
var rad = 10;

var speedchangerange = 1.5;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0, clientWidth, clientHeight);

  c.beginPath();
  c.arc(x, y, rad, 0, Math.PI*2, false);
  c.strokeStyle = 'black';
  c.stroke();

  if (x + rad > clientWidth || x - rad < 0){
    dx = -dx;
  }

  if (y + rad > clientHeight || y - rad < 0){
    dy = -dy;
  }

  x += dx;
  y += dy;
}

animate();
