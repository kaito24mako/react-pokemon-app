import addSound from "../../assets/audio/add.mp3";

export function playAddSound() {
  const audio = new Audio(addSound);
  audio.play();
}
