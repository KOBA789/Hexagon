var Fill, Style, Wire;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
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
  module.exports.Style = Style;
  module.exports.Fill = Fill;
  module.exports.Wire = Wire;
}