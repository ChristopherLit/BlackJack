import sound from "./assets/Button Click Sound.mp3";
import music from "./assets/Deal Sound.mp3";
import deal from "./assets/Deal Sound.mp3";
import chip from "./assets/Chip Sound.mp3";
import gameAudio from "./assets/Music.mp3";

// A reference to the audio element for gameAudio
let gameAudioElement;

export function playSound() {
  new Audio(sound).play();
}

export function playDeal() {
  new Audio(deal).play();
}

export function playMusic() {
  // If gameAudioElement is undefined or paused, create a new audio element and play
  if (!gameAudioElement || gameAudioElement.paused) {
    gameAudioElement = new Audio(gameAudio);
    gameAudioElement.loop = true; // Enable looping
    gameAudioElement.play();
  } else {
    // If it's already playing, pause it
    gameAudioElement.pause();
    gameAudioElement.currentTime = 0;
  }
}

export function playChip() {
  new Audio(chip).play();
}

// Add a function to stop the gameAudio
export function stopMusic() {
  if (gameAudioElement) {
    gameAudioElement.pause();
    gameAudioElement.currentTime = 0;
  }
}
