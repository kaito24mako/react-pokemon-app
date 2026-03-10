import removeSound from "../../assets/audio/remove.mp3";

export function playRemoveSound() {
  const audio = new Audio(removeSound);
  audio.play();
}
