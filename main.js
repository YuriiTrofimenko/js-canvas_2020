/* 1 */

if (canvas.getContext) {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  ctx.fillStyle = "#900"
  ctx.fillRect(10, 10, 100, 100)
  ctx.fillStyle = "rgba(0, 0, 200, 0.5)"
  ctx.fillRect (55, 55, 100, 100)
  ctx.strokeRect (55, 55, 100, 100)
  ctx.clearRect (55, 55, 100, 100)
  ctx.clearRect (54, 54, 102, 102)
  ctx.beginPath()
  ctx.moveTo(55,55)
  ctx.lineTo(75,100)
  ctx.lineTo(100,75)
  ctx.fill()
  ctx.strokeStyle = "#900";
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // x, y, radius, startAngle, endAngle, anticlockwise
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(110, 110)
  ctx.fillStyle = "green"  
  ctx.arcTo(125,200, 200,150, 50)
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(50, 20)
  ctx.lineWidth = 5
  ctx.quadraticCurveTo(230, 30, 50, 100)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(50,20)
  ctx.lineWidth = 5
  ctx.bezierCurveTo(230, 30, 150, 60, 50, 100)
  ctx.stroke()
  const rectangle = new Path2D()
  rectangle.rect(110, 110, 150, 150)
  ctx.stroke(rectangle)
  const svgInstance = new Path2D("M10 210 h 80 v 80 h -80 Z")
  ctx.stroke(svgInstance)
} else {
  console.log('Canvas is not supported in this browser')
}
