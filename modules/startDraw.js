import { setClientsCoords, mouseX, mouseY } from "./clientsCoords.js";
import {
  ctx,
  isDrawTrue,
  currentlineWidth,
  currentColor,
  currentArcRad,
} from "./canvas.js";
import { pushCoords } from "./coordinates.js";

function startDraw(e) {
  setClientsCoords(e);
  isDrawTrue();
  ctx.lineWidth = currentlineWidth;
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();
  ctx.arc(mouseX, mouseY, currentArcRad, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(mouseX, mouseY);

  pushCoords(mouseX, mouseY, currentColor, currentlineWidth, currentArcRad);
}

export default startDraw;
