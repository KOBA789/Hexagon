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
  constructor: (@ctx, ) ->

if module?.exports?
  module.exports.Entity = Entity