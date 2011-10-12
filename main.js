$(document).ready(function () {
  var canvas = document.getElementById('canvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  ctx.lineWidth = 30;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  function genHexagon (r) {
    var points = [];
    var step = Math.PI / 3;
    var goal = Math.PI * 2;
    for (var rad = 0; rad < goal; rad += step) {
        points.push({x: Math.cos(rad) * r, y: Math.sin(rad) * r});
    }
    return points;
  }

  var points = genHexagon(100);

  function drawHexagon (ctx, points, originX, originY) {
    ctx.beginPath();
    ctx.moveTo(points[0].x + originX, points[0].y + originY);
    for (var i = 1; i < points.length; i ++) {
        ctx.lineTo(points[i].x + originX, points[i].y + originY);
    }
    ctx.closePath();
    ctx.fill();
  }

  drawHexagon(ctx, points, 150, 150);
});
