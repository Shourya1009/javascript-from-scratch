// 🎵 Music Player Logic

const songs = [
  {
    title: "Dreams",
    artist: "Joakim Karud",
    src: "music/dreams.mp3",
  },
  {
    title: "Sunny",
    artist: "KODOMOi",
    src: "music/sunny.mp3",
  },
  {
    title: "Ocean",
    artist: "KV",
    src: "music/ocean.mp3",
  },
];

// Elements
const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

let songIndex = 0;
let isPlaying = false;

// Load song
function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
}

// Play song
function playSong() {
  isPlaying = true;
  playBtn.textContent = "⏸️";
  audio.play();
}

// Pause song
function pauseSong() {
  isPlaying = false;
  playBtn.textContent = "▶️";
  audio.pause();
}

// Toggle play/pause
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

// Next song
function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

// Previous song
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Progress bar update
audio.addEventListener("timeupdate", (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

// Click to skip
progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

// Song ends → next
audio.addEventListener("ended", nextSong);

// Initial load
loadSong(songs[songIndex]);
