{Shape, Polygon, Hexagon, Entity} = require './hexagon'

hexagon = new Hexagon 100
console.log hexagon
entity = new Entity hexagon
console.log entity