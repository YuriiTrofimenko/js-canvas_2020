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
} else {
  console.log('Canvas is not supported in this browser')
}
