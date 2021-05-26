import { canvas } from "./canvas.js";

function saveImage() {
  let imageData = canvas.toDataURL();
  let image = new Image();
  image.src = imageData;

  let link = document.createElement("a");
  link.setAttribute("href", image.src);
  link.setAttribute("download", "canvasImage");
  link.click();
}

export default saveImage;
