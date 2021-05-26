export let coords = [];

export function pushCoords(x, y, currentColor, lineWidth, arcRad) {
  coords.push([x, y, currentColor, lineWidth, arcRad]);
}

export function coordsToEmpty() {
  coords = [];
}
