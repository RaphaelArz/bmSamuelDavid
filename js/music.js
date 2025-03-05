function playMusic() {
  const audio = document.getElementById("myAudio");
  audio.currentTime = 121
  audio.play();
}

// Arrêter la musique lorsque l'utilisateur quitte la page
window.addEventListener("beforeunload", function () {
  const audio = document.getElementById("myAudio");
  if (audio) {
    audio.pause();
    audio.currentTime = 0; // Réinitialiser à zéro
  }
});
