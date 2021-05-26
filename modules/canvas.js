export let canvas = document.querySelector("#canvas");
export let ctx = canvas.getContext("2d");

export let isDraw = false;
export let isDrawFalse = () => {isDraw = false};
export let isDrawTrue = () => {isDraw = true};

export let currentColor = "black";
export let setCurrentColor = (color) => {currentColor = color}

export let currentlineWidth = 20;
export let setCurrentLineWidth = (lineWidth) => {currentlineWidth = lineWidth}

export let currentArcRad = 10;
export let setCurrentArcRad = (arcRad) => {currentArcRad = arcRad}

canvas.width = window.innerWidth - 16;
canvas.height = window.innerHeight - 16 - header.offsetHeight;

ctx.lineWidth = currentlineWidth;
ctx.strokeStyle = currentColor;
ctx.fillStyle = currentColor;