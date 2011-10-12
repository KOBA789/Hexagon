(function() {
  var Entity, Fill, Hexagon, Polygon, Shape, Style, Wire;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Shape = (function() {
    function Shape() {}
    return Shape;
  })();
  Polygon = (function() {
    __extends(Polygon, Shape);
    function Polygon() {
      Polygon.__super__.constructor.apply(this, arguments);
    }
    return Polygon;
  })();
  Hexagon = (function() {
    __extends(Hexagon, Polygon);
    function Hexagon(radius) {
      var goal, radian, step;
      this.radius = radius;
      step = Math.PI / 3;
      goal = Math.PI * 2;
      this.vertex = (function() {
        var _results;
        _results = [];
        for (radian = 0; 0 <= goal ? radian < goal : radian > goal; radian += step) {
          _results.push({
            x: this.radius * Math.cos(radian),
            y: this.radius * Math.sin(radian)
          });
        }
        return _results;
      }).call(this);
    }
    return Hexagon;
  })();
  Entity = (function() {
    function Entity(shape, x, y, angle, scale) {
      this.shape = shape;
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
      this.angle = angle != null ? angle : 0;
      this.scale = scale != null ? scale : 1;
      if (!(this.shape instanceof Polygon)) {
        throw new Error('This shape is not a polygon.');
      }
    }
    return Entity;
  })();
  Style = (function() {
    function Style() {}
    return Style;
  })();
  Fill = (function() {
    __extends(Fill, Style);
    function Fill(color) {
      this.color = color;
    }
    return Fill;
  })();
  Wire = (function() {
    __extends(Wire, Style);
    function Wire(color, lineWidth, lineJoin, lineCap) {
      this.color = color;
      this.lineWidth = lineWidth;
      this.lineJoin = lineJoin != null ? lineJoin : 'round';
      this.lineCap = lineCap != null ? lineCap : 'round';
    }
    return Wire;
  })();
  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports.Shape = Shape;
    module.exports.Polygon = Polygon;
    module.exports.Hexagon = Hexagon;
    module.exports.Entity = Entity;
  }
}).call(this);
