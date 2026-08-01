/* ============================================================
   SONGS CONFIG
   ------------------------------------------------------------
   - file:    "song1.mp3" ... "song10.mp3" — same folder as
              tiles.html and game.html.
   - bpm:     tempo. Tiles are auto-generated from this.
   - image:   only tracks 6, 8, 10 use this — "image6.jpg",
              "image8.jpg", "image10.jpg" in the same folder.
              Leave null until you've added the file.
   - theme:   controls the whole mood of that song's game —
              colors, tile shape, and background motion.
              Pick any of: "bloom", "ember", "aurora", "moonlit",
              "velvet". Repeats are fine, each still looks a
              little different because of the accent hue.
   - hue:     a number 0-360, shifts the theme's accent color
              so even repeated themes don't look identical.
   ============================================================ */

const SONGS = [
  { id: 1,  title: "Song One",   file: "song1.mp3",  bpm: 100, theme: "bloom",   hue: 330 },
  { id: 2,  title: "Song Two",   file: "song2.mp3",  bpm: 110, theme: "aurora",  hue: 190 },
  { id: 3,  title: "Song Three", file: "song3.mp3",  bpm: 92,  theme: "moonlit", hue: 250 },
  { id: 4,  title: "Song Four",  file: "song4.mp3",  bpm: 128, theme: "ember",   hue: 18  },
  { id: 5,  title: "Song Five",  file: "song5.mp3",  bpm: 80,  theme: "velvet",  hue: 280 },
  { id: 6,  title: "Song Six",   file: "song6.mp3",  bpm: 105, theme: "bloom",   hue: 350, image: null /* "image6.jpg" */ },
  { id: 7,  title: "Song Seven", file: "song7.mp3",  bpm: 120, theme: "aurora",  hue: 165 },
  { id: 8,  title: "Song Eight", file: "song8.mp3",  bpm: 96,  theme: "moonlit", hue: 220, image: null /* "image8.jpg" */ },
  { id: 9,  title: "Song Nine",  file: "song9.mp3",  bpm: 134, theme: "ember",   hue: 34  },
  { id: 10, title: "Song Ten",   file: "song10.mp3", bpm: 88,  theme: "velvet",  hue: 300, image: null /* "image10.jpg" */ },
];

// Helper: read ?id= from the URL on the game page
function getSongFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  return SONGS.find(s => s.id === id) || SONGS[0];
}

// Theme presets: base colors + tile shape + background motion style.
// The song's "hue" rotates the accent so repeated themes still differ.
const THEME_PRESETS = {
  bloom:   { shape: "heart",    bg: "petals",   base: [340, 70, 60] },
  ember:   { shape: "diamond",  bg: "embers",   base: [16,  85, 55] },
  aurora:  { shape: "hexagon",  bg: "aurora",   base: [185, 70, 55] },
  moonlit: { shape: "star",     bg: "stars",    base: [235, 55, 60] },
  velvet:  { shape: "diamond",  bg: "drift",    base: [280, 45, 45] },
};