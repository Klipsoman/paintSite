import setCurrentItem from "./setCurrentItem.js";
import {setCurrentLineWidth, currentlineWidth, setCurrentArcRad} from './canvas.js'

export let lineWidthElements = [...document.querySelectorAll(".line-width-elem")];

// lineWidthElements.forEach((line) => {
//     line.addEventListener("click", function chooseLineWidth() {
//       setCurrentItem(this, lineWidthElements, "current-point");
//       setCurrentLineWidth(this.getAttribute("data-line-width"));
//       // ctx.lineWidth = Number(currentlineWidth);
//       setCurrentArcRad(Number(currentlineWidth) / 2);
//     });
//   });

export function chooseLineWidth() {
    setCurrentItem(this, lineWidthElements, "current-point");
    setCurrentLineWidth(this.getAttribute("data-line-width"));
    // ctx.lineWidth = Number(currentlineWidth);
    setCurrentArcRad(Number(currentlineWidth) / 2);
  }