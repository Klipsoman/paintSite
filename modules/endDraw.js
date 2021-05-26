import {isDrawFalse, ctx} from './canvas.js'

function endDraw() {
    isDrawFalse();
    ctx.beginPath();
  }

  export default endDraw