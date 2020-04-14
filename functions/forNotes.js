function detectCollision({ x, y }, note) {
  if (Array.isArray(note)) {
    let noteX = note[0];
    let noteY = note[1];
    let collX = x >= noteX - 100 && x <= noteX + 150;
    let collY = y >= noteY - 75 && y <= noteY + 75;
    let value;
    collX && collY ? (value = true) : (value = false);
    return value;
  } else {
    return false;
  }
}
function getClosestNote(x, arr) {
  let needle = x;
  let filter= arr.filter(el => el[2] !== 0);
  if (!filter.length) {
    return;
  }
  let closest = filter.reduce((a, b) => {
    return Math.abs(b[0] - needle) < Math.abs(a[0] - needle) ? b : a;
  });
  return closest;
}
function play(note) {
  let id = uniqSounds.indexOf(note);
  let doc = document.getElementById("s" + id);
  doc.play();
}
function pause(note) {
  if (!!note) {
    let id = uniqSounds.indexOf(note);
    let doc = document.getElementById("s" + id);
    doc.currentTime = 0;
    doc.pause();
  }
}