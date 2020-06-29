/* 1 */

if (canvas.getContext) {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  ctx.fillStyle = "#900"
  ctx.fillRect(10, 10, 100, 100)
} else {
  console.log('Canvas is not supported in this browser')
}
