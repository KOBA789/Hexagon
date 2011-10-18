class Shape

class Polygon extends Shape
  constructor: (@vertex = []) ->

class Hexagon extends Polygon
  constructor: (@radius) ->
    step = Math.PI / 3;
    goal = Math.PI * 2;
    @vertex = ({
      x: @radius * Math.cos(radian)
      y: @radius * Math.sin(radian)
    } for radian in [0...goal] by step)

class Transform
  constructor: (@x = 0, @y = 0, angle = 0, @scale = 1.0) ->
    @angle = angle * Math.PI / 180

class Style

class Fill extends Style
  constructor: (@color) ->

class Wire extends Style
  constructor: (@color, @lineWidth, @lineJoin = 'round', @lineCap = 'round') ->

if module?.exports?
  module.exports.Shape = Shape
  module.exports.Polygon = Polygon
  module.exports.Hexagon = Hexagon