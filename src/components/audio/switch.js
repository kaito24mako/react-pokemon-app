import switchSound from "../../assets/audio/switch.mp3";

export function playSwitchSound() {
  const audio = new Audio(switchSound);
  audio.play();
}
