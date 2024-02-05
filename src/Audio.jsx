import sound from "./assets/Button Click Sound.mp3";
import deal from "./assets/Deal Sound.mp3";
import chip from "./assets/Chip Sound.mp3";
import music from "./assets/Music.mp3";

let gameAudioElement;

export function playSound() {
  new Audio(sound).play();
}

export function playDeal() {
  new Audio(deal).play();
}


export function playChip() {
  new Audio(chip).play();
}

export function playMusic() {
  if (gameAudioElement) {
    gameAudioElement.pause();
    gameAudioElement.currentTime = 0;
  }

 
  gameAudioElement = new Audio(music);
  gameAudioElement.loop = true;
  gameAudioElement.volume = 0.9;

 
  gameAudioElement.play();
}

export function switchIcon(isSoundOn, setIsSoundOn) {
  
  setIsSoundOn(!isSoundOn);
}

export function muteMusic(isSoundOn) {

  if (isSoundOn) {
    gameAudioElement.volume = 0;
  } else {
    gameAudioElement.volume = 0.9;
  }

}