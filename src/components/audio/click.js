import clickSound from "../../assets/audio/click.mp3";

export function playClickSound() {
  const audio = new Audio(clickSound);
  audio.play();
}
