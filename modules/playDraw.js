import {playBtn} from './buttons.js'
import {ctx} from './canvas.js'
import { coords } from './coordinates.js'
import {whatsGoingModal, whatsGoingModalText} from './whatsGoingModal.js'

function playDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    playBtn.classList.add("playing");
    playBtn.disabled = true;

    whatsGoingModal.style.display = "flex";
    whatsGoingModalText.style.color = "green";
    whatsGoingModalText.innerHTML = "Воспроизведение";

    canvas.classList.add("play");
    
    let copyCoords = [...coords];
    let timer = setInterval(() => {
      if (copyCoords.length == 0) {
        clearInterval(timer);
        whatsGoingModal.style.display = "none";
        whatsGoingModalText.innerHTML = "";
        playBtn.classList.remove("playing");
        canvas.classList.remove("play");
        playBtn.disabled = false;
        return;
      }
      let [mouseX, mouseY, color, lineWidth, currentArcRad] =
      copyCoords.shift();
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = lineWidth;

      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(mouseX, mouseY, currentArcRad, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
    }, 10);
  }

  export default playDraw