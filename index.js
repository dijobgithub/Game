
let size = getScreenSize();
let game = new Game(size, notesPositions);
prepare(size)
  .then(()=>start())
  .catch(e => alert(e));
;
