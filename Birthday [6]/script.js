const audio = document.querySelector('audio');
const body = document.body;

// Auto play with user interaction
document.addEventListener('click', () => {
  if (audio.paused) {
    audio.muted = false;
    audio.play();
  }
}, { once: true });

// Cut 1 second from end
audio.addEventListener('timeupdate', () => {
  if (audio.currentTime >= audio.duration - 1) {
    audio.currentTime = 0;
  }
});

audio.addEventListener('play', () => {
  body.classList.add('play-music');
});

audio.addEventListener('pause', () => {
  body.classList.remove('play-music');
});