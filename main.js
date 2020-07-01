/* 1 */

if (canvas.getContext) {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  /* ctx.fillStyle = "#900"
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
  ctx.stroke(svgInstance) */


  /* 2 */

  /* ctx.globalAlpha = 0.3
  ctx.fillStyle = "orange"
  for (i = 0; i < 7; i++) {
    ctx.beginPath()
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI*2, true)
    ctx.fill()
  } */

  /* const lineCap = ['butt', 'round', 'square']
  for (let i = 0; i < 10; i++) {
    ctx.lineCap = lineCap[i % 3]
    ctx.lineWidth = i + 1
    ctx.beginPath()
    ctx.moveTo(5, 5 + i * 28)
    ctx.lineTo(290, 5 + i * 28)
    ctx.stroke()
  } */

  /* function drawLines2() {
    const lineJoin = ['round','bevel','miter']
    ctx.lineWidth = 10
    // ctx.miterLimit = 1
    // ctx.setLineDash([4, 2, 8, 1])
    for (var i = 0; i < lineJoin.length; i++) {
      ctx.lineJoin = lineJoin[i]
      ctx.beginPath()
      ctx.moveTo(-5, 5 + i * 40)
      ctx.lineTo(135, 145 + i * 40)
      ctx.lineTo(275, 5 + i * 40)
      ctx.stroke()
    }
  } */

  /* const lingrad = ctx.createLinearGradient(0, 0, 0, 150) // ось x1 y1, x2 y2
  lingrad.addColorStop(0, '#00ABEB')
  lingrad.addColorStop(0.5, '#26C000')
  lingrad.addColorStop(1, '#fff')
  ctx.strokeStyle = lingrad
  drawLines2() */

  /* const radgrad = ctx.createRadialGradient(150, 150, 0, 150, 150, 300) // центр 1 и радиус 1, центр 2 и радиус 2
  radgrad.addColorStop(0, '#A7D30C')
  radgrad.addColorStop(0.9, '#019F62')
  radgrad.addColorStop(1, 'rgba(1,159,98,0)')
  ctx.strokeStyle = radgrad
  drawLines2() */

  /* ctx.beginPath()
  for (let i = 7; i > 0; i--) {
    ctx.arc(150, 150, 15 * i, 0, Math.PI * 2, true)
  }
  ctx.fill("evenodd") */


  /* 3 */

  /* ctx.shadowOffsetX = 2
  ctx.shadowOffsetY = 2
  ctx.shadowBlur = 2
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
 
  ctx.font = "20px Times New Roman"
  ctx.fillStyle = "Black"
  ctx.fillText("Hello Canvas Shadow", 5, 30) */

  /* ctx.font = "28px serif"
  ctx.fillText("Hello Canvas!", 10, 50)
  ctx.strokeText("Hello Canvas!", 10, 100)
  ctx.textBaseline = "hanging" // top, hanging, middle, alphabetic, ideographic, bottom
  ctx.strokeText("Hello Canvas!", 10, 150)
  ctx.textAlign = 'right' // start, end, left, right
  ctx.strokeText("Hello Canvas!", 10, 200)
  console.log(ctx.measureText("Hello Canvas!").width) */

  /* 4 */

  ctx.webkitImageSmoothingEnabled = false
  ctx.msImageSmoothingEnabled = false
  ctx.imageSmoothingEnabled = false

  /* const img = new Image()
  img.onload = function() {
    ctx.drawImage(img, 0, 0)
    ctx.beginPath()
    ctx.moveTo(30, 96)
    ctx.lineTo(70, 66)
    ctx.lineTo(103, 76)
    ctx.lineTo(170, 15)
    ctx.stroke()
  }
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png' */

  /* const img = new Image()
  img.onload = function() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38) // image, x, y, width, height
      }
    }
  }
  img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png' */

  /* const img = new Image()
  img.src = '0.png'
  img.onload = function(){
    const ptrn = ctx.createPattern(img, 'repeat') // repeat-x | repeat-y | no-repeat
    ctx.fillStyle = ptrn
    ctx.fillRect(55, 55, 200, 200)
  } */

  // Сейчас не работает с источниками, полученными декларативно!
  // image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
  /* ctx.drawImage(document.getElementById('source'), 33, 71, 104, 124, 21, 20, 87, 104)
  ctx.drawImage(document.getElementById('frame'), 0, 0) */
} else {
  console.log('Canvas is not supported in this browser')
}
