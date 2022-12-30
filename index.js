const wrapper = document.getElementById("keys");
const blackKeys = document.querySelectorAll(".black-key");
const sounds = [
  { audio: new Audio("./tunes/a.wav"), keyCode: 65 },
  { audio: new Audio("./tunes/d.wav"), keyCode: 68 },
  { audio: new Audio("./tunes/e.wav"), keyCode: 69 },
  { audio: new Audio("./tunes/f.wav"), keyCode: 70 },
  { audio: new Audio("./tunes/g.wav"), keyCode: 71 },
  { audio: new Audio("./tunes/h.wav"), keyCode: 72 },
  { audio: new Audio("./tunes/j.wav"), keyCode: 74 },
  { audio: new Audio("./tunes/k.wav"), keyCode: 75 },
  { audio: new Audio("./tunes/o.wav"), keyCode: 79 },
  { audio: new Audio("./tunes/p.wav"), keyCode: 80 },
  { audio: new Audio("./tunes/s.wav"), keyCode: 83 },
  { audio: new Audio("./tunes/t.wav"), keyCode: 84 },
  { audio: new Audio("./tunes/u.wav"), keyCode: 85 },
  { audio: new Audio("./tunes/w.wav"), keyCode: 87 },
  { audio: new Audio("./tunes/y.wav"), keyCode: 89 },
];
document.addEventListener("keyup", handleKeyup);
function handleKeyup(e) {
  sounds.forEach((sound) => {
    const { keyCode, audio } = sound;
    if (e.keyCode === keyCode) {
      audio.play();
    }
  });
}

document.addEventListener("DOMContentLoaded", handleDomLoaded);

function handleDomLoaded() {
  wrapper.querySelectorAll(".key").forEach((element, index) => {
    element.addEventListener("click", () => {
      const sound = sounds[index].audio;
      sound.play();
    });
  });
}
