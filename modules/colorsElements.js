import setCurrentItem from "./setCurrentItem.js";
import {ctx, currentColor, setCurrentColor} from './canvas.js'

export let colorsElements = [...document.querySelectorAll(".palite-color")];

// colorsElements.forEach((c) => {
//     c.addEventListener("click", function chooseColor() {
//       setCurrentItem(this, colorsElements, "current-point");
//       setCurrentColor(this.getAttribute("data-color"));
//       ctx.strokeStyle = currentColor;
//       ctx.fillStyle = currentColor;
//     });
//   });
  
export function chooseColor() {
    setCurrentItem(this, colorsElements, "current-point");
    setCurrentColor(this.getAttribute("data-color"));
    ctx.strokeStyle = currentColor;
    ctx.fillStyle = currentColor;
  }

