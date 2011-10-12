(function() {
  var Entity, Hexagon, Polygon, Shape, entity, hexagon, _ref;
  _ref = require('./hexagon'), Shape = _ref.Shape, Polygon = _ref.Polygon, Hexagon = _ref.Hexagon, Entity = _ref.Entity;
  hexagon = new Hexagon(100);
  console.log(hexagon);
  entity = new Entity(hexagon);
  console.log(entity);
}).call(this);
