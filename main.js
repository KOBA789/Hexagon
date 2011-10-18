$(document).ready(function () {
  var canvas = document.getElementById('canvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  drawing = new Drawing(ctx);
  hexagon = new Hexagon(100);
  trans1 = new Transform(0, 0, 45, 2.0);
  style1 = new Fill('#FF00FF');
  entity1 = new Entity(hexagon, trans1, style1);
  drawing.add(entity1);
  drawing.draw();
});
