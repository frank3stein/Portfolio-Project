import "babel-polyfill";
import "./../css/style.css";

const backgroundMusic = new Audio(["../music/Solitaire.mp3"]);
const playButton = document.getElementById("Play");
// console.log(playButton);
let musicPlaying = false;
const musicPlayer = function(){
  if (musicPlaying === true){
    backgroundMusic.pause();
    musicPlaying = false;
    playButton.innerHTML = "Play";
  } else {
    backgroundMusic.play();
    musicPlaying = true;
    playButton.innerHTML = "Pause";
  }
};
// console.log(musicPlaying);
playButton.addEventListener("click", musicPlayer);

window.addEventListener("load", function(){
  backgroundMusic.load();
  backgroundMusic.onended = function(){
    musicPlaying = false;
    playButton.innerHTML = "Play";    
  };
});