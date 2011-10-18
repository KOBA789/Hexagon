class Entity
  constructor: (@shape, @transform, @style, @actions) ->
    unless @shape instanceof Polygon
      throw new Error 'Argument type error.'
    unless @transform instanceof Transform
      throw new Error 'Argument type error.'
    unless @style instanceof Style
      throw new Error 'Argument type error.'

  move: (newActions) ->
    @actions = @actions.concat(newActions)

class Drawing
  constructor: (@ctx) ->
    @entities = []
    @ctx.translate @ctx.canvas.clientWidth / 2, @ctx.canvas.clientHeight / 2

  add: (entity) ->
    @entities.push entity
    return

  draw: () ->
    for entity in @entities
      @ctx.save()
      vertex = entity.shape.vertex

      @ctx.translate entity.transform.x, entity.transform.y
      @ctx.rotate entity.transform.angle
      @ctx.scale entity.transform.scale, entity.transform.scale

      @ctx.beginPath()
      @ctx.moveTo vertex[0].x, vertex[0].y
      for i in [1...vertex.length]
        @ctx.lineTo vertex[i].x, vertex[i].y
      @ctx.closePath()
      if entity.style instanceof Fill
        @ctx.fillStyle = entity.style.color
        @ctx.fill()
      else if entity.style instanceof Wire
        @ctx.strokeStyle = entity.style.color
        @ctx.stroke()
      @ctx.restore()
    return


if module?.exports?
  module.exports.Entity = Entity