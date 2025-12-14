const audio = document.querySelector('audio');
const body = document.body;

// Auto play with user interaction
document.addEventListener('click', () => {
  if (audio.paused) {
    audio.muted = false;
    audio.play();
  }
}, { once: true });

audio.addEventListener('play', () => {
  body.classList.add('play-music');
});

audio.addEventListener('pause', () => {
  body.classList.remove('play-music');
});