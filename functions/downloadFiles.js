function downloadFiles(resolve) {
  let files = document.getElementById("files");
  let filesCount = 4 + 3 + 1 + uniqSounds.length + composers.length*2 
  let uploaded = 0;
  let timer = setInterval(() => {
    let progress = 100 / filesCount * uploaded+'%'
     document.getElementById("bar").style.width=progress
    if (uploaded === filesCount ) {
      clearInterval(timer);
      resolve()
    }
  }, 1000);
  let i1 = 0;
  while (i1 < 4) {
    let img = document.createElement("img");
    img.src = `images/notes/${i1}.png`;
    img.width = "150";
    img.id = i1;
    img.onload = () => uploaded++;
    files.appendChild(img);
    i1++;
  }
  let i2 = 1;
  while (i2 <= 3) {
    let img = document.createElement("img");
    img.src = `images/other/speed${i2}.png`;
    img.width = "150";
    img.id = i2;
    img.onload = () => uploaded++;
    files.appendChild(img);
    i2++;
  }
  let i3 = 0;
  while (i3 < uniqSounds.length) {
    let sound = uniqSounds[i3];
    let doc = document.createElement("audio");
    doc.src = `sounds/${sound}.wav`;
    doc.id = "s" + i3;;
    doc.onloadedmetadata = () => uploaded++;
    files.appendChild(doc);
    i3++;
  }
  let i4 = 0 
  while (i4<composers.length) {
    let composer = composers[i4];
    let img = document.createElement("img");
    img.id = composer;
    img.src = `images/composers/${composer}.gif`;
    img.width = "200";
    img.height = "300";
    img.onload  = ()=> uploaded++
    let pannel = document.createElement("img");
    pannel.id = `${composer}_pannel`;
    pannel.src = `images/pannels/${composer}_pannel.png`;
    pannel.className = "pannel";
    pannel.onload = () => uploaded++
    files.appendChild(img);
    files.appendChild(pannel);
    i4++
  }
  let plane = document.createElement("img");
  plane.id = "plane";
  plane.src = "images/other/plane.png";
  plane.onload = () => uploaded++;
  files.appendChild(plane);
  let crash_sound = document.createElement('audio')
  crash_sound.id = 'crash'
  crash_sound.src = "sounds/crash_sound.wav"
  crash_sound.onload = () => uploaded++;
  files.appendChild(crash_sound);
}

