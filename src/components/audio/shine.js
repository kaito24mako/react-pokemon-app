import shine from "../../assets/audio/shine.mp3";

export function playShineSound() {
  const audio = new Audio(shine);
  audio.play();
}
