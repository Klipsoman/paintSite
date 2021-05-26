import  {setClientsCoords, mouseX, mouseY} from './clientsCoords.js'
import {ctx, currentlineWidth, currentColor, currentArcRad, isDraw} from './canvas.js'
import { pushCoords } from './coordinates.js'

function draw(e) {
    setClientsCoords(e);
    ctx.lineWidth = currentlineWidth;
    if (isDraw) {
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(mouseX, mouseY, currentArcRad, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);

      pushCoords(
        mouseX,
        mouseY,
        currentColor,
        currentlineWidth,
        currentArcRad,
      );
    } else {
      pushCoords(
        "mouseX",
        "mouseY"
      );
    }
  }

  export default draw