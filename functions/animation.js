function showComposer(lvl, resolve) {
    const root = document.getElementById("root");
    img = document.getElementById(composers[lvl]);
    clone = img.cloneNode();
    clone.className = "composer";
    root.appendChild(clone);
    setTimeout(() => clone.classList.add("composerAnimated"), 500);
    setTimeout(() => {
        root.removeChild(clone);
        resolve();
    }, 3500);
}
function showAndHide(el, el2) {
    document.getElementById(el).style.display = ''
    document.getElementById(el2).style.display = 'none'
}
function openingAnimation(resolve) {
    showAndHide('text', 'img')
    setTimeout(() => {
        showAndHide('img', 'text')
        resolve()
    }, 2500)
}
function changeText(x) {
    showAndHide('text', 'img')
    let text = document.getElementById('text')
    text.innerHTML = x 
}