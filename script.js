import { canvas } from "./modules/canvas.js";
import startDraw from "./modules/startDraw.js";
import endDraw from "./modules/endDraw.js";
import draw from "./modules/draw.js";
import playDraw from "./modules/playDraw.js";
import clearCanvas from "./modules/clearCanvas.js";
import { clearBtn, playBtn, saveImgBtn } from "./modules/buttons.js";
import saveImage from "./modules/saveImage.js";
import { colorsElements, chooseColor } from "./modules/colorsElements.js";
import {
  lineWidthElements,
  chooseLineWidth,
} from "./modules/lineWidthElements.js";

window.addEventListener("load", () => {
  colorsElements.forEach((c) => {
    c.addEventListener("click", chooseColor);
  });

  lineWidthElements.forEach((line) => {
    line.addEventListener("click", chooseLineWidth);
  });

  canvas.addEventListener("mousedown", startDraw);
  canvas.addEventListener("mouseup", endDraw);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseover", endDraw);

  canvas.addEventListener("touchstart", startDraw);
  canvas.addEventListener("touchend", endDraw);
  canvas.addEventListener("touchmove", draw);
  canvas.addEventListener("touchcancel", endDraw);

  saveImgBtn.addEventListener("click", saveImage);
  playBtn.addEventListener("click", playDraw);
  clearBtn.addEventListener("click", clearCanvas);
});
