var audio = document.getElementById('audio');
var playIcon = document.getElementById('play-icon');
var isPlaying = true; 

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playIcon.src = 'play.png'; 
    } else {
        audio.play();
        playIcon.src = 'pause.png'; 
    }
    isPlaying = !isPlaying;
}