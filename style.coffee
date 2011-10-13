class Style

class Fill extends Style
  constructor: (@color) ->

class Wire extends Style
  constructor: (@color, @lineWidth, @lineJoin = 'round', @lineCap = 'round') ->

if module?.exports?
  module.exports.Style = Style
  module.exports.Fill = Fill
  module.exports.Wire = Wire