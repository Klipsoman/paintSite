import { coordsToEmpty } from "./coordinates.js";
import { ctx } from "./canvas.js";

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  coordsToEmpty();
}

export default clearCanvas;
