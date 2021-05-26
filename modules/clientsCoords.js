export let boundings = canvas.getBoundingClientRect();
export let mouseX = 0;
export let mouseY = 0;

export function setClientsCoords(e) {
    mouseX = (e.clientX || e.changedTouches[0].screenX) - boundings.left - 3;
    mouseY = (e.clientY || e.changedTouches[0].screenY) - boundings.top - 3;
  }
 

